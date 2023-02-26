import { loginUser } from "../auth/login.mjs";
import { displayLoginError } from "../ui/displayError.mjs";
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
        loginMsg.innerHTML = displayLoginError;

        loginForm.reset();
                                      
        setTimeout(() => {
            window.location = "/login.html";
            }, 3500);
                              
      }
    } catch (error) {
      displayLoginError(loginForm, error);
    }

  });
}
loginFormListener();