import { loginUser } from "../auth/login.mjs";
import { displayLoginError } from "../ui/displayError.mjs";
// import { displayLoginSuccess } from "../ui/displayError.mjs";
// import { get } from "../storage/localstorage.mjs";

export function loginFormListener() {
  const loginForm = document.querySelector("#loginForm");
  // const loginMsg = document.querySelector("#loginMsg");
  const loginError = document.querySelector("#loginError");

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log(data);
      
  
      try {
        const response = await loginUser(data);
        // window.location.href = url;
        if (response.ok) {
          window.location.replace("/indexIn.html?_loginSuccess=true");
          
        } else {
          loginError.innerHTML = displayLoginError;
  
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
}
