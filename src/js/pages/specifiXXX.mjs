import { listings_URL } from "../api/constants.mjs";
import { get } from "../storage/localstorage.mjs";
import { displayListingError } from "../ui/displayError.mjs";

const token = get("token");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = `${listings_URL}/${id}/?_seller=true&_bids=true`;
const listingMsg = document.querySelector("#listingMsg");
const bidHistory = document.querySelector("#bidHistory");

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

    const results = await response.json();

    const bids = results.bids;

    bids.forEach((value) => {
      
      bidHistory.innerHTML += `
                    
                    <div class="text-white container-fluid d-flex">
                      <div class="d-flex">
                        <div class="d-flex">
                          <span>${value.bidderName}</span>
                          <span>${value.amount}</span>
                        </div>
                        <div class="">
                          
                        </div>
                      </div>
                    </div>


      `;
      
    })

    const specificImg1 = document.querySelector("#specificImg1");
    specificImg1.src = results.media[0];

    const specificImg2 = document.querySelector("#specificImg2");
    specificImg2.src = results.media[1];

    const specificImg3 = document.querySelector("#specificImg3");
    specificImg3.src = results.media[2];

    const specificImg4 = document.querySelector("#specificImg4");
    specificImg4.src = results.media[3];

    const specificImg5 = document.querySelector("#specificImg5");
    specificImg5.src = results.media[4];
    
    

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
    numberOfBids.innerHTML = results._count.bids;
    
    const sellerName = document.querySelector("#sellerName");
    sellerName.innerHTML = results.seller.name;
    
    const sellerAvatar = document.querySelector("#sellerAvatar");
    sellerAvatar.src = results.seller.avatar;
      
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
      
    const profile = get("profile");
    const money = profile.credits;
    const funds = document.querySelector("#funds");
    funds.innerText = money;
    
  } catch (error) {
    console.log('error');
    
  }
  
   
}