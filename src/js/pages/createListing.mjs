import { listings_URL } from "../api/constants.mjs";
import * as displayMsg from "../ui/displayError.mjs";

console.log(listings_URL);

export async function createListing(create) {
  try {
    const title = create.title;
    const description = create.description;
    const media = create.media.split(",");
    const endsAt = new Date(create.endsAt).toDateString;
    const url = listings_URL;
    const token = localStorage.getItem("Token");
    const options = {
      method: "post",
      headers: {
        "content-Type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        description,
        media,
        endsAt,
      }),
    };

    const response = await fetch(url, options);

    if (response.ok) {
      displayMsg.displayListingSuccess();
      window.location.replace("/profile.html?_listingSuccess=true");
      return result;
    }

    const result = await response.json();
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}






