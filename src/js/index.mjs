// import * as auth from "./auth/index.mjs";
import * as pages from "./pages/index.mjs";
import * as handlers from "./handlers/index.mjs";



function router() {
  const path = window.location.pathname;
  console.log("path");

  switch (path) {
    case "/index.html":
      pages.listingCards();
      return;
    
    case "/register.html":
      // auth.register();
      handlers.regFormListener();
      return;
    
    case "/login.html":
      // auth.loginUser();
      handlers.loginFormListener();
      return;
    
    case "/indexIn.html":
      handlers.logOutUser();
      pages.listingCardsIn();
      pages.loginSuccess();
      return;
  }
  
}

router();