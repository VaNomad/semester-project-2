import * as storage from "../storage/localstorage.mjs";
import * as messages from "../ui/displayError.mjs";
import * as api from "../api/index.mjs";
// import { addBid } from "../api/index.mjs";
// import  {specificPreview} from "../handlers/index.mjs";

const form = document.querySelector("#bidForm");
console.log(form);
const bidInput = document.querySelector("#bidInput");
const bidButton = document.querySelector("#bidAmount");
const bidMsg = document.querySelector("#bidMsg");

export async function bidListener() {
  const token = storage.get("token");
  // const profile = specificPreview.profile;
  // const profileName = specificPreview.seller.name;

  if(!token) {
  bidButton.disabled = true;
  bidMsg.innerHTML = messages.bidError;
  } 

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const bidNow = event.target;
    console.log(bidNow);
    
    const numberValue = bidNow.value;
    console.log(numberValue);
    
    api.addBid(numberValue); 
    try {
      api.addBid(numberValue);
      console.log(numberValue);
      
    } catch (error) {
      console.log(error);
    }
  });
    
}