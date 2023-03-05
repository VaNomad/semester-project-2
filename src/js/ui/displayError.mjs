
export function displayLoginError() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-danger">WRONG USERNAME AND/OR PASSWORD</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_logout.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">ENTER VALID CREDENTIALS!</h5>
                       </div>
    
                      `;
  return msg;
            
}

export function displayLoginSuccess() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-success banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-success">YOU LOGGED IN SUCCESSFULLY!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_green.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">YOU ARE READY TO START BIDDING!</h5>
                       </div>
    
                      `;
  return msg;

}

export function displayRegisterError() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-danger">YOUR ACCOUNT WAS NOT REGISTERED!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_logout.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">PLEASE FILL OUT REQUIRED FIELDS!</h5>
                       </div>
    
                      `;
  return msg;
            
}

export function displayRegisterSuccess() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-success banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-success">YOUR ACCOUNT WAS REGISTERED!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_green.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">YOU CAN NOW LOG IN!</h5>
                       </div>
    
                      `;
  return msg;
            
}
export function displayLogoutSuccess() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-success banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-success">YOU HAVE SUCCESSFULLY LOGGED OUT!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_green.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">THANK YOU FOR YOUR VISIT!</h5>
                       </div>
    
                      `;
  return msg;
            
}
export function displayListingSuccess() {
  const msg = document.createElement("div");
  msg.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-success banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-success">YOUR LISTING WAS CREATED!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_green.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">YOU CAN NOW FIND IT IN LISTINGS!</h5>
                       </div>
    
                      `;
  return msg;
            
}
export function displayListingError() {
  const msg = document.createElement("div");
  msg.innerHTML = `

  <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-danger">COULD NOT GET LISTINGS FROM THE SERVER!</h5>
                            </div>
                            <div class="p-1">
                              <img src="/assets/vectors/heartLogo_logout.png" height="60">
                            </div>
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-warning">PLEASE TRY AGAIN</h5>
                            </div>

  `;
  return msg;
            
}
export function searchError() {
  const msg = document.createElement("div");
  msg.innerHTML = `

  <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-danger">NO ITEMS WERE FOUND!</h5>
                            </div>
                            <div class="p-1">
                              <img src="/assets/vectors/heartLogo_logout.png" height="60">
                            </div>
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-warning">TRY A DIFFERENT SEARCH</h5>
                            </div>

  `;
  return msg;
            
}
export function bidError() {
  const msg = document.createElement("div");
  msg.innerHTML = `

  <div class="card bg-primary bg-opacity-75 border-danger banner-h1 text-center p-5 ms-3 mb-5">
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-danger">THE SERVER CAN NOT AUTHORIZE THIS BID!</h5>
                            </div>
                            <div class="p-1">
                              <img src="/assets/vectors/heartLogo_logout.png" height="60">
                            </div>
                            <div class="p-3">
                              <h5 class="fs-4 fw-bold text-warning">PLEASE TRY PLACING YOUR BID AGAIN</h5>
                            </div>

  `;
  return msg;
            
}

