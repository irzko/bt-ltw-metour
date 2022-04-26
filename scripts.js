function myFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav__list") {
      x.className += " responsive";
    } else {
      x.className = "nav__list";
    }
  }