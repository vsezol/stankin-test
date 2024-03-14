/*
    Author Vsevolod Zolotov 2024
    Telegram: @vsezold
    Email: vsezold@gmail.com
*/

// You can use another site or file
const REMOTE_URL = "https://vsezol.com/polyakov-test/test.pdf";

window.addEventListener("load", () => {
  const iframe = document.createElement("iframe");
  iframe.src = REMOTE_URL;
  iframe.classList.add("hidden-iframe");

  document.body.append(iframe);
});
