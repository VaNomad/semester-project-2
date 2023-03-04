import { listings_URL } from "../api/constants.mjs";
import { get } from "../storage/localstorage.mjs";
import { displayListingError } from "../ui/displayError.mjs";

const token = get("token");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `${listings_URL}/${id}/?_seller=true&_bids=true`;
const listingMsg = document.querySelector("#listingMsg");

export async function specificXXX() {
  const data = {
    headers: {
      "content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    method: "get",
  };

  try {
    const response = await fetch(url, data);
    console.log(response);

    const results = await response.json();
    console.log(results);

    if (!response.ok) {
      const msg = displayListingError();
      listingMsg.append(msg);
      setTimeout(() => {
        listingMsg.remove();
        history.go(-1);
      }, 2200);
    }

      
    const title = document.querySelector("#title");
    title.innerHTML = results.title;

    const description = document.querySelector("#description");
    description.innerHTML = results.description;
    
    const numberOfBids = document.querySelector("#numberOfBids");
    numberOfBids.innerHTML = results.bids;
    
    const sellerName = document.querySelector("#sellerName");
    sellerName.innerHTML = results.name;
    
    const sellerAvatar = document.querySelector("#sellerAvatar");
    sellerAvatar.innerHTML = results.avatar;
      
    const formattedCreatedDate = new Date(results.created).toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
    });
    const createdDate = document.querySelector("#createdDate");
    createdDate.innerText = formattedCreatedDate;

    const formattedCreatedTime = new Date(results.created).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const createdTime = document.querySelector("#createdTime");  
    createdTime.innerText = formattedCreatedTime;

    const formattedEndDate = new Date(results.endsAt).toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
    });
    const endDate = document.querySelector("#endDate");
    endDate.innerText = formattedEndDate;

    const formattedEndTime = new Date(results.endsAt).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endTime = document.querySelector("#endTime");
    endTime.innerText = formattedEndTime;

    const formattedUpdatedEndDate = new Date(results.updated).toLocaleDateString("en-GB", {
      month: "long",
      day: "numeric",
    });
    const updatedEndDate = document.querySelector("#updatedEndDate");
    updatedEndDate.innerText = formattedUpdatedEndDate;

    const formattedUpdatedEndTime = new Date(results.updated).toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const updatedEndTime = document.querySelector("#updatedEndTime");
    updatedEndTime.innerText = formattedUpdatedEndTime;  
      

    const specificImg = document.querySelector("#specificImg");
    if (results.media[0]) {
      specificImg.src = results.media[0];
    } else {
      specificImg.src = "/assets/vectors/heartLogo_purple.png";
    }
  

  } catch (error) {
    console.log('error');
    
  }
  
   
}