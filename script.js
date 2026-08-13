let currentCategory = 'All';
let currentSearch = '';
let currentSort = 'featured';

const grid = document.getElementById('inventoryGrid');
const countEl = document.getElementById('count');
const noResults = document.getElementById('noResults');
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const DISCOUNT_RATE = 0.25;
const regularPrice = salePrice => salePrice / (1 - DISCOUNT_RATE);

function filteredItems(){
  let items = [...INVENTORY];
  if(currentCategory !== 'All') items = items.filter(item => item.category === currentCategory);
  if(currentSearch){
    const q = currentSearch.toLowerCase();
    items = items.filter(item => [item.title,item.category,item.type,item.serial,...(item.details||[])].join(' ').toLowerCase().includes(q));
  }
  if(currentSort === 'price-low') items.sort((a,b)=>a.price-b.price);
  if(currentSort === 'price-high') items.sort((a,b)=>b.price-a.price);
  if(currentSort === 'name') items.sort((a,b)=>a.title.localeCompare(b.title));
  return items;
}

function render(){
  const items = filteredItems();
  countEl.textContent = items.length;
  noResults.hidden = items.length !== 0;
  grid.innerHTML = items.map(item => `
    <article class="item-card">
      <div class="item-image-wrap">
        <img class="item-image" src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.onerror=null;this.src='assets/images/inventory/mount-plate.jpg'">
        <span class="status-badge">${item.status}</span>
        ${item.representativeImage ? '<span class="photo-badge">Representative Photo</span>' : ''}
      </div>
      <div class="item-body">
        <div class="item-category">${item.category}</div>
        <h3 class="item-title">${item.title}</h3>
        <div class="price-block">
          <div class="price-top-row"><span class="regular-price">${money.format(regularPrice(item.price))}</span><span class="discount-badge">25% OFF</span></div>
          <div class="sale-price-label">SALE PRICE</div>
          <div class="sale-price">${money.format(item.price)}</div>
        </div>
        <div class="item-detail">${item.details.slice(0,2).join(' • ')}</div>
        <div class="item-actions">
          <button class="view-btn" onclick="openItem('${item.id}')">View Details</button>
          <a class="text-btn" href="sms:8322136736?&body=${encodeURIComponent('Hi Big Star Machinery, I am interested in '+item.title+'. Is it still available?')}">Text Us</a>
        </div>
      </div>
    </article>
  `).join('');
}

for(const btn of document.querySelectorAll('.category')){
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.category').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    render();
  });
}

document.getElementById('searchInput').addEventListener('input', e=>{currentSearch=e.target.value;render();});
document.getElementById('sortSelect').addEventListener('change', e=>{currentSort=e.target.value;render();});

document.getElementById('menuToggle').addEventListener('click',()=>document.getElementById('mainNav').classList.toggle('open'));
document.querySelectorAll('#mainNav a').forEach(a=>a.addEventListener('click',()=>document.getElementById('mainNav').classList.remove('open')));

const modal=document.getElementById('itemModal');
function openItem(id){
  const item=INVENTORY.find(x=>x.id===id); if(!item)return;
  document.getElementById('modalImage').src=item.image;
  document.getElementById('modalImage').onerror=()=>{document.getElementById('modalImage').src='assets/images/inventory/mount-plate.jpg';};
  document.getElementById('modalImage').alt=item.title;
  document.getElementById('modalCategory').textContent=item.category;
  document.getElementById('modalTitle').textContent=item.title;
  document.getElementById('modalPrice').innerHTML=`<div class="price-top-row"><span class="modal-regular-price">${money.format(regularPrice(item.price))}</span><span class="discount-badge">25% OFF</span></div><div class="sale-price-label">SALE PRICE</div><div class="modal-sale-price">${money.format(item.price)}</div>`;
  document.getElementById('modalDetails').innerHTML=item.details.map(x=>`<li>${x}</li>`).join('');
  document.getElementById('modalMeta').innerHTML=item.serial?`<strong>Serial:</strong> ${item.serial}`:'';
  document.getElementById('modalText').href='sms:8322136736?&body='+encodeURIComponent('Hi Big Star Machinery, I am interested in '+item.title+'. Please send me more information.');
  modal.hidden=false;document.body.style.overflow='hidden';
}
window.openItem=openItem;
function closeModal(){modal.hidden=true;document.body.style.overflow='';}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!modal.hidden)closeModal();});
render();
