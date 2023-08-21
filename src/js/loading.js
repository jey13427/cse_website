 window.onload = function() {
    window.scrollTo(0, 0);
    setTimeout(function() {
      var content = document.getElementById("loading");
      var b = document.getElementById("loadingafter");
      if (content) {
        content.style.display = "none";
        b.style.overflow = "scroll";
    }
    }, 3000); // Hide content fter 5 saeconds
  };