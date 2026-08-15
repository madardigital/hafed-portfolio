(() => {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const thumb = id => `https://drive.google.com/thumbnail?id=${id}&sz=w1800`;
  const preview = id => `https://drive.google.com/file/d/${id}/preview`;
  const imagePreview = (id, alt) => `<div class="single-image-preview"><img src="${thumb(id)}" alt="${alt}" loading="lazy"></div>`;
  const twoImagePreview = (ids, alt) => `<div class="stacked-image-preview">${ids.map((id,i)=>`<img src="${thumb(id)}" alt="${alt} ${i+1}" loading="lazy">`).join('')}</div>`;
  const byId = id => projects.find(p => p.id === id);
  const clearAtlas = p => {
    if (!p) return;
    delete p.spriteCell;
    delete p.spriteRect;
    delete p.galleryCells;
    delete p.galleryRects;
  };
  const patchImage = (id, fileId, title) => {
    const p = byId(id);
    if (!p) return;
    clearAtlas(p);
    p.cover = thumb(fileId);
    p.previewHtml = imagePreview(fileId, title || p.title);
    delete p.previewUrl;
  };

  // أعمال بصرية ذات ملفات مستقلة مؤكدة — لا تعتمد على الـ atlas المشترك.
  patchImage('child-choice-visual', '1UPvW3n3OOW_BU-iZTOVMfsiV7ubCCQNi', 'من يصنع اختيار الطفل؟');
  patchImage('studynest-app', '1M74d0rt2k121cXFTHF6VuSVaA6Xamfs4', 'StudyNest App');
  patchImage('blackberry-x1', '1C7b1mjUxUngcoprVhmu5Q5Rt-HiMXmUk', 'BlackBerry Secure X1');
  patchImage('nano-infographic', '1M29vQhDreKQTTI3O5zuOAVaTfVCl2SN1', 'تطبيقات تكنولوجيا النانو في الطب');
  patchImage('digital-balance', '111W0H0-EHQWOfvXQHPB9d6rJO_ytbPzL', 'استعادة التوازن الرقمي');
  patchImage('educational-event-poster', '1IIpxBXyJn8AF57URMYfXQ2aocMy6-7ho', 'رحلة التجارب التعليمية والترفيهية');

  const brochure = byId('first-aid-brochure');
  if (brochure) {
    clearAtlas(brochure);
    brochure.title = 'مطوية توعوية — نموذج ثنائي الوجه';
    brochure.cover = thumb('1ltfuAoCK91FXI2d3InYfoyl6FtplIYqu');
    brochure.previewHtml = twoImagePreview(['1ltfuAoCK91FXI2d3InYfoyl6FtplIYqu','1CpJKMDkt3XjTaCRY2Z9LJbDnIQrBZs3b'], 'مطوية توعوية');
    delete brochure.previewUrl;
  }

  // إزالة البطاقات التي كانت تعتمد على قصاصات غير مؤكدة من الشبكة المشتركة.
  const uncertainDesignIds = new Set([
    'digital-transformation-infographic',
    'dashboard-infographic',
    'ml-cancer-infographic',
    'national-day-poster',
    'mojtamaei-poster',
    'flower-landing'
  ]);

  // ردود العملاء: ملف واحد منظم داخل المعاينة بدل أي قصاصات من atlas التصاميم.
  const withoutFeedbackAndUncertain = projects.filter(p => p.section !== 'testimonials' && !uncertainDesignIds.has(p.id));
  withoutFeedbackAndUncertain.push({
    id: 'client-feedback-collection',
    title: 'ردود العملاء — مختارات',
    type: 'Client Feedback',
    section: 'testimonials',
    coverKind: 'feedback',
    ctaLabel: 'استعراض ردود العملاء',
    previewUrl: preview('1BWRK7EEAFC96_Kjq5CWn1cyvcD-muLCJ')
  });

  // جذر: رابط المستخدم هو رابط إدارة SITE123، وليس رابط نشر عام صالح للمعاينة لدى العملاء.
  const rootNews = withoutFeedbackAndUncertain.find(p => (p.title || '').includes('جذر'));
  if (rootNews) {
    rootNews.coverKind = 'site123';
    delete rootNews.previewUrl;
    clearAtlas(rootNews);
    rootNews.ctaLabel = 'بيانات المعاينة';
    rootNews.previewHtml = `<div class="site123-notice"><strong>صحيفة جذر — SITE123</strong><p>الرابط المتاح حاليًا هو رابط إدارة الموقع، لذلك لا يمكن عرضه للزائر كمعاينة عامة داخل معرض الأعمال.</p><span>يلزم رابط النشر العام للموقع من SITE123.</span></div>`;
  }

  window.PORTFOLIO_PROJECTS = withoutFeedbackAndUncertain;
})();
