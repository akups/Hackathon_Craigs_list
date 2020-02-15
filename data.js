const listings = [
  {
    id: "1",
    header:
      "Furnished, Unique, Ethnic Style Apt- For short or long period!!!!! 400",
    price: 400,
    number_of_bedrooms: null,
    size: null,
    location: "berlin",
    picture_url: ""
  },
  {
    id: "2",
    header: " TOP FLOOR APARTMENT with terrace - MARCH 2020",
    price: 1000,
    number_of_bedrooms: 1,
    size: 70,
    location: "Berlin, Mitte",
    picture_url: "https://images.craigslist.org/00202_cVdQnUehbdv_600x450.jpg"
  },
  {
    id: "3",
    header: " 43mq new and cosy Flat in Rummelsburg / Lichtenberg Berlin",
    price: 850,
    number_of_bedrooms: 2,
    size: null,
    location: "Berlin",
    picture_url: "https://images.craigslist.org/00808_2WFMCjjqS5F_600x450.jpg"
  }
];

function dynamicCardRendering(listings) {
  let cardsWrapper = document.querySelector(".cards-wrapper");

  cardsWrapper.innerHTML = "";
  listings.forEach(el => {
    const newCard = `<div class="card col-3">
        <img src="https://cdn.archilovers.com/projects/c_383_874f4300-9cb7-44f9-9463-7600c8717d64.jpg">
        <div class="card-text">
        <p class="neighborhood">${el.location}</p>
        <p class="title">${el.title}</p>
        <p class="price">${el.price}EUR</p>
      </div>
    </div>`;

    cardsWrapper.innerHTML += newCard;
  });
}

document.querySelector(".load").onclick = function() {
  dynamicCardRendering(listings);
};
console.log(listings);
