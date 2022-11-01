(function () {
  var tTime = 100; // transition transform time from #register in ms
  var wTime = 200; // transition width time from #register in ms
  var eTime = 1000; // transition width time from inputLabel in ms

  inputLabel.innerText = "Which brand do you prefer for "+document.location.href.split('?')[1].split('=')[1]+"?"
  inputContainer.style.opacity = 1;

  progressButton.addEventListener("click", validate);
  inputField.addEventListener("keyup", function (e) {
    transform(0, 0); // ie hack to redraw
    if (e.keyCode == 13) validate();
  });

  // functions
  // --------------

  function done() {
    register.className = "close";

    // add the h1 at the end with the welcome text
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode("Thanks for your contribution."));
    var prev = document.createElement("button")
    prev.appendChild(document.createTextNode('Other polls'))
    var next = document.createElement('button')
    next.appendChild(document.createTextNode('poll results'))
    setTimeout(function () {
      register.parentElement.appendChild(h1);
      register.parentElement.appendChild(prev);
      register.parentElement.appendChild(next)
      setTimeout(function () {
        h1.style.opacity = 1;
        prev.style.opacity = 1;
        next.style.opacity = 1
      }, 50);
    }, eTime);
  }

  // when submitting the current question
  function validate() {
    ok(function () {
      hideCurrent(done);
    });
  }

  // helper
  // --------------

  function hideCurrent(callback) {
    inputContainer.style.opacity = 0;
    setTimeout(callback, wTime);
  }

  function transform(x, y) {
    register.style.transform = "translate(" + x + "px ,  " + y + "px)";
  }

  function ok(callback) {
    register.className = "";
    setTimeout(transform, tTime * 0, 0, 10);
    setTimeout(transform, tTime * 1, 0, 0);
    setTimeout(callback, tTime * 2);
  }
})();
