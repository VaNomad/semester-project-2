import { baseUrl } from "../api/constants.mjs";

const action = "/listings?_tag";
const searchURL = `${baseUrl}${action}`;

const noResults = document.querySelector("#noResults");
const searchItems = document.querySelector("#listingItems");
const searchForm = document.querySelector("#searchForm");
const searchValue = document.querySelector("#searchValue");
const token = localStorage.getItem("Token");

export async function searchCall() {
  try {
    const data = {
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${searchURL}=${searchValue.value}`, data);
    const results = await response.json();
    console.log(results);

    if (results < 1) {
      noResults.innerHTML = `

      <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-danger">NO ITEMS WERE FOUND!</h5>
                                </div>
                                <div class="p-1">
                                  <img src="/assets/vectors/heartLogo_logout.png" height="60">
                                </div>
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-warning">TRY A DIFFERENT SEARCH</h5>
                                </div>

      `;
    }
    
    searchItems.innerHTML = "";
    results.forEach((search) => {

      searchItems.innerHTML += `
      
      <div class="col-lg-4 col-md-6 col-xs-12 text-white-50 p-0">
        <div class="card border-0 bg-secondary bg-opacity-75 m-3 p-3">
          <img src="${
            search.media[0]
          }" class="card-image" onerror="if (this.src != '/assets/vectors/heartLogo_purple.png') this.src = '/assets/vectors/heartLogo_purple.png';" alt="Listing item image">
          <div class="card-img-overlay d-flex m-3">
            <div class="heart">
              <img src="/assets/vectors/heartLogo_green.png" width="30" alt="" />
            </div>
            <p class="text-dark ms-1 fs-5">${search._count.bids}</p>
          </div>
          <div class="card-body bg-primary">
            <h5 class="card-title text-white">${search.title}</h5>
            <p class="card-text text-white-50">
            ${search.description}
            </p>
          </div>
          <div class="card-footer bg-primary border-0">
            <div><small class="text-danger"> AUCTION ENDS: ${new Date(search.endsAt).toLocaleDateString()} @ ${new Date(search.endsAt).toLocaleTimeString()}</small></div>
            <div><small class="text-muted"> LAST UPDATED: ${new Date(search.updated).toLocaleDateString()}</small></div>
          </div>
        </div>
      </div>`;
      console.log(results);
      
      
    });
  } catch (error) {
    console.log(error);
  }
}

export async function searchFormListener() {
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchForm = e.target;
    console.log(searchForm);
    searchCall();
    searchForm.reset();
  });
}






