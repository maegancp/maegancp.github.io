(function () {
  var tTime = 100; // transition transform time from #register in ms
  var wTime = 200; // transition width time from #register in ms
  var eTime = 1000; // transition width time from inputLabel in ms

  inputLabel.innerText = "What brand do you use for "+ document.location.href.split('?')[1].split('=')[1]+'?';
  inputField.focus();
  inputContainer.style.opacity = 1;

  progressButton.addEventListener("click", validate);
  inputField.addEventListener("keyup", function (e) {
    transform(0, 0); // ie hack to redraw
    if (e.keyCode == 13) validate();
  });

  // functions
  // --------------

  // when all the questions have been answered
  function done() {
    // remove the box if there is no next question
    register.className = "close";

    register.innerText = '<h1>Hi</h1>'
    // add the h1 at the end with the welcome text
    // var h1 = document.createElement("h1");
    // h1.appendChild(
    //   document.createTextNode("Thank you for contributing")
    // );
    // setTimeout(function () {
    //   register.parentElement.appendChild(h1);
    //   setTimeout(function () {
    //     h1.style.opacity = 1;
    //   }, 50);
    // }, eTime);
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
