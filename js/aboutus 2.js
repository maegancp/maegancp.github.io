
var starting = document.getElementById("start")
// console.log(starting)

window.addEventListener("scroll", () => {
  var tags = document.getElementsByClassName("tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    // if (tag.offsetTop < pageBottom) 
    if (window.scrollY > 0) 
    {
      tag.classList.add("visible");
    } 
    else {
      tag.classList.remove("visible");
    }
  }
});

