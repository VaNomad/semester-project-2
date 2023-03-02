
import { clear, remove } from "../storage/localstorage.mjs";
// import { clear } from "../storage/localstorage.mjs";


export function logOutUser() {
  const logoutBtn = document.querySelector("#logoutBtn");
  // const logoutMsg = document.getElementById("logoutMsg");
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      remove("profile");
      remove("token");
      clear();
      
      setTimeout(() => {
        window.location.replace("/index.html?_logoutSuccess=true");
      }, 1000);
      
    });
  }
}
