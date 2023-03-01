import { register } from "../auth/register.mjs";
import { displayRegisterError } from "../ui/displayError.mjs";



// const regMsg = document.querySelector("#regMsg");


// console.log(FormData);


export function regFormListener() {
  const regForm = document.querySelector("#regForm");
  const regError = document.querySelector("#regError");
  console.log(regForm);

  if (regForm) {
    regForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const profile = Object.fromEntries(formData.entries());

      console.log(regForm);
      console.log(FormData);
      console.log(profile);

      try {
        const response = await register(profile);
        // window.location.href = url;
        if (response.ok) {
          window.location.replace("/login.html");

          regForm.reset();
                                        
          setTimeout(() => {
              window.location = "/register.html";
              }, 3500);
                                
        }
      } catch (error) {
        displayRegisterError(regForm, error, regError);
      }
      
  

      // register(profile, regForm);
    });
  }
} 