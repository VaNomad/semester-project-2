import * as urls from "./constants.mjs"
import { get } from "../storage/localstorage.mjs";

const bidForm = document.querySelector(".form");
console.log(bidForm);

const url = urls.listings_URL;
const bidInput = document.querySelector("#bidInput");
const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");


export async function addBid() {
  const bid_URL = `${url}/${id}/bids`;
  const token = get("token");
  let bidAmount = { amount: Number(bidInput.value) };

  try {
    const response = await fetch(bid_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(bidAmount),
    });

    const results = await response.json();
    location.reload();
    return results;
  } catch (error) {
    console.log(error);
  }
}

// function bidNumberProducts() {
//   bidForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     const bidNow = e.target;
//     const numberValue = bidNow.value;
//     addBid(numberValue);
//   });
// }

// bidNumberProducts();