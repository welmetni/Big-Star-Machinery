const grid=document.getElementById('inventoryGrid');
const count=document.getElementById('count');
const searchInput=document.getElementById('searchInput');
const categorySelect=document.getElementById('categorySelect');
const typeSelect=document.getElementById('typeSelect');
const conditionSelect=document.getElementById('conditionSelect');
const noResults=document.getElementById('noResults');
const modal=document.getElementById('itemModal');
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
const money=new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0});

function uniqueValues(key){return [...new Set(INVENTORY.map(x=>x[key]).filter(Boolean))].sort();}
function fillSelect(el,values){values.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;el.appendChild(o);});}
fillSelect(categorySelect,uniqueValues('category'));
fillSelect(typeSelect,uniqueValues('type'));

function regularFromSale(sale){return sale/0.75;}
function priceHTML(item){
  const regular=regularFromSale(item.price);
  return `<div class="price-stack"><div class="price-topline"><span class="regular-price">${money.format(regular)}</span><span class="discount-badge">25% OFF</span></div><div class="sale-label">SALE PRICE</div><div class="sale-price">${money.format(item.price)}</div></div>`;
}
function fallbackImage(img){img.onerror=null;img.src='assets/big-star-hero.jpg';}
function cardHTML(item){
  const rep=item.image?.startsWith('http')?'REPRESENTATIVE PHOTO':'';
  return `<article class="item-card">
    <div class="image-wrap"><img src="${item.image||'assets/big-star-hero.jpg'}" alt="${item.title.replaceAll('"','&quot;')}" onerror="fallbackImage(this)">${rep?`<span class="image-label">${rep}</span>`:''}</div>
    <div class="item-body">
      <div class="item-category">${item.category}</div>
      <h3>${item.title}</h3>
      ${priceHTML(item)}
      <div class="card-actions"><button class="btn-outline" onclick="openItem('${item.id}')">VIEW DETAILS</button><a class="btn-gold" href="sms:8322136736?&body=${encodeURIComponent('Hi Big Star Machinery, I am interested in '+item.title+'.')}">TEXT US</a></div>
    </div>
  </article>`;
}
function matches(item){
  const q=searchInput.value.trim().toLowerCase();
  const hay=[item.title,item.category,item.type,item.serial,...(item.details||[])].filter(Boolean).join(' ').toLowerCase();
  const qOK=!q||hay.includes(q);
  const catOK=categorySelect.value==='All'||item.category===categorySelect.value;
  const typeOK=typeSelect.value==='All'||item.type===typeSelect.value;
  const condOK=conditionSelect.value==='All'||item.status===conditionSelect.value;
  return qOK&&catOK&&typeOK&&condOK;
}
function render(){
  const items=INVENTORY.filter(matches);
  grid.innerHTML=items.map(cardHTML).join('');
  count.textContent=items.length;
  noResults.hidden=items.length>0;
}
[searchInput,categorySelect,typeSelect,conditionSelect].forEach(el=>el.addEventListener(el===searchInput?'input':'change',render));
document.getElementById('filterButton').addEventListener('click',render);
menuToggle.addEventListener('click',()=>mainNav.classList.toggle('open'));
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mainNav.classList.remove('open')));

function openItem(id){
  const item=INVENTORY.find(x=>String(x.id)===String(id));if(!item)return;
  document.getElementById('modalImage').src=item.image||'assets/big-star-hero.jpg';
  document.getElementById('modalImage').onerror=function(){fallbackImage(this)};
  document.getElementById('modalCategory').textContent=item.category;
  document.getElementById('modalTitle').textContent=item.title;
  document.getElementById('modalPrice').innerHTML=priceHTML(item);
  document.getElementById('modalDetails').innerHTML=(item.details||[]).map(x=>`<li>${x}</li>`).join('');
  document.getElementById('modalMeta').innerHTML=item.serial?`<strong>Serial:</strong> ${item.serial}`:'';
  document.getElementById('modalText').href='sms:8322136736?&body='+encodeURIComponent('Hi Big Star Machinery, I am interested in '+item.title+'. Please send me more information.');
  modal.hidden=false;document.body.style.overflow='hidden';
}
window.openItem=openItem;window.fallbackImage=fallbackImage;
function closeModal(){modal.hidden=true;document.body.style.overflow='';}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();});
render();
