import { register } from "../auth/register.mjs";
import { API_AUCTION_URL } from "../api/constants.mjs";

const action = "/auth/register";
const regURL = (API_AUCTION_URL + action);

const regForm = document.querySelector("#regForm");
const regMsg = document.querySelector("#regMsg");

regForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const regForm = event.target;
  const formData = new FormData(regForm);
  const profile = Object.fromEntries(formData.entries());

  console.log(regForm);

  if (regForm) {
    regMsg.innerHTML = `

    <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-success">YOUR ACCOUNT WAS REGISTERED</h5>
                                </div>
                                <div class="p-1">
                                  <img src="/assets/vectors/heartLogo_green.png" height="60">
                                </div>
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-white">GO TO <a href="/login.html">
                                  <img src="/assets/vectors/login.png" alt="Login link" width="30" height="30" class="d-inline-block mb-1"></a> TO ENTER</h5>
                                </div>

    `;
    regForm.reset();
  } else {
    return Error;
  }
  

  register(regURL, profile, regForm);
});