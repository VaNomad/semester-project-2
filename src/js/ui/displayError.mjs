
export function displayError(parent, message) {
  const div = document.createElement("div");
            div.classList.add("error");
            div.innerHTML = message;
            parent.prepend(div);
}