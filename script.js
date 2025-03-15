var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tabs");
  }

  document.getElementById(tabname).classList.add("active-tabs");
  event.currentTarget.classList.add("active-link");
}

function toggleMenu() {
  let menu = document.querySelector("nav ul");
  let icon = document.querySelector(".hamburger i");

  menu.classList.toggle("show");

  // Change icon dynamically
  if (menu.classList.contains("show")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times"); // Change to close (X) icon
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars"); // Change back to menu icon
  }
}
