/* =========================================================
   Chef Gabe Catering — translation dictionary
   ---------------------------------------------------------
   Spanish ("es") is the site default and is also what ships
   hardcoded in the HTML, so a first-time visitor sees Spanish
   with no flash of English before JS runs.

   Adding a new page:
     1. Give each translatable element a data-i18n="keyName".
     2. Add that key to BOTH es and en below.
   Keys are shared across every page, so prefix page-specific
   ones (menusPkgFiesta, aboutStoryTitle, …) to avoid clashes.

   Supported attributes in the markup:
     data-i18n            -> element text content
     data-i18n-alt        -> img alt attribute
     data-i18n-aria-label -> aria-label attribute
     data-i18n-content    -> content attribute (meta description)
     data-i18n-placeholder -> input/textarea placeholder
   Use "\n" inside a string to produce a line break (<br>).
   ========================================================= */
const translations = {

  /* ------------------------------------------------------- */
  es: {
    /* Page metadata */
    pageTitleHome: 'Chef Gabe Catering | Cocinando con amor — Stockton, CA',
    metaDescHome: 'Catering mexicano tradicional para bodas, quinceañeras, eventos corporativos y celebraciones familiares. Servimos Stockton, Lodi, Manteca, Tracy, Modesto y áreas cercanas.',

    /* Brand — "Cocinando con amor" is a signature phrase and stays in
       Spanish on both sides of the dictionary. Deliberately identical. */
    altLogo: 'Chef Gabe Inc — Cocinando con amor',

    /* Utility bar */
    langToggleLabel: 'Cambiar idioma',

    /* Navigation */
    navHome: 'Inicio',
    navFood: 'Nuestra Comida',
    navEvents: 'Eventos',
    navMenus: 'Menús',
    navAbout: 'Nosotros',
    navContact: 'Contacto',
    navReviews: 'Reseñas',
    navQuote: 'Cotizar',
    navToggleLabel: 'Abrir menú',

    /* Hero */
    heroTitle: 'Comida Hecha\nPara Celebrar.',
    heroCopy: 'Catering mexicano tradicional para bodas, quinceañeras, eventos corporativos y celebraciones familiares.',
    heroCtaQuote: 'Cotiza Tu Evento',
    heroCtaMenus: 'Ver Menús',
    altHero: 'Mesa de madera con platillos mexicanos, arroz, frijoles y aguas frescas',

    /* Trust strip */
    trust1Title: 'Recetas Tradicionales',
    trust1Copy: 'Hechas desde cero con ingredientes de calidad.',
    trust2Title: 'Eventos Pequeños y Grandes',
    trust2Copy: 'Desde reuniones íntimas hasta más de 350 invitados.',
    trust3Title: 'Familia y Comunidad',
    trust3Copy: 'Tratamos cada evento como si fuera nuestro.',

    /* Our Food */
    foodEyebrow: 'Nuestra Cocina',
    foodTitle: 'El Sabor de\nNuestras Raíces.',
    foodCopy: 'Recetas tradicionales, ingredientes frescos y el toque casero que hace que cada platillo sea inolvidable.',
    foodCta: 'Ver Nuestros Menús',

    dish1Name: 'Carne Asada',
    dish1Tag: 'Hecha al momento.',
    dish2Name: 'Enchiladas',
    dish2Tag: 'Sabor auténtico.',
    dish3Name: 'Carnitas',
    dish3Tag: 'Tiernas y doraditas.',
    dish4Name: 'Birria',
    dish4Tag: 'Tradición que enamora.',

    /* Feature band */
    feat1Title: 'Fresco y Casero',
    feat1Copy: 'Tortillas, salsas, aguas frescas y mucho más.',
    feat2Title: 'Sabor Auténtico',
    feat2Copy: 'Cocina mexicana tradicional con el auténtico sazón.',
    feat3Title: 'Servicio Completo',
    feat3Copy: 'Catering, montaje, servicio y limpieza.',

    /* Events */
    eventsEyebrow: '¿Qué Vas a Celebrar?',
    ev1Title: 'Bodas',
    ev1Sub: 'Weddings',
    ev2Title: 'Quinceañeras',
    ev2Sub: '15 Años',
    ev3Title: 'Fiestas Familiares',
    ev3Sub: 'Reuniones y Convivios',
    ev4Title: 'Eventos Corporativos',
    ev4Sub: 'Corporate Events',
    ev5Title: 'Eventos Especiales',
    ev5Sub: 'Special Events',
    eventsCta: 'Ver Todos los Eventos',
    altWeddings: 'Buffet elegante con mantel azul marino y guirnalda de rosas blancas',
    altQuince: 'Buffet al aire libre con mantel rosado y arreglos florales de colores',
    altFamily: 'Buffet al aire libre junto al río con mesas de picnic y mantel rojo',
    altCorporate: 'Línea de buffet montada sobre cajas de madera con mantelería negra',
    altSpecial: 'Charolas de buffet al aire libre decoradas con flores rosas',

    /* Experience You Can Trust */
    trustTitle: 'Experiencia Que\nInspira Confianza.',
    trustCopy: 'Desde reuniones íntimas hasta eventos de más de 350 invitados, tenemos el equipo, el personal y la pasión para lograrlo.',
    trustCta: 'Planeemos Tu Evento',
    altTrustMain: 'Mesa de servicio con pan, postres y charola de fruta fresca',
    altTrustTeam: 'Chef de Chef Gabe sirviendo a los invitados en la línea de buffet',
    altTrustFood: 'Platillo servido con tostada, arroz mexicano y frijoles refritos',

    /* Dish and menu photography */
    altDishAsada: 'Carne asada a la parrilla con cebollitas y chile toreado, arroz mexicano y frijoles refritos',
    altDishCarnitas: 'Carnitas de puerco doraditas con arroz mexicano, frijoles refritos, chile toreado y limón',
    altFoodHero: 'Mesa de madera con varios platillos mexicanos, arroz, frijoles, sopa de albóndigas y aguas frescas',
    altAguasFrescas: 'Agua de jamaica y horchata en vasos altos sobre una tabla de madera con canela, naranja y flor de jamaica',
    altCatMexican: 'Chile colorado: res en salsa roja de chile guajillo, servida en plato hondo con cilantro',
    altCatPasta: 'Pasta italiana cremosa con queso parmesano y albahaca fresca',
    altCatSoups: 'Sopa de albóndigas con zanahoria, calabaza, elote, hierbabuena y limón',
    altCatMxBreakfast: 'Huevos rancheros en salsa roja con aguacate, crema, arroz mexicano y frijoles refritos',
    altCatPremium: 'Corte de res asado a la parrilla con cebollitas y chile toreado, arroz mexicano y frijoles refritos',
    altPozole: 'Pozole rojo con repollo, rábano, cebolla, limón y tostadas',
    altCamarones: 'Camarones en salsa roja servidos con arroz, ensalada fresca y verduras al vapor',
    altPolloAsado: 'Pollo asado a la parrilla en tabla de madera con cebollitas, limón, salsa y pico de gallo',
    altSalad: 'Ensalada de espinaca con fresa, mora azul, manzana verde, nuez y almendra en un tazón grande de madera',
    altBurritoBowls: 'Filas de burrito bowls con carne asada, arroz, frijoles y pimientos, listos para servir',

    /* Event and story photography */
    altAbHero: 'Chef Gabe en la cocina, sirviendo tazones de caldo en charolas antes de un evento',
    altAbYears: 'Línea de buffet con mantelería rosa, cajas de madera, piñas y pizarrones con los nombres de las salsas',
    altTortillas: 'Tortillas de maíz hechas a mano cociéndose en un comal durante un evento',
    altCorpBuffet: 'Invitados sirviéndose de la línea de buffet en un evento de empresa',
    altFarmBuffet: 'Línea de buffet al aire libre sobre cajas de madera, decorada con guirnalda de rosas, en un evento en el campo',
    altDessertTable: 'Mesa de postres montada sobre barricas de vino, decorada con eucalipto y rosas',
    altBigEvent: 'Salón lleno de invitados comiendo en mesas redondas durante un evento institucional',
    altPackagedMeals: 'Comidas individuales empacadas en tazones con tapa, apiladas y listas para entregar',
    altFruitTrays: 'Charolas de fruta de temporada con uva, fresa, piña y melón, preparadas en la cocina',
    altMenudo: 'Tazón de menudo en caldo rojo con cebolla, cilantro, rábano y limón',

    /* Footer */
    footerQuote: 'Porque cada celebración merece lo mejor.',
    footerContact: 'Contacto',
    footerServing: 'Servimos',
    footerServingCopy: 'Stockton, Lodi, Manteca,\nTracy, Modesto y\náreas cercanas.',
    footerFollow: 'Síguenos',
    footerRights: 'Chef Gabe Inc. Todos los derechos reservados.',

    /* ===== Menus page ===== */
    pageTitleMenus: 'Menú | Chef Gabe Catering — Stockton, CA',
    metaDescMenus: 'Menú de catering mexicano: comidas, desayunos, sopas, cenas premium y postres. Precios por persona. Servimos Stockton, Lodi, Manteca, Tracy y Modesto.',

    mnEyebrow: 'Nuestro Menú',
    mnHeroTitle: 'Comida hecha\npara celebrar.',
    mnHeroCopy: 'Platillos mexicanos tradicionales, hechos con ingredientes de calidad y el cuidado que tus invitados merecen.',
    mnJumpHint: 'Toca una categoría para ver el menú completo.',

    /* Shared "includes" lines — reused across several categories */
    mnIncludesStandard: 'Incluye arroz, frijoles refritos, tortillas de maíz o harina hechas a mano, y una bebida artesanal por persona: horchata, agua de jamaica, agua de tamarindo, aguas frescas de fruta de temporada, agua embotellada o refresco en lata.',
    mnIncludesAmBreakfast: 'Incluye una bebida por persona: café de olla, jugo de naranja, jugo de manzana, agua embotellada o refresco en lata.',
    mnIncludesMxBreakfast: 'Incluye arroz, frijoles refritos, tortillas de maíz o harina hechas a mano, y una bebida por persona: café de olla, jugo de naranja, jugo de manzana, agua embotellada o refresco en lata.',

    /* 1 — Mexican lunches */
    cat1Name: 'Comidas Mexicanas',
    cat1Price: '$20 / persona',
    cat1i1n: 'Birria',            cat1i1d: 'Res cocida a fuego lento en adobo de chile seco.',
    cat1i2n: 'Carnitas',          cat1i2d: 'Cerdo estilo Michoacán cocido en su propia grasa.',
    cat1i3n: 'Fajitas de Res',    cat1i3d: 'Res con pimientos y cebolla.',
    cat1i4n: 'Fajitas de Pollo',  cat1i4d: 'Pollo con verduras frescas.',
    cat1i5n: 'Chile Verde',       cat1i5d: 'Cerdo en salsa verde de tomatillo.',
    cat1i6n: 'Chile Colorado',    cat1i6d: 'Res en salsa roja de chile guajillo.',
    cat1i7n: 'Chiles Rellenos',   cat1i7d: 'Chiles poblanos rellenos de queso o carne.',
    cat1i8n: 'Mole de Pollo',     cat1i8d: 'Pollo en salsa de mole tradicional.',
    cat1i9n: 'Res a la Mexicana', cat1i9d: 'Res con jitomate, cebolla y chile.',
    cat1i10n: 'Chicharrón en Salsa', cat1i10d: 'Chicharrón guisado en salsa roja o verde casera.',

    /* 2 — Burrito bowl + Italian pasta */
    cat2Name: 'Burrito Bowl + Pasta Italiana',
    cat2Price: '$20 / persona',
    mnBowlHeading: 'Burrito Bowl',
    mnBowlProteins: '**Elige tu proteína:** Asada, Pastor, Pollo Asado, Birria o Chile Relleno.',
    mnBowlIncludes: 'Incluye lechuga fresca, arroz, frijoles enteros, pico de gallo, queso, crema, guacamole y salsa verde casera.',
    mnPastaHeading: 'Pasta Italiana',
    cat2i1n: 'Pasta con Pollo',   cat2i1d: 'Pasta cremosa con espinacas, jitomates cherry, pan de ajo y brócoli.',
    cat2i2n: 'Pasta con Camarón', cat2i2d: 'Pasta cremosa con espinacas, jitomates cherry, pan de ajo y brócoli.',

    /* 3 — Classic American breakfasts */
    cat3Name: 'Desayunos Americanos Clásicos',
    cat3Price: '$18 / persona',
    cat3i1n: 'Mini Hotcakes', cat3i1d: 'Mini hotcakes esponjosos recién hechos, servidos con miel, lechera, cajeta, Nutella, fresas, arándanos, chispas de colores, crema batida y plátano.',
    cat3i2n: 'Pan Francés',   cat3i2d: 'Pan francés dorado y mantecoso, coronado con fruta fresca, crema batida, miel y tus toppings dulces favoritos.',
    cat3i3n: 'Opciones de Proteína', cat3i3d: 'Elige entre mini salchichas, huevo revuelto o tocino crujiente.',

    /* 4 — Soups & broths */
    cat4Name: 'Sopas y Caldos',
    cat4Price: '$20 / persona',
    cat4i1n: 'Pozole Verde', cat4i1d: 'Pozole tradicional de pollo en salsa verde. Servido con repollo fresco, cebolla, cilantro, limón y salsa casera.',
    cat4i2n: 'Pozole Rojo',  cat4i2d: 'Pozole tradicional de cerdo en caldo de chile rojo. Servido con repollo fresco, cebolla, cilantro, limón y salsa casera.',
    cat4i3n: 'Sopa de Albóndigas', cat4i3d: 'Albóndigas de res caseras cocidas con arroz, verduras frescas y caldo sabroso.',
    cat4i4n: 'Crema de Pollo con Brócoli', cat4i4d: 'Pollo, brócoli y caldo ligero con crema.',

    /* 5 — Premium dinners */
    cat5Name: 'Cenas Premium',
    cat5Price: '$28 / persona',
    cat5i1n: 'Rib Eye',       cat5i1d: 'Rib eye premium asado a la perfección.',
    cat5i2n: 'Corte New York', cat5i2d: 'Jugoso corte New York con ajo y pimienta.',
    cat5i3n: 'Camarones a la Diabla', cat5i3d: 'Camarones en salsa roja picante.',
    cat5i4n: 'Camarones al Mojo de Ajo', cat5i4d: 'Camarones salteados en mantequilla de ajo.',
    cat5i5n: 'Camarones a la Mexicana', cat5i5d: 'Camarones con jitomate, cebolla, jalapeño y cilantro.',
    cat5i6n: 'Camarones Momia', cat5i6d: 'Camarones envueltos en tocino, rellenos de queso y jalapeño.',
    cat5i7n: 'Camarones Rancheros', cat5i7d: 'Camarones en salsa ranchera.',

    /* 6 — Mexican breakfasts */
    cat6Name: 'Desayunos Mexicanos',
    cat6Price: '$18 / persona',
    cat6i1n: 'Huevo con Salchicha', cat6i1d: 'Huevo revuelto con salchicha sazonada.',
    cat6i2n: 'Huevos Rancheros',    cat6i2d: 'Huevos bañados en salsa ranchera casera.',
    cat6i3n: 'Huevos a la Mexicana', cat6i3d: 'Huevos con jitomate, cebolla y chile.',
    cat6i4n: 'Huevo con Chorizo',   cat6i4d: 'Huevo revuelto con chorizo mexicano.',
    cat6i5n: 'Huevo con Tocino',    cat6i5d: 'Huevos servidos con tocino crujiente.',
    cat6i6n: 'Huevos con Verduras', cat6i6d: 'Huevos con champiñones, nopales, pimientos y cebolla.',

    /* 7 — Desserts */
    cat7Name: 'Postres',
    cat7Price: '$6 / persona',
    cat7i1n: 'Chía con Mango',  cat7i1d: 'Preparado con leche de almendra y miel.',
    cat7i2n: 'Chía con Fresa',  cat7i2d: 'Preparado con leche de almendra y miel.',
    cat7i3n: 'Flan Mexicano',   cat7i3d: 'Flan casero tradicional.',
    cat7i4n: 'Arroz con Leche', cat7i4d: 'Arroz dulce con canela y vainilla.',

    /* Add-ons */
    mnAddonsEyebrow: 'Para Acompañar',
    mnAddonsTitle: 'Aguas Frescas y Charolas de Fruta',
    mnWatersName: 'Aguas Frescas',
    mnWatersPrice: '5 galones $85',
    mnWatersFlavors: 'Sabores: fresa, horchata, jamaica, tamarindo, sandía, limonada, naranja, piña y melón.',
    mnFruitName: 'Charola de Fruta de Temporada',
    mnFruitPrice: '$95',

    /* Closing */
    mnBookTitle: 'Reserva Tu Evento Hoy',
    mnBookTypes: 'Bodas · Corporativos · Eventos Privados · Reuniones Familiares',
    mnBookCopy: 'Contáctanos para menús personalizados y servicio de catering.',
    mnDeliveryTitle: 'Servicio de Entrega, Montaje y Equipo',
    mnDeliveryCopy: 'Se aplica una cuota de servicio de $150 por la entrega de alimentos, el montaje del buffet y la recolección posterior de utensilios y equipo.',
    mnBuildTitle: 'Arma Tu Buffet a Tu Manera',
    mnBuildCopy: 'Elige hasta 6 platillos principales, 6 ensaladas frescas, salsas caseras, arroz, frijoles y tortillas de maíz o harina hechas a mano para crear una experiencia de buffet única y personalizada para tu evento especial. Aplica un mínimo de invitados.',

    /* ===== Contact / quote page ===== */
    pageTitleContact: 'Cotización | Chef Gabe Catering — Stockton, CA',
    metaDescContact: 'Arma un estimado para tu evento y solicita tu cotización de catering mexicano. Bodas, quinceañeras, eventos corporativos y familiares en Stockton, CA.',

    ctEyebrow: 'Planeemos Algo Increíble',
    ctTitle: 'Solicita Tu\nCotización',
    ctCopy: 'Arma un estimado en segundos con nuestra calculadora, o escríbenos y lo planeamos juntos.',

    /* Calculator */
    calcEyebrow: 'Calculadora',
    calcTitle: 'Estima Tu Evento',
    calcLead: 'Elige las categorías que te interesan y el número de invitados para cada una. Puedes usar un número distinto en cada categoría.',
    calcGuestsLabel: 'Invitados',
    calcQtyLabel: 'Cantidad',
    calcAddonsTitle: 'Extras',
    calcServiceTitle: 'Servicio',
    calcDeliveryLabel: 'Servicio de Entrega, Montaje y Equipo',
    calcDeliveryIncluded: 'Se incluye en todos los estimados.',
    calcWatersUnit: 'por 5 galones',
    calcFruitUnit: 'por charola',
    calcSummaryTitle: 'Tu Estimado',
    calcEmpty: 'Selecciona una categoría arriba para comenzar tu estimado.',
    calcTotalLabel: 'Total Estimado',
    calcNote: 'Esto es un estimado. El precio final se confirma cuando platiquemos sobre tu evento.',
    calcGuestsWord: 'invitados',
    calcEachWord: 'c/u',

    /* Form */
    formEyebrow: 'Cuéntanos',
    formTitle: 'Detalles del Evento',
    formLead: 'Entre más nos cuentes, mejor te podemos atender.',
    formName: 'Nombre',
    formNamePh: 'Tu nombre completo',
    formEmail: 'Correo electrónico',
    formEmailPh: 'tu@ejemplo.com',
    formPhone: 'Teléfono',
    formPhonePh: '(209) 123-4567',
    formDate: 'Fecha del evento',
    formType: 'Tipo de evento',
    formTypePh: 'Selecciona una opción',
    formTypeWedding: 'Boda',
    formTypeQuince: 'Quinceañera',
    formTypeCorporate: 'Corporativo',
    formTypeFamily: 'Familiar / Privado',
    formTypeOther: 'Otro',
    formMessage: 'Cuéntanos más sobre tu evento',
    formMessagePh: '¿Alguna petición especial, necesidad dietética o detalle que debamos saber?',
    formSubmit: 'Enviar Mi Cotización',
    formPrivacy: 'Tu información está segura con nosotros y nunca será compartida.',
    formEstimateNote: 'Tu estimado se envía junto con este mensaje.',

    /* Prefer to talk */
    talkEyebrow: 'Contáctanos',
    talkTitle: '¿Prefieres Hablar?',
    talkLead: 'Estamos aquí para ayudarte a planear cada detalle.',
    talkWhatsapp: 'Escríbenos por WhatsApp',
    hoursTitle: 'Con Gusto Te Atendemos',
    hoursWeekday: 'Lunes – Viernes',
    hoursSat: 'Sábado',
    hoursSun: 'Domingo',
    hoursSunValue: 'Con cita previa',
    talkSignature: 'Comida hecha con amor.',

    /* ===== Events page ===== */
    pageTitleEvents: 'Eventos | Chef Gabe Catering — Stockton, CA',
    metaDescEvents: 'Catering para bodas, eventos corporativos, cumpleaños, reuniones familiares, graduaciones y eventos religiosos en Stockton, CA.',

    evEyebrow: 'Desde reuniones íntimas hasta grandes celebraciones—',
    evTitle: 'Servimos Momentos\nQue Importan.',
    evCopy: 'Comida deliciosa, servicio confiable y detalles personales que hacen que tu evento sea verdaderamente inolvidable.',

    evTypesTitle: 'Servimos Todo Tipo de Eventos',
    evWedTitle: 'Bodas',
    evWedCopy: 'Celebra tu gran día con comida sabrosa y bellamente presentada.',
    evCorpTitle: 'Eventos Corporativos',
    evCorpCopy: 'Servicio profesional y platillos deliciosos para juntas y celebraciones.',
    evBdayTitle: 'Cumpleaños',
    evBdayCopy: 'Desde niños hasta adultos, hacemos que cada cumpleaños sea especial.',
    evFamTitle: 'Reuniones Familiares',
    evFamCopy: 'Reencuentros, quinceañeras, baby showers y más. Nosotros nos encargamos.',
    evGradTitle: 'Graduaciones',
    evGradCopy: 'Celebra los logros con comida que tus invitados van a disfrutar.',
    evRelTitle: 'Eventos Religiosos',
    evRelCopy: 'Bautizos, confirmaciones y otras celebraciones llenas de significado.',

    evMadeTitle: 'Hecho Para Tu Evento',
    /* Signature Spanish accent line — stays Spanish on both sides, the
       way the mockup pairs it under an English heading. */
    evMadeScript: 'Hecho a tu medida.',
    evMadeCopy: 'Cada evento es único. Trabajamos contigo para crear un menú personalizado, cuidar cada detalle y ofrecer una experiencia que tus invitados siempre recordarán.',
    evChk1: 'Menús personalizados para cualquier ocasión',
    evChk2: 'Ingredientes frescos, hechos desde cero',
    evChk3: 'Servicio profesional y amable',
    evChk4: 'Montaje puntual y presentación impecable',
    evChk5: 'Entrega, montaje y equipo disponibles',

    evMemTitle: 'Eventos Reales. Recuerdos Reales.',
    evGalleryCta: 'Ver Nuestra Galería',

    evCtaTitle: '¿Listo Para Planear Tu Evento?',
    evCtaScript: 'Hagamos realidad tu visión.',
    evCtaCopy: 'Haz clic abajo para recibir una cotización personalizada y comenzar a planear tu celebración perfecta.',

    /* ===== Reviews page =====
       Page chrome only. The review text itself lives in js/reviews.js
       and is never translated. */
    pageTitleReviews: 'Reseñas | Chef Gabe Catering — Stockton, CA',
    metaDescReviews: 'Lo que dicen nuestros clientes sobre el catering de Chef Gabe: bodas, quinceañeras y eventos familiares en Stockton y el Valle Central.',

    rvEyebrow: 'Lo Que Dicen Nuestros Clientes',
    rvTitle: 'De confianza para los\nmomentos que importan.',
    rvCopy: 'Es un honor ser parte de tantas celebraciones familiares, bodas y eventos especiales en todo el Valle Central.',

    rvStat1Num: '300+',
    rvStat1Label: 'Invitados Atendidos',
    rvStat2Num: 'Incontables',
    rvStat2Label: 'Familias y negocios que hemos atendido',
    rvStat3Num: '100%',
    rvStat3Label: 'Recomendado',
    rvStat4Num: 'Comida Mexicana Tradicional',
    rvStat4Label: 'Hecha con ingredientes de calidad',

    rvSectionTitle: 'Nuestros Clientes Lo Dicen Mejor',
    rvLoadMore: 'Ver Más Reseñas',
    rvStarsOf: 'de 5 estrellas',

    rvMomentsTitle: 'Momentos Que Hemos Atendido',

    rvCtaScript: 'Hagamos tu evento inolvidable.',
    rvCtaCopy: 'La buena comida une a la gente — nos encantaría ser parte de tu próxima celebración.',
    rvFeat1: 'Todo Tipo de Eventos',
    rvFeat2: 'Menús Personalizados',
    rvFeat3: 'Ingredientes Frescos',

    /* ===== About page =====
       The Spanish here is Gabe's own story, taken verbatim from the
       approved comp. Do not reword it — the English side is the
       translation, not the other way round. */
    pageTitleAbout: 'Nosotros | Chef Gabe Catering — Stockton, CA',
    metaDescAbout: 'La historia de Chef Gabe: de San Benito, Michoacán al Valle Central de California, cocinando con amor desde hace más de 14 años.',

    abEyebrow: 'Mi Historia',
    abTitle1: 'Cocinando con amor,',
    abTitle2: 'desde siempre.',
    abCopy: 'Más que un negocio, es mi forma de honrar mis raíces y compartir lo que mi familia me enseñó: que la comida es una manera de demostrar nuestro amor.',

    abMichTitle: 'De Michoacán a California',
    abMichP1: 'Nací y crecí en San Benito, Michoacán, donde soy el mayor de ocho hermanos.',
    abMichP2: 'Mis primeros recuerdos están en la cocina, viendo a mi abuela y a mi mamá preparar los platillos tradicionales de nuestra región.',
    abMichP3: 'En nuestra casa siempre había una olla grande en la estufa, mucha comida y espacio para uno más en la mesa.',
    abMichHighlight: 'Ahí fue donde aprendí a cocinar.',
    abMichScript: 'La comida es una manera de demostrar nuestro amor.',
    abMichRight: 'Mi mamá siempre cocinaba suficiente para todos. Familia, amigos, cualquiera que llegara — se sentaba y comía.',
    abMichRightHighlight: 'Eso es algo que llevo conmigo todos los días.',

    abYearsTitle: '14+ Años Sirviendo al Valle Central',
    abYearsP1: 'Hoy, tengo el privilegio de cocinar para familias y comunidades en todo el Valle Central de California.',
    abYearsP2: 'He cocinado para reuniones familiares, bodas, celebraciones, empresas y eventos con cientos de invitados.',
    abYearsP3: 'Y todavía me encanta.',
    abYearsP4: 'Hay algo muy especial en ver a tantas personas disfrutando de la comida que mi familia me enseñó a hacer.',
    abYearsHighlight: 'En muchos sentidos, sigo haciendo lo que vi hacer a mi mamá y a mi abuela cuando era niño: hacer mucha comida rica y unir a la gente alrededor de la mesa.',

    abTimelineTitle: 'Un camino lleno de trabajo, fe y pasión.',
    abTl1Year: '2015',
    abTl1Copy: 'Nuestros primeros eventos.',
    abTl2Year: '2016',
    abTl2Copy: 'Creciendo con cada familia que confió en nuestro trabajo.',
    abTl3Year: '2017',
    abTl3Copy: 'Más eventos, más experiencia, misma pasión.',
    abTl4Year: '2019',
    abTl4Copy: 'Bodas y celebraciones inolvidables.',
    abTl5Year: 'Hoy',
    abTl5Copy: 'Seguir cocinando con amor para nuestra comunidad.',

    abCloseTitle: 'De mi familia a la tuya.',
    abCloseP1: 'Cuando me invitas a tu boda, cumpleaños, reunión familiar o evento de empresa, entiendo que me estás confiando un momento importante en tu vida.',
    abCloseP2: 'No lo tomo a la ligera.',
    abCloseP3: 'Quiero que tus invitados coman bien, que haya de sobra y que la comida que servimos se sienta como hecha para familia.',
    abCloseScript: 'Gracias por dejarme cocinar para ustedes.',
    abCloseSign: '— Gabe',

    /* ===== Our Food page ===== */
    pageTitleFood: 'Nuestra Comida | Chef Gabe Catering — Stockton, CA',
    metaDescFood: 'Platillos mexicanos tradicionales para catering: birria, mole, carnitas, barbacoa, chiles rellenos y más. Stockton y el Valle Central.',

    ofTitle: 'Sabor que\nune tradiciones.',
    ofCopy: 'Comida mexicana tradicional hecha con ingredientes frescos y recetas auténticas para hacer de tu evento algo inolvidable.',

    ofExploreTitle: 'Explora Nuestro Menú',
    ofCat1: 'Platos Principales',
    ofCat2: 'Acompañamientos',
    ofCat3: 'Bebidas',
    ofCat4: 'Antojitos y Guarniciones',
    ofCat5: 'Postres',
    ofCat6: 'Desayunos',
    ofCat7: 'Opciones Vegetarianas',
    ofSeeAll: 'Ver todos los platillos principales',
    ofFullMenu: 'Ver Menú Completo',

    ofD1n: 'Birria de Res',
    ofD1d: 'Carne de res cocida lentamente con chiles y especias. Servida con consomé, cebolla, cilantro y limón.',
    ofD2n: 'Pollo con Mole',
    ofD2d: 'Pollo tierno bañado en nuestro mole tradicional, acompañado de arroz y frijoles.',
    ofD3n: 'Carne de Puerco en Chile Verde',
    ofD3d: 'Trozos de puerco en salsa de chile verde tatemado. Acompañado de arroz y frijoles.',
    ofD4n: 'Barbacoa de Res',
    ofD4d: 'Res cocida lentamente con hierbas y especias. Servida con consomé, cebolla y cilantro.',
    ofD5n: 'Fajitas de Pollo',
    ofD5d: 'Tiras de pollo a la plancha con pimientos y cebolla. Servidas con arroz, frijoles y tortillas.',
    ofD6n: 'Camarones a la Plancha',
    ofD6d: 'Camarones sazonados y a la plancha, servidos con arroz, ensalada y tortillas.',
    ofD7n: 'Carnitas de Puerco',
    ofD7d: 'Puerco doradito y jugoso. Servido con arroz, frijoles, cebolla, cilantro y salsas.',
    ofD8n: 'Chiles Rellenos',
    ofD8d: 'Chiles poblanos rellenos de queso, bañados en salsa roja o verde. Acompañados de arroz y frijoles.',

    ofCustomTitle: 'Menús personalizados para cada ocasión',
    ofCustomScript: 'Tú celebras, nosotros nos encargamos del sabor.',
    ofCustomCopy: 'Cada evento es único. Trabajamos contigo para crear el menú perfecto según tus gustos, número de invitados y estilo de celebración.',
    ofSpecialTitle: '¡Pregúntanos por nuestras opciones especiales!',
    ofSpecialList: 'Bodas • XV años • Bautizos • Eventos corporativos y más',

    ofPrev: 'Reseñas anteriores',
    ofNext: 'Siguientes reseñas',
    ofCtaTitle: '¿Listo para planear tu evento?',
    ofCtaCopy: 'Déjanos llevar el sabor a tu celebración.'
  },

  /* ------------------------------------------------------- */
  en: {
    /* Page metadata */
    pageTitleHome: 'Chef Gabe Catering | Cocinando con amor — Stockton, CA',
    metaDescHome: 'Traditional Mexican catering for weddings, quinceañeras, corporate events and family celebrations. Serving Stockton, Lodi, Manteca, Tracy, Modesto and surrounding areas.',

    /* Brand — see the es note; intentionally the same Spanish phrase. */
    altLogo: 'Chef Gabe Inc — Cocinando con amor',

    /* Utility bar */
    langToggleLabel: 'Change language',

    /* Navigation */
    navHome: 'Home',
    navFood: 'Our Food',
    navEvents: 'Events',
    navMenus: 'Menus',
    navAbout: 'About',
    navContact: 'Contact',
    navReviews: 'Reviews',
    navQuote: 'Get a Quote',
    navToggleLabel: 'Toggle menu',

    /* Hero */
    heroTitle: 'Food Made\nTo Celebrate.',
    heroCopy: 'Traditional Mexican catering for weddings, quinceañeras, corporate events and family celebrations.',
    heroCtaQuote: 'Get a Quote',
    heroCtaMenus: 'View Menus',
    altHero: 'Wooden table spread with Mexican plates, rice, beans and aguas frescas',

    /* Trust strip */
    trust1Title: 'Traditional Recipes',
    trust1Copy: 'Made from scratch with quality ingredients.',
    trust2Title: 'Small to Large Events',
    trust2Copy: 'From intimate gatherings to 350+ guests.',
    trust3Title: 'Family & Community',
    trust3Copy: 'We treat every event like our own.',

    /* Our Food */
    foodEyebrow: 'Our Kitchen',
    foodTitle: 'The Flavor of\nOur Roots.',
    foodCopy: 'Traditional recipes, fresh ingredients and the homemade touch that makes every dish unforgettable.',
    foodCta: 'View Our Menus',

    dish1Name: 'Carne Asada',
    dish1Tag: 'Grilled to order.',
    dish2Name: 'Enchiladas',
    dish2Tag: 'Authentic flavor.',
    dish3Name: 'Carnitas',
    dish3Tag: 'Tender and golden.',
    dish4Name: 'Birria',
    dish4Tag: 'Tradition you fall in love with.',

    /* Feature band */
    feat1Title: 'Fresh & Homemade',
    feat1Copy: 'Tortillas, salsas, aguas frescas and much more.',
    feat2Title: 'Authentic Flavor',
    feat2Copy: 'Traditional Mexican cooking with the real sazón.',
    feat3Title: 'Complete Service',
    feat3Copy: 'Catering, setup, service and cleanup.',

    /* Events */
    eventsEyebrow: 'What Are You Celebrating?',
    ev1Title: 'Weddings',
    ev1Sub: 'Bodas',
    ev2Title: 'Quinceañeras',
    ev2Sub: 'Sweet Fifteen',
    ev3Title: 'Family Events',
    ev3Sub: 'Fiestas y Reuniones',
    ev4Title: 'Corporate Events',
    ev4Sub: 'Eventos Corporativos',
    ev5Title: 'Special Events',
    ev5Sub: 'Eventos Especiales',
    eventsCta: 'See All Events',
    altWeddings: 'Elegant buffet with navy linen and a white rose garland',
    altQuince: 'Outdoor celebration buffet with blush linens and bright floral arrangements',
    altFamily: 'Outdoor riverside buffet with picnic tables and a red checkered cloth',
    altCorporate: 'Catering buffet line set on wood crates with black linens',
    altSpecial: 'Outdoor buffet trays decorated with pink flowers',

    /* Experience You Can Trust */
    trustTitle: 'Experience You\nCan Trust.',
    trustCopy: 'From intimate gatherings to events of 350+ guests, we have the team, the equipment and the passion to make it happen.',
    trustCta: "Let's Plan Your Event",
    altTrustMain: 'Serving table with bread, desserts and a fresh fruit platter',
    altTrustTeam: 'Chef Gabe team member serving guests along the buffet line',
    altTrustFood: 'Plated tostada with Mexican rice and refried beans',

    /* Dish and menu photography */
    altDishAsada: 'Grilled carne asada with charred spring onions and chile toreado, Mexican rice and refried beans',
    altDishCarnitas: 'Crispy pork carnitas with Mexican rice, refried beans, chile toreado and lime',
    altFoodHero: 'Wooden table spread with several Mexican plates, rice, beans, albondigas soup and aguas frescas',
    altAguasFrescas: 'Hibiscus and horchata aguas frescas in tall glasses on a wooden board with cinnamon, orange and dried hibiscus',
    altCatMexican: 'Chile colorado: beef in red guajillo chile sauce, served in a bowl with cilantro',
    altCatPasta: 'Creamy Italian pasta with parmesan and fresh basil',
    altCatSoups: 'Albondigas soup with carrot, squash, corn, mint and lime',
    altCatMxBreakfast: 'Huevos rancheros in red salsa with avocado, crema, Mexican rice and refried beans',
    altCatPremium: 'Grilled steak with charred spring onions and chile toreado, Mexican rice and refried beans',
    altPozole: 'Red pozole with cabbage, radish, onion, lime and tostadas',
    altCamarones: 'Shrimp in red sauce served with rice, fresh salad and steamed vegetables',
    altPolloAsado: 'Grilled pollo asado on a wooden board with charred onions, lime, salsa and pico de gallo',
    altSalad: 'Spinach salad with strawberry, blueberry, green apple, walnut and almond in a large wooden bowl',
    altBurritoBowls: 'Rows of burrito bowls with carne asada, rice, beans and peppers, ready to serve',

    /* Event and story photography */
    altAbHero: 'Chef Gabe in the kitchen, plating bowls of broth onto trays before an event',
    altAbYears: 'Buffet line with blush linens, wood crates, pineapples and chalkboard signs naming the salsas',
    altTortillas: 'Handmade corn tortillas cooking on a griddle at an event',
    altCorpBuffet: 'Guests serving themselves along the buffet line at a corporate event',
    altFarmBuffet: 'Outdoor buffet line on wood crates, trimmed with a rose garland, at an event in the country',
    altDessertTable: 'Dessert table set on wine barrels, styled with eucalyptus and roses',
    altBigEvent: 'A hall full of guests eating at round tables during an institutional event',
    altPackagedMeals: 'Individually packaged meals in lidded bowls, stacked and ready for delivery',
    altFruitTrays: 'Seasonal fruit trays with grapes, strawberries, pineapple and melon, prepped in the kitchen',
    altMenudo: 'Bowl of menudo in red broth with onion, cilantro, radish and lime',

    /* Footer */
    footerQuote: 'Because every celebration deserves the very best.',
    footerContact: 'Contact',
    footerServing: 'Serving',
    footerServingCopy: 'Stockton, Lodi, Manteca,\nTracy, Modesto and\nsurrounding areas.',
    footerFollow: 'Follow Us',
    footerRights: 'Chef Gabe Inc. All rights reserved.',

    /* ===== Menus page ===== */
    pageTitleMenus: 'Menu | Chef Gabe Catering — Stockton, CA',
    metaDescMenus: 'Mexican catering menu: lunches, breakfasts, soups, premium dinners and desserts. Per-person pricing. Serving Stockton, Lodi, Manteca, Tracy and Modesto.',

    mnEyebrow: 'Our Menu',
    mnHeroTitle: 'Food made\nto celebrate.',
    mnHeroCopy: 'Traditional Mexican dishes made with quality ingredients and the care your guests deserve.',
    mnJumpHint: 'Tap a category to see the full menu.',

    /* Shared "includes" lines — reused across several categories */
    mnIncludesStandard: 'Includes rice, refried beans, your choice of fresh handmade corn or flour tortillas, and one handcrafted beverage per person: horchata, hibiscus agua fresca, tamarind agua fresca, seasonal fresh fruit aguas frescas, bottled water, or canned soda.',
    mnIncludesAmBreakfast: 'Includes one beverage per person: café de olla, orange juice, apple juice, bottled water, or canned soda.',
    mnIncludesMxBreakfast: 'Includes rice, refried beans, your choice of fresh handmade corn or flour tortillas, and one beverage per person: café de olla, orange juice, apple juice, bottled water, or canned soda.',

    /* 1 — Mexican lunches */
    cat1Name: 'Mexican Lunches',
    cat1Price: '$20 / person',
    cat1i1n: 'Birria',          cat1i1d: 'Slow-cooked beef in dry chile adobo.',
    cat1i2n: 'Carnitas',        cat1i2d: 'Michoacán-style pork cooked in its juices.',
    cat1i3n: 'Beef Fajitas',    cat1i3d: 'Beef with peppers and onions.',
    cat1i4n: 'Chicken Fajitas', cat1i4d: 'Chicken with fresh vegetables.',
    cat1i5n: 'Chile Verde',     cat1i5d: 'Pork in green tomatillo sauce.',
    cat1i6n: 'Chile Colorado',  cat1i6d: 'Beef in red guajillo chile sauce.',
    cat1i7n: 'Stuffed Chiles (Chiles Rellenos)', cat1i7d: 'Poblano peppers stuffed with cheese or meat.',
    cat1i8n: 'Chicken Mole',    cat1i8d: 'Chicken in traditional mole sauce.',
    cat1i9n: 'Beef Mexican Style', cat1i9d: 'Beef with tomato, onion, and chile.',
    cat1i10n: 'Chicharrón in Salsa', cat1i10d: 'Pork chicharrón simmered in homemade red or green salsa.',

    /* 2 — Burrito bowl + Italian pasta */
    cat2Name: 'Burrito Bowl + Italian Pasta',
    cat2Price: '$20 / person',
    mnBowlHeading: 'Burrito Bowl',
    mnBowlProteins: '**Choose your protein:** Asada, Pastor, Pollo Asado, Birria, or Chile Relleno.',
    mnBowlIncludes: 'Includes fresh lettuce, rice, whole beans, pico de gallo, cheese, sour cream, guacamole, and homemade green salsa.',
    mnPastaHeading: 'Italian Pasta',
    cat2i1n: 'Pasta with Chicken', cat2i1d: 'Creamy pasta with spinach, cherry tomatoes, garlic bread, and broccoli.',
    cat2i2n: 'Pasta with Shrimp',  cat2i2d: 'Creamy pasta with spinach, cherry tomatoes, garlic bread, and broccoli.',

    /* 3 — Classic American breakfasts */
    cat3Name: 'Classic American Breakfasts',
    cat3Price: '$18 / person',
    cat3i1n: 'Mini Pancakes', cat3i1d: 'Fresh fluffy mini pancakes served with syrup, lechera, cajeta, Nutella, strawberries, blueberries, sprinkles, whipped cream, and bananas.',
    cat3i2n: 'French Toast',  cat3i2d: 'Golden buttery French toast topped with fresh fruit, whipped cream, syrup, and your favorite sweet toppings.',
    cat3i3n: 'Protein Options', cat3i3d: 'Choose between mini sausage patties, scrambled eggs, or crispy bacon.',

    /* 4 — Soups & broths */
    cat4Name: 'Soups & Broths',
    cat4Price: '$20 / person',
    cat4i1n: 'Green Pozole', cat4i1d: 'Traditional hominy soup with chicken in green salsa. Served with fresh cabbage, onion, cilantro, lime, and homemade salsa.',
    cat4i2n: 'Red Pozole',   cat4i2d: 'Traditional hominy soup with pork in red chile broth. Served with fresh cabbage, onion, cilantro, lime, and homemade salsa.',
    cat4i3n: 'Meatball Soup (Albóndigas)', cat4i3d: 'Traditional homemade beef meatballs cooked with rice, fresh vegetables, and savory broth.',
    cat4i4n: 'Chicken Broccoli Soup', cat4i4d: 'Chicken, broccoli, and light cream broth.',

    /* 5 — Premium dinners */
    cat5Name: 'Premium Dinners',
    cat5Price: '$28 / person',
    cat5i1n: 'Rib Eye Steak',  cat5i1d: 'Premium rib eye grilled to perfection.',
    cat5i2n: 'New York Steak', cat5i2d: 'Juicy New York steak with garlic and pepper.',
    cat5i3n: 'Shrimp a la Diabla', cat5i3d: 'Shrimp in spicy red chile sauce.',
    cat5i4n: 'Garlic Shrimp',  cat5i4d: 'Shrimp sautéed in garlic butter.',
    cat5i5n: 'Mexican Style Shrimp', cat5i5d: 'Shrimp with tomato, onion, jalapeño, and cilantro.',
    cat5i6n: 'Mummy Shrimp',   cat5i6d: 'Bacon-wrapped shrimp stuffed with cheese and jalapeño.',
    cat5i7n: 'Ranchero Shrimp', cat5i7d: 'Shrimp in ranchero salsa.',

    /* 6 — Mexican breakfasts */
    cat6Name: 'Mexican Breakfasts',
    cat6Price: '$18 / person',
    cat6i1n: 'Eggs with Sausage', cat6i1d: 'Scrambled eggs with seasoned sausage.',
    cat6i2n: 'Huevos Rancheros',  cat6i2d: 'Eggs topped with homemade ranchero salsa.',
    cat6i3n: 'Eggs Mexican Style', cat6i3d: 'Eggs with tomato, onion, and chile.',
    cat6i4n: 'Eggs with Chorizo', cat6i4d: 'Eggs mixed with Mexican chorizo.',
    cat6i5n: 'Eggs with Bacon',   cat6i5d: 'Eggs served with crispy bacon.',
    cat6i6n: 'Eggs with Vegetables', cat6i6d: 'Eggs with mushrooms, nopales, peppers, and onion.',

    /* 7 — Desserts */
    cat7Name: 'Desserts',
    cat7Price: '$6 / person',
    cat7i1n: 'Mango Chia Pudding',     cat7i1d: 'Made with almond milk and honey.',
    cat7i2n: 'Strawberry Chia Pudding', cat7i2d: 'Made with almond milk and honey.',
    cat7i3n: 'Mexican Flan',  cat7i3d: 'Traditional homemade flan.',
    cat7i4n: 'Rice Pudding',  cat7i4d: 'Sweet rice with cinnamon and vanilla.',

    /* Add-ons */
    mnAddonsEyebrow: 'On the Side',
    mnAddonsTitle: 'Fresh Waters & Fruit Trays',
    mnWatersName: 'Fresh Waters',
    mnWatersPrice: '5 gallons $85',
    mnWatersFlavors: 'Flavors: strawberry, horchata, jamaica, tamarind, watermelon, lemonade, orange, pineapple, and melon.',
    mnFruitName: 'Seasonal Fruit Tray',
    mnFruitPrice: '$95',

    /* Closing */
    mnBookTitle: 'Book Your Event Today',
    mnBookTypes: 'Weddings · Corporate · Private Events · Family Gatherings',
    mnBookCopy: 'Contact us for custom menus and catering services.',
    mnDeliveryTitle: 'Delivery, Setup & Equipment Service',
    mnDeliveryCopy: 'A $150 service fee applies for food delivery, buffet setup, and later pickup of utensils and equipment.',
    mnBuildTitle: 'Build Your Buffet Your Way',
    mnBuildCopy: 'Select up to 6 signature entrées, 6 fresh salads, homemade salsas, rice, beans, and freshly handmade corn or flour tortillas to craft a unique and personalized buffet experience for your special event. Minimum order of guests applies.',

    /* ===== Contact / quote page ===== */
    pageTitleContact: 'Get a Quote | Chef Gabe Catering — Stockton, CA',
    metaDescContact: 'Build an estimate for your event and request your Mexican catering quote. Weddings, quinceañeras, corporate and family events in Stockton, CA.',

    ctEyebrow: "Let's Plan Something Amazing",
    ctTitle: 'Get Your\nQuote',
    ctCopy: 'Build an estimate in seconds with our calculator, or just reach out and we will plan it together.',

    /* Calculator */
    calcEyebrow: 'Calculator',
    calcTitle: 'Estimate Your Event',
    calcLead: 'Pick the categories you want and the guest count for each. You can use a different count for every category.',
    calcGuestsLabel: 'Guests',
    calcQtyLabel: 'Quantity',
    calcAddonsTitle: 'Add-ons',
    calcServiceTitle: 'Service',
    calcDeliveryLabel: 'Delivery, Setup & Equipment Service',
    calcDeliveryIncluded: 'Included on every estimate.',
    calcWatersUnit: 'per 5 gallons',
    calcFruitUnit: 'per tray',
    calcSummaryTitle: 'Your Estimate',
    calcEmpty: 'Select a category above to start your estimate.',
    calcTotalLabel: 'Estimated Total',
    calcNote: 'This is an estimate. Final pricing will be confirmed when we discuss your event.',
    calcGuestsWord: 'guests',
    calcEachWord: 'each',

    /* Form */
    formEyebrow: 'Tell Us',
    formTitle: 'Event Details',
    formLead: 'The more details you share, the better we can serve you.',
    formName: 'Name',
    formNamePh: 'Your full name',
    formEmail: 'Email',
    formEmailPh: 'you@example.com',
    formPhone: 'Phone',
    formPhonePh: '(209) 123-4567',
    formDate: 'Event date',
    formType: 'Event type',
    formTypePh: 'Select event type',
    formTypeWedding: 'Wedding',
    formTypeQuince: 'Quinceañera',
    formTypeCorporate: 'Corporate',
    formTypeFamily: 'Family / Private',
    formTypeOther: 'Other',
    formMessage: 'Tell us more about your event',
    formMessagePh: 'Any special requests, dietary needs, or details we should know?',
    formSubmit: 'Get My Quote',
    formPrivacy: 'Your information is safe with us and will never be shared.',
    formEstimateNote: 'Your estimate is sent along with this message.',

    /* Prefer to talk */
    talkEyebrow: 'Reach Us',
    talkTitle: 'Prefer to Talk?',
    talkLead: 'We are here to help you plan every detail.',
    talkWhatsapp: 'Message us on WhatsApp',
    hoursTitle: "We're Happy to Help",
    hoursWeekday: 'Monday – Friday',
    hoursSat: 'Saturday',
    hoursSun: 'Sunday',
    hoursSunValue: 'By appointment',
    talkSignature: 'Comida hecha con amor.',

    /* ===== Events page ===== */
    pageTitleEvents: 'Events | Chef Gabe Catering — Stockton, CA',
    metaDescEvents: 'Catering for weddings, corporate events, birthdays, family gatherings, graduations and religious celebrations in Stockton, CA.',

    evEyebrow: 'From intimate gatherings to large celebrations—',
    evTitle: 'We Cater Moments\nThat Matter.',
    evCopy: 'Delicious food, reliable service, and personal touches that make your event truly unforgettable.',

    evTypesTitle: 'We Cater All Kinds of Events',
    evWedTitle: 'Weddings',
    evWedCopy: 'Celebrate your big day with flavorful, beautifully presented food.',
    evCorpTitle: 'Corporate Events',
    evCorpCopy: 'Professional service and delicious meals for meetings and celebrations.',
    evBdayTitle: 'Birthdays',
    evBdayCopy: 'From kids to adults, we make birthdays extra special.',
    evFamTitle: 'Family Gatherings',
    evFamCopy: "Reunions, quinceañeras, baby showers & more. We've got you covered.",
    evGradTitle: 'Graduations',
    evGradCopy: 'Celebrate achievements with food your guests will love.',
    evRelTitle: 'Religious Events',
    evRelCopy: 'Baptisms, confirmations, and other meaningful celebrations.',

    evMadeTitle: 'Made for Your Event',
    /* Signature Spanish accent line — see the es note; intentionally the
       same Spanish phrase under the English heading. */
    evMadeScript: 'Hecho a tu medida.',
    evMadeCopy: "Every event is unique. We'll work with you to create a custom menu, handle the details, and deliver an experience your guests will always remember.",
    evChk1: 'Custom menus for any occasion',
    evChk2: 'Fresh ingredients, made from scratch',
    evChk3: 'Professional and friendly service',
    evChk4: 'On-time setup and clean presentation',
    evChk5: 'Delivery, setup & equipment available',

    evMemTitle: 'Real Events. Real Memories.',
    evGalleryCta: 'View Our Gallery',

    evCtaTitle: 'Ready to Plan Your Event?',
    evCtaScript: "Let's bring your vision to life.",
    evCtaCopy: 'Click below to get a personalized quote and start planning your perfect celebration.',

    /* ===== Reviews page =====
       Page chrome only. The review text itself lives in js/reviews.js
       and is never translated. */
    pageTitleReviews: 'Reviews | Chef Gabe Catering — Stockton, CA',
    metaDescReviews: 'What our clients say about Chef Gabe catering: weddings, quinceañeras and family events in Stockton and the Central Valley.',

    rvEyebrow: 'What Our Clients Say',
    rvTitle: 'Trusted for the\nmoments that matter.',
    rvCopy: "We're honored to be part of so many family celebrations, weddings and special events across the Central Valley.",

    rvStat1Num: '300+',
    rvStat1Label: 'Guests Served',
    rvStat2Num: 'Countless',
    rvStat2Label: "Families & businesses we've catered",
    rvStat3Num: '100%',
    rvStat3Label: 'Recommended',
    rvStat4Num: 'Traditional Mexican Food',
    rvStat4Label: 'Made with quality ingredients',

    rvSectionTitle: 'Our Clients Say It Best',
    rvLoadMore: 'Load More Reviews',
    rvStarsOf: 'out of 5 stars',

    rvMomentsTitle: "Moments We've Catered",

    rvCtaScript: "Let's make your event unforgettable.",
    rvCtaCopy: "Great food brings people together — we'd love to be part of your next celebration.",
    rvFeat1: 'All Events Welcome',
    rvFeat2: 'Custom Menus',
    rvFeat3: 'Made With Fresh Ingredients',

    /* ===== About page =====
       Translation of Gabe's own story. The Spanish side is the source
       of truth; keep this faithful to it rather than polishing it into
       something he did not say. */
    pageTitleAbout: 'About | Chef Gabe Catering — Stockton, CA',
    metaDescAbout: "Chef Gabe's story: from San Benito, Michoacán to California's Central Valley, cooking with love for more than 14 years.",

    abEyebrow: 'My Story',
    abTitle1: 'Cooking with love,',
    abTitle2: 'for as long as I can remember.',
    abCopy: 'More than a business, this is my way of honoring my roots and sharing what my family taught me: that food is a way of showing our love.',

    abMichTitle: 'From Michoacán to California',
    abMichP1: 'I was born and raised in San Benito, Michoacán, the oldest of eight children.',
    abMichP2: 'My earliest memories are in the kitchen, watching my grandmother and my mother prepare the traditional dishes of our region.',
    abMichP3: 'In our house there was always a big pot on the stove, plenty of food, and room for one more at the table.',
    abMichHighlight: 'That is where I learned to cook.',
    abMichScript: 'Food is a way of showing our love.',
    abMichRight: 'My mother always cooked enough for everyone. Family, friends, whoever showed up — they sat down and ate.',
    abMichRightHighlight: 'That is something I carry with me every day.',

    abYearsTitle: '14+ Years Serving the Central Valley',
    abYearsP1: "Today I have the privilege of cooking for families and communities across California's Central Valley.",
    abYearsP2: 'I have cooked for family gatherings, weddings, celebrations, businesses, and events with hundreds of guests.',
    abYearsP3: 'And I still love it.',
    abYearsP4: 'There is something very special about seeing so many people enjoying the food my family taught me to make.',
    abYearsHighlight: 'In many ways, I am still doing what I watched my mother and my grandmother do when I was a boy: making plenty of good food and bringing people together around the table.',

    abTimelineTitle: 'A journey built on hard work, faith and passion.',
    abTl1Year: '2015',
    abTl1Copy: 'Our first events.',
    abTl2Year: '2016',
    abTl2Copy: 'Growing with every family who trusted our work.',
    abTl3Year: '2017',
    abTl3Copy: 'More events, more experience, the same passion.',
    abTl4Year: '2019',
    abTl4Copy: 'Unforgettable weddings and celebrations.',
    abTl5Year: 'Today',
    abTl5Copy: 'Still cooking with love for our community.',

    abCloseTitle: 'From my family to yours.',
    abCloseP1: 'When you invite me to your wedding, birthday, family gathering or company event, I understand that you are trusting me with an important moment in your life.',
    abCloseP2: 'I do not take that lightly.',
    abCloseP3: 'I want your guests to eat well, for there to be plenty, and for the food we serve to feel like it was made for family.',
    abCloseScript: 'Thank you for letting me cook for you.',
    abCloseSign: '— Gabe',

    /* ===== Our Food page =====
       Dish names stay in Spanish on both sides — they are the names of
       the dishes, not words to translate. Descriptions are translated. */
    pageTitleFood: 'Our Food | Chef Gabe Catering — Stockton, CA',
    metaDescFood: 'Traditional Mexican catering dishes: birria, mole, carnitas, barbacoa, chiles rellenos and more. Stockton and the Central Valley.',

    ofTitle: 'Flavor that brings\ntraditions together.',
    ofCopy: 'Traditional Mexican food made with fresh ingredients and authentic recipes, to make your event unforgettable.',

    ofExploreTitle: 'Explore Our Menu',
    ofCat1: 'Main Dishes',
    ofCat2: 'Sides',
    ofCat3: 'Drinks',
    ofCat4: 'Antojitos & Garnishes',
    ofCat5: 'Desserts',
    ofCat6: 'Breakfasts',
    ofCat7: 'Vegetarian Options',
    ofSeeAll: 'See all main dishes',
    ofFullMenu: 'View Full Menu',

    ofD1n: 'Birria de Res',
    ofD1d: 'Beef slow-cooked with chiles and spices. Served with consommé, onion, cilantro and lime.',
    ofD2n: 'Pollo con Mole',
    ofD2d: 'Tender chicken in our traditional mole, served with rice and beans.',
    ofD3n: 'Carne de Puerco en Chile Verde',
    ofD3d: 'Pork in a roasted green chile sauce. Served with rice and beans.',
    ofD4n: 'Barbacoa de Res',
    ofD4d: 'Beef slow-cooked with herbs and spices. Served with consommé, onion and cilantro.',
    ofD5n: 'Fajitas de Pollo',
    ofD5d: 'Grilled chicken strips with peppers and onion. Served with rice, beans and tortillas.',
    ofD6n: 'Camarones a la Plancha',
    ofD6d: 'Seasoned grilled shrimp, served with rice, salad and tortillas.',
    ofD7n: 'Carnitas de Puerco',
    ofD7d: 'Golden, juicy pork. Served with rice, beans, onion, cilantro and salsas.',
    ofD8n: 'Chiles Rellenos',
    ofD8d: 'Poblano peppers stuffed with cheese in a red or green sauce. Served with rice and beans.',

    ofCustomTitle: 'Custom menus for every occasion',
    ofCustomScript: 'You celebrate — we take care of the flavor.',
    ofCustomCopy: 'Every event is unique. We work with you to build the right menu for your tastes, your guest count and your style of celebration.',
    ofSpecialTitle: 'Ask us about our special options!',
    ofSpecialList: 'Weddings • Quinceañeras • Baptisms • Corporate events and more',

    ofPrev: 'Previous reviews',
    ofNext: 'Next reviews',
    ofCtaTitle: 'Ready to plan your event?',
    ofCtaCopy: 'Let us bring the flavor to your celebration.'
  }
};
