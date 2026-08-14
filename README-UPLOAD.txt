BIG STAR MACHINERY WEBSITE UPDATE

THIS PACKAGE ADDS 3 MACHINES:
1) 2025 Newrick N60 Excavator — $29,000 after 10% off
2) 2026 KYLIN KN46 Mini Excavator — $18,000 after 10% off
3) 2021 John Deere 450K LGP Dozer — $49,000 after 8% off

PHOTOS
All photos in assets/inventory/ have already been reduced/compressed for the website.
This helps prevent the inventory page from freezing because of very large phone photos.

IMPORTANT: DO NOT REPLACE YOUR WHOLE inventory.js YET unless your existing file uses the same object format.
The safest manual method is:

1. On GitHub open Big-Star-Machinery.
2. Open the assets folder.
3. Upload the folder contents from:
   assets/inventory/newrick-n60/
   assets/inventory/kylin-kn46/
   assets/inventory/john-deere-450k/
4. Open your current inventory.js.
5. Click the pencil/Edit button.
6. Find the main inventory array.
7. Copy the 3 objects from PASTE-INTO-INVENTORY.txt and paste them INSIDE the existing array.
8. Make sure there is a comma between the previous last item and the first new item.
9. Commit changes.
10. Hard refresh bigstarmachinery.com after GitHub Pages finishes publishing.

DUPLICATES
inventory-additions.js includes a mergeInventoryWithoutDuplicates() function.
It treats same item id, or same year+brand+model, as one listing.
This is designed to stop duplicate inventory cards.

WHY I AM NOT OVERWRITING YOUR CURRENT inventory.js
I do not have the actual current GitHub inventory.js file contents in this chat.
Overwriting it without seeing the live file could remove your existing inventory.
If you upload your current inventory.js here, I can return ONE finished replacement inventory.js with everything merged and duplicates removed.

PHOTO ORDER
Each machine's -01.jpg is intended as the main photo.
The remaining pictures appear as gallery photos.

DEERE HOURS
The meter photo supplied shows 4,870.1 hours, so the listing uses approximately 4,870 hours.
