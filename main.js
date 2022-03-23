gsap.registerPlugin(ScrollTrigger);
const mainArea = document.querySelector("#main");
function displayData() {
  for (const item in data) {
    let altItem = {
      url: data[item].url,
      img: data[item].img,
      alt: data[item].alt,
      haiku: data[item].haiku,
      caption: data[item].caption,
    };
    //create parent div + add class
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.setAttribute("id", `haiku${item}`);

    //create URL around the image
    // let newURL = document.createElement("a");
    // newURL.href = altItem.url;
    // newURL.target = "_blank";

    //create img + add class
    // let newImg = new Image();
    // newImg.src = altItem.img;
    // newImg.alt = altItem.alt;
    // newImg.classList.add("backdrop");

    //create haiku poem + add class
    let newHaiku = document.createElement("div");
    newHaiku.classList.add("haiku");
    newHaiku.innerHTML = altItem.haiku;

    mainArea.appendChild(newItem);
    newURL.appendChild(newImg);
    newItem.appendChild(newURL);
    newItem.appendChild(newHaiku);
  }
}

// displayData();

// const items = document.querySelectorAll(".item");
// gsap.set(".haiku p", { opacity: 0, scale: 1.2 });
// items.forEach((item) => {
//   let tl = gsap.timeline();
//   tl.to(`#${item.id}`, 0.5, {
//     scrollTrigger: {
//       trigger: `#${item.id}`,
//       start: "center bottom",
//       end: "center center",
//       scrub: true,
//       //   markers: true,
//     },
//     y: "-=100",
//     opacity: 1,
//   }).to(`#${item.id} .haiku p`, 0.5, {
//     scrollTrigger: {
//       trigger: `#${item.id}`,
//       start: "center bottom+=200px",
//       end: "bottom center+=200px",
//       scrub: true,
//     },
//     opacity: 1,
//     scale: 1,
//   });
// });

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
