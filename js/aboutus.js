
var starting = document.getElementById("start")
// console.log(starting)

window.addEventListener("scroll", () => {
  var pageTop = document.getElementById("start").scrollTop;
  console.log(pageTop)
  var pageBottom = pageTop + window.innerHeight;
  var tags = document.getElementsByClassName("tag");
  // console.log(tags)

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    // if (tag.offsetTop < pageBottom) 
    if (document.body.scrollTop > pageTop) 
    {
      tag.classList.add("visible");
    } 
    else {
      tag.classList.remove("visible");
    }
  }
});

