import * as urls from "./constants.mjs"
import { get } from "../storage/localstorage.mjs";

// const bidForm = document.querySelector(".form");
// console.log(bidForm);

const url = urls.listings_URL;
// const bidInput = document.querySelector("#bidInput");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export async function addBid(bidAmount) {
  const bid_URL = `${url}/${id}/bids`;
  const token = get("token");
  let bidAmountObj = { amount: Number(bidAmount) };

  try {
    const response = await fetch(bid_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify(bidAmountObj),
    });

    const results = await response.json();
    console.log(results);
    location.reload();
    return results;
    
    
  } catch (error) {
    console.log(error);
  }
}
