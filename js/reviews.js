/* =========================================================
   Chef Gabe Catering — customer reviews (data only)
   ---------------------------------------------------------
   To add a review, append an object to the array below. Nothing else
   needs changing: js/reviews-ui.js renders whatever is here, batches it,
   and shows or hides the "load more" button accordingly.

   Fields:
     stars    1–5, rendered as filled stars
     text     the customer's own words — kept VERBATIM and never
              translated, whichever language they wrote in
     name     display name
     type_es  event type shown in Spanish  (leave "" to omit the line)
     type_en  event type shown in English  (leave "" to omit the line)
   ========================================================= */
const reviews = [
  {
    stars: 5,
    text: "Los mejor! Los tuve en mi boda y a todos mis 300 invitados les encantó!",
    name: "Daniella C.",
    type_es: "Boda",
    type_en: "Wedding"
  },
  {
    stars: 5,
    text: "Banquete de la boda de mi hija. Delicioso todo. Los recomiendo!",
    name: "Monii R.",
    type_es: "Celebración Familiar",
    type_en: "Family Celebration"
  },
  {
    stars: 5,
    text: "Lo mejor de lo mejor, excelente servicio, riquísima comida, simplemente los mejores.",
    name: "Naty G.",
    type_es: "",
    type_en: ""
  },
  {
    stars: 5,
    text: "Muchísimas gracias a Idalia Agave Banquetes. Por sus servicios toda la comida estaba deliciosa.",
    name: "Rosie P.",
    type_es: "Evento Privado",
    type_en: "Private Event"
  },
  {
    stars: 5,
    text: "Que se la pase súper, muchas gracias por todo, le quedó todo muy rico y casi todas las personas me preguntaron por su servicio.",
    name: "Brenda C.",
    type_es: "Evento Familiar",
    type_en: "Family Event"
  },
  {
    stars: 5,
    text: "100% recomendado muy rica comida.",
    name: "Luz Maria G.",
    type_es: "",
    type_en: ""
  }
];
