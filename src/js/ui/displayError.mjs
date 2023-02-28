
export function displayLoginError(parent) {
  const div = document.createElement("div");
  div.classList.add("error");
  parent.prepend(div);
  div.innerHTML = `

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

}
export function displayRegisterError(parent) {
  const div = document.createElement("div");
  div.classList.add("error");
  parent.prepend(div);
  div.innerHTML = `

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
            
}
export function displayRegisterSuccess(parent) {
  const div = document.createElement("div");
  div.classList.add("error");
  parent.prepend(div);
  div.innerHTML = `

            <div class="card bg-primary bg-opacity-75 border-success banner-h1 text-center p-5 ms-3 mb-5">
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-success">YOUR ACCOUNT WAS REGISTERED!</h5>
                       </div>
                       <div class="p-1">
                         <img src="/assets/vectors/heartLogo_green.png" height="60">
                       </div>
                       <div class="p-3">
                         <h5 class="fs-4 fw-bold text-white">YOU ARE AUTHORIZED TO START BIDDING!</h5>
                       </div>
    
                      `;
            
}