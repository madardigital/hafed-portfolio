const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;
const driveThumb = id => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

window.PORTFOLIO_ATLAS = {
  url: "assets/portfolio-project-atlas-v4.jpg?v=20260817-2035",
  width: 3200,
  height: 18200,
  cellWidth: 800,
  cellHeight: 600
};

window.PORTFOLIO_SECTIONS = [
  {id:"presentations",title:"العروض التقديمية",subtitle:""},
  {id:"news-sites",title:"مواقع صحف إلكترونية",subtitle:"نماذج مواقع صحفية وإعلامية إلكترونية."},
  {id:"stores",title:"مواقع إلكترونية لمتاجر",subtitle:"نماذج متاجر ومنصات تسويقية إلكترونية."},
  {id:"print-newspapers",title:"صحف ورقية",subtitle:"نماذج تصميم وإخراج صحف مطبوعة."},
  {id:"adobe-reports",title:"تقارير صحفية باستخدام أدوبي إكسبريس (Adobe Express)",subtitle:"تقارير وصفحات صحفية تفاعلية."},
  {id:"campaigns",title:"الخطط والحملات والتحليلات ومؤشرات القياس",subtitle:"خطط تسويقية، حملات علاقات عامة، تحليل إعلامي، مؤشرات أداء واتصال رقمي."},
  {id:"achievements",title:"ملفات إنجاز | تقارير التدريب التعاوني والميداني",subtitle:""},
  {id:"client-projects",title:"مشاريع وخطط تطبيقية",subtitle:"نماذج خطط تطويرية وتقارير ومخرجات تطبيقية."},
  {id:"research",title:"البحوث",subtitle:"نماذج بحوث أكاديمية منظمة."},
  {id:"ats-cv",title:"CV وفق نظام ATS",subtitle:"نماذج فعلية مع إخفاء الأسماء وبيانات الاتصال."},
  {id:"visual-design",title:"التصاميم المرئية",subtitle:"إنفوجرافيك، بوسترات، مطويات، تصاميم إعلانية ورقمية، أعمال AI، فيديو وموشن جرافيك.",initialVisible:9,filters:[
    {id:"all",label:"الكل"},{id:"infographic",label:"إنفوجرافيك"},{id:"poster",label:"بوسترات"},{id:"brochure",label:"مطويات"},{id:"advertising",label:"إعلاني"},{id:"ai",label:"أعمال AI"},{id:"digital",label:"تصميم رقمي"},{id:"video",label:"فيديو"},{id:"motion",label:"موشن"}
  ]},
  {id:"testimonials",title:"بعض ردود العملاء",subtitle:"لقطات مختارة من الردود بعد التسليم."}
];

