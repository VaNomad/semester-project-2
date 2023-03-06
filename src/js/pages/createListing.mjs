import { listings_URL } from "../api/constants.mjs";
import * as displayMsg from "../ui/displayError.mjs";
import { get } from "../storage/localstorage.mjs";

export async function createListing(listing) {
  
  try {
    const url = listings_URL;
    const token = get("token");

    const media = [listing.listing];
    const title = listing.title;
    const tags = listing.tags.split(",");
    const description = listing.description;
    const endsAt = new Date(listing.date);

    const body = {
      "media": media,
      "title": title,
      "tags": tags,
      "description": description,
      "endsAt": endsAt
    }

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      method: "POST",
      body: JSON.stringify(body),
    };

    const response = await fetch(url, options)
    const result = await response.json();

    if (response.ok) {
      displayMsg.displayListingSuccess();
      window.location.replace("/indexIn.html?_listingSuccess=true");
      return result;
    }
    
  } catch (error) {
    console.log(error);
  }
}