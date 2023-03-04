import * as storage from "../storage/localstorage.mjs";
import * as messages from "../ui/displayError.mjs";
import * as api from "../api/index.mjs";

const form = document.querySelector("#bidForm");
console.log(form);
const bidBtn = document.querySelector("#bidBtn");
const bidMsg = document.querySelector("#bidMsg");

export async function bidListener() {
  const token = storage.get("token");

  if(!token) {
  bidBtn.classList.add("visually-hidden")
  bidMsg.innerHTML = messages.bidError;
  } 

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const bidNow = event.target;
      console.log(bidNow);
      
      const numberValue = bidNow.value;
      console.log(numberValue);
  
      try {
        api.addBid(numberValue);
        console.log(numberValue);
        
      } catch (error) {
        console.log(error);
      }
    });
  }
 
}