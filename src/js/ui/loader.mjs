
// ——————————————————————————————————————————————————————————— Spinner ———————————————————— //

export async function preLoader() {
  const wrapper = document.querySelector(".spinner-wrapper");

  window.addEventListener("load", () => {
    wrapper.classList.remove("visually-hidden");
      
    setTimeout(() => {
      wrapper.classList.add("visually-hidden");
    }, 500)
  });
}