
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
      // display.preLoader();
      return;
    
    case "/register.html":
      handlers.regFormListener();
      handlers.setAvatar();
      return;
    
    case "/login.html":
      handlers.loginFormListener();
      handlers.registerSuccess();
      return;
      
    case "/indexIn.html":
      handlers.logOutUser();
      pages.listingCardsIn();
      pages.loginSuccess();
      search.searchFormListenerIn();
      pages.userImg();
      return;
    
    case "/specific.html":
      pages.specificPreview();
      handlers.bidListener();
      handlers.logOutUser();
      pages.userImg();
      return;
    
    case "/specifiXXX.html":
      pages.specificXXX();
      handlers.bidListener();
      handlers.logOutUser();
      pages.userImg();
      return;
    
    case "/profile.html":
      handlers.logOutUser();
      search.getProfile();
      pages.userImg();
      return;
    
    case "/about.html":
      pages.userImg();
      return;
    
    case "/aboutIn.html":
      pages.userImg();
      return;
  }
  
}

router();