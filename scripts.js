function navBar() {
    let x = document.getElementById("nav-container");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }