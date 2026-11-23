"use strict";

var PRODUCTS = [
  {
    id: "dala",
    nameRu: "Платье «Алтын Дала»",
    nameKz: "«Алтын Дала» көйлегі",
    category: "dresses",
    price: 328000,
    images: ["images/dress-emerald.jpg", "images/dress-emerald-back.jpg", "images/hero.jpg"],
    alts: [
      "Изумрудное бархатное платье с золотой вышивкой, вид спереди",
      "То же платье, вид со спины с вышивкой на талии",
      "Платье «Алтын Дала» в архитектурном интерьере"
    ],
    descRu: "Вечернее платье в пол из изумрудного бархата с ручной золотой вышивкой по мотивам ою-орнека. Свободный силуэт, шёлковая подкладка. Для тоя и торжественных вечеров.",
    descKz: "Изумруд бархаттан тігілген, ою-өрнек салтында алтын жеппе тігілген кешкі көйлек. Еркін пилуэт, жібек астар. Той мен салтанатты кештерге арналған.",
    materialRu: "Бархат, шёлковая подкладка, золотая нить",
    materialKz: "Бархат, жібек астар, алтын жіп",
    sizes: ["XS", "S", "M", "L", "XL"],
    recommended: ["kamzol", "bag", "earrings"],
    isNew: true
  },
  {
    id: "zhuldyz",
    nameRu: "Платье «Жұлдыз»",
    nameKz: "«Жұлдыз» көйлегі",
    category: "dresses",
    price: 288000,
    oldPrice: 360000,
    images: ["images/dress-champagne.jpg"],
    alts: ["Шёлковое платье цвета шампанское с золотым поясом"],
    descRu: "Платье-миди из натурального шёлка цвета шампанское: мягкий вырез «водопад» и тонкий золотой пояс. Струящийся крой для вечера и торжества.",
    descKz: "Шампан түсті табиғи жібектен тігілген миди көйлек: жумсақ жаға және жұқа алтын белдік. Кеш пен салтанатқа арналған.",
    materialRu: "Натуральный шёлк, золотой пояс",
    materialKz: "Табиғи жібек, алтын белдік",
    sizes: ["XS", "S", "M", "L"],
    recommended: ["scarf", "belt", "cream"],
    isNew: true
  },
  {
    id: "granat",
    nameRu: "Платье «Гранат»",
    nameKz: "«Гранат» көйлегі",
    category: "dresses",
    price: 295000,
    images: ["images/dress-burgundy.jpg"],
    alts: ["Гранатовое бархатное платье с золотой вышивкой на талии"],
    descRu: "Вечернее бархатное платье глубокого гранатового цвета с золотой вышивкой на талии и силуэтом «русалка».",
    descKz: "Беліне анар түсті бархат көйлек, белдеуінде алтын кекесі және сурен пилуэт.",
    materialRu: "Бархат, золотая вышивка",
    materialKz: "Бархат, алтын кекес",
    sizes: ["S", "M", "L", "XL"],
    recommended: ["earrings", "bracelet", "bag"]
  },
  {
    id: "camel",
    nameRu: "Пальто «Верблюд»",
    nameKz: "«Верблюд» пальтосы",
    category: "outerwear",
    price: 520000,
    images: ["images/coat-camel.jpg"],
    alts: ["Длинное кашемировое пальто верблюжьего цвета с поясом"],
    descRu: "Длинное пальто свободного кроя из чистого кашемира с поясом. Тёплая, лёгкая ткань с благородным матовым блеском.",
    descKz: "Таза кашемирден тігілген, белдікті ұзын еркін пальто. Жылы, жеңіл әрі жатын жарық.",
    materialRu: "Кашемир 100%",
    materialKz: "Кашемир 100%",
    sizes: ["S", "M", "L", "XL"],
    recommended: ["belt", "blouse", "cream"]
  },
  {
    id: "night",
    nameRu: "Костюм «Ночь»",
    nameKz: "«Ночь» костюмі",
    category: "suits",
    price: 312000,
    images: ["images/suit-black.jpg"],
    alts: ["Чёрный вечерний брючный костюм с золотой пуговицей"],
    descRu: "Вечерний брючный костюм из тонкой чёрной шерсти: приталенный жакет с золотой пуговицей и узкие брюки со стрелками.",
    descKz: "Жіңішке қара жүннен тігілген кешкі шалбарлы костюм: алтын түймесі бар жакет және стрелкалы тар шалбар.",
    materialRu: "Тонкая шерсть, шёлковая подкладка",
    materialKz: "Жіңішке жүн, жібек астар",
    sizes: ["XS", "S", "M", "L"],
    recommended: ["bag", "earrings", "belt"]
  },
  {
    id: "cream",
    nameRu: "Костюм «Сливки»",
    nameKz: "«Сливки» костюмі",
    category: "suits",
    price: 292000,
    oldPrice: 365000,
    images: ["images/suit-cream.jpg"],
    alts: ["Светлый шерстяной костюм с широкими брюками"],
    descRu: "Светлый костюм из смеси шерсти и кашемира: однобортный жакет и брюки свободного кроя. Для офиса и дневных выходов.",
    descKz: "Жүн мен кашемир араласынан ашық костюм: бір түймелі жакет және еркін шалбар. Кеңсе мен күндізгі шығу үшін.",
    materialRu: "Шерсть и кашемир",
    materialKz: "Жүн және кашемир",
    sizes: ["XS", "S", "M", "L", "XL"],
    recommended: ["blouse", "scarf", "belt"],
    isNew: true
  },
  {
    id: "kamzol",
    nameRu: "Камзол «Қошқар мүйіз»",
    nameKz: "«Қошқар мүйіз» камзолы",
    category: "kamzols",
    price: 240000,
    oldPrice: 300000,
    images: ["images/kamzol-velvet.jpg"],
    alts: ["Изумрудный бархатный камзол с золотой орнаментальной вышивкой"],
    descRu: "Приталенный бархатный камзол с золотой вышивкой орнамента «қошқар мүйіз». Носится поверх шёлковой блузы.",
    descKz: "«Қошқар мүйіз» оюымен алтын кекестелген бархат камзол. Жібек блузканың үстіне киіледі.",
    materialRu: "Бархат, золотая нить, шёлк",
    materialKz: "Бархат, алтын жіп, жібек",
    sizes: ["XS", "S", "M", "L"],
    recommended: ["blouse", "scarf", "night"],
    isNew: true
  },
  {
    id: "blouse",
    nameRu: "Блуза «Ақ Жібек»",
    nameKz: "«Ақ Жібек» блузкасы",
    category: "blouses",
    price: 130000,
    images: ["images/blouse-silk.jpg"],
    alts: ["Белая шёлковая блуза с бантом у ворота"],
    descRu: "Белая блуза из натурального шёлка с мягким бантом у ворота и слегка собранным рукавом. Основа капсульного гардероба.",
    descKz: "Жаға тұсында жұмсақ банты, жиналған жеңі бар табиғи жібек блузка. Капсулалы гардеробтың негізі.",
    materialRu: "Натуральный шёлк",
    materialKz: "Табиғи жібек",
    sizes: ["XS", "S", "M", "L", "XL"],
    recommended: ["kamzol", "cream", "scarf"]
  },
  {
    id: "bag",
    nameRu: "Сумка «Алтын қапсырма»",
    nameKz: "«Алтын қапсырма» сөмкесі",
    category: "accessories",
    subtype: "bags",
    price: 240000,
    images: ["images/bag-leather.jpg", "images/bag-leather-detail.jpg"],
    alts: [
      "Чёрная кожаная сумка с золотой орнаментальной застежкой",
      "Крупный план золотой застежки и фактуры кожи"
    ],
    descRu: "Структурированная сумка из натуральной чёрной кожи с золотой застежкой, гравированной орнаментом. Ручка и съёмный ремень в комплекте.",
    descKz: "Алтын оюлы қапсырмасы бар табиғи қара теріден жасалған сөмке. Қолдына қол тұтқасы мен иың белдігі кіреді.",
    materialRu: "Натуральная кожа, фурнитура с золотым покрытием",
    materialKz: "Табиғи тері, алтын жабу фурнитура",
    sizes: ["UNI"],
    recommended: ["belt", "earrings", "night"]
  },
  {
    id: "earrings",
    nameRu: "Серьги «Інжу»",
    nameKz: "«Інжу» сырғасы",
    category: "accessories",
    subtype: "jewelry",
    price: 190000,
    images: ["images/earrings-pearl.jpg"],
    alts: ["Золотые серьги с барочным речным жемчугом"],
    descRu: "Подвесные серьги из золота 18 карат с барочным речным жемчугом. Каждая пара чуть отличается природной формой жемчужин.",
    descKz: "18 каратты алтын және өзен маржан мержаннан сырға. Әрбір жұп маржанның табиғи пішінімен ерекшеленеді.",
    materialRu: "Золото 18к, речной жемчуг",
    materialKz: "18к алтын, өзен маржан",
    sizes: ["UNI"],
    recommended: ["bracelet", "scarf", "dala"]
  },
  {
    id: "scarf",
    nameRu: "Платок «Ою»",
    nameKz: "«Ою» орамалы",
    category: "accessories",
    subtype: "scarves",
    price: 55000,
    images: ["images/scarf-silk.jpg"],
    alts: ["Шёлковый платок с изумрудно-золотым орнаментальным бордюром"],
    descRu: "Шёлковый платок с изумрудно-золотым орнаментальным бордюром. Можно носить на шее, в волосах или на сумке.",
    descKz: "Изумруд-алтын оюлы желегі бар жібек орамал. Мойынға, шашқа немесе сөмкеге тағуға болады.",
    materialRu: "Натуральный шёлк",
    materialKz: "Табиғи жібек",
    sizes: ["UNI"],
    recommended: ["blouse", "kamzol", "cream"]
  },
  {
    id: "belt",
    nameRu: "Ремень «Сары Алтын»",
    nameKz: "«Сары Алтын» белдігі",
    category: "accessories",
    subtype: "belts",
    price: 49000,
    images: ["images/belt-leather.jpg"],
    alts: ["Чёрный кожаный ремень с золотой пряжкой и гравировкой"],
    descRu: "Тонкий ремень из чёрной натуральной кожи с прямоугольной пряжкой и гравировкой орнамента.",
    descKz: "Ою ойылған тіктөртекті алтын бүрмесі бар қара табиғи тері белдік.",
    materialRu: "Натуральная кожа, пряжка с золотым покрытием",
    materialKz: "Табиғи тері, алтын жабу бүрме",
    sizes: ["75", "80", "85", "90", "95"],
    recommended: ["bag", "night", "cream"]
  },
  {
    id: "bracelet",
    nameRu: "Браслет «Перламутр»",
    nameKz: "«Перламутр» билезигі",
    category: "accessories",
    subtype: "jewelry",
    price: 140000,
    images: ["images/bracelet-pearl.jpg"],
    alts: ["Браслет из речного жемчуга с золотым замком"],
    descRu: "Браслет из отборного речного жемчуга с замком из золота 18 карат.",
    descKz: "18 каратты алтын кұлпыбар және іріктелген өзен маржаннан тігілген билезик.",
    materialRu: "Речной жемчуг, золото 18к",
    materialKz: "Өзен маржан, 18к алтын",
    sizes: ["UNI"],
    recommended: ["earrings", "dala", "granat"]
  }
];

var ORDERS = [
  { id: "AG-1042", productId: "dala", titleRu: "Платье «Алтын Дала»", titleKz: "«Алтын Дала» көйлегі", statusRu: "Доставлен", statusKz: "Жеткізілді", date: "12.11.2026", total: 328000 },
  { id: "AG-1038", productId: "bag", titleRu: "Сумка «Алтын қапсырма»", titleKz: "«Алтын қапсырма» сөмкесі", statusRu: "В пути", statusKz: "Жолда", date: "18.11.2026", total: 240000 },
  { id: "AG-1021", productId: "kamzol", titleRu: "Камзол «Қошқар мүйіз»", titleKz: "«Қошқар мүйіз» камзолы", statusRu: "Оформлен", statusKz: "Рәсімделді", date: "21.11.2026", total: 240000 }
];

var COPY = {
  ru: {
    top: "Бесплатная доставка по Алматы и Астане от 100 000 ₸  ·  Рассрочка Kaspi 0-0-12",
    search: "Поиск по каталогу",
    account: "Кабинет",
    favs: "Избранное",
    slogan: "Золото в каждой женщине",
    heroTitle: "Коллекция «Алтын»",
    heroText: "Женская одежда люкс-класса и аксессуары из золота, шёлка, кашемира и натуральной кожи. Шитьё в Казахстане.",
    look: "Смотреть коллекцию",
    promos: "Акции",
    p1t: "−20% на новую коллекцию",
    p1d: "На платья, костюмы и камзолы капсулы «Алтын». Скидка уже учтена в цене.",
    p2t: "Подарочная упаковка",
    p2d: "Коробка с орнаментом и открытка на казахском — бесплатно к любому заказу по желанию.",
    p3t: "Рассрочка Kaspi 0-0-12",
    p3d: "Без переплаты на 12 месяцев. Также Kaspi Red, Halyk и наличные при получении.",
    catalog: "Каталог",
    found: "Товаров",
    all: "Все",
    dresses: "Платья",
    suits: "Костюмы",
    outerwear: "Верхняя одежда",
    kamzols: "Камзолы и жилеты",
    blouses: "Блузы",
    accessories: "Аксессуары",
    bags: "Сумки",
    jewelry: "Украшения",
    scarves: "Платки",
    belts: "Ремни",
    order: "Оформить заказ",
    addFav: "В избранное",
    inFav: "В избранном",
    rec: "Рекомендуем также",
    size: "Размер",
    material: "Материал",
    onesize: "Один размер",
    sale: "Акция",
    neu: "Новинка",
    back: "Назад",
    delivery: "Доставка",
    pay: "Способ оплаты",
    confirm: "Подтвердить заказ",
    done: "Заказ принят",
    doneText: "Мы свяжемся с вами в WhatsApp, чтобы подтвердить детали. Это демонстрационный прототип — оплата не списывается.",
    close: "Закрыть",
    d1: "Курьер по Алматы",
    d2: "Курьер по Астане",
    d3: "Самовывоз из шоурума",
    d4: "Казпочта по Казахстану",
    pay1: "Kaspi.kz",
    pay2: "Halyk",
    pay3: "Наличными при получении",
    profile: "Профиль",
    orders: "Заказы",
    club: "Алтын клуб",
    addresses: "Адреса",
    guest: "Айгерим Нурланова",
    level: "Золотой уровень",
    bonuses: "16 800 бонусов",
    clubText: "До платинового уровня осталось покупок на 48 000 ₸. Бонусы списываются за каждый заказ и оплачивают до 10% следующей покупки.",
    addr1: "Алматы, пр. Достык 210, кв. 14 — основной",
    addr2: "Самовывоз: шоурум Алматы, Dostyq Plaza",
    contacts: "Контакты",
    showrooms: "Шоурумы",
    shipPay: "Доставка и оплата",
    aboutText: "Айел Голд — казахстанский люкс-бренд женской одежды. Современный крой и орнамент, ткани и фурнитура престижных материалов.",
    sh1: "Алматы, Dostyq Plaza, пр. Достык 162",
    sh2: "Астана, Mega Silk Way",
    hours: "Ежедневно 11:00–21:00",
    shipText: "Курьер по Алматы и Астане, Казпочта и СДЭК по Казахстану, самовывоз из шоурума.",
    payText: "Kaspi.kz, Kaspi Red, рассрочка 0-0-12, Halyk, наличные при получении.",
    copy: "© 2026 Айел Голд. Произведено в Казахстане.",
    orderNo: "Номер заказа"
  },
  kz: {
    top: "100 000 ₸-дан бастап Алматы мен Астана бойынша тегін жеткізу  ·  Kaspi 0-0-12 бөліп-төлеу",
    search: "Каталогтан іздеу",
    account: "Кабинет",
    favs: "Таңдаулы",
    slogan: "Әр әйелде — алтын",
    heroTitle: "«Алтын» коллекциясы",
    heroText: "Люкс-сыныптағы әйел киімі және алтын, жібек, кашемир мен табиғи теріден жасалған аксессуарлар. Қазақстанда тігіледі.",
    look: "Коллекцияны көру",
    promos: "Акциялар",
    p1t: "Жаңа коллекцияға −20%",
    p1d: "«Алтын» капсуласындағы көйлек, костюм және камзолдар. Жеңілдік бағада ескерілген.",
    p2t: "Сыйлық қаптама",
    p2d: "Оюлы қорап және қазақша жазылған ашық хат — кез келген тапсырысқа тегін.",
    p3t: "Kaspi 0-0-12 бөліп-төлеу",
    p3d: "12 ай бойынша үстемесіз. Сондай-ақ Kaspi Red, Halyk және алғанда қолма-қол.",
    catalog: "Каталог",
    found: "Тауар",
    all: "Барлығы",
    dresses: "Көйлектер",
    suits: "Костюмдер",
    outerwear: "Сырт киім",
    kamzols: "Камзолдар мен жилеттер",
    blouses: "Блузкалар",
    accessories: "Аксессуарлар",
    bags: "Сөмкелер",
    jewelry: "Әшекейлер",
    scarves: "Орамалдар",
    belts: "Белдіктер",
    order: "Тапсырыс беру",
    addFav: "Таңдаулыға",
    inFav: "Таңдаулыда",
    rec: "Сондай-ақ ұсынамыз",
    size: "Өлшем",
    material: "Материал",
    onesize: "Бір өлшем",
    sale: "Акция",
    neu: "Жаңа",
    back: "Артқа",
    delivery: "Жеткізу",
    pay: "Төлеу тәсілі",
    confirm: "Тапсырысты растау",
    done: "Тапсырыс қабылданды",
    doneText: "Мәліметтерді растау үшін WhatsApp арқылы хабарласамыз. Бұл — төлем етілмейтін демонстрациялық прототип.",
    close: "Закрыть",
    d1: "Алматы бойынша курьер",
    d2: "Астана бойынша курьер",
    d3: "Шоурумнан өзі алу",
    d4: "Қазақстан бойынша Қазпошта",
    pay1: "Kaspi.kz",
    pay2: "Halyk",
    pay3: "Алғанда қолма-қол",
    profile: "Профиль",
    orders: "Тапсырыстар",
    club: "Алтын клуб",
    addresses: "Мекенжайлар",
    guest: "Айгерім Нұрланова",
    level: "Алтын деңгей",
    bonuses: "16 800 бонус",
    clubText: "Платина деңгейіне 48 000 ₸ сатып қалды. Бонустар әрбір тапсырысқа жазылады және келесі сатыптың 10%–ына дейін жетеді.",
    addr1: "Алматы, Достық даңғылы 210, 14-пәтер — негізгі",
    addr2: "Өзі алу: Алматы шоурумы, Dostyq Plaza",
    contacts: "Байланыс",
    showrooms: "Шоурумдар",
    shipPay: "Жеткізу және төлеу",
    aboutText: "Айел Голд — қазақстандық әйел киімінің люкс-бренді. Заманауи пилуэт пен ою, бедел материалдар.",
    sh1: "Алматы, Dostyq Plaza, Достық даңғылы 162",
    sh2: "Астана, Mega Silk Way",
    hours: "Күн сайын 11:00–21:00",
    shipText: "Алматы мен Астана бойынша курьер, Қазақстан бойынша Қазпошта мен СДЭК, шоурумнан өзі алу.",
    payText: "Kaspi.kz, Kaspi Red, 0-0-12 бөліп, Halyk, алғанда қолма-қол.",
    copy: "© 2026 Айел Голд. Қазақстанда өндірілген.",
    orderNo: "Тапсырыс нөмірі"
  }
};

var MAIN_CATS = ["all", "dresses", "suits", "outerwear", "kamzols", "blouses", "accessories"];
var SUB_CATS = ["bags", "jewelry", "scarves", "belts"];

var state = {
  lang: "ru",
  query: "",
  category: "all",
  favs: ["dala"],
  selectedId: null,
  gallery: 0,
  accountOpen: false,
  accountTab: "profile",
  orderStep: "info",
  size: "",
  delivery: "d1",
  payment: "pay1",
  orderNo: "AG-1087"
};

function t() {
  return COPY[state.lang];
}

function formatPrice(n) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " ₸";
}

function productName(p) {
  return state.lang === "kz" ? p.nameKz : p.nameRu;
}

function sizeLabel(s) {
  return s === "UNI" ? t().onesize : s;
}

function findProduct(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

function heartSvg(filled) {
  var fill = filled ? "#C9A24B" : "none";
  return '<svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 20s-7.4-4.56-9.45-9.15C1.2 7.5 3.05 4.8 6.2 4.8c1.78 0 3.28.94 4.25 2.38C11.42 5.74 12.92 4.8 14.7 4.8c3.15 0 5 2.7 3.65 6.05C19.4 15.44 12 20 12 20z" fill="' + fill + '" stroke="#C9A24B" stroke-width="1.4"/></svg>';
}

function filteredProducts() {
  var q = state.query.trim().toLowerCase();
  var cat = state.category;
  return PRODUCTS.filter(function (p) {
    var inCat = cat === "all" || p.category === cat || p.subtype === cat;
    if (!inCat) return false;
    if (!q) return true;
    var bag = [p.nameRu, p.nameKz, p.materialRu, p.materialKz, p.descRu, p.descKz, p.category, p.subtype || ""].join(" ").toLowerCase();
    return bag.indexOf(q) !== -1;
  });
}

function openProduct(id) {
  var p = findProduct(id);
  state.selectedId = id;
  state.gallery = 0;
  state.orderStep = "info";
  state.size = p && p.sizes[0] ? p.sizes[0] : "";
  state.delivery = "d1";
  state.payment = "pay1";
  state.accountOpen = false;
  render();
}

function toggleFav(id) {
  var i = state.favs.indexOf(id);
  if (i >= 0) state.favs = state.favs.filter(function (x) { return x !== id; });
  else state.favs = state.favs.concat([id]);
  render();
}

function closeProduct() {
  state.selectedId = null;
  state.orderStep = "info";
  render();
}

function showSubs() {
  return state.category === "accessories" || SUB_CATS.indexOf(state.category) >= 0;
}

function renderI18n() {
  var c = t();
  var nodes = document.querySelectorAll("[data-i18n]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-i18n");
    if (c[key] != null) nodes[i].textContent = c[key];
  }
  var ph = document.querySelectorAll("[data-i18n-placeholder]");
  for (var j = 0; j < ph.length; j++) {
    var k = ph[j].getAttribute("data-i18n-placeholder");
    if (c[k] != null) ph[j].setAttribute("placeholder", c[k]);
  }
  var aria = document.querySelectorAll("[data-i18n-aria]");
  for (var a = 0; a < aria.length; a++) {
    var ak = aria[a].getAttribute("data-i18n-aria");
    if (c[ak] != null) aria[a].setAttribute("aria-label", c[ak]);
  }
}

