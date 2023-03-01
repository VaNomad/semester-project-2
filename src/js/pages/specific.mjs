import { listings_URL } from "../api/constants.mjs";
import { displayListingSuccess } from "../ui/displayError.mjs";
import { get } from "../storage/localstorage.mjs";

const token = get("token");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `${listings_URL}/${id}`;
const listingPreview = document.querySelector("#listingPreview");
const listingMsg = document.querySelector("#listingMsg");



export async function specificPreview() {
  const data = {
    headers: {
      "content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    method: "get",
  };

  
  try {
    const response = await fetch(url, data);
    console.log(response);
    
    const results = await response.json();
    console.log(results);

    listingPreview.innerHTML = "";
    
    results((listing) => {

      
      listingPreview.innerHTML = `
            
      <div class="container-lg text-center text-white">
        <div class="row bg-secondary rounded mb-3">
          <div class="col-lg">
            <div class="d-flex justify-content-center pt-5">
              <div class="big-img d-flex justify-content-center align-items-center">
                <img class="big-img" src="${listing.media[0]
        }" alt="Picture of listing" />
              </div>
            </div>
            <div class="d-flex justify-content-evenly pt-4">
              <div class="d-flex justify-content-center align-items-center ms-5">
                <img class="small-img" src="${listing.media[1]
        }" alt="Picture of listing" />
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <img class="small-img" src="${listing.media[2]
        }" alt="Picture of listing" />
              </div>
              <div class="d-flex justify-content-center align-items-center">
                <img class="small-img" src="${listing.media[3]
        }" alt="Picture of listing" />
              </div>
              <div class="d-flex justify-content-center align-items-center me-5">
                <img class="small-img" src="${listing.media[4]
        }" alt="Picture of listing" />
              </div>
            </div>
          </div>
          <div class="col-lg">
            <div class="container">
              <div class="p-5">
                <div>
                  <h2 class="body-h2 text-start fs-5 px-2">
                  ${listing.title}
                  </h2>
                </div>
                <div class="div p-2">
                  <p class="text-start">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum temporibus similique odio officiis dolorem esse modi
                    asperiores explicabo distinctio dolore nobis suscipit fugiat
                    assumenda nisi, optio quidem quos, sit quod architecto
                    perferendis. Consequatur ipsam, modi nulla deleniti fuga
                    architecto, culpa maxime, iste iusto soluta animi? Qui, enim
                    omnis. Unde, enim.
                  </p>
                </div>
                <div class="bid-amount p-2">
                  <h2 class="body-h2 fs-5 text-start">BID AMOUNT</h2>
                  <form class="form">
                    <div class="input-group">
                      <span class="input-group-text bg-secondary"><img src="/assets/vectors/heartLogo_green.png"
                          height="30" alt="" /></span>
                      <input type="text" class="form-control" id="bidAmount"
                        aria-label="Amount (to the nearest dollar)" />
                      <span class="input-group-text bg-secondary text-white">.00</span>
                    </div>
                  </form>
                  <p class="text-start mt-1">In credits and/or $</p>
                </div>
                <div class="expiration d-flex justify-content-between px-2">
                  <p class="text-danger">EXPIRES</p>
                  <p class="text-danger">22/02 | 20:00</p>
                </div>
                <div class="expiration d-flex justify-content-between align-items-center px-2">
                  <p>CURRENT BID</p>
                  <h3>655</h3>
                </div>
                <div class="p-2">
                  <button class="w-100 px-5 py-2 btn btn-lg btn-outline-success banner-h1 fs-2" type="submit">
                    PLACE BID
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row bg-secondary rounded">
          <div class="col d-flex justify-content-evenly align-items-center mt-1">
            <div class="seller">
              <h2 class="banner-h1 fs-3 text-white-50">SELLER</h2>
            </div>
            <div class="seller d-flex">
              <div class="seller-name me-3">
                <h2 class="text-danger fs-4 fw-light">HANN SOWLOWE</h2>
              </div>
              <div class="seller-img">
                <img src="/assets/images/kylo.39.png" class="rounded-circle" height="30" width="30"
                  alt="Image of item seller" />
              </div>
            </div>
            <div class="credits">
              <h2 class="banner-h1 fs-3 text-white-50">YOUR CREDITS</h2>
            </div>
            <div class="available-credits d-flex">
              <div class="heart-logo">
                <img src="/assets/vectors/heartLogo_green.png" height="30" alt="credit heart symbol" />
              </div>
              <div class="credit-value">
                <h4>3732</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
          
          
        `;
    });
    
  } catch (error) {
    console.log(error);
    return "error", `Could not get the listing from the server`;
  }
}

export function listingSuccess() {
  if (window.location.href.indexOf('?_listingSuccess=true')) {
    const msg = displayListingSuccess();
    listingMsg.append(msg);
    setTimeout(() => {
      listingMsg.remove();
    }, 3000)
  }
}