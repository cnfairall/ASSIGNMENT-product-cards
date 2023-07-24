const potatoes = [
  {
    title: "Yukon Gold",
    imageURL: "http://pngimg.com/uploads/potato/potato_PNG7081.png",
    altText: "beautiful yukon gold potatoes",
    description: "A versatile, creamy potato for roasting, grilling or frying.",
    isAvailable: "Available",
    size: "4 inches",
    weight: "200 grams",
    dateInvalid: "7/25/23",
    priceOne: "$0.75",
    priceTen: "$5.75",
    priceHundred: "$64.50"
  },

  {
    title: "Japanese Purple",
    imageURL: "https://m.media-amazon.com/images/I/51W1ANKa+3L.jpg",
    altText: "gorgeous Japanese purple potatoes",
    description: "A sweet potato begging to be roasted.",
    isAvailable: "Available",
    size: "5 inches",
    weight: "150 grams",
    dateInvalid: "8/13/23",
    priceOne: "$1.00",
    priceTen: "$6.75",
    priceHundred: "$74.30"
  },

  {
    title: "Russet",
    imageURL: "https://m.media-amazon.com/images/I/31nbqyyeRpL._QL70_FMwebp_.jpg",
    altText: "handsome russet potato",
    description: "The classic potato for baking and mashing--guaranteed fluffiness.",
    isAvailable: "Available",
    size: "4.5 inches",
    weight: "300 grams",
    dateInvalid: "8/11/2024",
    priceOne: "$0.55",
    priceTen: "$4.00",
    priceHundred: "40.00"
  },

  {
    title: "Red Norland",
    imageURL: "https://i.ebayimg.com/images/g/RjoAAOSwVRVjWrqU/s-l500.jpg",
    altText: "nice red potatoes",
    description: "Dense, buttery potatoes lovely for roasting and smashing.",
    isAvailable: "Not Available",
    size: "2 inches",
    weight: "100 grams",
    dateInvalid: "9/11/2023",
    priceOne: "$0.40",
    priceTen: "$4.50",
    priceHundred: "$45.00"
  },

  {
    title: "Mixed Fingerling",
    imageURL: "https://www.theroastedroot.net/wp-content/uploads/2014/09/rosemary_roasted_fingerling_potatoes.jpg",
    altText: "stunning blend of red, blue, and yellow fingerling potatoes",
    description: "Hearty and flavorful with dramatic flair.",
    isAvailable: "Available",
    size: "3 inches",
    weight: "90 grams",
    dateInvalid: "4/21/2023",
    priceOne: "$0.65",
    priceTen: "$6.20",
    priceHundred: "$60.50"
  },
  
  {
    title: "Huckleberry Red",
    imageURL: "https://i.pinimg.com/originals/99/06/1a/99061aa7d57f6d33efe922796a99fe4f.jpg",
    altText: "breathtaking Huckleberry potato with red flesh and red skin",
    description: "A showstopping wonder of God's creation.",
    isAvailable: "Available",
    size: "3 inches",
    weight: "150 grams",
    dateInvalid: "6/30/2024",
    priceOne: "$1.25",
    priceTen: "$10.00",
    priceHundred: "$94.50"
  }
]

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardsOnDom = (array) => {
  let domString = "";
  for (const tater of potatoes) {
    if (tater.isAvailable === "Not Available") {
      domString +=
      `<div id="card">
      <header>
        <h2>${tater.title}</h2>
      </header>
      <section>
        <div class="parent">
        <img class="image1" src="${tater.imageURL}" alt="${tater.altText}">
        <img class="image2" src="not_available.png" alt="Not available">
        </div>
        <article>${tater.description}</article>
        <h5>${tater.isAvailable}</h5>
      </section>
      <section>
        <h4>Specifications</h4>
        <p>Size: ${tater.size}</p>
        <p>Weight: ${tater.weight}</p>
        <p>Valid until: ${tater.dateInvalid}</p>
      </section>
      <section>
        <h4>Pricing</h4>
        <p>Price for 1: ${tater.priceOne}</p>
        <p>Price for 10: ${tater.priceTen}</p>
        <p>Price for 100: ${tater.priceHundred}</p>
      </section>
    </div>`
    } else {
      domString +=
      `<div id="card">
      <header>
        <h2>${tater.title}</h2>
      </header>
      <section>
        <img src="${tater.imageURL}" alt="${tater.altText}">
        <article>${tater.description}</article>
        <h5>${tater.isAvailable}</h5>
      </section>
      <section>
        <h4>Specifications</h4>
        <p>Size: ${tater.size}</p>
        <p>Weight: ${tater.weight}</p>
        <p>Valid until: ${tater.dateInvalid}</p>
      </section>
      <section>
        <h4>Pricing</h4>
        <p>Price for 1: ${tater.priceOne}</p>
        <p>Price for 10: ${tater.priceTen}</p>
        <p>Price for 100: ${tater.priceHundred}</p>
      </section>
    </div>`
   }
  }

renderToDom("#container", domString);
};

cardsOnDom(potatoes)
