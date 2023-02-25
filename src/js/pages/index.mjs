import {
  API_AUCTION_URL
} from "../api/constants.mjs";

const listingItems = document.querySelector("#listingItems");

const action = "/listings";

const listingCardsUrl = (API_AUCTION_URL + action);

async function listingCards() {
  try {
    const response = await fetch(listingCardsUrl);
    console.log(response);
    if (!response.ok) {
      return "error", `Could not get the listings from the server`;
    }
    const results = await response.json();
    console.log(results);
    listingItems.innerHTML = "";
    results.forEach((listing) => {

      // const sortedListings = listing.sort((a, b) => {
      //   return b.bids.amount - a.bids.amount
      // });


      listingItems.innerHTML += `
            
        <div class="col-lg-4 col-md-6 col-xs-12 text-white-50 p-0">
          <div class="card border-0 bg-secondary bg-opacity-75 m-3 p-3">
            <img src="${
              listing.media[0]
            }" class="card-image" onerror="if (this.src != '/assets/vectors/heartLogo_purple.png') this.src = '/assets/vectors/heartLogo_purple.png';" alt="Listing item image">
            <div class="card-img-overlay d-flex m-3">
              <div class="heart">
                <img src="/assets/vectors/heartLogo_green.png" width="30" alt="" />
              </div>
              <p class="text-dark ms-1 fs-5">${listing._count.bids}</p>
            </div>
            <div class="card-body bg-primary">
              <h5 class="card-title text-white">${listing.title}</h5>
              <p class="card-text text-white-50">
              ${listing.description}
              </p>
            </div>
            <div class="card-footer bg-primary border-0">
              <div><small class="text-danger"> AUCTION ENDS: ${new Date(listing.endsAt).toLocaleDateString()} @ ${new Date(listing.endsAt).toLocaleTimeString()}</small></div>
              <div><small class="text-muted"> LAST UPDATED: ${new Date(listing.updated).toLocaleDateString()}</small></div>
            </div>
          </div>
        </div>
            
            
            `;
    });
  } catch (error) {
    console.log(error);
  }
}
listingCards();

