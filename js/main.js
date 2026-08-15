(() => {
  const sections = window.PORTFOLIO_SECTIONS || [];
  const projects = window.PORTFOLIO_PROJECTS || [];
  const atlas = window.PORTFOLIO_ATLAS || {};

  const root = document.getElementById('portfolio-sections');
  const modal = document.getElementById('project-modal');
  const panel = modal?.querySelector('.modal-panel');
  const view = document.getElementById('modal-view');
  const modalTitle = document.getElementById('modal-title');
  let lastFocused = null;
  let currentProject = null;
  let currentGalleryIndex = 0;
  let touchStartX = 0;

  const eyeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.8"/></svg>`;
  const playIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg>`;

  function cellToRect(cell) {
    const [c, r] = cell;
    return [c * atlas.cellWidth, r * atlas.cellHeight, atlas.cellWidth, atlas.cellHeight];
  }

  function rectStyle(rect) {
    const [x, y, w, h] = rect;
    const sizeX = atlas.width / w * 100;
    const sizeY = atlas.height / h * 100;
    const posX = atlas.width === w ? 0 : x / (atlas.width - w) * 100;
    const posY = atlas.height === h ? 0 : y / (atlas.height - h) * 100;
    return `background-image:url('${atlas.url}');background-size:${sizeX}% ${sizeY}%;background-position:${posX}% ${posY}%;aspect-ratio:${w}/${h}`;
  }

  function atlasBlock(rect, extraClass = '') {
    return `<div class="atlas-cell ${extraClass}" role="img" aria-label="معاينة بصرية" style="${rectStyle(rect)}"></div>`;
  }

  function coverMarkup(p) {
    if (p.spriteCell) return atlasBlock(cellToRect(p.spriteCell), 'card-atlas');
    if (p.spriteRect) return atlasBlock(p.spriteRect, 'card-atlas');
    if (p.cover) return `<img loading="lazy" src="${p.cover}" alt="معاينة ${p.title}">`;
    if (p.coverKind === 'feedback') return `<div class="feedback-cover"><span>آراء العملاء</span><strong>ردود حقيقية بعد التسليم</strong><small>استعرض المجموعة</small></div>`;
    if (p.coverKind === 'adobe') return `<div class="web-cover adobe"><span>Adobe Express</span><strong>تقارير صحفية تفاعلية</strong><small>6 نماذج</small></div>`;
    if (p.coverKind === 'site123') return `<div class="web-cover site123"><span>SITE123</span><strong>صحيفة جذر</strong><small>صحيفة إلكترونية</small></div>`;
    if (p.coverKind === 'web') return `<div class="web-cover"><span>Website</span><strong>${p.title}</strong><small>معاينة داخل الموقع</small></div>`;
    if (p.coverKind === 'document') return `<div class="document-cover"><strong>${p.title}</strong></div>`;
    return `<div class="document-cover"><strong>${p.title}</strong></div>`;
  }

  function ctaLabel(p) {
    if (p.ctaLabel) return p.ctaLabel;
    if (p.section === 'news-sites' || p.section === 'stores') return 'معاينة الموقع';
    if (p.subcategory === 'video' || p.subcategory === 'motion') return 'تشغيل المعاينة';
    return 'معاينة النموذج';
  }

  function ctaIcon(p) {
    return (p.subcategory === 'video' || p.subcategory === 'motion') ? playIcon : eyeIcon;
  }

  function cardMarkup(p) {
    return `<article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="${ctaLabel(p)}: ${p.title}">
      <div class="project-media">${coverMarkup(p)}</div>
      <div class="project-copy">
        <h3>${p.title}</h3>
        <span class="card-cta">${ctaIcon(p)}<b>${ctaLabel(p)}</b><i aria-hidden="true">←</i></span>
      </div>
    </article>`;
  }

  function linkGateway(section) {
    if (!section.links?.length) return '';
    return `<div class="section-link-grid">${section.links.map(l => `
      <a class="section-link-card" href="${l.href}"><div><h3>${l.title}</h3><p>${l.text}</p></div><span class="section-link-arrow" aria-hidden="true">←</span></a>
    `).join('')}</div>`;
  }

  function visualFilters(section) {
    if (!section.filters?.length) return '';
    return `<div class="filter-row" role="group" aria-label="تصفية التصاميم">
      ${section.filters.map((f, i) => `<button type="button" class="filter-chip ${i === 0 ? 'active' : ''}" data-filter="${f.id}">${f.label}</button>`).join('')}
    </div>`;
  }

  function renderSections() {
    if (!root) return;
    root.innerHTML = sections.map((section, idx) => {
      const list = projects.filter(p => p.section === section.id);
      const projectsHtml = list.length ? `<div class="project-grid" data-section-grid="${section.id}">${list.map(cardMarkup).join('')}</div>` : '';
      const subtitle = section.subtitle ? `<p>${section.subtitle}</p>` : '';
      return `<section class="portfolio-section" id="${section.id}">
        <div class="container">
          <header class="section-head"><span>${String(idx + 1).padStart(2, '0')}</span><div><h2>${section.title}</h2>${subtitle}</div></header>
          ${linkGateway(section)}
          ${visualFilters(section)}
          ${projectsHtml}
        </div>
      </section>`;
    }).join('');

    bindProjectCards();
    bindFilters();
  }

  function bindProjectCards() {
    document.querySelectorAll('[data-project-id]').forEach(el => {
      const open = () => openProject(el.dataset.projectId);
      el.addEventListener('click', open);
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  }

  function bindFilters() {
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

  function galleryRects(p) {
    if (p.galleryRects?.length) return p.galleryRects;
    if (p.galleryCells?.length) return p.galleryCells.map(cellToRect);
    if (p.spriteRect) return [p.spriteRect];
    if (p.spriteCell) return [cellToRect(p.spriteCell)];
    return [];
  }

  function galleryMarkup(p, index = 0) {
    const rects = galleryRects(p);
    const safeIndex = Math.max(0, Math.min(index, rects.length - 1));
    const rect = rects[safeIndex];
    return `<div class="gallery-viewer" data-gallery-project="${p.id}">
      <div class="gallery-stage">${atlasBlock(rect, 'gallery-atlas')}</div>
      <div class="gallery-controls">
        <button type="button" class="gallery-nav" data-gallery-prev aria-label="السابق">→</button>
        <strong class="gallery-count">${safeIndex + 1} / ${rects.length}</strong>
        <button type="button" class="gallery-nav" data-gallery-next aria-label="التالي">←</button>
      </div>
      <div class="gallery-dots">${rects.map((_, i) => `<button type="button" class="gallery-dot ${i === safeIndex ? 'active' : ''}" data-gallery-index="${i}" aria-label="صفحة ${i + 1}"></button>`).join('')}</div>
      <p class="gallery-hint">اسحب يمينًا أو يسارًا للتنقل</p>
    </div>`;
  }

  function previewSetMarkup(p) {
    const first = p.previewSet?.[0];
    if (!first) return '';
    return `<div class="preview-set-shell">
      <div class="preview-tabs">${p.previewSet.map((item, i) => `<button type="button" class="preview-tab ${i === 0 ? 'active' : ''}" data-preview-url="${item.url}">${item.label}</button>`).join('')}</div>
      <div class="preview-set-frame"><iframe title="${p.title}" src="${first.url}" loading="lazy" allowfullscreen></iframe></div>
    </div>`;
  }

  function iframeMarkup(p) {
    return `<iframe class="project-iframe" title="معاينة ${p.title}" src="${p.previewUrl}" loading="lazy" scrolling="yes" referrerpolicy="no-referrer" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  }

  function openProject(id) {
    const p = projects.find(x => x.id === id);
    if (!p || !modal) return;
    currentProject = p;
    currentGalleryIndex = 0;
    lastFocused = document.activeElement;
    modalTitle.textContent = p.title;

    if (p.previewSet?.length) view.innerHTML = previewSetMarkup(p);
    else if (galleryRects(p).length) view.innerHTML = galleryMarkup(p, 0);
    else if (p.previewHtml) view.innerHTML = p.previewHtml;
    else if (p.previewUrl) view.innerHTML = iframeMarkup(p);
    else view.innerHTML = `<div class="safe-web-preview"><h3>${p.title}</h3></div>`;

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    panel?.focus();
    bindModalPreviewControls();
  }

  function bindModalPreviewControls() {
    document.querySelectorAll('.preview-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('.preview-tab').forEach(b => b.classList.toggle('active', b === tab));
        const frame = document.querySelector('.preview-set-frame iframe');
        if (frame) frame.src = tab.dataset.previewUrl;
      });
    });

    const viewer = document.querySelector('.gallery-viewer');
    if (!viewer || !currentProject) return;

    const go = index => {
      const rects = galleryRects(currentProject);
      currentGalleryIndex = (index + rects.length) % rects.length;
      view.innerHTML = galleryMarkup(currentProject, currentGalleryIndex);
      bindModalPreviewControls();
    };

    viewer.querySelector('[data-gallery-prev]')?.addEventListener('click', () => go(currentGalleryIndex - 1));
    viewer.querySelector('[data-gallery-next]')?.addEventListener('click', () => go(currentGalleryIndex + 1));
    viewer.querySelectorAll('[data-gallery-index]').forEach(dot => dot.addEventListener('click', () => go(Number(dot.dataset.galleryIndex))));
    viewer.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].clientX; }, {passive: true});
    viewer.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 45) go(currentGalleryIndex + (dx < 0 ? 1 : -1));
    }, {passive: true});
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    view.innerHTML = '';
    currentProject = null;
    lastFocused?.focus?.();
  }

  document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal?.classList.contains('open')) closeModal(); });

  const menu = document.querySelector('.menu-toggle');
  const nav = document.getElementById('main-nav');
  menu?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  }));

  renderSections();
})();
