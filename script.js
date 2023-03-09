const click = document.getElementById("click");
const search = document.getElementById("search");
const share = document.getElementById("share");

const showClick = document.getElementById("show-click");
const showSearch = document.getElementById("show-search");
const showShare = document.getElementById("show-share");


const showBookmark = document.getElementById("bookmark-icon-show")
const showBrowser = document.getElementById("browser-icon-show")
const showApp = document.getElementById("app-icon-show")
const showChromium = document.getElementById("chromium-icon-show");

const hideBookmark = document.getElementById("bookmark-icon-close");
const hideBrowser = document.getElementById("browser-icon-close");
const hideApp = document.getElementById("app-icon-close");
const hideChromium = document.getElementById("chromium-icon-close");


const bookmarkParagraph = document.getElementById("bookmark-p");
const browserParagraph = document.getElementById("browser-p");
const appParagraph = document.getElementById("app-p");
const chromiumParagraph = document.getElementById("chromium-p");

showClick.classList.add("add-border");
search.style.display = "none";
share.style.display = "none";
hideBookmark.style.display = "none";
hideBrowser.style.display = "none";
hideApp.style.display = "none";
hideChromium.style.display = "none";

showClick.addEventListener("click", function () {
  search.style.display = "none";
  share.style.display = "none";
  click.style.display = "flex";
  showClick.classList.add("add-border");
  showSearch.classList.remove("add-border");
  showShare.classList.remove("add-border");
});


showSearch.addEventListener("click", function () {
  search.style.display = "flex";
  share.style.display = "none";
  click.style.display = "none";
  showClick.classList.remove("add-border");
  showSearch.classList.add("add-border");
  showShare.classList.remove("add-border");
});


showShare.addEventListener("click", function () {
  search.style.display = "none";
  share.style.display = "flex";
  click.style.display = "none";
  showClick.classList.remove("add-border");
  showSearch.classList.remove("add-border");
  showShare.classList.add("add-border");
});


showBookmark.addEventListener("click", function () {
  bookmarkParagraph.style.display = "block"
  browserParagraph.style.display = "none"
  appParagraph.style.display = "none"
  chromiumParagraph.style.display = "none";
  showBookmark.style.display = "none"
  hideBookmark.style.display = "block"
  hideBrowser.style.display = "none"
  hideApp.style.display = "none"
  hideChromium.style.display = "none";
  showBrowser.style.display = "block";
  showApp.style.display = "block";
  showChromium.style.display = "block";
});

showBrowser.addEventListener("click", function () {
  bookmarkParagraph.style.display = "none";
  browserParagraph.style.display = "block";
  appParagraph.style.display = "none";
  chromiumParagraph.style.display = "none";
  showBrowser.style.display = "none";
  hideBrowser.style.display = "block";
  hideBookmark.style.display = "none";
  hideApp.style.display = "none";
  hideChromium.style.display = "none";
  showBookmark.style.display = "block";
  showApp.style.display = "block";
  showChromium.style.display = "block";
});

showApp.addEventListener("click", function () {
  bookmarkParagraph.style.display = "none";
  browserParagraph.style.display = "none";
  appParagraph.style.display = "block";
  chromiumParagraph.style.display = "none";
  showApp.style.display = "none";
  hideApp.style.display = "block";
  hideBrowser.style.display = "none";
  hideBookmark.style.display = "none";
  hideChromium.style.display = "none";
  showBrowser.style.display = "block";
  showBookmark.style.display = "block";
  showChromium.style.display = "block";
});

showChromium.addEventListener("click", function () {
  bookmarkParagraph.style.display = "none";
  browserParagraph.style.display = "none";
  appParagraph.style.display = "none";
  chromiumParagraph.style.display = "block";
  showChromium.style.display = "none";
  hideChromium.style.display = "block";
  hideBrowser.style.display = "none";
  hideApp.style.display = "none";
  hideBookmark.style.display = "none";
  showBrowser.style.display = "block";
  showApp.style.display = "block";
  showBookmark.style.display = "block";
});


hideBookmark.addEventListener("click", function () {
  bookmarkParagraph.style.display = "none"
  hideBookmark.style.display = "none"
  showBookmark.style.display = "block"
});

hideBrowser.addEventListener("click", function () {
  browserParagraph.style.display = "none";
  hideBrowser.style.display = "none";
  showBrowser.style.display = "block";
});

hideApp.addEventListener("click", function () {
  appParagraph.style.display = "none";
  hideApp.style.display = "none";
  showApp.style.display = "block";
});

hideChromium.addEventListener("click", function () {
  chromiumParagraph.style.display = "none";
  hideChromium.style.display = "none";
  showChromium.style.display = "block";
});