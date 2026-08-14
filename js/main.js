(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];

  projects.push({
    id:"visual-design-archive",
    title:"مختارات من العروض والإنفوجرافيك والبوسترات والمطويات",
    type:"Visual Design Archive",
    categories:["presentations","infographics","posters","brochures","achievement"],
    featured:true,
    description:"أرشيف بصري حقيقي يضم نماذج منتقاة من تصميم العروض العربية والإنجليزية، الإنفوجرافيك، البوسترات، المطويات، إلى جانب صفحات فعلية من ملف إنجاز بعد إزالة الجزء الذي يحمل بيانات الطالب.",
    tags:["Presentation Design","Infographics","Posters","Brochures","Achievement Portfolio"],
    cover:"https://drive.google.com/thumbnail?id=1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p&sz=w1600",
    previewUrl:"https://drive.google.com/file/d/1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p/preview",
    sourceUrl:"https://drive.google.com/file/d/1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p/view"
  });

  const asset = path => (window.ASSETS && window.ASSETS[path]) || path;

  document.querySelectorAll('img[data-asset]').forEach(img=>{img.src=asset(img.dataset.asset);});
  const labels = {web:"المواقع والمشاريع الرقمية",ai:"الذكاء الاصطناعي",pr:"التسويق والعلاقات العامة",media:"التحليل الإعلامي",presentations:"العروض التقديمية",research:"البحوث",reports:"التقارير",achievement:"ملفات الإنجاز",infographics:"الإنفوجرافيك",posters:"البوسترات",brochures:"المطويات"};
  const featuredGrid = document.getElementById('featured-grid');
  const workGrid = document.getElementById('work-grid');
  const modal = document.getElementById('project-modal');
  const panel = modal.querySelector('.modal-panel');
  const view = document.getElementById('modal-view');
  const controls = document.getElementById('gallery-controls');
  const title = document.getElementById('modal-title');
  const category = document.getElementById('modal-category');
  const description = document.getElementById('modal-description');
  const tags = document.getElementById('modal-tags');
  const actions = document.getElementById('modal-actions');
  const counter = document.getElementById('gallery-counter');
  let activeProject = null, galleryIndex = 0, lastFocused = null, touchStartX = 0;

  const embeddedCover = p => `<div style="position:relative;width:100%;height:100%;overflow:hidden;background:#fff">
      <iframe title="معاينة مصغرة: ${p.title}" src="${p.previewUrl}" loading="lazy" tabindex="-1" aria-hidden="true" referrerpolicy="no-referrer" style="width:125%;height:125%;border:0;pointer-events:none;transform:scale(.8);transform-origin:top right;background:#fff"></iframe>
      <span style="position:absolute;right:12px;bottom:12px;padding:6px 10px;border-radius:999px;background:rgba(16,42,43,.92);color:#fff;font-size:11px;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,.16)">معاينة فعلية</span>
    </div>`;

  const sanitizedCover = p => `<div style="height:100%;padding:22px;background:linear-gradient(145deg,#fff,#eef3ef);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border:1px solid #dce4df">
      <div><small style="color:#7d5b37;font-weight:800">${p.type}</small><h4 style="margin:7px 0 0;font-size:20px;line-height:1.35">${p.title}</h4></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;font-size:11px;color:#43514f"><span style="padding:8px;background:#fff;border-radius:10px">نبذة الجهة</span><span style="padding:8px;background:#fff;border-radius:10px">الهيكل التنظيمي</span><span style="padding:8px;background:#fff;border-radius:10px">المهام والأعمال</span><span style="padding:8px;background:#fff;border-radius:10px">الشواهد والأنشطة</span></div>
      <b style="font-size:11px;color:#5f6e6c">معاينة منزوعة البيانات الشخصية</b>
    </div>`;

  const coverMarkup = p => {
    if (p.embedCover && p.previewUrl) return embeddedCover(p);
    if (p.sanitizedPreview) return sanitizedCover(p);
    if (p.cover) return `<img loading="lazy" src="${asset(p.cover)}" alt="معاينة ${p.title}" onerror="this.parentElement.innerHTML='<div class=&quot;live-cover&quot;><small>${p.type}</small><strong>${p.coverText || p.title}</strong></div>'">`;
    return `<div class="live-cover"><small>${p.type}</small><strong>${p.coverText || p.title}</strong></div>`;
  };

  const cardMarkup = (p, featured=false) => `<article class="${featured?'featured-card':'work-card'}" data-project-id="${p.id}" tabindex="0" role="button" aria-label="عرض مشروع ${p.title}" ${featured?'':`data-categories="${p.categories.join(' ')}"`}><div class="${featured?'featured-media':'work-media'}">${coverMarkup(p)}</div><div class="${featured?'featured-copy':'work-copy'}"><span class="project-type">${p.type}</span><h3>${p.title}</h3><p>${p.description}</p></div></article>`;

  if (featuredGrid) featuredGrid.innerHTML = projects.filter(p=>p.featured).slice(0,6).map(p=>cardMarkup(p,true)).join('');
  if (workGrid) workGrid.innerHTML = projects.map(p=>cardMarkup(p,false)).join('');

  function bindCards(){
    document.querySelectorAll('[data-project-id]').forEach(el => {
      const open = () => openProject(el.dataset.projectId);
      el.addEventListener('click', open);
      el.addEventListener('keydown', e => { if(e.key==='Enter'||e.key===' '){e.preventDefault();open();} });
    });
    document.querySelectorAll('[data-open-project]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.openProject)));
  }

  function renderGallery(){
    const list = activeProject.gallery || [];
    if (!list.length) return;
    galleryIndex = (galleryIndex + list.length) % list.length;
    view.innerHTML = `<img src="${asset(list[galleryIndex])}" alt="${activeProject.title} — معاينة ${galleryIndex+1} من ${list.length}">`;
    const img = view.querySelector('img');
    img.addEventListener('click',()=>img.classList.toggle('zoomed'));
    counter.textContent = `${galleryIndex+1} / ${list.length}`;
    controls.hidden = list.length < 2;
  }

  function openProject(id){
    const p = projects.find(x=>x.id===id); if(!p) return;
    activeProject=p; galleryIndex=0; lastFocused=document.activeElement;
    category.textContent = p.categories.map(c=>labels[c]||c).join(' · ');
    title.textContent=p.title; description.textContent=p.description;
    tags.innerHTML=(p.tags||[]).map(t=>`<span>${t}</span>`).join('');
    actions.innerHTML=''; controls.hidden=true;
    if(p.gallery?.length){ renderGallery(); }
    else if(p.previewHtml){ view.innerHTML=p.previewHtml; }
    else if(p.previewUrl){ view.innerHTML=`<iframe title="معاينة: ${p.title}" src="${p.previewUrl}" loading="lazy" referrerpolicy="no-referrer"></iframe>`; }
    else if(p.liveUrl){ view.innerHTML=`<iframe title="معاينة حية: ${p.title}" src="${p.liveUrl}" loading="lazy" referrerpolicy="no-referrer"></iframe>`; }
    else { view.innerHTML=`<div class="live-cover"><strong>${p.title}</strong><small>Preview</small></div>`; }
    if(p.liveUrl) actions.insertAdjacentHTML('beforeend',`<a class="primary-link" href="${p.liveUrl}" target="_blank" rel="noopener">فتح الموقع الحي</a>`);
    if(p.githubUrl) actions.insertAdjacentHTML('beforeend',`<a href="${p.githubUrl}" target="_blank" rel="noopener">GitHub</a>`);
    if(p.sourceUrl && !p.hideSource) actions.insertAdjacentHTML('beforeend',`<a href="${p.sourceUrl}" target="_blank" rel="noopener">عرض الملف الأصلي</a>`);
    modal.classList.add('open'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open'); panel.focus();
  }
  function closeModal(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.classList.remove('modal-open'); view.innerHTML=''; activeProject=null; if(lastFocused?.focus) lastFocused.focus(); }
  document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
  document.getElementById('gallery-next').addEventListener('click',()=>{galleryIndex++;renderGallery()});
  document.getElementById('gallery-prev').addEventListener('click',()=>{galleryIndex--;renderGallery()});
  document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')closeModal();if(activeProject?.gallery?.length&&e.key==='ArrowLeft'){galleryIndex++;renderGallery()}if(activeProject?.gallery?.length&&e.key==='ArrowRight'){galleryIndex--;renderGallery()}});
  view.addEventListener('touchstart',e=>touchStartX=e.changedTouches[0].screenX,{passive:true});
  view.addEventListener('touchend',e=>{if(!activeProject?.gallery?.length)return;const d=e.changedTouches[0].screenX-touchStartX;if(Math.abs(d)>55){galleryIndex += d<0?1:-1;renderGallery()}},{passive:true});

  document.querySelectorAll('.filter-btn').forEach(btn=>{
    const f=btn.dataset.filter;
    if(f!=='all' && !projects.some(p=>p.categories.includes(f))) btn.hidden=true;
  });

  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); btn.classList.add('active');
    const f=btn.dataset.filter; document.querySelectorAll('.work-card').forEach(card=>{card.classList.toggle('hidden',f!=='all'&&!card.dataset.categories.split(' ').includes(f));});
  }));

  const menu=document.querySelector('.menu-toggle'), nav=document.getElementById('main-nav');
  menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));

  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  bindCards();
})();