window.PORTFOLIO_PROJECTS = [
  {id:"hotel-presentation",title:"الصناعة الفندقية",section:"presentations",cover:driveThumb("1WESFkzgWL-ZP3Ai9pGkIOnox8H8pEEnP"),previewUrl:drivePreview("1WESFkzgWL-ZP3Ai9pGkIOnox8H8pEEnP")},
  {id:"villa-presentation",title:"عرض تسويقي لفيلا فاخرة بإطلالة على المحيط",section:"presentations",cover:driveThumb("1b0dFKE8pf3RjhP2i6Ept5eHmLgNXWgCj"),previewUrl:drivePreview("1b0dFKE8pf3RjhP2i6Ept5eHmLgNXWgCj")},
  {id:"veneto-presentation",title:"فينيتو — عرض تقديمي",section:"presentations",cover:driveThumb("1j7iav5Fg-FyolTEKq21Fs6aPvmqplOcH"),previewUrl:drivePreview("1j7iav5Fg-FyolTEKq21Fs6aPvmqplOcH")},
  {id:"nike-marketing-mix",title:"Nike — Integrated Marketing Mix Analysis",section:"presentations",spriteCell:[0,0],galleryCells:[[0,0],[1,0],[2,0],[3,0],[0,1],[1,1]]},
  {id:"hajj-presentation",title:"حج صحي — عرض تقديمي بصري",section:"presentations",cover:driveThumb("1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv"),previewUrl:drivePreview("1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv")},

  {id:"khatt-altamas",title:"خط التماس — صحيفة رياضية إلكترونية",section:"news-sites",cover:"assets/site-khatt-altamas.jpg?v=20260817-2035",coverKind:"web",previewUrl:"https://madardigital.github.io/khatt-altamas/index.html"},
  {id:"waqie-vision",title:"واقع الرؤية — صحيفة إلكترونية",section:"news-sites",cover:"assets/site-waqie-vision.jpg?v=20260817-2035",coverKind:"web",previewUrl:"https://madardigital.github.io/waqie-vision/"},
  {id:"jithr-site123",title:"صحيفة إلكترونية باستخدام سايت 123 (SITE 123)",section:"news-sites",cover:"assets/site-jithr-site123.jpg?v=20260817-2035",coverKind:"web",previewUrl:"https://69d5145dace78.site123.me/"},

  {id:"lenora",title:"Lenora — متجر ومنصة تسويقية",section:"stores",cover:"assets/site-lenora.jpg?v=20260817-2035",coverKind:"web",previewUrl:"https://madardigital.github.io/lenora-marketing-platform/"},
  {id:"arej",title:"أريج — متجر عطور سعودي",section:"stores",cover:"assets/site-arej.jpg?v=20260817-2035",coverKind:"web",previewUrl:"https://madardigital.github.io/Arej/#shop"},

  {id:"print-news-1",title:"صحيفة ورقية — نموذج 01",section:"print-newspapers",cover:driveThumb("1M_2cJ9mvOV2rlEHIdyo-QBS04xrRCMPW"),previewUrl:drivePreview("1M_2cJ9mvOV2rlEHIdyo-QBS04xrRCMPW")},
  {id:"print-news-2",title:"صحيفة عين — نموذج ورقي",section:"print-newspapers",cover:driveThumb("1TQzVWmsakkMwsPmBW6Jd7_Fy-0iEUPaw"),previewUrl:drivePreview("1TQzVWmsakkMwsPmBW6Jd7_Fy-0iEUPaw")},

  {id:"adobe-express-collection",title:"تقارير صحفية تفاعلية — Adobe Express",section:"adobe-reports",cover:"assets/site-adobe-express.jpg?v=20260817-2035",coverKind:"adobe",ctaLabel:"استعراض التقارير",previewSet:[
    {label:"النموذج 1",url:"https://new.express.adobe.com/webpage/vDW13GCUTqBz5"},
    {label:"النموذج 2",url:"https://new.express.adobe.com/webpage/f9NOIYAlMjK6d"},
    {label:"النموذج 3",url:"https://new.express.adobe.com/webpage/Tu82AVeX7PwKo"},
    {label:"النموذج 4",url:"https://new.express.adobe.com/webpage/459YMq7nCmuvc"},
    {label:"النموذج 5",url:"https://new.express.adobe.com/webpage/S4XmRiY6tc2bC"},
    {label:"النموذج 6",url:"https://new.express.adobe.com/webpage/pM0VwSO5rIfLm"}
  ]},

  {id:"hajj-health",title:"حملة حج صحي — خطة اتصال وتوعية",section:"campaigns",cover:driveThumb("1yyHwdmM3EnxS9k5huSQjuEl6evaDO37x"),previewUrl:drivePreview("1yyHwdmM3EnxS9k5huSQjuEl6evaDO37x")},
  {id:"here-world",title:"هنا العالم 2026 — حملة علاقات عامة",section:"campaigns",cover:driveThumb("1qifx2eNtu5PMYCGfR2ykAC7yqHE3qreR"),previewUrl:drivePreview("1qifx2eNtu5PMYCGfR2ykAC7yqHE3qreR")},
  {id:"media-indicators",title:"مؤشرات الأخبار الصحفية — منطقة مكة",section:"campaigns",cover:driveThumb("1TeIuFKFqTYM0QCiBxfgSwhVo0YbG7T_Z"),previewUrl:drivePreview("1TeIuFKFqTYM0QCiBxfgSwhVo0YbG7T_Z")},

  {id:"achievement-field-training",title:"ملف إنجاز التدريب الميداني",section:"achievements",spriteCell:[2,3],galleryCells:[[2,3],[3,3],[0,4],[1,4],[2,4],[3,4]]},

  {id:"radiology-plan",title:"الخطة التطويرية المقترحة لقسم الأشعة",section:"client-projects",cover:driveThumb("17mQ1Qd36mGcr3qBpgOAkRWypxX8LyXIg"),previewUrl:drivePreview("17mQ1Qd36mGcr3qBpgOAkRWypxX8LyXIg")},

  {id:"research-sample",title:"دراسة فقهية مقارنة — حكم خدمة المرأة لزوجها",section:"research",cover:"assets/research-winter-at-tantora.webp?v=20260815-2",imageUrls:["assets/research-winter-at-tantora.webp?v=20260815-2"]},

  {id:"ats-cv-collection",title:"نماذج CV وفق نظام ATS",section:"ats-cv",spriteCell:[0,5],galleryCells:[[0,5],[1,5],[2,5],[3,5]],ctaLabel:"استعراض نماذج CV"},

  {id:"autism-video",title:"التوحد — فيديو توعوي",section:"visual-design",subcategory:"video",cover:driveThumb("1jwu_MaFHXq97Y-_yqQWNReQKb9suMdd-"),previewUrl:drivePreview("1jwu_MaFHXq97Y-_yqQWNReQKb9suMdd-")},
  {id:"studynest-app",title:"StudyNest App",section:"visual-design",subcategory:"digital",spriteCell:[3,6]},
  {id:"blackberry-x1",title:"BlackBerry Secure X1",section:"visual-design",subcategory:"advertising",spriteCell:[0,7]},
  {id:"child-choice-visual",title:"من يصنع اختيار الطفل؟",section:"visual-design",subcategory:"ai",spriteCell:[2,6]},
  {id:"digital-transformation-infographic",title:"التحول الرقمي — كن جزءًا من التغيير",section:"visual-design",subcategory:"infographic",spriteCell:[1,7]},
  {id:"nano-infographic",title:"تطبيقات تكنولوجيا النانو في الطب",section:"visual-design",subcategory:"infographic",spriteCell:[2,7]},
  {id:"first-aid-guide",title:"دليل توعوي للإسعافات الأولية",section:"visual-design",subcategory:"brochure",cover:"assets/first-aid-guide.webp",imageUrls:["assets/first-aid-guide.webp"]},
  {id:"ml-cancer-infographic",title:"Machine Learning in Cancer — Infographic",section:"visual-design",subcategory:"infographic",spriteCell:[1,8]},
  {id:"national-day-poster",title:"عزنا بطبعنا — بوستر",section:"visual-design",subcategory:"poster",spriteCell:[2,8]},
  {id:"educational-event-poster",title:"رحلة التجارب التعليمية والترفيهية",section:"visual-design",subcategory:"poster",spriteCell:[0,9]},
  {id:"dashboard-infographic",title:"لوحة مؤشرات بصرية",section:"visual-design",subcategory:"infographic",spriteCell:[3,7]},
  {id:"digital-balance",title:"استعادة التوازن الرقمي",section:"visual-design",subcategory:"infographic",spriteCell:[0,8]},
  {id:"mojtamaei-poster",title:"مجتمعي — بوستر تعريفي",section:"visual-design",subcategory:"poster",spriteCell:[3,8]},
  {id:"flower-landing",title:"رحلة الباقة — تصميم صفحة رقمية",section:"visual-design",subcategory:"digital",spriteCell:[3,9]},
  {id:"ad-video",title:"فيديو إعلاني",section:"visual-design",subcategory:"video",cover:driveThumb("1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q"),previewUrl:drivePreview("1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q")},
  {id:"motion-video",title:"موشن جرافيك — ضريبة القيمة المضافة",section:"visual-design",subcategory:"motion",cover:driveThumb("15FfACqcyg_f6yWgrHYfeAtJ3-pGP0a0F"),previewUrl:drivePreview("15FfACqcyg_f6yWgrHYfeAtJ3-pGP0a0F")},
  {id:"motion-intro",title:"موشن جرافيك تعريفي",section:"visual-design",subcategory:"motion",cover:driveThumb("1xK-_1545tdOZsb-29TUTuG6cK7FXzQe5"),previewUrl:drivePreview("1xK-_1545tdOZsb-29TUTuG6cK7FXzQe5")},

  {id:"testimonials-collection",title:"ردود العملاء — مختارات",section:"testimonials",ctaLabel:"استعراض الردود",coverKind:"feedback",galleryRects:[
    [0,12700,800,1100],[800,12700,800,1100],[1600,12700,800,1100],[2400,12700,800,1100],
    [0,13800,800,1100],[800,13800,800,1100],[1600,13800,800,1100],[2400,13800,800,1100],
    [0,14900,800,1100],[800,14900,800,1100],[1600,14900,800,1100],[2400,14900,800,1100],
    [0,16000,800,1100],[800,16000,800,1100],[1600,16000,800,1100],[2400,16000,800,1100],
    [0,17100,800,1100],[800,17100,800,1100],[1600,17100,800,1100],[2400,17100,800,1100]
  ]}
];