window.onscroll = function() {scroll()};

function scroll() {
  if (window.pageYOffset > document.getElementById("bar_menu").offsetTop) {
    document.getElementById("bar_menu").classList.add("bar_menu_fixed");
    document.getElementById("bar_menu").classList.remove("bar_menu_absolute");

  } else {
    document.getElementById("bar_menu").classList.remove("bar_menu_fixed");
    document.getElementById("bar_menu").classList.add("bar_menu_absolute");

  }
}