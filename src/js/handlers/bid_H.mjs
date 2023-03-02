import * as storage from "../storage/localstorage.mjs";
import * as user from "../user/profile.mjs";
import * as messages from "../ui/displayError.mjs";
import * as api from "../api/index.mjs"

const form = document.querySelector("#bidForm");
const bidButton = document.querySelector("#bidAmount");
const bidMsg = document.querySelector("#bidMsg");

export async function bidListener() {
  const token = storage.get("token");
  const profile = user.get("profile");
  const profileName = user.name;

  if(!token) {
  bidButton.disabled = true;
  bidMsg.innerHTML = messages.bidMessage;
  console.log("NO TOKEN!")
  } else {
    bidMsg.innerHTML = "";
    console.log("TOKEN RECEIVED!")

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const amount = formData.get("amount");
      const bidAmount = Number(amount);  
      try {
        api.addBid(bidAmount);
      } catch (error) {
        console.log(error);
      }
    });
  }
}