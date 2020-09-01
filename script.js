function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    var y = document.getElementById("search")
    if (y.className === "search-cotainer") {
      y.className += " responsive";
    } else {
      y.className = "search-cotainer";
    }
  }
