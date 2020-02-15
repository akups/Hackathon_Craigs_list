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

function dynamicCardRendering() {
  const cardsWrapper = document.querySelector("cards-wrapper");

  listings.forEach(el => {
    document.querySelector("cards-wrapper").innerHTML = "";

    const newRow = document.createElement("div").classList.addClass("row");
    const newCard = document.createElement("div").classList.addClass("card");
    const neighborhood = document
      .createElement("p")
      .classList.addClass("neighborhood");
    const title = document.createElement("p").classList.addClass("title");
    const price = document.createElement("p").classList.addClass("price");

    newCard.innerHTML = `
  ${neighborhood.innerText} = ${el.location};
  ${title.innerText} = ${el.header};
  ${price.innerText} = ${price} + "EUR"`;

    newRow.appendChild(newCard);
  });

  cardsWrapper.appendChild(newRow);
}

document.querySelector("load").onclick = function() {
  dynamicCardRendering(listings);
};
