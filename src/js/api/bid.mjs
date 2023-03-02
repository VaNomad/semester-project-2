import * as urls from "./constants.mjs"
import { get } from "../storage/localstorage.mjs";

const querryString = document.location.search;
const params = new URLSearchParams(querryString);
const id = params.get("id");
const bids = "/bids";

export async function addBid(amount) {
  const bid_URL = `${urls.listings_URL}/${id}/${bids}`;
  const token = get("token");
  let bidAmount = { amount: amount };

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