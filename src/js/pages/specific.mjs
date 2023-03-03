// import { listings_URL } from "../api/constants.mjs";
// import { displayListingSuccess } from "../ui/displayError.mjs";
// import { get } from "../storage/localstorage.mjs";

// const token = get("token");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const url = `${listings_URL}/${id}`;

// const listingPreview = document.querySelector("#listingPreview");
// const listingMsg = document.querySelector("#listingMsg");



// export async function specificPreview() {
//   const data = {
//     method: "get",
//     headers: {
//       "content-Type": "application/json; charset=UTF-8",
//       Authorization: `Bearer ${token}`,
//     },

//   };

//   const response = await fetch(url, data);
//   console.log(response);

//   const results = await response.json();
//   console.log(results);



//   listingPreview.innerHTML = `

//       <div class="container-lg text-center text-white">
//         <div class="row bg-secondary rounded mb-3">
//           <div class="col-lg">
//             <div class="d-flex justify-content-center pt-5">
//               <div class="big-img d-flex justify-content-center align-items-center">
//                 <img class="big-img" src="${Object.media[0]
//     }" alt="Picture of Object" />
//               </div>
//             </div>
//             <div class="d-flex justify-content-evenly pt-4">
//               <div class="d-flex justify-content-center align-items-center ms-5">
//                 <img class="small-img" src="${Object.media[1]
//     }" alt="Picture of Object" />
//               </div>
//               <div class="d-flex justify-content-center align-items-center">
//                 <img class="small-img" src="${Object.media[2]
//     }" alt="Picture of Object" />
//               </div>
//               <div class="d-flex justify-content-center align-items-center">
//                 <img class="small-img" src="${Object.media[3]
//     }" alt="Picture of Object" />
//               </div>
//               <div class="d-flex justify-content-center align-items-center me-5">
//                 <img class="small-img" src="${Object.media[4]
//     }" alt="Picture of Object" />
//               </div>
//             </div>
//           </div>
//           <div class="col-lg">
//             <div class="container">
//               <div class="p-5">
//                 <div>
//                   <h2 class="body-h2 text-start fs-5 px-2">
//                   ${Object.title}
//                   </h2>
//                 </div>
//                 <div class="div p-2">
//                   ${Object.description}
//                 </div>
//                 <div class="bid-amount p-2">
//                   <h2 class="body-h2 fs-5 text-start">BID AMOUNT</h2>
//                   <form class="form">
//                     <div class="input-group">
//                       <span class="input-group-text bg-secondary"><img src="/assets/vectors/heartLogo_green.png"
//                           height="30" alt="" /></span>
//                       <input type="text" class="form-control" id="bidAmount"
//                         aria-label="Amount (to the nearest dollar)" />
//                       <span class="input-group-text bg-secondary text-white">.00</span>
//                     </div>
//                   </form>
//                   <p class="text-start mt-1">In credits and/or $</p>
//                 </div>
//                 <div class="expiration d-flex justify-content-between px-2">
//                   <p class="text-danger">EXPIRES</p>
//                   ${Object.endsAt}
//                 </div>
//                 <div class="expiration d-flex justify-content-between align-items-center px-2">
//                   <p>CURRENT BID</p>
//                   ${Object.title}
//                 </div>
//                 <div class="p-2">
//                   <button class="w-100 px-5 py-2 btn btn-lg btn-outline-success banner-h1 fs-2" type="submit">
//                     PLACE BID
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="row bg-secondary rounded">
//           <div class="col d-flex justify-content-evenly align-items-center mt-1">
//             <div class="seller">
//               <h2 class="banner-h1 fs-3 text-white-50">SELLER</h2>
//             </div>
//             <div class="seller d-flex">
//               <div class="seller-name me-3">
//                 <h2 class="text-danger fs-4 fw-light">HANN SOWLOWE</h2>
//               </div>
//               <div class="seller-img">
//                 <img src="/assets/images/kylo.39.png" class="rounded-circle" height="30" width="30"
//                   alt="Image of item seller" />
//               </div>
//             </div>
//             <div class="credits">
//               <h2 class="banner-h1 fs-3 text-white-50">YOUR CREDITS</h2>
//             </div>
//             <div class="available-credits d-flex">
//               <div class="heart-logo">
//                 <img src="/assets/vectors/heartLogo_green.png" height="30" alt="credit heart symbol" />
//               </div>
//               <div class="credit-value">
//                 <h4>3732</h4>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>


