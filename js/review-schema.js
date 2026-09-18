/* =========================================================
   Chef Gabe Catering — review structured data (schema.org)
   ---------------------------------------------------------
   Builds the JSON-LD for the business, its aggregate rating and its
   individual reviews from the SAME array that renders the page
   (js/reviews.js), then injects it into <head>.

   Nothing here needs touching when a review is added: append an object
   to the array in js/reviews.js and the average rating, the review
   count and the per-review entries all follow automatically.

   Must load AFTER js/reviews.js.
   ========================================================= */
(function () {
  "use strict";

  if (typeof reviews === "undefined" || !Array.isArray(reviews)) return;

  // A review with no usable star value would drag the average toward zero,
  // so it is counted in neither the average nor the total.
  var rated = reviews.filter(function (r) {
    return r && typeof r.stars === "number" && r.stars >= 1 && r.stars <= 5;
  });

  var data = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "@id": "https://chefgabecatering.com/#business",
    "name": "Chef Gabe Inc",
    "telephone": "(209) 747-6746",
    "url": "https://chefgabecatering.com/",
    "servesCuisine": "Mexican",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1149 E Market St",
      "addressLocality": "Stockton",
      "addressRegion": "CA",
      "postalCode": "95205",
      "addressCountry": "US"
    }
  };

  // An AggregateRating with nothing behind it is invalid, so both the
  // rating and the review list appear only once there is a real review.
  if (rated.length) {
    var total = rated.reduce(function (sum, r) { return sum + r.stars; }, 0);
    // One decimal is all Google displays — keeps 4.666666666666667 out of the markup.
    var average = Math.round((total / rated.length) * 10) / 10;

    data.aggregateRating = {
      "@type": "AggregateRating",
      "ratingValue": average,
      "reviewCount": rated.length,
      "bestRating": 5,
      "worstRating": 1
    };

    data.review = rated.map(function (r) {
      return {
        "@type": "Review",
        "author": { "@type": "Person", "name": r.name },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": r.stars,
          "bestRating": 5,
          "worstRating": 1
        },
        "reviewBody": r.text
      };
    });
  }

  var tag = document.createElement("script");
  tag.type = "application/ld+json";
  tag.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(tag);
})();
