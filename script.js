window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

function opensr() {
  document.getElementById("sidenav-responsive").style.width = "250px";
}

function closesr() {
  document.getElementById("sidenav-responsive").style.width = "0";
}
