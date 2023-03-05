import { createListing } from "../pages/createListing.mjs";
import { listingCardsIn } from "../pages/homeIn.mjs";
import { displayListingSuccess, displayListingError } from "../ui/displayError.mjs";

export function createListingListener() {
  const form = document.querySelector("#createForm");
  const createError = document.querySelector("#createError");

  if (form) {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      console.log("listing", listing);

      // if (!listing.tags.trim()) {
      //   delete listing.tags;
      // } else {
      //   listing.tags = listing.tags.split(",");
      // }

      if (!listing.media.trim()) {
        delete listing.media;
      } else {
        listing.media = listing.media.split(",");
      }

      try {
        await createListing(listing);
        listingCardsIn();
        displayListingSuccess();

        if (listingCardsIn()) {
          
          form.reset();
                                        
          setTimeout(() => {
              window.location.replace("/profile.html");
              }, 3500);
                                
        }
      } catch (error) {
        displayListingError(form, error, createError);
      }
    });
  }
}