const searchInput = document.getElementById("inputField");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("category");

// listen for user events
searchInput.addEventListener("keyup", (event) => {
  const { value } = event.target;

  // get user search input converted to lowercase
  const searchQuery = value.toLowerCase();

  for (const nameElement of namesFromDOM) {
    // store name text and convert to lowercase
    let name = nameElement.textContent.toLowerCase();

    // compare current name to search input
    if (name.includes(searchQuery)) {
      // found name matching search, display it
      nameElement.style.display = "block";
      // nameElement.hidden = true;
    } else {
      // no match, don't display name
      nameElement.style.display = "none";
      // nameElement.hidden = false;
    }
  }
});

const displayInfo = document.getElementById("displayCat");

displayInfo.addEventListener("click", (event) => {
  document.getElementById("display").innerText = "hello";
  console.log("hello" + event.target.value);
});

(function () {
  var tTime = 100;
  var wTime = 200;
  var eTime = 1000;

  inputLabel.innerText = "Search pregnancy information";
  inputField.focus();
  inputContainer.style.opacity = 1;

  progressButton.addEventListener("click", validate);
  inputField.addEventListener("keyup", function (e) {
    transform(0, 0); // ie hack to redraw
    if (e.keyCode == 13) validate();
  });

  // function done() {

  //   register.className = "close";

  //   setTimeout(function () {
  //     thankyou.removeAttribute('hidden')
  //   }, eTime);

  //   register.className = 'open'
  // }

  function validate() {
    ok(function () {
      // hideCurrent(done);
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

const app = Vue.createApp({
  data() {
    return {
      optionVal: "",
      cats: [
        {
          name: "Signs and symptoms of pregnancy",
          link: "https://api.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/",
        },
        {
          name: "Planning your pregnancy",
          link: "https://api.nhs.uk//pregnancy/trying-for-a-baby/planning-your-pregnancy/",
        },
        {
          name: "Health things you should know in pregnancy",
          link: "https://api.nhs.uk/pregnancy/finding-out/health-things-you-should-know-in-pregnancy/",
        },
        {
          name: "Your pregnancy to-do list",
          link: "https://api.nhs.uk/pregnancy/finding-out/your-pregnancy-to-do-list/",
        },
        {
          name: "Have a healthy diet in pregnancy",
          link: "https://api.nhs.uk/pregnancy/keeping-well/have-a-healthy-diet/",
        },
        {
          name: "Pregnancy and coronavirus (COVID-19)",
          link: "https://api.nhs.uk/pregnancy/keeping-well/pregnancy-and-coronavirus/",
        },
        {
          name: "Vitamins, supplements and nutrition in pregnancy",
          link: "https://api.nhs.uk/pregnancy/keeping-well/vitamins-supplements-and-nutrition/",
        },
        {
          name: "Exercise in pregnancy",
          link: "https://api.nhs.uk/pregnancy/keeping-well/exercise/",
        },
        {
          name: "12-week scan",
          link: "https://api.nhs.uk/pregnancy/your-pregnancy-care/12-week-scan/",
        },
        {
          name: "20-week screening scan",
          link: "https://api.nhs.uk/pregnancy/your-pregnancy-care/20-week-scan/",
        },
        {
          name: "Pack your bag for labour",
          link: "https://api.nhs.uk/pregnancy/labour-and-birth/preparing-for-the-birth/pack-your-bag-for-labour/",
        },
        {
          name: "Signs that labour has begun",
          link: "https://api.nhs.uk/pregnancy/labour-and-birth/signs-of-labour/signs-that-labour-has-begun/",
        },
        {
          name: "Premature labour and birth",
          link: "https://api.nhs.uk/pregnancy/labour-and-birth/signs-of-labour/premature-labour-and-birth/",
        },
        {
          name: "Pain relief in labour",
          link: "https://api.nhs.uk/pregnancy/labour-and-birth/what-happens/pain-relief-in-labour/",
        },
        {
          name: "Your body after the birth",
          link: "https://api.nhs.uk/pregnancy/labour-and-birth/after-the-birth/your-body/",
        },
      ],

      selectedCat: "",
    };
  },

  methods: {
    getInfo() {
      // this function doesnt appear to be called when the user clicks on the category in search bar
      // information to be displayed where id='display' in html file
      console.log(this.selectedCat);
      for (c of this.cats) {
        if (c.name == this.selectedCat) {
          var url = c.link;
        }
      }
      toDisplay = `<h2 class='top'>${this.selectedCat}</h2><br>`;
      document.getElementById("display").innerHTML = toDisplay;
      // url = this.cats[this.selectedCat].link;
      console.log("url: " + url);
      var token = localStorage.getItem("token");

      axios({
        method: "get",
        url:
          "https://cors-anywhere.herokuapp.com/" +
          url +
          "?subscription-key=3c2c1520913f45709b419baed4635a8e",
        headers: { Authorization: `Bearer ${token}` },
      })
        // axios.get('https://cors-anywhere.herokuapp.com/'+url+'?subscription-key=3c2c1520913f45709b419baed4635a8e', headers: {'Origin': 'https://example.com'})

        .then((response) => {
          for (obj in response.data["mainEntityOfPage"]) {
            console.log("next obj");
            if (
              response.data["mainEntityOfPage"][obj]["mainEntityOfPage"]
                .length !== 0
            ) {
              console.log(
                response.data["mainEntityOfPage"][obj]["mainEntityOfPage"]
              );

              if (
                response.data["mainEntityOfPage"][obj]["mainEntityOfPage"][0][
                  "text"
                ].slice(0, 7) != "<video>"
              ) {
                if ( "headline" in response.data["mainEntityOfPage"][obj][
                    "mainEntityOfPage"
                  ][0]
                ) {
                  toDisplay +=
                    "<h2>" +
                    response.data["mainEntityOfPage"][obj][
                      "mainEntityOfPage"
                    ][0]["headline"] +
                    "</h2><br>";
                }
                if (
                  response.data["mainEntityOfPage"][obj]["headline"] !=
                  undefined
                ) {
                  toDisplay +=
                    "<h5 style='text-align:left'>" +
                    response.data["mainEntityOfPage"][obj]["headline"] +
                    "</h5><br>";
                }
                toDisplay +=
                  response.data["mainEntityOfPage"][obj]["mainEntityOfPage"][0][
                    "text"
                  ];
              }
            }
          }
          document.getElementById("display").innerHTML = toDisplay;
          document.getElementById("anothercat").innerHTML = '<a id="top" href="#app" style="color: #583C3C; font-weight:bold; text-decoration:none;margin-top:0;margin-bottom:10vh;"><img style="width: 50px;" src="img/backtotop.png"><br>Back to Top</a>';
        })

        .catch((error) => {
          console.log(error);
        });
    },

    saveSelectionAndReset(e) {
      let val = e.target.value;
      if (val) {
        this.optionVal = val;
      }
      e.target.value = "";
    },
  },
}).mount("#app");
