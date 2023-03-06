import { listings_URL } from "../api/constants.mjs";
import { displayLoginSuccess } from "../ui/displayError.mjs";

const loginMsg = document.querySelector("#loginMsg");
const itemsIn = document.querySelector("#productsIn");

export async function listingCardsIn() {
  try {
    const url = `${listings_URL}/?_active=true`;
    const response = await fetch(url);

    if (!response.ok) {
      return "error", `Could not get the listings from the server`;
    }

    const results = await response.json();

    itemsIn.innerHTML = "";
    results.forEach((product) => {
     
      itemsIn.innerHTML += `
            
      <div class="col-lg-4 col-md-6 col-xs-12 text-white-50 p-0">
        <div class="card border-0 bg-secondary bg-opacity-75 m-3 p-3">
          <a href="/specifiXXX.html?id=${product.id}">
            <div class="">
              <div>
                <img src="${product.media[0]}" class="card-image" onerror="if (this.src != '/assets/vectors/heartLogo_purple.png') this.src = '/assets/vectors/heartLogo_purple.png';" alt="Listing item image">
                <div class="card-img-overlay d-flex m-3"></div>
              </div>
              <div class="heart d-flex">
                <div class="">
                  <img src="/assets/vectors/heartLogo_green.png" width="30" alt="" />
                </div>
                <p class="text-dark ms-1 fs-5">${product._count.bids}</p>
              </div>
            </div>
            <div class="card-body bg-primary m-3">
              <h5 class="card-title text-white">${product.title}</h5>
              <p class="card-text text-white-50">
              ${product.description}
              </p>
            </div>
            <div class="card-footer bg-primary border-0 m-3">
              <div><small class="text-danger"> AUCTION ENDS: ${new Date(product.endsAt).toLocaleDateString()} @ ${new Date(product.endsAt).toLocaleTimeString()}</small></div>
              <div><small class="text-muted"> LAST UPDATED: ${new Date(product.updated).toLocaleDateString()}</small></div>
            </div>
          </a>
        </div>
      </div>
          `;
    });
  } catch (error) {
    console.log(error);
  }
}

export function loginSuccess() {
  if (window.location.href.includes('/indexIn.html?_loginSuccess=true')) {
    const msg = displayLoginSuccess();
    loginMsg.append(msg);
    setTimeout(() => {
      loginMsg.remove();
      location.replace("/indexIn.html");
    }, 2200)
  }
}
