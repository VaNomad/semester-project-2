
import * as pages from "./pages/index.mjs";
import * as handlers from "./handlers/index.mjs";



function router() {
  const path = window.location.pathname;
  console.log("path");

  switch (path) {
    case "/index.html":
      pages.listingCards();
      pages.logoutSuccess();
      return;
    
    case "/register.html":
      handlers.regFormListener();
      return;
    
    case "/login.html":
      handlers.loginFormListener();
      handlers.registerSuccess();
      return;
      
    case "/indexIn.html":
      handlers.logOutUser();
      pages.listingCardsIn();
      pages.loginSuccess();
      return;
    
    case "/specific.html":
      pages.specificPreview();
  }
  
}

router();