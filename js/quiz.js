(function () {
  var tTime = 100;
  var wTime = 200;
  var eTime = 1000;

  inputLabel.innerText = "What brand do you use for "+ document.location.href.split('?')[1].split('=')[1].replace('%20',' ')+'?';
  inputField.focus();
  inputContainer.style.opacity = 1;

  progressButton.addEventListener("click", validate);
  inputField.addEventListener("keyup", function (e) {
    transform(0, 0);
    if (e.keyCode == 13) validate();
  });

  function done() {

    register.className = "close";

    setTimeout(function () {
      thankyou.removeAttribute('hidden')
    }, eTime);
  }

  function validate() {
    ok(function () {
      hideCurrent(done);
    });
  }

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
