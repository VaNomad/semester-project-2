import { listings_URL } from "../api/constants.mjs";
import * as displayMsg from "../ui/displayError.mjs";
import { get } from "../storage/localstorage.mjs";

console.log(listings_URL);

export async function createListing(listing) {
  console.log(listing);
  
  try {
    const url = listings_URL;
    const token = get("token");

    const title = listing.title;
    const desciription = listing.desciription;
    const media = listing.media;
    const endsAt = new Date(listing.endsAt.date).toDateString();

    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      method: "POST",
      body: JSON.stringify({
        title,
        desciription,
        media,
        endsAt,
      }),
    };

    const response = await fetch(url, options)
    const result = await response.json();
    console.log(response);

    if (response.ok) {
      displayMsg.displayListingSuccess();
      // window.location.replace("/indexIn.html?_listingSuccess=true");
      return result;
    }

    console.log(result);
    
  } catch (error) {
    console.log(error);
  }
}