BIG STAR MACHINERY WEBSITE - START HERE
========================================

Your website is already coded.
Domain: bigstarmachinery.com
Sales: 832-213-6736 / 832-614-0914
Customer Service: 713-517-3399

IMPORTANT ABOUT THE PHOTOS
--------------------------
The website is ready for real equipment pictures. I put labeled placeholder images in:
assets/images/inventory/

Proxibid blocks automatic downloading, so replace those placeholder JPG files with the real auction photos you want to use. The website will instantly show your new pictures if you KEEP THE SAME FILE NAME.

EASIEST WAY TO CHANGE A PICTURE
-------------------------------
Example: You want to change the picture for the Raytree RMBD72ST.
1. Save the real picture to your computer.
2. Rename the picture: raytree-rmbd72st.jpg
3. Open the website folder.
4. Open: assets > images > inventory
5. Delete the old raytree-rmbd72st.jpg placeholder.
6. Put your new raytree-rmbd72st.jpg in that folder.
7. Upload the changed file to GitHub.
Done.

EASIEST WAY TO CHANGE PRICE / NAME / STATUS
--------------------------------------------
1. Open inventory.js with Notepad.
2. Find the item name.
3. Change ONLY the value after the field name.
Examples:
   price: 8125,
Change to:
   price: 7900,

To mark sold:
   status: 'Available',
Change to:
   status: 'Sold',

Save inventory.js and upload the changed file to GitHub.

HOW TO ADD A NEW ITEM
---------------------
1. Open inventory.js.
2. Copy one full item block starting with { and ending with },
3. Paste it before the final ]; at the bottom.
4. Change id, title, category, type, price, status, image, serial, details and lot.
5. Put its JPG picture inside assets/images/inventory/.
6. Save inventory.js.
7. Upload inventory.js and the picture to GitHub.

USE ONE OF THESE CATEGORY NAMES EXACTLY
---------------------------------------
Skid Steers
Excavators
Mini Skid Steer Attachments
Full-Size Skid Steer Attachments
Mini Excavator Attachments
Excavator Attachments
Towing & Recovery
Shop Equipment
Other Equipment

FREE HOSTING - GITHUB PAGES
---------------------------
You can host this static website on GitHub Pages without a monthly website-hosting bill. You still keep paying GoDaddy for your domain renewal.

UPLOAD STEPS
1. Go to github.com and create a free account if you don't have one.
2. Click + at the top right > New repository.
3. Repository name: big-star-machinery-website
4. Select Public.
5. Click Create repository.
6. Click "uploading an existing file" or Add file > Upload files.
7. Drag EVERYTHING INSIDE this BigStarMachineryWebsite folder into GitHub.
   IMPORTANT: index.html must be at the TOP LEVEL of the repository, not inside another folder.
8. Click Commit changes.
9. Go to Settings > Pages.
10. Under Build and deployment, choose Deploy from a branch.
11. Branch: main. Folder: / (root). Click Save.
12. Wait a few minutes. GitHub will show a temporary website address.

CONNECT bigstarmachinery.com
----------------------------
In GitHub:
1. Repository > Settings > Pages.
2. Custom domain: bigstarmachinery.com
3. Click Save.

In GoDaddy:
1. Sign in > My Products / Domain Portfolio.
2. Click bigstarmachinery.com.
3. Click DNS.
4. You will add the GitHub Pages DNS records GitHub shows you.
5. Also make www point to your GitHub Pages address with a CNAME.

IMPORTANT: DNS values can change, so use the exact records GitHub shows in your Pages settings at the time you connect it. Do not guess.

AFTER DNS CONNECTS
------------------
Go back to GitHub > Settings > Pages and turn on "Enforce HTTPS" when available.

WHAT TO UPLOAD WHEN YOU MAKE A CHANGE
-------------------------------------
Price/name/status changed? Upload inventory.js only.
Picture changed? Upload the new JPG in assets/images/inventory/.
Website design changed? Upload the changed HTML/CSS/JS file.

TIP
---
Keep a backup copy of the whole BigStarMachineryWebsite folder on your computer.
