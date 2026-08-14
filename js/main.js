(() => {
  const sprite = {
    url: "https://drive.google.com/thumbnail?id=1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p&sz=w5000",
    cols: 4,
    rows: 3
  };

  const visualProjects = [
    {id:"nike-marketing-mix",title:"Nike — Integrated Marketing Mix Analysis",type:"Marketing Presentation",categories:["presentations","pr"],spriteCell:[0,0],description:"عرض تحليلي باللغة الإنجليزية يقدّم عناصر المزيج التسويقي الموسع لعلامة Nike ضمن معالجة بصرية داكنة وهوية عرض متماسكة.",tags:["Presentation","Marketing Mix","7Ps","English"]},
    {id:"social-media-journalism",title:"صحافة السوشيال ميديا — عرض توعوي وتحليلي",type:"Media Presentation",categories:["presentations","media"],spriteCell:[1,0],description:"مجموعة شرائح عربية حول صحافة منصات التواصل، أمثلتها، مزاياها، مخاطرها وأسئلة التفاعل، ضمن تصميم تعليمي موحد.",tags:["Presentation","Media","Social Media","Arabic"]},
    {id:"hotel-industry",title:"الصناعة الفندقية — عرض أكاديمي بصري",type:"Hospitality Presentation",categories:["presentations"],spriteCell:[2,0],description:"عرض عربي في قطاع الضيافة يجمع مقدمة المجال، توزيع الإنفاق السياحي، نبذة تاريخية، وأمثلة من رواد الصناعة الفندقية.",tags:["Presentation","Hospitality","Tourism","Data Visualization"]},
    {id:"resort-investment",title:"فيلا فاخرة بإطلالة على المحيط — عرض استثماري",type:"Investment Presentation",categories:["presentations"],spriteCell:[3,0],description:"نموذج عرض استثماري عقاري يوازن بين الصور الكبيرة، المزايا، استراتيجية الاستثمار والبيانات المالية في تصميم واضح ومقنع.",tags:["Presentation","Real Estate","Investment","Visual Design"]},
    {id:"nano-medicine-infographic",title:"تطبيقات تكنولوجيا النانو في الطب",type:"Scientific Infographic",categories:["infographics"],spriteCell:[0,1],description:"إنفوجرافيك علمي عربي يشرح تطبيقات النانو في التشخيص وتوصيل الدواء والعلاجات المتقدمة والتحديات المستقبلية.",tags:["Infographic","Healthcare","Nanotechnology","Arabic"]},
    {id:"digital-transformation-infographic",title:"التحول الرقمي — كن جزءًا من التغيير",type:"Campaign Infographic",categories:["infographics","pr"],spriteCell:[1,1],description:"إنفوجرافيك حملة رقمية يعرض الأهداف والجمهور والمخرجات والمؤشرات والتحديات والتوصيات ضمن لوحة معلومات واحدة.",tags:["Infographic","Digital Transformation","Campaign","KPIs"]},
    {id:"digital-wellbeing-newsletter",title:"استعادة التوازن الرقمي — نشرة بصرية",type:"Visual Newsletter / Infographic",categories:["infographics"],spriteCell:[2,1],description:"نشرة بصرية توعوية حول التوازن في استخدام الهاتف، تجمع النصائح العملية والصور والمعلومات في تنسيق عمودي قابل للقراءة.",tags:["Infographic","Digital Wellbeing","Newsletter","Awareness"]},
    {id:"ai-ml-infographic",title:"الذكاء الاصطناعي والتعلم الآلي — إنفوجرافيك",type:"Technology Infographic",categories:["infographics","ai"],spriteCell:[3,1],description:"إنفوجرافيك تقني يوضح الفروق بين AI وML وDL، خط العمل، التطبيقات، عرض البيانات، الفوائد والمخاطر وأفضل الممارسات.",tags:["Infographic","AI","Machine Learning","Data Visualization"]},
    {id:"first-aid-brochure",title:"الإسعافات الأولية — مطوية توعوية",type:"Brochure Design",categories:["brochures"],spriteCell:[0,2],description:"مطوية ثلاثية الأجزاء حول الإسعافات الأولية وحقيبة الطوارئ، تجمع جانبي المطوية في نموذج واحد بعد إزالة العناصر غير اللازمة للعرض العام.",tags:["Brochure","First Aid","Healthcare","Information Design"]},
    {id:"achievement-visual-sample",title:"ملف إنجاز التدريب الميداني — صفحات مختارة",type:"Achievement Portfolio",categories:["achievement"],spriteCell:[1,2],description:"صفحات فعلية مختارة من ملف إنجاز تدريب ميداني، تشمل نبذة الجهة والهيكل التنظيمي والمهام، بعد قص التذييلات التي تحتوي بيانات الطالب.",tags:["Achievement File","Field Training","Documentation","Sanitized"]},
    {id:"mojtamaei-poster",title:"مجتمعي — بوستر تعريفي",type:"Poster Design",categories:["posters","pr"],spriteCell:[2,2],description:"بوستر تعريفي لجمعية مراكز الأحياء بمنطقة المدينة المنورة، يعتمد معالجة بصرية توضح مجالات تمكين المجتمع وتنمية المهارات وتفعيل المراكز.",tags:["Poster","Community","PR","Visual Communication"]},
    {id:"educational-journey-poster",title:"رحلة التجارب التعليمية والترفيهية — بوستر فعالية",type:"Event Poster",categories:["posters"],spriteCell:[3,2],description:"بوستر فعالية للأطفال يجمع تفاصيل التجربة التعليمية والترفيهية مع التاريخ والرسوم والفئة المستهدفة ضمن تسلسل بصري واضح.",tags:["Poster","Event","Education","Visual Design"]}
  ];

  const excludedOld = new Set(["achievement-sample","heart-care-brochure"]);
  const baseProjects = (window.PORTFOLIO_PROJECTS || []).filter(p => !excludedOld.has(p.id));
  const projects = [...baseProjects, ...visualProjects];
  const asset = path => (window.ASSETS && window.ASSETS[path]) || path;
  const labels = {web:"المواقع والمشاريع الرقمية",ai:"الذكاء الاصطناعي",pr:"التسويق والعلاقات العامة",media:"التحليل الإعلامي",presentations:"العروض التقديمية",research:"البحوث",reports:"التقارير",achievement:"ملفات الإنجاز",infographics:"الإنفوجرافيك",posters:"البوسترات",brochures:"المطويات",design:"التصميم البصري"};

  const spritePos = p => {
    const col=p.spriteCell?.[0]||0,row=p.spriteCell?.[1]||0;
    return {x: sprite.cols>1 ? col*(100/(sprite.cols-1)) : 0, y: sprite.rows>1 ? row*(100/(sprite.rows-1)) : 0};
  };
  const spriteSize=`${sprite.cols*100}% ${sprite.rows*100}%`;
  const spriteCover = p => {
    const pos=spritePos(p);
    return `<div style="position:relative;width:100%;height:100%;overflow:hidden;background:#f4f4f2"><div aria-hidden="true" style="position:absolute;inset:0;background-image:url('${sprite.url}');background-repeat:no-repeat;background-size:${spriteSize};background-position:${pos.x}% ${pos.y}%"></div><span style="position:absolute;right:12px;bottom:12px;padding:6px 10px;border-radius:999px;background:rgba(16,42,43,.92);color:#fff;font-size:11px;font-weight:700;box-shadow:0 6px 20px rgba(0,0,0,.16)">مشروع مستقل</span></div>`;
  };

  const legacyHeroTile = document.querySelector('[data-open-project="training-needs"]');
  if (legacyHeroTile) {
    legacyHeroTile.dataset.openProject='nike-marketing-mix';
    legacyHeroTile.setAttribute('aria-label','فتح عرض Nike التسويقي');
    legacyHeroTile.innerHTML=spriteCover(visualProjects[0]);
  }

  document.querySelectorAll('img[data-asset]').forEach(img=>{img.src=asset(img.dataset.asset);});
  const featuredGrid=document.getElementById('featured-grid');
  const workGrid=document.getElementById('work-grid');
  const modal=document.getElementById('project-modal');
  const panel=modal.querySelector('.modal-panel');
  const view=document.getElementById('modal-view');
  const controls=document.getElementById('gallery-controls');
  const title=document.getElementById('modal-title');
  const category=document.getElementById('modal-category');
  const description=document.getElementById('modal-description');
  const tags=document.getElementById('modal-tags');
  const actions=document.getElementById('modal-actions');
  const counter=document.getElementById('gallery-counter');
  let activeProject=null,galleryIndex=0,lastFocused=null,touchStartX=0;

  const embeddedCover=p=>`<div style="position:relative;width:100%;height:100%;overflow:hidden;background:#fff"><iframe title="معاينة مصغرة: ${p.title}" src="${p.previewUrl}" loading="lazy" tabindex="-1" aria-hidden="true" referrerpolicy="no-referrer" style="width:125%;height:125%;border:0;pointer-events:none;transform:scale(.8);transform-origin:top right;background:#fff"></iframe><span style="position:absolute;right:12px;bottom:12px;padding:6px 10px;border-radius:999px;background:rgba(16,42,43,.92);color:#fff;font-size:11px;font-weight:700">معاينة فعلية</span></div>`;
  const sanitizedCover=p=>`<div style="height:100%;padding:22px;background:linear-gradient(145deg,#fff,#eef3ef);display:flex;flex-direction:column;justify-content:space-between;gap:16px;border:1px solid #dce4df"><div><small style="color:#7d5b37;font-weight:800">${p.type}</small><h4 style="margin:7px 0 0;font-size:20px;line-height:1.35">${p.title}</h4></div><b style="font-size:11px;color:#5f6e6c">معاينة منزوعة البيانات الشخصية</b></div>`;
  const coverMarkup=p=>{
    if(p.spriteCell) return spriteCover(p);
    if(p.embedCover&&p.previewUrl) return embeddedCover(p);
    if(p.sanitizedPreview) return sanitizedCover(p);
    if(p.cover) return `<img loading="lazy" src="${asset(p.cover)}" alt="معاينة ${p.title}">`;
    return `<div class="live-cover"><small>${p.type}</small><strong>${p.coverText||p.title}</strong></div>`;
  };
  const cardMarkup=(p,featured=false)=>`<article class="${featured?'featured-card':'work-card'}" data-project-id="${p.id}" tabindex="0" role="button" aria-label="عرض مشروع ${p.title}" ${featured?'':`data-categories="${p.categories.join(' ')}"`}><div class="${featured?'featured-media':'work-media'}">${coverMarkup(p)}</div><div class="${featured?'featured-copy':'work-copy'}"><span class="project-type">${p.type}</span><h3>${p.title}</h3><p>${p.description}</p></div></article>`;

  const featuredOrder=["ai-portfolio","lenora","hajj-health","media-indicators","nike-marketing-mix","nano-medicine-infographic"];
  const featuredProjects=featuredOrder.map(id=>projects.find(p=>p.id===id)).filter(Boolean);
  if(featuredGrid)featuredGrid.innerHTML=featuredProjects.map(p=>cardMarkup(p,true)).join('');
  if(workGrid)workGrid.innerHTML=projects.map(p=>cardMarkup(p,false)).join('');

  function bindCards(){
    document.querySelectorAll('[data-project-id]').forEach(el=>{const open=()=>openProject(el.dataset.projectId);el.addEventListener('click',open);el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}});});
    document.querySelectorAll('[data-open-project]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.openProject)));
  }
  function renderGallery(){
    const list=activeProject.gallery||[];if(!list.length)return;galleryIndex=(galleryIndex+list.length)%list.length;
    view.innerHTML=`<img src="${asset(list[galleryIndex])}" alt="${activeProject.title} — معاينة ${galleryIndex+1} من ${list.length}">`;
    const img=view.querySelector('img');img.addEventListener('click',()=>img.classList.toggle('zoomed'));counter.textContent=`${galleryIndex+1} / ${list.length}`;controls.hidden=list.length<2;
  }
  function renderSpriteProject(p){
    const pos=spritePos(p);
    view.innerHTML=`<div role="img" aria-label="معاينة ${p.title}" style="width:100%;aspect-ratio:4/3;border-radius:16px;background-image:url('${sprite.url}');background-repeat:no-repeat;background-size:${spriteSize};background-position:${pos.x}% ${pos.y}%;background-color:#f4f4f2"></div>`;
  }
  function openProject(id){
    const p=projects.find(x=>x.id===id);if(!p)return;activeProject=p;galleryIndex=0;lastFocused=document.activeElement;
    category.textContent=p.categories.map(c=>labels[c]||c).join(' · ');title.textContent=p.title;description.textContent=p.description;tags.innerHTML=(p.tags||[]).map(t=>`<span>${t}</span>`).join('');actions.innerHTML='';controls.hidden=true;
    if(p.spriteCell)renderSpriteProject(p);else if(p.gallery?.length)renderGallery();else if(p.previewHtml)view.innerHTML=p.previewHtml;else if(p.previewUrl)view.innerHTML=`<iframe title="معاينة: ${p.title}" src="${p.previewUrl}" loading="lazy" referrerpolicy="no-referrer"></iframe>`;else if(p.liveUrl)view.innerHTML=`<iframe title="معاينة حية: ${p.title}" src="${p.liveUrl}" loading="lazy" referrerpolicy="no-referrer"></iframe>`;else view.innerHTML=`<div class="live-cover"><strong>${p.title}</strong><small>Preview</small></div>`;
    if(p.liveUrl)actions.insertAdjacentHTML('beforeend',`<a class="primary-link" href="${p.liveUrl}" target="_blank" rel="noopener">فتح الموقع الحي</a>`);if(p.githubUrl)actions.insertAdjacentHTML('beforeend',`<a href="${p.githubUrl}" target="_blank" rel="noopener">GitHub</a>`);if(p.sourceUrl&&!p.hideSource)actions.insertAdjacentHTML('beforeend',`<a href="${p.sourceUrl}" target="_blank" rel="noopener">عرض الملف الأصلي</a>`);
    modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');panel.focus();
  }
  function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');view.innerHTML='';activeProject=null;if(lastFocused?.focus)lastFocused.focus();}
  document.querySelectorAll('[data-close-modal]').forEach(x=>x.addEventListener('click',closeModal));
  document.getElementById('gallery-next').addEventListener('click',()=>{galleryIndex++;renderGallery();});document.getElementById('gallery-prev').addEventListener('click',()=>{galleryIndex--;renderGallery();});
  document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')closeModal();if(activeProject?.gallery?.length&&e.key==='ArrowLeft'){galleryIndex++;renderGallery();}if(activeProject?.gallery?.length&&e.key==='ArrowRight'){galleryIndex--;renderGallery();}});
  view.addEventListener('touchstart',e=>touchStartX=e.changedTouches[0].screenX,{passive:true});view.addEventListener('touchend',e=>{if(!activeProject?.gallery?.length)return;const d=e.changedTouches[0].screenX-touchStartX;if(Math.abs(d)>55){galleryIndex+=d<0?1:-1;renderGallery();}},{passive:true});
  document.querySelectorAll('.filter-btn').forEach(btn=>{const f=btn.dataset.filter;if(f!=='all'&&!projects.some(p=>p.categories.includes(f)))btn.hidden=true;});
  document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.work-card').forEach(card=>card.classList.toggle('hidden',f!=='all'&&!card.dataset.categories.split(' ').includes(f)));}));
  const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('main-nav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}));
  const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));bindCards();
})();
