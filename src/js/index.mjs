import * as pages from "./pages/index.mjs";



function router() {
  const path = window.location.pathname;
  console.log("path");

  switch (path) {
    case "/index.html":
      pages.listingCards();
      return;

  }
  
}

router();