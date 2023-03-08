const click = document.getElementById("click");
const search = document.getElementById("search");
const share = document.getElementById("share");

const showClick = document.getElementById("show-click");
const showSearch = document.getElementById("show-search");
const showShare = document.getElementById("show-share");

search.style.display = "none";
share.style.display = "none";

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