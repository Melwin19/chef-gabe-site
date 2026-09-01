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
    hoursTitle: 'Con Gusto Te Atendemos',
    hoursWeekday: 'Lunes – Viernes',
    hoursSat: 'Sábado',
    hoursSun: 'Domingo',
    hoursSunValue: 'Con cita previa',
    talkSignature: 'Comida hecha con amor.'
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
    hoursTitle: "We're Happy to Help",
    hoursWeekday: 'Monday – Friday',
    hoursSat: 'Saturday',
    hoursSun: 'Sunday',
    hoursSunValue: 'By appointment',
    talkSignature: 'Comida hecha con amor.'
  }
};
