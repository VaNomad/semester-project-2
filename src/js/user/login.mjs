import { API_AUCTION_URL } from "../api/constants.mjs";
import * as storage from "../storage/localstorage.mjs";
import { displayError } from "../ui/displayError.mjs";

const action = "/auth/login";





export async function loginUser(url, data) {
  
  try {
    const userLogin = {
      headers: {
        "content-Type": "application/json; charset=UTF-8",
      },
      method: "post",
      body: JSON.stringify(data),
    };

    const url = (API_AUCTION_URL + action);

    const response = await fetch(url, userLogin);

    const { accessToken, ...profile } = await response.json();

    if (accessToken.length > 0) {
      window.location.replace("/indexIn.html");

      storage.save("token", accessToken);

      storage.save("profile", profile);

      return response;

    } else {
      throw new Error("INVALID USERNAME OR PASSWORD!")
    }
    
    

    
  } catch (error) {
    console.log(error);
  }
}

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");
  const loginMsg = document.querySelector("#loginMsg");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const login = Object.fromEntries(formData.entries());

    try {
      const response = await loginUser(login);
      
      if (response.ok) {
        window.location.replace("/indexIn.html");
    
        return response

      } else {
        loginMsg.innerHTML = `

        <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-success">YOU HAVE LOGGED IN</h5>
                                </div>
                                <div class="p-1">
                                  <img src="/assets/vectors/heartLogo_green.png" height="60">
                                </div>
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-white">YOU ARE AUTHORIZED TO START BIDDING</h5>
                                </div>

    `;
    loginForm.reset();
                                      
                           setTimeout(() => {
                              window.location = "/login.html";
                              }, 2500);
                              
      }
    } catch (error) {
      displayError(loginForm, error);
    }

  });
}