//         `;
// }


// export function listingSuccess() {
//   if (window.location.href.indexOf('?_listingSuccess=true')) {
//     const msg = displayListingSuccess();
//     listingMsg.append(msg);
//     setTimeout(() => {
//       listingMsg.remove();
//     }, 3000)
//   }
// }

import {
  listings_URL
} from "../api/constants.mjs";
import {
  displayListingError
} from "../ui/displayError.mjs";
import {
  get
} from "../storage/localstorage.mjs";

const token = get("token");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `${listings_URL}/${id}/?_seller=true&_bids=true`;
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

  const response = await fetch(url, data);
  console.log(response);

  const results = await response.json();
  console.log(results);

  if (!response.ok) {
    const msg = displayListingError();
    listingMsg.append(msg);
    setTimeout(() => {
      listingMsg.remove();
      history.go(-1);
    }, 2200);
  }

  const formattedCreatedDate = new Date(results.created).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });

  const formattedCreatedTime = new Date(results.created).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });


  const formattedEndDate = new Date(results.endsAt).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });

  const formattedEndTime = new Date(results.endsAt).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const formattedUpdatedEndDate = new Date(results.updated).toLocaleDateString("en-GB", {
    month: "long",
    day: "numeric",
  });

  const formattedUpdatedEndTime = new Date(results.updated).toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });

  listingPreview.innerHTML = `
            
         <div class="container-lg text-center text-white">
           <div class="row bg-secondary rounded mb-3">
             <div class="col-lg">
                <div class="d-flex justify-content-center pt-5">
                  <div class="d-flex justify-content-center align-items-center bg-transparent">
                    <img src="${results.media[0]}" class="big-img" alt="image 1 of listing">
                  </div>
              </div>
              <div class="d-flex justify-content-evenly pt-4">
                <div class="d-flex justify-content-center align-items-center ms-5">
                  <img src="${results.media[1]}" class="small-img" alt="image 2 of listing">
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="${results.media[2]}" class="small-img" alt="image 3 of listing">
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <img src="${results.media[3]}" class="small-img" alt="image 4 of listing">
                </div>
                <div class="d-flex justify-content-center align-items-center me-5">
                  <img src="${results.media[4]}" class="small-img" alt="image 5 of listing">
                </div>
              </div>
            </div>
            <div class="col-lg">
              <div class="container">
                <div class="p-5">
                  <div>
                    <h2 class="body-h2 text-start fs-5 px-2">
                    ${results.title}
                    </h2>
                  </div>
                  <div class="text-start p-2 mb-2">
                    ${results.description}
                  </div>
                  <div class="expiration d-flex justify-content-between m-0 px-2">
                    <p class="text-success">CREATED</p>
                    <div class="text-success">${formattedCreatedDate}</div>
                    <div class="text-success">${formattedCreatedTime}</div>
                  </div>
                  <div class="expiration d-flex justify-content-between px-2">
                    <p class="text-white">UPDATED</p>
                    <div class="text-white">${formattedUpdatedEndDate}</div>
                    <div class="text-white">${formattedUpdatedEndTime}</div>
                  </div>
                  <div class="expiration d-flex justify-content-between px-2">
                    <p class="text-danger">EXPIRES</p>
                    <div class="text-danger">${formattedEndDate}</div>
                    <div class="text-danger">${formattedEndTime}</div>
                  </div>
                  
                  <div class="expiration d-flex justify-content-between align-items-center px-2">
                    <p>NUMBER OF BIDS</p>
                    ${results._count.bids}
                  </div>
                  <div class="bid-amount p-2">
                    <h2 class="body-h2 fs-5 text-start">BID AMOUNT</h2>
                    <form class="form" id="bidForm">
                      <div class="input-group">
                        <span class="input-group-text bg-secondary"><img src="/assets/vectors/heartLogo_green.png"
                            height="30" alt="" /></span>
                        <input type="number" name="number" class="form-control" id="bidAmount"
                          aria-label="Amount (to the nearest cybid credit and dollar)" />
                        <span class="input-group-text bg-secondary text-white">.00</span>
                      </div>
                    </form>
                    <p class="text-start mt-1">In credits and/or $</p>
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
                  <h2 class="text-danger fs-4 fw-light text-uppercase">${results.seller.name}</h2>
                </div>
                <div class="seller-img">
                  <img src="${results.seller.avatar}" class="rounded-circle"  height="30" width="30" alt="Seller Avatar">
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
}