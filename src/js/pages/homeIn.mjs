import {
  listings_URL
} from "../api/constants.mjs";

const listingItems = document.querySelector("#listingItemsIn");



export async function listingCardsIn() {
  try {
    const url = listings_URL;
    const response = await fetch(url);
    console.log(response);
    if (!response.ok) {
      return "error", `Could not get the listings from the server`;
    }



    const results = await response.json();
    console.log(results);
    listingItems.innerHTML = "";
    results.forEach((listing) => {


      // ——————————————————————————————————————————————————————————highest bid sorting
      // const sortedListings = listing.sort((a, b) => {
      //   return b.bids.amount - a.bids.amount
      // });

      // const sortedListings = sortedListings.map((sortedListing) => {
      //   sortedListing.bids.sort((a, b) => {
      //     return a.amount - b.amount;
      //   });
      //   console.log(sortedListing);
      // });
      // ———————————————————————————————————————————————————————————————————————————————

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
          <div class="card-body bg-primary m-3">
            <h5 class="card-title text-white">${listing.title}</h5>
            <p class="card-text text-white-50">
            ${listing.description}
            </p>
          </div>
          <div class="card-footer bg-primary border-0 m-3">
            <div><small class="text-danger"> AUCTION ENDS: ${new Date(listing.endsAt).toLocaleDateString()} @ ${new Date(listing.endsAt).toLocaleTimeString()}</small></div>
            <div><small class="text-muted"> LAST UPDATED: ${new Date(listing.updated).toLocaleDateString()}</small></div>
          </div>
          <form class="d-flex justify-content-evenly bg-primary rounded align-content-end my-2 mx-3">
            <div class="mb-3 w-25 align-bottom">
              <label for="userBid" class="form-label">BID</label>
              <input type="number" class="form-control" id="user-bid" aria-describedby="userBid" />
              <div id="biddingHelp" class="form-text">Add amount in CYBID credits</div>
            </div>
            <div class="mb-3 w-25 align-bottom">
              <label for="availableCredit" class="form-label"><img class="w-25"
                  src="/assets/vectors/heartLogo_green.png" alt="Cybid credit icon" />
                CREDITS</label>
              <input type="text" class="form-control" id="cybidCredits" />
            </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <button class="btn btn-outline-success m-3" type="submit">BID</button>
          </form>
        </div>
      </div>
          
          
          `;
    });
  } catch (error) {
    console.log(error);
  }
}
listingCardsIn();