function renderChrome() {
  var c = t();
  document.getElementById("lang-kz").className = "pill" + (state.lang === "kz" ? " active" : "");
  document.getElementById("lang-ru").className = "pill" + (state.lang === "ru" ? " active" : "");
  document.getElementById("fav-count").textContent = String(state.favs.length);
  var cats = document.getElementById("cats");
  cats.innerHTML = MAIN_CATS.map(function (id) {
    var on = state.category === id || (id === "accessories" && showSubs());
    return '<button type="button" class="pill' + (on ? " active" : "") + '" data-cat="' + id + '">' + c[id] + "</button>";
  }).join("");
  var subs = document.getElementById("subs");
  if (showSubs()) {
    subs.hidden = false;
    subs.innerHTML = SUB_CATS.map(function (id) {
      return '<button type="button" class="pill' + (state.category === id ? " active" : "") + '" data-cat="' + id + '">' + c[id] + "</button>";
    }).join("");
  } else {
    subs.hidden = true;
    subs.innerHTML = "";
  }
}

function renderGrid() {
  var c = t();
  var list = filteredProducts();
  document.getElementById("count").textContent = list.length + " " + c.found;
  var html = list.map(function (p) {
    var loved = state.favs.indexOf(p.id) >= 0;
    var badge = p.oldPrice
      ? '<span class="badge badge-sale">' + c.sale + "</span>"
      : p.isNew
        ? '<span class="badge badge-new">' + c.neu + "</span>"
        : "";
    var old = p.oldPrice ? '<span class="old">' + formatPrice(p.oldPrice) + "</span>" : "";
    return (
      '<article class="card">' +
        '<button type="button" class="card-photo" data-open="' + p.id + '">' +
          '<img src="' + p.images[0] + '" alt="' + escapeHtml(p.alts[0]) + '">' +
          badge +
        "</button>" +
        '<div class="card-body">' +
          '<div class="card-title-row">' +
            '<button type="button" class="card-name" data-open="' + p.id + '">' + escapeHtml(productName(p)) + "</button>" +
            '<button type="button" class="heart" data-fav="' + p.id + '" aria-label="' + (loved ? c.inFav : c.addFav) + '">' + heartSvg(loved) + "</button>" +
          "</div>" +
          '<div class="price-row"><span class="price">' + formatPrice(p.price) + "</span>" + old + "</div>" +
        "</div>" +
      "</article>"
    );
  }).join("");
  document.getElementById("grid").innerHTML = html;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderProductModal() {
  var box = document.getElementById("product-backdrop");
  var p = findProduct(state.selectedId);
  if (!p) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.hidden = false;
  var c = t();
  var loved = state.favs.indexOf(p.id) >= 0;
  var body = "";
  if (state.orderStep === "done") {
    body =
      '<div class="done-kicker">' + c.done + "</div>" +
      "<p>" + c.orderNo + ": " + state.orderNo + "</p>" +
      '<p class="club-text">' + c.doneText + "</p>" +
      "<p>" + escapeHtml(productName(p)) + " · " + sizeLabel(state.size) + " · " + formatPrice(p.price) + "</p>";
  } else if (state.orderStep === "order") {
    body =
      '<button type="button" class="btn" id="order-back">' + c.back + "</button>" +
      "<p>" + escapeHtml(productName(p)) + " — " + formatPrice(p.price) + "</p>" +
      '<div class="label">' + c.size + "</div>" +
      '<div class="chip-row">' + p.sizes.map(function (s) {
        return '<button type="button" class="pill' + (state.size === s ? " active" : "") + '" data-size="' + s + '">' + sizeLabel(s) + "</button>";
      }).join("") + "</div>" +
      '<div class="label">' + c.delivery + "</div>" +
      '<div class="chip-row">' + ["d1", "d2", "d3", "d4"].map(function (id) {
        return '<button type="button" class="pill' + (state.delivery === id ? " active" : "") + '" data-delivery="' + id + '">' + c[id] + "</button>";
      }).join("") + "</div>" +
      '<div class="label">' + c.pay + "</div>" +
      '<div class="chip-row">' + ["pay1", "pay2", "pay3"].map(function (id) {
        return '<button type="button" class="pill' + (state.payment === id ? " active" : "") + '" data-pay="' + id + '">' + c[id] + "</button>";
      }).join("") + "</div>" +
      '<button type="button" class="btn btn-gold" id="order-confirm">' + c.confirm + "</button>";
  } else {
    var img = p.images[state.gallery] || p.images[0];
    var alt = p.alts[state.gallery] || p.alts[0];
    var thumbs = "";
    if (p.images.length > 1) {
      thumbs =
        '<div class="thumbs">' +
          '<button type="button" class="btn" id="gal-prev">←</button>' +
          p.images.map(function (src, i) {
            return '<button type="button" class="' + (i === state.gallery ? "active" : "") + '" data-gal="' + i + '"><img src="' + src + '" alt="' + escapeHtml(p.alts[i] || productName(p)) + '"></button>';
          }).join("") +
          '<button type="button" class="btn" id="gal-next">→</button>' +
        "</div>";
    }
    var recs = p.recommended.map(findProduct).filter(Boolean).map(function (r) {
      return (
        '<button type="button" class="rec-card" data-open="' + r.id + '">' +
          '<img src="' + r.images[0] + '" alt="' + escapeHtml(r.alts[0]) + '">' +
          '<div><div class="rec-name">' + escapeHtml(productName(r)) + '</div><div class="rec-price">' + formatPrice(r.price) + "</div></div>" +
        "</button>"
      );
    }).join("");
    body =
      '<div class="product-layout">' +
        "<div>" +
          '<div class="gallery-main"><img src="' + img + '" alt="' + escapeHtml(alt) + '"></div>' +
          thumbs +
        "</div>" +
        "<div>" +
          '<div class="modal-price"><span>' + formatPrice(p.price) + "</span>" +
            (p.oldPrice ? '<span class="old">' + formatPrice(p.oldPrice) + "</span>" : "") +
          "</div>" +
          '<p class="desc">' + escapeHtml(state.lang === "kz" ? p.descKz : p.descRu) + "</p>" +
          '<p class="material">' + c.material + ": " + escapeHtml(state.lang === "kz" ? p.materialKz : p.materialRu) + "</p>" +
          '<div class="label">' + c.size + "</div>" +
          '<div class="chip-row">' + p.sizes.map(function (s) {
            return '<button type="button" class="pill' + (state.size === s ? " active" : "") + '" data-size="' + s + '">' + sizeLabel(s) + "</button>";
          }).join("") + "</div>" +
          '<div class="actions">' +
            '<button type="button" class="btn btn-gold" id="start-order">' + c.order + "</button>" +
            '<button type="button" class="btn' + (loved ? " btn-emerald" : "") + '" id="toggle-fav-modal">' + (loved ? c.inFav : c.addFav) + "</button>" +
          "</div>" +
        "</div>" +
      "</div>" +
      '<div class="rec-block"><div class="rec-label">' + c.rec + '</div><div class="rec-grid">' + recs + "</div></div>";
  }
  box.innerHTML =
    '<div class="modal" role="dialog" aria-modal="true">' +
      '<div class="modal-head"><div class="modal-title">' + escapeHtml(productName(p)) + '</div>' +
      '<button type="button" class="btn" id="close-product">' + c.close + "</button></div>" +
      body +
    "</div>";
}

function renderAccount() {
  var box = document.getElementById("account-backdrop");
  if (!state.accountOpen) {
    box.hidden = true;
    box.innerHTML = "";
    return;
  }
  box.hidden = false;
  var c = t();
  var tabs = [
    ["profile", c.profile],
    ["orders", c.orders],
    ["favs", c.favs],
    ["club", c.club],
    ["addresses", c.addresses]
  ].map(function (pair) {
    return '<button type="button" class="pill' + (state.accountTab === pair[0] ? " active" : "") + '" data-tab="' + pair[0] + '">' + pair[1] + "</button>";
  }).join("");
  var content = "";
  if (state.accountTab === "profile") {
    content =
      '<div class="profile"><div class="profile-name">' + c.guest + '</div>' +
      '<div class="profile-level">' + c.level + "</div>" +
      "<div>+7 701 123 45 67</div><div>aigerim@ayelgold.kz</div><div>Алматы</div></div>";
  } else if (state.accountTab === "orders") {
    content = '<div class="order-list">' + ORDERS.map(function (o) {
      return (
        '<button type="button" class="order-card" data-open="' + o.productId + '">' +
          '<div class="order-top"><span>' + o.id + '</span><span class="order-status">' + (state.lang === "kz" ? o.statusKz : o.statusRu) + "</span></div>" +
          '<div class="order-title">' + (state.lang === "kz" ? o.titleKz : o.titleRu) + "</div>" +
          '<div class="order-meta">' + o.date + " · " + formatPrice(o.total) + "</div>" +
        "</button>"
      );
    }).join("") + "</div>";
  } else if (state.accountTab === "favs") {
    var items = PRODUCTS.filter(function (p) { return state.favs.indexOf(p.id) >= 0; });
    if (items.length > 0) {
      content = '<div class="fav-grid">' + items.map(function (p) {
        return (
          '<button type="button" class="fav-card" data-open="' + p.id + '">' +
            '<img src="' + p.images[0] + '" alt="' + escapeHtml(p.alts[0]) + '">' +
            '<div><div class="fav-name">' + escapeHtml(productName(p)) + '</div><div class="rec-price">' + formatPrice(p.price) + "</div></div>" +
          "</button>"
        );
      }).join("") + "</div>";
    }
  } else if (state.accountTab === "club") {
    content =
      '<div class="club-kicker">Алтын клуб</div>' +
      '<div class="club-level">' + c.level + "</div>" +
      '<div class="club-bonus">' + c.bonuses + "</div>" +
      '<p class="club-text">' + c.clubText + "</p>";
  } else if (state.accountTab === "addresses") {
    content =
      '<div class="addr-list">' +
        '<div class="addr-card">' + c.addr1 + "</div>" +
        '<div class="addr-card">' + c.addr2 + "</div>" +
      "</div>";
  }
  box.innerHTML =
    '<div class="modal modal-account" role="dialog" aria-modal="true">' +
      '<div class="modal-head"><div class="modal-title">' + c.account + '</div>' +
      '<button type="button" class="btn" id="close-account">' + c.close + "</button></div>" +
      '<div class="tabs">' + tabs + "</div>" +
      content +
    "</div>";
}

function render() {
  var search = document.getElementById("search");
  var keepFocus = document.activeElement === search;
  var selStart = keepFocus ? search.selectionStart : 0;
  var selEnd = keepFocus ? search.selectionEnd : 0;
  renderI18n();
  renderChrome();
  renderGrid();
  renderProductModal();
  renderAccount();
  if (keepFocus) {
    search.focus();
    try { search.setSelectionRange(selStart, selEnd); } catch (e) {}
  }
}

function onClick(e) {
  var el = e.target;
  if (!el.closest) return;
  var cat = el.closest("[data-cat]");
  if (cat) {
    state.category = cat.getAttribute("data-cat");
    render();
    return;
  }
  var open = el.closest("[data-open]");
  if (open) {
    openProduct(open.getAttribute("data-open"));
    return;
  }
  var fav = el.closest("[data-fav]");
  if (fav) {
    e.stopPropagation();
    toggleFav(fav.getAttribute("data-fav"));
    return;
  }
  var tab = el.closest("[data-tab]");
  if (tab) {
    state.accountTab = tab.getAttribute("data-tab");
    render();
    return;
  }
  var sizeBtn = el.closest("[data-size]");
  if (sizeBtn) {
    state.size = sizeBtn.getAttribute("data-size");
    render();
    return;
  }
  var del = el.closest("[data-delivery]");
  if (del) {
    state.delivery = del.getAttribute("data-delivery");
    render();
    return;
  }
  var pay = el.closest("[data-pay]");
  if (pay) {
    state.payment = pay.getAttribute("data-pay");
    render();
    return;
  }
  var gal = el.closest("[data-gal]");
  if (gal) {
    state.gallery = Number(gal.getAttribute("data-gal"));
    render();
    return;
  }
  if (el.closest("#lang-kz")) { state.lang = "kz"; render(); return; }
  if (el.closest("#lang-ru")) { state.lang = "ru"; render(); return; }
  if (el.closest("#logo-btn")) {
    state.category = "all";
    state.query = "";
    document.getElementById("search").value = "";
    render();
    return;
  }
  if (el.closest("#look-btn")) {
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (el.closest("#open-favs")) {
    state.accountTab = "favs";
    state.accountOpen = true;
    render();
    return;
  }
  if (el.closest("#open-account")) {
    state.accountTab = "profile";
    state.accountOpen = true;
    render();
    return;
  }
  if (el.closest("#close-product") || el.id === "product-backdrop") { closeProduct(); return; }
  if (el.closest("#close-account") || el.id === "account-backdrop") {
    state.accountOpen = false;
    render();
    return;
  }
  if (el.closest("#start-order")) { state.orderStep = "order"; render(); return; }
  if (el.closest("#order-back")) { state.orderStep = "info"; render(); return; }
  if (el.closest("#order-confirm")) {
    var p = findProduct(state.selectedId);
    state.orderNo = "AG-10" + String(((p ? p.price : 0) % 80) + 18);
    state.orderStep = "done";
    render();
    return;
  }
  if (el.closest("#toggle-fav-modal") && state.selectedId) {
    toggleFav(state.selectedId);
    return;
  }
  if (el.closest("#gal-prev")) {
    var cur = findProduct(state.selectedId);
    if (cur) {
      state.gallery = (state.gallery + cur.images.length - 1) % cur.images.length;
      render();
    }
    return;
  }
  if (el.closest("#gal-next")) {
    var nxt = findProduct(state.selectedId);
    if (nxt) {
      state.gallery = (state.gallery + 1) % nxt.images.length;
      render();
    }
  }
}

function init() {
  document.getElementById("search").addEventListener("input", function (e) {
    state.query = e.target.value;
    render();
  });
  document.addEventListener("click", onClick);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      state.selectedId = null;
      state.accountOpen = false;
      state.orderStep = "info";
      render();
    }
  });
  render();
}

document.addEventListener("DOMContentLoaded", init);
