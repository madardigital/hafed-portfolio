(() => {
  const sections = window.PORTFOLIO_SECTIONS || [];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const sprite = window.PORTFOLIO_SPRITE || {};

  const root = document.getElementById('portfolio-sections');
  const modal = document.getElementById('project-modal');
  const panel = modal?.querySelector('.modal-panel');
  const view = document.getElementById('modal-view');
  const modalTitle = document.getElementById('modal-title');
  const modalType = document.getElementById('modal-type');
  const modalDescription = document.getElementById('modal-description');
  const modalTags = document.getElementById('modal-tags');
  let lastFocused = null;
  let currentGallery = null;
  let currentGalleryIndex = 0;
  let touchStartX = 0;

  const eyeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.8"/></svg>`;
  const playIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg>`;

  function spritePosition(cell){
    const [c,r] = cell;
    return {
      x: sprite.cols > 1 ? c * (100 / (sprite.cols - 1)) : 0,
      y: sprite.rows > 1 ? r * (100 / (sprite.rows - 1)) : 0
    };
  }

  function spriteBlock(cell, extraClass=''){
    const pos = spritePosition(cell);
    return `<div class="sprite-cell ${extraClass}" role="img" aria-label="معاينة بصرية" style="background-image:url('${sprite.url}');background-size:${sprite.cols*100}% ${sprite.rows*100}%;background-position:${pos.x}% ${pos.y}%"></div>`;
  }

  function coverMarkup(p){
    if (p.spriteCell) return spriteBlock(p.spriteCell, 'card-sprite');
    if (p.cover) return `<img loading="lazy" src="${p.cover}" alt="معاينة ${p.title}">`;
    if (p.coverKind === 'cv') return `<div class="cv-cover"><span></span><i></i><b></b><i></i><i></i><i></i><small>ATS CV</small></div>`;
    if (p.coverKind === 'adobe') return `<div class="web-cover adobe"><span>Adobe Express</span><strong>تقارير صحفية تفاعلية</strong><small>6 نماذج</small></div>`;
    if (p.coverKind === 'web') return `<div class="web-cover"><span>Web Project</span><strong>${p.title}</strong><small>معاينة داخل الموقع</small></div>`;
    if (p.coverKind === 'document') return `<div class="document-cover"><span>Document</span><strong>${p.title}</strong></div>`;
    return `<div class="document-cover"><span>${p.type || 'Project'}</span><strong>${p.title}</strong></div>`;
  }

  function ctaLabel(p){
    if (p.ctaLabel) return p.ctaLabel;
    if (p.section === 'testimonials') return 'عرض رد العميل';
    if (p.section === 'news-sites' || p.section === 'stores') return 'معاينة الموقع';
    if (p.subcategory === 'video' || p.subcategory === 'motion') return 'تشغيل المعاينة';
    return 'معاينة النموذج';
  }

  function ctaIcon(p){
    return (p.subcategory === 'video' || p.subcategory === 'motion') ? playIcon : eyeIcon;
  }

  function cardMarkup(p){
    return `<article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="${ctaLabel(p)}: ${p.title}">
      <div class="project-media">${coverMarkup(p)}</div>
      <div class="project-copy">
        <span class="project-type">${p.type || ''}</span>
        <h3>${p.title}</h3>
        <p>${p.description || ''}</p>
        <span class="card-cta">${ctaIcon(p)}<b>${ctaLabel(p)}</b><i aria-hidden="true">←</i></span>
      </div>
    </article>`;
  }

  function linkGateway(section){
    if (!section.links?.length) return '';
    return `<div class="section-link-grid">${section.links.map(l => `
      <a class="section-link-card" href="${l.href}"><div><h3>${l.title}</h3><p>${l.text}</p></div><span class="section-link-arrow" aria-hidden="true">←</span></a>
    `).join('')}</div>`;
  }

  function visualFilters(section){
    if (!section.filters?.length) return '';
    return `<div class="filter-row" role="group" aria-label="تصفية التصاميم">
      ${section.filters.map((f,i)=>`<button type="button" class="filter-chip ${i===0?'active':''}" data-filter="${f.id}">${f.label}</button>`).join('')}
    </div>`;
  }

  function renderSections(){
    if (!root) return;
    root.innerHTML = sections.map((section, idx) => {
      const list = projects.filter(p => p.section === section.id);
      const projectsHtml = list.length ? `<div class="project-grid" data-section-grid="${section.id}">${list.map(cardMarkup).join('')}</div>` : '';
      return `<section class="portfolio-section" id="${section.id}">
        <div class="container">
          <header class="section-head"><span>${String(idx+1).padStart(2,'0')}</span><div><h2>${section.title}</h2><p>${section.subtitle || ''}</p></div></header>
          ${linkGateway(section)}
          ${visualFilters(section)}
          ${projectsHtml}
        </div>
      </section>`;
    }).join('');

    bindProjectCards();
    bindFilters();
  }

  function bindProjectCards(){
    document.querySelectorAll('[data-project-id]').forEach(el => {
      const open = () => openProject(el.dataset.projectId);
      el.addEventListener('click', open);
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
      });
    });
  }

  function bindFilters(){
    document.querySelectorAll('.filter-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        const row = btn.closest('.filter-row');
        row?.querySelectorAll('.filter-chip').forEach(b => b.classList.toggle('active', b === btn));
        document.querySelectorAll('#visual-design .project-card').forEach(card => {
          const p = projects.find(x => x.id === card.dataset.projectId);
          card.hidden = filter !== 'all' && p?.subcategory !== filter;
        });
      });
    });
  }

  function galleryMarkup(p, index=0){
    const cells = p.galleryCells || [p.spriteCell];
    const safeIndex = Math.max(0, Math.min(index, cells.length-1));
    return `<div class="gallery-viewer" data-gallery-project="${p.id}">
      <div class="gallery-stage">${spriteBlock(cells[safeIndex], 'gallery-sprite')}</div>
      <div class="gallery-controls">
        <button type="button" class="gallery-nav" data-gallery-prev aria-label="السابق">→</button>
        <strong class="gallery-count">${safeIndex+1} / ${cells.length}</strong>
        <button type="button" class="gallery-nav" data-gallery-next aria-label="التالي">←</button>
      </div>
      <div class="gallery-dots" aria-label="صفحات المعاينة">${cells.map((_,i)=>`<button type="button" class="gallery-dot ${i===safeIndex?'active':''}" data-gallery-index="${i}" aria-label="صفحة ${i+1}"></button>`).join('')}</div>
      <p class="gallery-hint">اسحب يمينًا أو يسارًا للتنقل بين الصفحات</p>
    </div>`;
  }

  function previewSetMarkup(p){
    const first = p.previewSet?.[0];
    if (!first) return '';
    return `<div class="preview-set-shell">
      <div class="preview-tabs">${p.previewSet.map((item,i)=>`<button type="button" class="preview-tab ${i===0?'active':''}" data-preview-url="${item.url}">${item.label}</button>`).join('')}</div>
      <div class="preview-set-frame"><iframe title="${p.title}" src="${first.url}" loading="lazy" allowfullscreen></iframe></div>
    </div>`;
  }

  function iframeMarkup(p){
    const staticClass = p.previewStatic ? ' static-preview' : '';
    const scrolling = p.previewStatic ? ' scrolling="no"' : '';
    return `<iframe class="project-iframe${staticClass}" title="معاينة ${p.title}" src="${p.previewUrl}" loading="lazy" referrerpolicy="no-referrer"${scrolling} allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  }

  function openProject(id){
    const p = projects.find(x => x.id === id);
    if (!p || !modal) return;
    lastFocused = document.activeElement;
    modalType.textContent = p.type || '';
    modalTitle.textContent = p.title;
    modalDescription.textContent = p.description || '';
    modalTags.innerHTML = (p.tags || []).map(t => `<span>${t}</span>`).join('');
    currentGallery = null;
    currentGalleryIndex = 0;

    if (p.galleryCells?.length || p.spriteCell) {
      currentGallery = p;
      view.innerHTML = galleryMarkup(p, 0);
      bindGalleryControls();
    } else if (p.previewSet?.length) {
      view.innerHTML = previewSetMarkup(p);
      bindPreviewTabs();
    } else if (p.previewHtml) {
      view.innerHTML = p.previewHtml;
    } else if (p.previewUrl) {
      view.innerHTML = iframeMarkup(p);
    } else {
      view.innerHTML = `<div class="safe-web-preview"><h3>${p.title}</h3><p>المعاينة غير متاحة حاليًا.</p></div>`;
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    panel?.focus();
  }

  function bindGalleryControls(){
    const viewer = view.querySelector('.gallery-viewer');
    if (!viewer || !currentGallery) return;
    viewer.querySelector('[data-gallery-prev]')?.addEventListener('click', () => changeGallery(-1));
    viewer.querySelector('[data-gallery-next]')?.addEventListener('click', () => changeGallery(1));
    viewer.querySelectorAll('[data-gallery-index]').forEach(btn => btn.addEventListener('click', () => setGallery(Number(btn.dataset.galleryIndex))));
    viewer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, {passive:true});
    viewer.addEventListener('touchend', e => {
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 45) changeGallery(diff > 0 ? -1 : 1);
    }, {passive:true});
  }

  function setGallery(index){
    if (!currentGallery) return;
    const cells = currentGallery.galleryCells || [currentGallery.spriteCell];
    currentGalleryIndex = (index + cells.length) % cells.length;
    view.innerHTML = galleryMarkup(currentGallery, currentGalleryIndex);
    bindGalleryControls();
  }

  function changeGallery(delta){ setGallery(currentGalleryIndex + delta); }

  function bindPreviewTabs(){
    view.querySelectorAll('.preview-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        view.querySelectorAll('.preview-tab').forEach(b => b.classList.toggle('active', b === btn));
        const frame = view.querySelector('.preview-set-frame iframe');
        if (frame) frame.src = btn.dataset.previewUrl;
      });
    });
  }

  function closeModal(){
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
    view.innerHTML = '';
    currentGallery = null;
    lastFocused?.focus?.();
  }

  renderSections();
  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal();
    if (modal?.classList.contains('open') && currentGallery) {
      if (e.key === 'ArrowLeft') changeGallery(1);
      if (e.key === 'ArrowRight') changeGallery(-1);
    }
  });

  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded','false');
  }));
})();
