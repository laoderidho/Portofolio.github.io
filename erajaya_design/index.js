const dataFeatured = [
  {
    name: "Finance Staf",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Accounting & Finance.png",
  },
  {
    name: "Bussiness & Corporate Service",
    level: "staff",
    expired: "31 January 2021",
    location: "Jakarta",
    img: "Business & Corporate Services.png",
  },
  {
    name: "Client & Customer Services",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Client & Customer Services.png",
  },
  {
    name: "Human resources & General Affairs",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Human resources & General Affairs.png",
  },
  {
    name: "IT & Software",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "IT & Software.png",
  },
  {
    name: "Law & Legal Services",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Law & Legal Service.png",
  },
  {
    name: "Media & Creative",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Media & Creative.png",
  },
  {
    name: "Sales and Marketing",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Sales & Marketing.png",
  },
  {
    name: "Supply Chain Management & produccement",
    level: "staff",
    expired: "31 December 2021",
    location: "Jakarta",
    img: "Supply Chain Management & Procurement.png",
  }
];

const featuredElement = (data) => {
    return `
                    <li>
                        <div class="card-item uk-card-default uk-card-body">
                        <i class="bookmark-icon fa-solid fa-bookmark"></i>
                            <div class="featured-opening-img">
                                <img class="featured-img" src="../public/featured_company/${data.img}" alt="Logo ${data.name}">
                            </div>
                            <div class="featured-opening-content">
                                <h3 class="featured-card-title">${data.name}</h3>
                                <p class="featured-level">Level: ${data.level}</p>
                                <p class="expired">Expired:${data.expired}</p>
                                <p class="expired"></p>
                                <p class="location">Location: ${data.location}</p>

                                <button class="detailbuton" aria-label="see detail About ${data.name} ${data.level}">See Detail</button>
                            </div>
                        </div>
                    </li>
    `;
}

const featuredContainer = document.querySelector("#featured-list");

dataFeatured.forEach((data) => {
    featuredContainer.innerHTML += featuredElement(data);
});


const brandlogo = document.getElementsByClassName("brand-logo");

for (let i = 0; i < brandlogo.length; i++) {
  // hover event
  brandlogo[i].addEventListener("mouseover", function () {
    this.style.transform = "scale(1.7)";
  });

  // mouseout event
  brandlogo[i].addEventListener("mouseout", function () {
    this.style.transform = "";
  }); 
}
