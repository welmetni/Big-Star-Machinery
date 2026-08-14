// Big Star Machinery - NEW inventory additions
// Add these objects to your existing inventory array.
// Prices below are the FINAL advertised prices after the stated discount.

const BIG_STAR_NEW_ITEMS = [
  {
    "id": "newrick-n60-2025",
    "year": 2025,
    "brand": "Newrick",
    "model": "N60",
    "title": "2025 Newrick N60 Excavator – 6 Ton – Yanmar Diesel – Enclosed Cab",
    "category": "Excavators",
    "type": "Excavator",
    "condition": "Very Clean / Ready to Work",
    "price": 29000,
    "originalPrice": 32222.22,
    "discount": 10,
    "location": "Hempstead, TX",
    "images": [
      "assets/inventory/newrick-n60/newrick-n60-01.jpg",
      "assets/inventory/newrick-n60/newrick-n60-02.jpg",
      "assets/inventory/newrick-n60/newrick-n60-03.jpg",
      "assets/inventory/newrick-n60/newrick-n60-04.jpg",
      "assets/inventory/newrick-n60/newrick-n60-05.jpg"
    ],
    "description": "Very clean 2025 Newrick N60 6-ton class excavator equipped with a reliable Yanmar 3.3L diesel engine and enclosed cab. Strong, responsive hydraulics and a solid setup for contractors, landowners, trenching, land clearing, grading and property work. Starts easy, runs strong, and is ready to go to work.",
    "features": [
      "6-ton class excavator",
      "Yanmar 3.3L diesel engine",
      "42.4 kW / approximately 57 HP",
      "Enclosed cab",
      "A/C, heat and ventilation",
      "Strong responsive hydraulic system",
      "Auxiliary hydraulics for attachments",
      "Standard digging bucket included",
      "Steel tracks",
      "Tight pins and bushings",
      "Transport available"
    ]
  },
  {
    "id": "kylin-kn46-2026",
    "year": 2026,
    "brand": "KYLIN",
    "model": "KN46",
    "title": "2026 KYLIN KN46 Mini Excavator – Kubota D1105 Diesel – Hydraulic Thumb",
    "category": "Excavators",
    "type": "Mini Excavator",
    "condition": "New / Ready to Work",
    "price": 18000,
    "originalPrice": 20000,
    "discount": 10,
    "location": "Hempstead, TX",
    "images": [
      "assets/inventory/kylin-kn46/kylin-kn46-01.jpg",
      "assets/inventory/kylin-kn46/kylin-kn46-02.jpg",
      "assets/inventory/kylin-kn46/kylin-kn46-03.jpg",
      "assets/inventory/kylin-kn46/kylin-kn46-04.jpg",
      "assets/inventory/kylin-kn46/kylin-kn46-05.jpg"
    ],
    "description": "Brand new 2026 KYLIN KN46 mini excavator powered by a genuine Kubota D1105 diesel engine. Compact enough to transport easily but built for serious trenching, fencing, land clearing, grading and jobsite work. Smooth controls, strong hydraulics, enclosed cab and hydraulic thumb make this a very versatile machine.",
    "features": [
      "3-ton class mini excavator",
      "Operating weight approximately 2,800 kg / 6,200 lb",
      "Kubota D1105 diesel engine",
      "25 HP",
      "EPA compliant",
      "Hydraulic thumb",
      "Enclosed cab",
      "Front dozer blade",
      "Strong hydraulics and smooth controls",
      "New / ready to work",
      "Transport available"
    ]
  },
  {
    "id": "john-deere-450k-lgp-2021",
    "year": 2021,
    "brand": "John Deere",
    "model": "450K LGP",
    "title": "2021 John Deere 450K LGP Dozer – 4,870 Hours – Ready to Work",
    "category": "Dozers",
    "type": "Dozer",
    "condition": "Used / Excellent Working Condition",
    "price": 49000,
    "originalPrice": 53260.87,
    "discount": 8,
    "hours": 4870.1,
    "location": "Hempstead, TX",
    "images": [
      "assets/inventory/john-deere-450k/john-deere-450k-01.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-02.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-03.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-04.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-05.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-06.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-07.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-08.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-09.jpg",
      "assets/inventory/john-deere-450k/john-deere-450k-10.jpg"
    ],
    "description": "Very clean and tight 2021 John Deere 450K LGP dozer with approximately 4,870 hours. Starts easy, runs strong, tracks straight and is ready to go directly to work. Strong responsive hydraulics, tight blade, good undercarriage with plenty of life remaining, and no major leaks or excessive smoke reported. Great size for land clearing, house pads, road work, ranch and farm projects, ponds, site prep and finish grading.",
    "features": [
      "Approximately 4,870.1 hours shown on meter",
      "LGP low-ground-pressure tracks",
      "PAT 6-way blade",
      "Hydrostatic transmission",
      "Smooth joystick controls",
      "John Deere diesel engine",
      "Strong responsive hydraulics",
      "Blade width approximately 114 inches",
      "Track width approximately 24 inches",
      "Good undercarriage",
      "Transport available"
    ]
  }
];

// Optional duplicate protection.
// It keeps only one item per id, or per year+brand+model if an id is missing.
function mergeInventoryWithoutDuplicates(existingInventory, additions = BIG_STAR_NEW_ITEMS) {
  const map = new Map();

  [...existingInventory, ...additions].forEach((item) => {
    const key = String(
      item.id ||
      `${item.year || ""}-${item.brand || ""}-${item.model || ""}`
    ).toLowerCase().replace(/\s+/g, "-");

    // Newer addition replaces an older duplicate with the same key.
    map.set(key, item);
  });

  return Array.from(map.values());
}

// EXAMPLE:
// inventory = mergeInventoryWithoutDuplicates(inventory, BIG_STAR_NEW_ITEMS);
