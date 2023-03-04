import * as storage from "../storage/localstorage.mjs";
import * as messages from "../ui/displayError.mjs";
import * as api from "../api/index.mjs";



export async function bidListener() {
  const token = storage.get("token");

  const form = document.querySelector("form#bidForm");
  console.log(form);
  const bidBtn = document.querySelector("#bidBtn");
  const bidMsg = document.querySelector("#bidMsg");
  const input = document.querySelector("#bidInput");
  console.log(input);

  if (!token) {
    bidBtn.classList.add("visually-hidden")
    bidMsg.innerHTML = messages.bidError;
  }

  // const bidInput = document.querySelector("#bidInput");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();

      const form = event.target;
      const formData = new FormData(form);
      // const amount = formData.get("amount");
      const amount = input.value;
      const bidAmount = Number(amount);

      console.log(formData);

      try {
        api.addBid(bidAmount);
        console.log(bidAmount);

      } catch (error) {
        console.log(error);
      }
    });
  }

}