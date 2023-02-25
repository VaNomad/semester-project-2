import { loginUser } from "../auth/login.mjs";
import { displayError } from "../ui/displayError.mjs";
import { get } from "../storage/localstorage.mjs";

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
      
      if (get.token) {
        window.location.replace("/indexIn.html");
    
        return response

      } else {
        loginMsg.innerHTML = `

        <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-danger">WRONG USERNAME AND/OR PASSWORD</h5>
                                </div>
                                <div class="p-1">
                                  <img src="/assets/vectors/heartLogo_logout.png" height="60">
                                </div>
                                <div class="p-3">
                                  <h5 class="fs-4 fw-bold text-white">ENTER VALID CREDENTIALS!</h5>
                                </div>

    `;
    loginForm.reset();
                                      
                           setTimeout(() => {
                              window.location = "/login.html";
                              }, 3500);
                              
      }
    } catch (error) {
      displayError(loginForm, error);
    }

  });
}
loginFormListener();