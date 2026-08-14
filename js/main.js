(() => {
  const sections = window.PORTFOLIO_SECTIONS || [];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const sprite = {url:"https://drive.google.com/thumbnail?id=1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p&sz=w5000",cols:4,rows:5};
  const root = document.getElementById('portfolio-sections');
  const modal = document.getElementById('project-modal');
  const panel = modal?.querySelector('.modal-panel');
  const view = document.getElementById('modal-view');
  const title = document.getElementById('modal-title');
  const type = document.getElementById('modal-type');
  const desc = document.getElementById('modal-description');
  const tags = document.getElementById('modal-tags');
  let lastFocused = null;

  const spritePos = p => {
    const [c,r]=p.spriteCell||[0,0];
    return {x:c*(100/(sprite.cols-1)), y:r*(100/(sprite.rows-1))};
  };
  const spriteSize = `${sprite.cols*100}% ${sprite.rows*100}%`;

  function spriteBlock(p, modalMode=false){
    const pos=spritePos(p);
    return `<div class="sprite ${modalMode?'sprite-large':''}" role="img" aria-label="معاينة ${p.title}" style="background-image:url('${sprite.url}');background-size:${spriteSize};background-position:${pos.x}% ${pos.y}%"></div>`;
  }

  function coverMarkup(p){
    if(p.spriteCell) return spriteBlock(p,false);
    if(p.cover) return `<img loading="lazy" src="${p.cover}" alt="معاينة ${p.title}">`;
    if(p.coverKind==='cv') return `<div class="cv-cover"><span></span><i></i><b></b><i></i><i></i><i></i><small>ATS CV</small></div>`;
    if(p.coverKind==='adobe') return `<div class="web-cover adobe"><span>Adobe Express</span><strong>تقرير صحفي تفاعلي</strong><small>Web Story</small></div>`;
    if(p.coverKind==='web') return `<div class="web-cover"><span>Web Project</span><strong>${p.title}</strong><small>معاينة داخل الموقع</small></div>`;
    if(p.coverKind==='document') return `<div class="document-cover"><span>Document</span><strong>${p.title}</strong></div>`;
    return `<div class="document-cover"><span>${p.type||'Project'}</span><strong>${p.title}</strong></div>`;
  }

  function cardMarkup(p){
    return `<article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="معاينة ${p.title}">
      <div class="project-media">${coverMarkup(p)}</div>
      <div class="project-copy"><span>${p.type||''}</span><h3>${p.title}</h3><p>${p.description||''}</p></div>
    </article>`;
  }

  function renderSections(){
    if(!root) return;
    root.innerHTML = sections.map((s,idx)=>{
      const list=projects.filter(p=>(p.sections||[]).includes(s.id));
      if(!list.length && !s.keepWhenEmpty) return '';
      const body=list.length?`<div class="project-grid">${list.map(cardMarkup).join('')}</div>`:`<div class="empty-state">تُضاف النماذج هنا عند رفع النسخ المخصصة للعرض.</div>`;
      return `<section class="portfolio-section" id="${s.id}"><div class="container"><header class="section-head"><span>${String(idx+1).padStart(2,'0')}</span><div><h2>${s.title}</h2><p>${s.subtitle||''}</p></div></header>${body}</div></section>`;
    }).join('');
  }

  function openProject(id){
    const p=projects.find(x=>x.id===id); if(!p||!modal) return;
    lastFocused=document.activeElement;
    type.textContent=p.type||''; title.textContent=p.title; desc.textContent=p.description||'';
    tags.innerHTML=(p.tags||[]).map(t=>`<span>${t}</span>`).join('');
    if(p.spriteCell) view.innerHTML=spriteBlock(p,true);
    else if(p.previewHtml) view.innerHTML=p.previewHtml;
    else if(p.previewUrl) view.innerHTML=`<iframe title="معاينة ${p.title}" src="${p.previewUrl}" loading="lazy" referrerpolicy="no-referrer" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    else view.innerHTML=`<div class="safe-web-preview"><h3>${p.title}</h3><p>المعاينة ستُضاف لاحقًا.</p></div>`;
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');panel?.focus();
  }
  function closeModal(){
    if(!modal) return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');view.innerHTML='';lastFocused?.focus?.();
  }

  renderSections();
  document.querySelectorAll('[data-project-id]').forEach(el=>{
    const open=()=>openProject(el.dataset.projectId);
    el.addEventListener('click',open);
    el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});
  });
  document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal?.classList.contains('open'))closeModal();});

  const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
})();