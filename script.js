const itemList = document.querySelector(".item-list");
const gridView4x4 = document.getElementById("grid-active-btn-4x4");
const gridView2x2 = document.getElementById("grid-active-btn-2x2");
const gridView1x2 = document.getElementById("details-active-btn-1x2");

gridView4x4.classList.add("active-btn");

gridView4x4.addEventListener("click", () => {
  gridView4x4.classList.add("active-btn");
  gridView2x2.classList.remove("active-btn");
  gridView1x2.classList.remove("active-btn");
  itemList.classList.remove("details-active");
  itemList.classList.remove("details-active2");
});

gridView2x2.addEventListener("click", () => {
  gridView4x4.classList.remove("active-btn");
  gridView2x2.classList.add("active-btn");
  gridView1x2.classList.remove("active-btn");
  itemList.classList.remove("details-active");
  itemList.classList.add("details-active2");
});

gridView1x2.addEventListener("click", () => {
  gridView2x2.classList.remove("active-btn");
  gridView4x4.classList.remove("active-btn");
  gridView1x2.classList.add("active-btn");
  itemList.classList.add("details-active");
  itemList.classList.remove("details-active2");
});

var el = document.getElementById("overlayBtn");
if (el) {
  el.addEventListener("click", swapper, false);
}
