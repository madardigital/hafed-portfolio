const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;
const driveThumb = id => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

window.PORTFOLIO_SPRITE = {
  url: "https://drive.google.com/thumbnail?id=1bH6J0MmpYGCYEMnYPe8YOmo-MI1dpu2p&sz=w5000",
  cols: 4,
  rows: 12
};

window.PORTFOLIO_SECTIONS = [
  {id:"presentations",title:"العروض التقديمية",subtitle:"نماذج عروض أكاديمية وتسويقية وإعلامية واستثمارية، مع معاينة الشرائح داخل الموقع."},
  {id:"media-editorial",title:"المحتوى الإعلامي والتحريري",subtitle:"الأعمال التحريرية موزعة حسب نوعها لتجنب تكرار النموذج نفسه.",links:[
    {href:"#news-sites",title:"الصحف الإلكترونية",text:"مواقع صحفية وتغطيات رقمية."},
    {href:"#print-newspapers",title:"الصحف الورقية",text:"تصميم وإخراج صفحات صحفية مطبوعة."},
    {href:"#adobe-reports",title:"التقارير التفاعلية",text:"تقارير وصفحات صحفية باستخدام Adobe Express."}
  ]},
  {id:"content-writing",title:"كتابة المحتوى",subtitle:"نماذج تخطيط وصياغة المحتوى والرسائل ومحاور النشر."},
  {id:"campaigns",title:"الخطط والحملات والتحليلات ومؤشرات القياس",subtitle:"خطط تسويقية، حملات علاقات عامة، تحليل إعلامي، مؤشرات أداء واتصال رقمي."},
  {id:"news-sites",title:"مواقع صحف إلكترونية",subtitle:"نماذج مواقع صحفية وإعلامية إلكترونية."},
  {id:"stores",title:"مواقع إلكترونية لمتاجر",subtitle:"نماذج متاجر ومنصات تسويقية إلكترونية."},
  {id:"print-newspapers",title:"صحف ورقية",subtitle:"نماذج تصميم وإخراج صحف مطبوعة."},
  {id:"adobe-reports",title:"تقارير صحفية باستخدام Adobe Express",subtitle:"ستة نماذج صحفية تفاعلية ضمن معاينة واحدة منظمة."},
  {id:"achievements",title:"ملفات إنجاز التدريب",subtitle:"صفحات فعلية مختارة من ملف إنجاز تدريب ميداني بعد إخفاء البيانات الشخصية."},
  {id:"client-projects",title:"مشاريع تطبيقية لعملاء",subtitle:"نماذج خطط تطويرية وتقارير ومخرجات تطبيقية."},
  {id:"research",title:"البحوث",subtitle:"نماذج بحوث أكاديمية منظمة."},
  {id:"ats-cv",title:"CV وفق نظام ATS",subtitle:"نماذج فعلية للسير الذاتية مع إخفاء الأسماء وبيانات الاتصال."},
  {id:"visual-design",title:"التصاميم المرئية",subtitle:"إنفوجرافيك، بوسترات، مطويات، تصاميم إعلانية ورقمية، أعمال AI، فيديو وموشن جرافيك.",filters:[
    {id:"all",label:"الكل"},{id:"infographic",label:"إنفوجرافيك"},{id:"poster",label:"بوسترات"},{id:"brochure",label:"مطويات"},{id:"advertising",label:"إعلاني"},{id:"ai",label:"أعمال AI"},{id:"digital",label:"تصميم رقمي"},{id:"video",label:"فيديو"},{id:"motion",label:"موشن"},{id:"reports",label:"تقارير بصرية"}
  ]},
  {id:"testimonials",title:"بعض ردود العملاء",subtitle:"لقطات فعلية مختارة من ردود العملاء بعد التسليم، مع إخفاء البيانات غير اللازمة."}
];

