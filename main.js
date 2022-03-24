const mainArea = document.querySelector("#main");

data.forEach((item) => {
  //create span tag
  let newItem = document.createElement("span");
  newItem.classList.add("item");
  newItem.setAttribute("id", `${data.indexOf(item)}`);
  newItem.innerText = `${item.alt}, `;
  mainArea.appendChild(newItem);
});

const items = document.querySelectorAll(".item");
const bgImg = document.querySelector("#bgImg");
items.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.classList.add("active");
    let src = data[item.id].src;
    bgImg.src = src;
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
    bgImg.src = "";
  });
});
