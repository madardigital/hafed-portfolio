(() => {
  const rawProjects = window.PORTFOLIO_PROJECTS || [];
  const sprite = {
    url: "https://drive.google.com/thumbnail?id=1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p&sz=w5000",
    cols: 4,
    rows: 5
  };

  const excluded = new Set([
    "site123-news",
    "adobe-1","adobe-2","adobe-3","adobe-4","adobe-5","adobe-6",
    "ats-cv-1","ats-cv-2","ats-cv-3","ats-cv-4"
  ]);

  const sectionOverride = {
    "social-media-journalism": ["presentations"],
    "khatt-altamas": ["news-sites"],
    "waqie-vision": ["news-sites"],
    "print-news-1": ["print-newspapers"],
    "print-news-2": ["print-newspapers"],
    "festival-content": ["content-writing"]
  };

  const adobeSource = rawProjects.filter(p => /^adobe-[1-6]$/.test(p.id));
  const projects = rawProjects
    .filter(p => !excluded.has(p.id))
    .map(p => sectionOverride[p.id] ? {...p, sections: sectionOverride[p.id]} : p);

  projects.push({
    id: "adobe-express-collection",
    title: "تقارير صحفية تفاعلية — Adobe Express",
    type: "Interactive Journalism",
    sections: ["adobe-reports"],
    description: "مجموعة من ستة تقارير وصفحات صحفية تفاعلية، مجمعة في بطاقة واحدة لتقليل التكرار وسهولة التنقل بين النماذج.",
    tags: ["Adobe Express","Journalism","Interactive Report"],
    coverKind: "adobe",
    ctaLabel: "استعراض التقارير",
    previewSet: adobeSource.map((p,i) => ({label:`النموذج ${i+1}`, url:p.previewUrl}))
  });

  projects.push({
    id: "ats-cv-collection",
    title: "نماذج CV وفق نظام ATS",
    type: "ATS Resume",
    sections: ["ats-cv"],
    description: "أربعة نماذج لسير ذاتية منظمة ومهيأة للقراءة الآلية، مع إخفاء الأسماء وبيانات الاتصال في معرض الأعمال.",
    tags: ["ATS","CV","Resume","Professional Documents"],
    coverKind: "cv",
    ctaLabel: "استعراض نماذج CV",
    previewHtml: `<div class="ats-collection-preview">
      <div class="ats-note">نماذج منزوعة البيانات الشخصية</div>
      <div class="ats-grid">
        <article><b>01</b><h3>سيرة عربية</h3><span>ملخص مهني · خبرات · مهارات · تعليم</span></article>
        <article><b>02</b><h3>Resume English</h3><span>Summary · Experience · Skills · Education</span></article>
        <article><b>03</b><h3>سيرة مهنية</h3><span>خبرات · إنجازات · مؤهلات · شهادات</span></article>
        <article><b>04</b><h3>سيرة للتقديم الوظيفي</h3><span>هيكل واضح ومتوافق مع أنظمة ATS</span></article>
      </div>
      <p>تُعرض البنية والتنسيق فقط، ولا تظهر أسماء أصحاب السير أو أرقام التواصل أو البريد الإلكتروني.</p>
    </div>`
  });

  const sections = [
    {id:"presentations",title:"العروض التقديمية",subtitle:"نماذج عروض أكاديمية وتسويقية وإعلامية واستثمارية."},
    {id:"media-editorial",title:"المحتوى الإعلامي والتحريري",subtitle:"نماذج التحرير والمعالجة الصحفية موزعة في الأقسام التالية لعدم تكرار العمل نفسه أكثر من مرة.",links:[
      {href:"#news-sites",title:"الصحف الإلكترونية",text:"مواقع صحفية وأقسام تحريرية رقمية."},
      {href:"#print-newspapers",title:"الصحف الورقية",text:"تصميم وإخراج ومعالجة صحفية للصفحات."},
      {href:"#adobe-reports",title:"التقارير الصحفية التفاعلية",text:"تقارير وصفحات صحفية باستخدام Adobe Express."}
    ]},
    {id:"content-writing",title:"كتابة المحتوى",subtitle:"نماذج تخطيط وصياغة المحتوى والرسائل ومحاور النشر."},
    {id:"campaigns",title:"الخطط والحملات والتحليلات ومؤشرات القياس",subtitle:"خطط تسويقية، حملات علاقات عامة، تحليل إعلامي، مؤشرات أداء واتصال رقمي."},
    {id:"news-sites",title:"مواقع صحف إلكترونية",subtitle:"نماذج مواقع صحفية وإعلامية إلكترونية قابلة للمعاينة داخل الموقع."},
    {id:"stores",title:"مواقع إلكترونية لمتاجر",subtitle:"نماذج متاجر ومنصات تسويقية إلكترونية."},
    {id:"print-newspapers",title:"صحف ورقية",subtitle:"نماذج تصميم وإخراج صحف مطبوعة."},
    {id:"adobe-reports",title:"تقارير صحفية باستخدام Adobe Express",subtitle:"ستة نماذج مجمعة في معاينة واحدة بدل تكرار ست بطاقات متشابهة."},
    {id:"achievements",title:"ملفات إنجاز التدريب",subtitle:"نماذج ملفات إنجاز منظمة مع حماية البيانات الشخصية."},
    {id:"client-projects",title:"مشاريع لعملاء",subtitle:"نماذج تقارير وخطط تطويرية ومخرجات تطبيقية."},
    {id:"research",title:"البحوث",subtitle:"نماذج بحوث أكاديمية ومشروعات بحثية منظمة."},
    {id:"ats-cv",title:"CV وفق نظام ATS",subtitle:"نماذج سِيَر ذاتية منظمة ومتوافقة مع أنظمة تتبع المتقدمين، مع إخفاء البيانات الشخصية."},
    {id:"visual-design",title:"التصاميم المرئية",subtitle:"تصاميم إعلانية، فيديو، موشن جرافيك، أعمال بالذكاء الاصطناعي، إنفوجرافيك، بوسترات ومطويات."},
    {id:"testimonials",title:"بعض ردود العملاء",subtitle:"لقطات مختارة من ردود العملاء بعد التسليم، مع إخفاء البيانات غير اللازمة."}
  ];

  const root = document.getElementById("portfolio-sections");
  const modal = document.getElementById("project-modal");
  const panel = modal?.querySelector(".modal-panel");
  const view = document.getElementById("modal-view");
  const title = document.getElementById("modal-title");
  const type = document.getElementById("modal-type");
  const desc = document.getElementById("modal-description");
  const tags = document.getElementById("modal-tags");
  let lastFocused = null;

  const style = document.createElement("style");
  style.textContent = `
    .project-copy{display:flex;flex-direction:column;height:100%}
    .project-copy p{margin-bottom:0}
    .preview-cta{display:inline-flex;align-items:center;gap:8px;margin-top:auto;padding-top:18px;color:var(--green);font-size:14px;font-weight:800;transition:.2s}
    .preview-cta svg{width:19px;height:19px;fill:none;stroke:currentColor;stroke-width:1.8}
    .project-card:hover .preview-cta{gap:12px;color:#7d5b37}
    .project-card:focus-visible{outline:3px solid rgba(189,138,82,.45);outline-offset:4px}
    .project-media{position:relative}
    .project-media::after{content:"";position:absolute;inset:0;box-shadow:inset 0 -50px 55px rgba(12,30,31,.06);pointer-events:none}
    .section-link-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .section-link-card{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:24px;border:1px solid var(--line);border-radius:22px;background:#fff;transition:.2s}
    .section-link-card:hover{transform:translateY(-3px);box-shadow:var(--shadow)}
    .section-link-card h3{margin:0 0 5px;font-size:20px}.section-link-card p{margin:0;color:var(--muted);font-size:14px}
    .section-link-arrow{width:38px;height:38px;display:grid;place-items:center;flex:0 0 auto;border-radius:50%;background:var(--green);color:#fff;font-size:20px}
    .modal-meta::before{content:"معاينة داخل الموقع";display:inline-flex;padding:5px 10px;border-radius:999px;background:#e9f1ed;color:#285549;font-size:11px;font-weight:800;margin-bottom:8px}
    .preview-set-shell{width:100%;background:#fff;min-height:520px}
    .preview-tabs{display:flex;gap:8px;overflow:auto;padding:14px;border-bottom:1px solid var(--line);background:#f5f2eb;scrollbar-width:none}
    .preview-tabs::-webkit-scrollbar{display:none}
    .preview-tab{white-space:nowrap;border:1px solid #cad2ce;border-radius:999px;background:#fff;padding:9px 14px;cursor:pointer;font-weight:700;color:#455554}
    .preview-tab.active{background:var(--green);border-color:var(--green);color:#fff}
    .preview-set-frame iframe{width:100%;height:68vh;border:0;background:#fff;display:block}
    .ats-collection-preview{width:min(900px,100%);padding:30px;margin:auto;background:#f7f5ef}
    .ats-note{display:inline-flex;padding:6px 11px;border-radius:999px;background:#e6efea;color:#285549;font-size:12px;font-weight:800;margin-bottom:18px}
    .ats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .ats-grid article{background:#fff;border:1px solid var(--line);border-radius:18px;padding:22px;min-height:170px;box-shadow:0 10px 30px rgba(16,42,43,.05)}
    .ats-grid b{color:#bd8a52}.ats-grid h3{margin:8px 0;font-size:20px}.ats-grid span{color:var(--muted);font-size:14px}
    .ats-collection-preview>p{color:var(--muted);font-size:13px;margin:18px 0 0}
    @media(max-width:760px){.section-link-grid,.ats-grid{grid-template-columns:1fr}.section-link-card{padding:19px}.preview-set-frame iframe{height:62vh}}
  `;
  document.head.appendChild(style);

  const spritePos = p => {
    const [c,r] = p.spriteCell || [0,0];
    return {x:c*(100/(sprite.cols-1)), y:r*(100/(sprite.rows-1))};
  };
  const spriteSize = `${sprite.cols*100}% ${sprite.rows*100}%`;

  function spriteBlock(p, modalMode=false){
    const pos = spritePos(p);
    return `<div class="sprite ${modalMode?"sprite-large":""}" role="img" aria-label="معاينة ${p.title}" style="background-image:url('${sprite.url}');background-size:${spriteSize};background-position:${pos.x}% ${pos.y}%"></div>`;
  }

  function coverMarkup(p){
    if(p.spriteCell) return spriteBlock(p,false);
    if(p.cover) return `<img loading="lazy" src="${p.cover}" alt="معاينة ${p.title}">`;
    if(p.coverKind==="cv") return `<div class="cv-cover"><span></span><i></i><b></b><i></i><i></i><i></i><small>ATS CV</small></div>`;
    if(p.coverKind==="adobe") return `<div class="web-cover adobe"><span>Adobe Express</span><strong>تقارير صحفية تفاعلية</strong><small>6 نماذج</small></div>`;
    if(p.coverKind==="web") return `<div class="web-cover"><span>Web Project</span><strong>${p.title}</strong><small>معاينة داخل الموقع</small></div>`;
    if(p.coverKind==="document") return `<div class="document-cover"><span>Document</span><strong>${p.title}</strong></div>`;
    return `<div class="document-cover"><span>${p.type||"Project"}</span><strong>${p.title}</strong></div>`;
  }

  function ctaLabel(p){
    if(p.ctaLabel) return p.ctaLabel;
    if((p.sections||[]).includes("testimonials")) return "عرض رد العميل";
    if(/video|motion/i.test(`${p.type||""} ${(p.tags||[]).join(" ")}`)) return "تشغيل المعاينة";
    if(/website|newspaper|e-commerce|web/i.test(p.type||"") || p.coverKind==="web") return "معاينة الموقع";
    return "معاينة النموذج";
  }

  const eyeIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6S2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.7"/></svg>`;

  function cardMarkup(p){
    return `<article class="project-card" data-project-id="${p.id}" tabindex="0" role="button" aria-label="${ctaLabel(p)}: ${p.title}">
      <div class="project-media">${coverMarkup(p)}</div>
      <div class="project-copy"><span>${p.type||""}</span><h3>${p.title}</h3><p>${p.description||""}</p><span class="preview-cta">${eyeIcon}${ctaLabel(p)}</span></div>
    </article>`;
  }

  function sectionLinksMarkup(links){
    return `<div class="section-link-grid">${links.map(link=>`<a class="section-link-card" href="${link.href}"><div><h3>${link.title}</h3><p>${link.text}</p></div><span class="section-link-arrow" aria-hidden="true">←</span></a>`).join("")}</div>`;
  }

  function renderSections(){
    if(!root) return;
    let number = 0;
    root.innerHTML = sections.map(s => {
      const list = projects.filter(p => (p.sections||[]).includes(s.id));
      if(!list.length && !s.links?.length) return "";
      number += 1;
      const body = s.links?.length ? sectionLinksMarkup(s.links) : `<div class="project-grid">${list.map(cardMarkup).join("")}</div>`;
      return `<section class="portfolio-section" id="${s.id}"><div class="container"><header class="section-head"><span>${String(number).padStart(2,"0")}</span><div><h2>${s.title}</h2><p>${s.subtitle||""}</p></div></header>${body}</div></section>`;
    }).join("");
  }

  function renderPreviewSet(p){
    const items = p.previewSet || [];
    view.innerHTML = `<div class="preview-set-shell"><div class="preview-tabs">${items.map((item,i)=>`<button class="preview-tab ${i===0?"active":""}" type="button" data-preview-index="${i}">${item.label}</button>`).join("")}</div><div class="preview-set-frame" id="preview-set-frame"></div></div>`;
    const frame = view.querySelector("#preview-set-frame");
    const load = index => {
      const item = items[index];
      frame.innerHTML = `<iframe title="${p.title} — ${item.label}" src="${item.url}" loading="eager" referrerpolicy="no-referrer" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
      view.querySelectorAll(".preview-tab").forEach((b,i)=>b.classList.toggle("active",i===index));
    };
    view.querySelectorAll(".preview-tab").forEach(btn=>btn.addEventListener("click",()=>load(Number(btn.dataset.previewIndex))));
    if(items.length) load(0);
  }

  function openProject(id){
    const p = projects.find(x => x.id===id);
    if(!p || !modal) return;
    lastFocused = document.activeElement;
    type.textContent = p.type || "";
    title.textContent = p.title;
    desc.textContent = p.description || "";
    tags.innerHTML = (p.tags||[]).map(t=>`<span>${t}</span>`).join("");

    if(p.previewSet?.length) renderPreviewSet(p);
    else if(p.spriteCell) view.innerHTML = spriteBlock(p,true);
    else if(p.previewHtml) view.innerHTML = p.previewHtml;
    else if(p.previewUrl) view.innerHTML = `<iframe title="معاينة ${p.title}" src="${p.previewUrl}" loading="eager" referrerpolicy="no-referrer" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
    else view.innerHTML = `<div class="safe-web-preview"><h3>${p.title}</h3><p>لا توجد معاينة منشورة لهذا النموذج حاليًا.</p></div>`;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden","false");
    document.body.classList.add("modal-open");
    panel?.focus();
  }

  function closeModal(){
    if(!modal) return;
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden","true");
    document.body.classList.remove("modal-open");
    view.innerHTML = "";
    lastFocused?.focus?.();
  }

  renderSections();

  document.querySelectorAll("[data-project-id]").forEach(el => {
    const open = () => openProject(el.dataset.projectId);
    el.addEventListener("click",open);
    el.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});
  });
  document.querySelectorAll("[data-close-modal]").forEach(el=>el.addEventListener("click",closeModal));
  document.addEventListener("keydown",e=>{if(e.key==="Escape"&&modal?.classList.contains("open")) closeModal();});

  const menu = document.querySelector(".menu-toggle");
  const nav = document.getElementById("main-nav");
  menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
  nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false");}));
})();