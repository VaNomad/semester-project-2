
import * as pages from "./pages/index.mjs";
import * as handlers from "./handlers/index.mjs";
import * as search from "./user/index.mjs";



function router() {
  const path = window.location.pathname;

  switch (path) {
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
      return;
    
    case "/specific.html":
      pages.specificPreview();
      handlers.bidListener();
      handlers.logOutUser();
      return;
    
    case "/specifiXXX.html":
      pages.specificXXX();
      handlers.bidListener();
      handlers.logOutUser();
      return;
    
    case "/profile.html":
      handlers.logOutUser();
  }
  
}

router();