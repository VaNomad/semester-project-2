
import { clear, remove } from "../storage/localstorage.mjs";
// import { clear } from "../storage/localstorage.mjs";


export function logOutUser() {
  const logoutBtn = document.querySelector("#logoutBtn");
  const logoutMsg = document.getElementById("logoutMsg");
  
  
  
  
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", async () => {
      remove("profile");
      remove("token");
      clear();
      
      setTimeout(() => {
        window.location.replace("/index.html");
      }, 1000);
      
      
      

      setTimeout(() => {
        logoutMsg.innerHTML = `

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
      }, 3000);
      
      
      
    });
    
  }
}
