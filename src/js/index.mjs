
import * as pages from "./pages/index.mjs";
import * as handlers from "./handlers/index.mjs";
import * as search from "./user/index.mjs";




function router() {
  const path = window.location.pathname;

  switch (path) {
    case "/":
    case "/index.html":
      pages.listingCards();
      pages.logoutSuccess();
      search.searchFormListener();
      search.userImg();
      // display.preLoader();
      return;
    
    case "/register.html":
      handlers.regFormListener();
      handlers.setAvatar();
      search.userImg();
      return;
    
    case "/login.html":
      handlers.loginFormListener();
      handlers.registerSuccess();
      search.userImg();
      return;
      
    case "/indexIn.html":
      handlers.logOutUser();
      pages.listingCardsIn();
      pages.loginSuccess();
      search.searchFormListenerIn();
      search.userImg();
      return;
    
    // case "/specific.html":
    //   pages.specificPreview();
    //   handlers.bidListener();
    //   handlers.logOutUser();
    //   search.userImg();
    //   return;
    
    case "/specifiXXX.html":
      pages.specificXXX();
      handlers.bidListener();
      handlers.logOutUser();
      search.userImg();
      return;
    
    case "/profile.html":
      handlers.logOutUser();
      search.getProfile();
      search.userImg();
      return;
    
    case "/about.html":
      search.userImg();
      return;
    
    case "/aboutIn.html":
      search.userImg();
      return;
    
    case "/createListing.html":
      search.userImg();
      handlers.createListingListener();
      return;
  }
  
}

router();