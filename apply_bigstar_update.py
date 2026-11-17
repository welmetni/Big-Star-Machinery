#!/usr/bin/env python3
"""Big Star Machinery update. Run in repository root: python apply_bigstar_update.py"""
from pathlib import Path
import re, json, sys
root=Path(__file__).resolve().parent
index=root/'index.html'; inventory=root/'inventory.js'
if not index.exists() or not inventory.exists():
    sys.exit('ERROR: Put this script and assets folder inside the Big-Star-Machinery repository root (next to index.html and inventory.js).')
html=index.read_text(encoding='utf-8')
html_new,n=re.subn(r'\s*<section class="monthly-deals"\b[^>]*>.*?</section>\s*', '\n\n',html,count=1,flags=re.S)
if n==0 and 'monthly-deals' in html:sys.exit('Could not safely remove specials section; please review index.html manually.')
html_new=html_new.replace('style.css?v=20261107-specials3','style.css?v=20261117-inventory')
source=inventory.read_text(encoding='utf-8')
# Preserve all other inventory records and their prices; only update matching records.
start=source.find('['); end=source.rfind(']')
if start<0 or end<start:sys.exit('Could not identify inventory array')
try: items=json.loads(source[start:end+1])
except json.JSONDecodeError as exc:sys.exit(f'Inventory format not recognized: {exc}')
base='assets/images/inventory/nov2026-update/'
updates={
'stock-1':{'title':'2018 BOMAG BMP8500 Heavy-Duty Trench Compactor — Approx. 500 Hours','category':'Equipment & Supplies','type':'Remote-Controlled Trench Compactor','photos':[f'bomag-{i:02d}.webp' for i in range(1,9)],'details':['2018 model year; approximately 500 operating hours (seller-provided)','BOMAG BMP8500 model shown on machine decal — verify model plate before sale','Heavy-duty articulated padfoot trench compactor','Designed for compacting soil in trenches, utility work, foundations, and confined job sites','Remote-control operating station shown in photos','Used equipment; visible cosmetic wear and surface rust','Contact Big Star Machinery to confirm operating condition, availability, and inspection']},
'stock-2':{'title':'H13R Yellow Mini Excavator — Compact Construction Machine','category':'Mini Excavators','type':'Compact Mini Excavator','photos':['h13r-01.jpg'],'details':['Model: H13R','Yellow finish with tracked undercarriage and overhead canopy','Compact size suited for trenching, landscaping, property improvements, and tight-access jobs','Hydraulic excavator arm with digging bucket shown','Ask about engine specifications, condition, and available attachments','Contact Big Star Machinery to confirm availability and arrange inspection']},
'stock-3':{'title':'SDEE22 Diesel Mini Excavator — Red, Heavy-Duty Compact Excavator','category':'Mini Excavators','type':'Diesel Mini Excavator','photos':['diesel-excavator-01.jpg'],'details':['Model: SDEE22 (existing inventory record)','Diesel-powered compact excavator','Red finish, tracked undercarriage, overhead canopy, and digging bucket shown','Suitable for trenching, digging, landscaping, site preparation, and property maintenance','Compact design for smaller work areas','Contact Big Star Machinery to confirm engine details, operating condition, and availability']},
'stock-5':{'title':'66" Heavy-Duty Hydraulic Drum Mulcher — Skid Steer Attachment','category':'Full-Size Skid Steer Attachments','type':'Hydraulic Drum Mulcher','photos':['drum-mulcher-01.jpg','drum-mulcher-02.webp','drum-mulcher-03.webp'],'details':['66-inch width (seller-provided; confirm measurement)','Heavy-duty hydraulic drum mulcher for compatible skid steers','Designed for brush clearing, vegetation control, and land-management applications','Hydraulic hoses, protective frame, and cutting drum shown in photos','Multiple equipment photos supplied; confirm exact unit and specifications before sale','Verify hydraulic flow, mounting compatibility, condition, and availability before purchase']}}
seen=set()
for item in items:
    if item.get('id') not in updates:continue
    u=updates[item['id']];seen.add(item['id'])
    item.update(title=u['title'],category=u['category'],type=u['type'],image=base+u['photos'][0],images=[base+p for p in u['photos']],details=u['details'])
    item.pop('representativeImage',None)
if seen!=set(updates):sys.exit(f'Missing inventory IDs: {set(updates)-seen}')
# Validate photos before modifying site.
for u in updates.values():
    for photo in u['photos']:
        if not (root/base/photo).is_file():sys.exit('Missing image: '+photo)
# Make backups, then write both files.
for path in (index,inventory):
    backup=path.with_suffix(path.suffix+'.before-bigstar-update.bak')
    if not backup.exists():backup.write_bytes(path.read_bytes())
index.write_text(html_new,encoding='utf-8')
inventory.write_text(source[:start]+json.dumps(items,indent=2,ensure_ascii=False)+source[end+1:],encoding='utf-8')
print('SUCCESS: removed 3 promotional cards and updated 4 existing listings with 13 uploaded photos. Existing prices unchanged.')
