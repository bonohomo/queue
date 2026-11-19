const terms = document.getElementById("terms");
const accept = document.getElementById("accept");

if (document.cookie.includes("cookiesAccepted=true")) {
  terms.style.display = "none";
}

accept.addEventListener("click", () => {
  terms.style.display = "none";
  document.cookie = "cookiesAccepted=true; path=/; max-age=31536000";
});