window.PORTFOLIO_PROJECTS = [
  {id:"hajj-presentation",title:"حج صحي — عرض تقديمي بصري",type:"Presentation",section:"presentations",description:"عرض بصري لحملة توعوية صحية يقدّم الإطار العام والجمهور والأهداف والرسائل بصورة منظمة.",tags:["Presentation","PR","RTL"],cover:driveThumb("1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv"),previewUrl:drivePreview("1vQrPM-ox4eomM5IX-AtBNWgXwHMgoIfv")},
  {id:"hotel-presentation",title:"الصناعة الفندقية",type:"Presentation",section:"presentations",description:"عرض تقديمي أكاديمي بصري في مجال الصناعة الفندقية والضيافة.",tags:["Presentation","Hospitality","Tourism"],cover:driveThumb("1WESFkzgWL-ZP3Ai9pGkIOnox8H8pEEnP"),previewUrl:drivePreview("1WESFkzgWL-ZP3Ai9pGkIOnox8H8pEEnP")},
  {id:"villa-presentation",title:"عرض تسويقي لفيلا فاخرة بإطلالة على المحيط",type:"Marketing Presentation",section:"presentations",description:"عرض استثماري وتسويقي يعتمد الصور الكبيرة والمزايا والبيانات ضمن تسلسل بصري واضح.",tags:["Presentation","Marketing","Investment"],cover:driveThumb("1b0dFKE8pf3RjhP2i6Ept5eHmLgNXWgCj"),previewUrl:drivePreview("1b0dFKE8pf3RjhP2i6Ept5eHmLgNXWgCj")},
  {id:"veneto-presentation",title:"فينيتو — عرض تقديمي",type:"Presentation",section:"presentations",description:"نموذج عرض تقديمي بصري من أرشيف الأعمال.",tags:["Presentation","Visual Design"],cover:driveThumb("1j7iav5Fg-FyolTEKq21Fs6aPvmqplOcH"),previewUrl:drivePreview("1j7iav5Fg-FyolTEKq21Fs6aPvmqplOcH")},
  {id:"nike-marketing-mix",title:"Nike — Integrated Marketing Mix Analysis",type:"Marketing Presentation",section:"presentations",description:"عرض تحليلي باللغة الإنجليزية حول المزيج التسويقي الموسع لعلامة Nike.",tags:["Presentation","Marketing Mix","English"],spriteCell:[0,0],galleryCells:[[0,0],[1,0],[2,0],[3,0],[0,1],[1,1]]},
  {id:"social-media-journalism",title:"صحافة السوشيال ميديا",type:"Media Presentation",section:"presentations",description:"شرائح فعلية من عرض عربي حول صحافة منصات التواصل ومزاياها ومخاطرها وأمثلتها.",tags:["Presentation","Media","Social Media"],spriteCell:[2,1],galleryCells:[[2,1],[3,1],[0,2],[1,2]]},
  {id:"national-day-presentation",title:"اليوم الوطني السعودي — الأمن وبناء المستقبل",type:"Presentation",section:"presentations",description:"نماذج شرائح من عرض وطني يربط الأمن بالتنمية ورؤية 2030 والمسؤولية المجتمعية.",tags:["Presentation","Saudi National Day","Visual Storytelling"],spriteCell:[2,2],galleryCells:[[2,2],[3,2],[0,3],[1,3]]},

  {id:"festival-content",title:"مهرجان الثقافات والشعوب — صناعة المحتوى الإعلامي",type:"Content Strategy",section:"content-writing",description:"خطة محتوى رقمية تشمل الأهداف والجمهور ومحاور المحتوى والمنصات وتقويم النشر وأفكار المنشورات.",tags:["Content Writing","Content Strategy","Social Media"],cover:driveThumb("1BJA92ChHS7Kp4XAU-d0wnpXYYHhUMVLX"),previewUrl:drivePreview("1BJA92ChHS7Kp4XAU-d0wnpXYYHhUMVLX")},

  {id:"hajj-health",title:"حملة حج صحي — خطة اتصال وتوعية",type:"PR Campaign",section:"campaigns",description:"حملة توعوية تتضمن تحليل الموقف والجمهور وأهداف SMART والرسائل والتكتيكات والخطة الزمنية والتقييم.",tags:["PR","Campaign","SMART","KPIs"],cover:driveThumb("1yyHwdmM3EnxS9k5huSQjuEl6evaDO37x"),previewUrl:drivePreview("1yyHwdmM3EnxS9k5huSQjuEl6evaDO37x")},
  {id:"here-world",title:"هنا العالم 2026 — حملة علاقات عامة",type:"PR Campaign",section:"campaigns",description:"حملة علاقات عامة لمهرجان الثقافات والشعوب ضمن مشروع اتصال متكامل.",tags:["PR Campaign","Event","Communication"],cover:driveThumb("1qifx2eNtu5PMYCGfR2ykAC7yqHE3qreR"),previewUrl:drivePreview("1qifx2eNtu5PMYCGfR2ykAC7yqHE3qreR")},
  {id:"media-indicators",title:"مؤشرات الأخبار الصحفية — منطقة مكة",type:"Media Analytics",section:"campaigns",description:"تقرير رصد وتحليل إعلامي يحول المواد الصحفية إلى مؤشرات أداء وتوزيعات وجداول وخلاصة تحليلية.",tags:["Media Monitoring","KPIs","Analytics"],cover:driveThumb("1TeIuFKFqTYM0QCiBxfgSwhVo0YbG7T_Z"),previewUrl:drivePreview("1TeIuFKFqTYM0QCiBxfgSwhVo0YbG7T_Z")},

  {id:"khatt-altamas",title:"خط التماس — صحيفة رياضية إلكترونية",type:"Electronic Newspaper",section:"news-sites",description:"صحيفة رياضية إلكترونية تضم أخبارًا وتقارير وتحليلات وأقسامًا متخصصة ومرئيات.",tags:["News Website","Editorial","Sports"],coverKind:"web",previewUrl:"https://madardigital.github.io/khatt-altamas/index.html"},
  {id:"waqie-vision",title:"واقع الرؤية — صحيفة إلكترونية",type:"Electronic Newspaper",section:"news-sites",description:"صحيفة إلكترونية تتابع مشاريع رؤية السعودية 2030 والاقتصاد والتقنية وجودة الحياة.",tags:["News Website","Vision 2030","Media"],coverKind:"web",previewUrl:"https://madardigital.github.io/waqie-vision/",previewStatic:true},

  {id:"lenora",title:"Lenora — متجر ومنصة تسويقية",type:"E-commerce Website",section:"stores",description:"واجهة متجر إلكتروني لمنتجات العطور والهدايا تربط عرض المنتجات بالمحتوى التسويقي.",tags:["Store","Marketing","Web"],coverKind:"web",previewUrl:"https://madardigital.github.io/lenora-marketing-platform/"},
  {id:"arej",title:"أريج — متجر عطور سعودي",type:"E-commerce Website",section:"stores",description:"واجهة متجر عربية للعطور مع قسم منتجات وتجربة تسويقية موجهة للمتصفح العربي.",tags:["Store","Perfume","Web"],coverKind:"web",previewUrl:"https://madardigital.github.io/Arej/#shop"},

  {id:"print-news-1",title:"صحيفة ورقية — نموذج 01",type:"Print Newspaper",section:"print-newspapers",description:"نموذج صحيفة ورقية من أعمال التصميم والإخراج الصحفي.",tags:["Print","Newspaper","Editorial Design"],cover:driveThumb("1M_2cJ9mvOV2rlEHIdyo-QBS04xrRCMPW"),previewUrl:drivePreview("1M_2cJ9mvOV2rlEHIdyo-QBS04xrRCMPW")},
  {id:"print-news-2",title:"صحيفة عين — نموذج ورقي",type:"Print Newspaper",section:"print-newspapers",description:"نموذج صحيفة ورقية يتضمن معالجة تحريرية وإخراجًا بصريًا للصفحات.",tags:["Print","Newspaper","Layout"],cover:driveThumb("1TQzVWmsakkMwsPmBW6Jd7_Fy-0iEUPaw"),previewUrl:drivePreview("1TQzVWmsakkMwsPmBW6Jd7_Fy-0iEUPaw")},

  {id:"adobe-express-collection",title:"تقارير صحفية تفاعلية — Adobe Express",type:"Interactive Journalism",section:"adobe-reports",description:"ستة نماذج لتقارير وصفحات صحفية تفاعلية يمكن التنقل بينها من داخل المعاينة.",tags:["Adobe Express","Journalism","Interactive Report"],coverKind:"adobe",ctaLabel:"استعراض التقارير",previewSet:[
    {label:"النموذج 1",url:"https://new.express.adobe.com/webpage/vDW13GCUTqBz5"},
    {label:"النموذج 2",url:"https://new.express.adobe.com/webpage/S4XmRiY6tc2bC"},
    {label:"النموذج 3",url:"https://new.express.adobe.com/webpage/pM0VwSO5rIfLm"},
    {label:"النموذج 4",url:"https://new.express.adobe.com/webpage/f9NOIYAlMjK6d"},
    {label:"النموذج 5",url:"https://new.express.adobe.com/webpage/Tu82AVeX7PwKo"},
    {label:"النموذج 6",url:"https://new.express.adobe.com/webpage/459YMq7nCmuvc"}
  ]},

  {id:"achievement-field-training",title:"ملف إنجاز التدريب الميداني — صفحات مختارة",type:"Achievement Portfolio",section:"achievements",description:"صفحات فعلية من ملف إنجاز التدريب الميداني تشمل الجهة، الأخبار، التقارير، المقابلات والإنفوجرافيك بعد إزالة بيانات الطالبة من المعاينة.",tags:["Achievement File","Training","Sanitized"],spriteCell:[2,3],galleryCells:[[2,3],[3,3],[0,4],[1,4],[2,4],[3,4]]},

  {id:"radiology-plan",title:"الخطة التطويرية المقترحة لقسم الأشعة",type:"Development Report",section:"client-projects",description:"مشروع تطويري يربط التحديات التشغيلية بالإجراءات التصحيحية ومقترحات تحسين خدمات القسم.",tags:["Development Plan","Report","Healthcare"],cover:driveThumb("17mQ1Qd36mGcr3qBpgOAkRWypxX8LyXIg"),previewUrl:drivePreview("17mQ1Qd36mGcr3qBpgOAkRWypxX8LyXIg")},

  {id:"research-sample",title:"بحث — التحول الرقمي في الخدمات الطلابية",type:"Academic Research",section:"research",description:"نموذج بحث أكاديمي منظم. ستُضاف نماذج بحثية إضافية عند استلام النسخ المخصصة للعرض.",tags:["Research","Digital Transformation","Academic"],coverKind:"document",previewHtml:`<div class="doc-preview"><span>بحث أكاديمي</span><h3>التحول الرقمي في الخدمات الطلابية</h3><ul><li>مشكلة وأسئلة البحث</li><li>الأهداف والأهمية</li><li>الإطار النظري والدراسات السابقة</li><li>المنهجية والنتائج والتوصيات</li></ul><small>معاينة موجزة حتى إضافة النسخة المصورة المخصصة للعرض.</small></div>`},

  {id:"ats-cv-collection",title:"نماذج CV وفق نظام ATS",type:"ATS Resume",section:"ats-cv",description:"أربع صفحات فعلية لسير ذاتية منظمة ومهيأة للقراءة الآلية، مع إخفاء الأسماء وبيانات الاتصال.",tags:["ATS","CV","Resume","Professional Documents"],spriteCell:[0,5],galleryCells:[[0,5],[1,5],[2,5],[3,5]],ctaLabel:"استعراض نماذج CV"},

  {id:"child-choice-visual",title:"من يصنع اختيار الطفل؟",type:"AI Visual / Editorial Design",section:"visual-design",subcategory:"ai",description:"عمل بصري تحريري يحول موضوع البيئة الغذائية داخل المدرسة إلى مشهد رمزي مدعوم بالذكاء الاصطناعي.",tags:["AI Visual","Editorial","Prompting"],spriteCell:[2,6]},
  {id:"studynest-app",title:"StudyNest App",type:"Digital Experience Design",section:"visual-design",subcategory:"digital",description:"تصور بصري لتجربة تطبيق حجز مساحات الدراسة وتنظيم رحلة المستخدم وعرض الخدمة.",tags:["App Concept","UX","Digital Design"],spriteCell:[3,6]},
  {id:"blackberry-x1",title:"BlackBerry Secure X1",type:"Advertising Visual",section:"visual-design",subcategory:"advertising",description:"مفهوم إعلاني بصري لمنتج تقني يركز على الأمان والهوية الرقمية.",tags:["Advertising","Technology","AI Visual"],spriteCell:[0,7]},
  {id:"digital-transformation-infographic",title:"التحول الرقمي — كن جزءًا من التغيير",type:"Infographic",section:"visual-design",subcategory:"infographic",description:"إنفوجرافيك حملة رقمية يعرض الهدف والجمهور والمؤشرات والتوصيات ضمن تصميم رأسي.",tags:["Infographic","Digital Transformation","Campaign"],spriteCell:[1,7]},
  {id:"nano-infographic",title:"تطبيقات تكنولوجيا النانو في الطب",type:"Infographic",section:"visual-design",subcategory:"infographic",description:"إنفوجرافيك علمي عربي يشرح تطبيقات تكنولوجيا النانو في المجال الطبي.",tags:["Infographic","Healthcare","Nano"],spriteCell:[2,7]},
  {id:"dashboard-infographic",title:"لوحة مؤشرات بصرية",type:"Data Infographic",section:"visual-design",subcategory:"infographic",description:"نموذج إنفوجرافيك ولوحة مؤشرات تعتمد الأرقام والرسوم والمقارنات البصرية.",tags:["Infographic","Dashboard","Data Visualization"],spriteCell:[3,7]},
  {id:"digital-balance",title:"استعادة التوازن الرقمي",type:"Visual Newsletter",section:"visual-design",subcategory:"infographic",description:"نشرة بصرية توعوية حول الاستخدام المتوازن للهاتف والتقنيات الرقمية.",tags:["Visual Newsletter","Digital Wellbeing","Infographic"],spriteCell:[0,8]},
  {id:"ml-cancer-infographic",title:"Machine Learning in Cancer — Infographic",type:"Infographic",section:"visual-design",subcategory:"infographic",description:"إنفوجرافيك باللغة الإنجليزية يوضح أهمية التعلم الآلي وتطبيقاته في مجال السرطان.",tags:["Infographic","Machine Learning","Healthcare"],spriteCell:[1,8]},
  {id:"national-day-poster",title:"عزنا بطبعنا — بوستر",type:"Poster",section:"visual-design",subcategory:"poster",description:"بوستر فعالية إبداعية بمناسبة اليوم الوطني السعودي.",tags:["Poster","Event","Saudi National Day"],spriteCell:[2,8]},
  {id:"mojtamaei-poster",title:"مجتمعي — بوستر تعريفي",type:"Poster",section:"visual-design",subcategory:"poster",description:"بوستر تعريفي بصري لجمعية مجتمعية ومجالات عملها.",tags:["Poster","Community","PR"],spriteCell:[3,8]},
  {id:"educational-event-poster",title:"رحلة التجارب التعليمية والترفيهية",type:"Event Poster",section:"visual-design",subcategory:"poster",description:"بوستر فعالية للأطفال يجمع تفاصيل التجربة والفئة المستهدفة بصورة واضحة.",tags:["Poster","Event","Education"],spriteCell:[0,9]},
  {id:"first-aid-brochure",title:"الإسعافات الأولية — مطوية توعوية",type:"Brochure",section:"visual-design",subcategory:"brochure",description:"مطوية ثلاثية متكاملة حول الإسعافات الأولية وحقيبة الطوارئ وإرشادات التصرف في الحالات العاجلة.",tags:["Brochure","First Aid","Healthcare"],spriteCell:[2,9]},
  {id:"flower-landing",title:"رحلة الباقة — تصميم صفحة رقمية",type:"Digital Design",section:"visual-design",subcategory:"digital",description:"تصميم صفحة رقمية لرحلة إعداد باقة الزهور من اختيار الألوان حتى التوصيل.",tags:["Digital Design","Landing Page","Visual Content"],spriteCell:[3,9]},
  {id:"visual-reports-archive",title:"مختارات من التقارير والتصاميم البصرية",type:"Visual Reports",section:"visual-design",subcategory:"reports",description:"مجموعة مختارة من التقارير البصرية، لوحات المؤشرات، التحليلات والصفحات التصميمية الموجودة في أرشيف الأعمال.",tags:["Visual Report","Dashboard","Editorial Design"],spriteCell:[0,10],galleryCells:[[0,10],[1,10],[2,10],[3,10],[0,11]]},
  {id:"autism-video",title:"التوحد — فيديو توعوي",type:"Awareness Video",section:"visual-design",subcategory:"video",description:"فيديو توعوي ضمن أعمال المحتوى المرئي والذكاء الاصطناعي.",tags:["Video","Awareness","AI Visual Content"],cover:driveThumb("1jwu_MaFHXq97Y-_yqQWNReQKb9suMdd-"),previewUrl:drivePreview("1jwu_MaFHXq97Y-_yqQWNReQKb9suMdd-")},
  {id:"ad-video",title:"فيديو إعلاني",type:"Advertising Video",section:"visual-design",subcategory:"video",description:"نموذج فيديو إعلاني من أعمال المحتوى المرئي.",tags:["Video","Advertising","Visual Content"],cover:driveThumb("1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q"),previewUrl:drivePreview("1g0vZmepLw4Zis_gEIYdlHH5u77npee6Q")},
  {id:"motion-video",title:"موشن جرافيك — ضريبة القيمة المضافة",type:"Motion Graphics",section:"visual-design",subcategory:"motion",description:"نموذج موشن جرافيك تعليمي يعتمد التبسيط البصري والحركة والانتقالات.",tags:["Motion Graphics","Video","Educational"],cover:driveThumb("15FfACqcyg_f6yWgrHYfeAtJ3-pGP0a0F"),previewUrl:drivePreview("15FfACqcyg_f6yWgrHYfeAtJ3-pGP0a0F")},
  {id:"motion-intro",title:"موشن جرافيك تعريفي",type:"Motion Graphics",section:"visual-design",subcategory:"motion",description:"نموذج فيديو موشن جرافيك تعريفي ضمن أرشيف الأعمال المرئية.",tags:["Motion Graphics","Video"],cover:driveThumb("1xK-_1545tdOZsb-29TUTuG6cK7FXzQe5"),previewUrl:drivePreview("1xK-_1545tdOZsb-29TUTuG6cK7FXzQe5")},

  {id:"testimonial-1",title:"رد عميل — مشروع صحيفة إلكترونية",type:"Client Feedback",section:"testimonials",description:"رد فعلي بعد تسليم مشروع صحيفة إلكترونية والحصول على الدرجة الكاملة.",tags:["Client Feedback"],spriteCell:[0,6]},
  {id:"testimonial-2",title:"رد عميل — تنظيم وتنسيق العمل",type:"Client Feedback",section:"testimonials",description:"رد فعلي يشيد بالتنظيم والترتيب وجودة العمل بعد التسليم.",tags:["Client Feedback"],spriteCell:[1,6]}
];
