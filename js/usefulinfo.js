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
        } else {
            // no match, don't display name
            nameElement.style.display = "none";
        }
    }
});

const displayInfo = document.getElementById("displayCat") ; 

displayInfo.addEventListener("click", (event) => {
    document.getElementById("display").innerText = "hello";
    console.log(event.target.value);
});



inputLabel.innerText = "Search pregnancy information" ; 
inputField.focus();
inputContainer.style.opacity = 1;

const app = Vue.createApp({
    data() {
        return {
            cats : [
                {name: 'Signs and symptoms of pregnancy', link:"https://api.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/" },
                {name: 'Planning your pregnancy', link: 'https://api.nhs.uk/pregnancy/trying-for-a-baby/signs-and-symptoms-of-pregnancy/'},
                {name:'Health things you should know in pregnancy', link:'https://api.nhs.uk/pregnancy/finding-out/health-things-you-should-know-in-pregnancy/'},
                {name:'Your pregnancy to-do list',link:'https://api.nhs.uk/pregnancy/finding-out/your-pregnancy-to-do-list/'},
                {name:'Have a healthy diet in pregnancy', link:'https://api.nhs.uk/pregnancy/keeping-well/have-a-healthy-diet/'}, 
                {name:'Foods to avoid in pregnancy', link:'https://api.nhs.uk/pregnancy/keeping-well/foods-to-avoid/'}, 
                {name:'Vitamins, supplements and nutrition in pregnancy', link:'https://api.nhs.uk/pregnancy/keeping-well/vitamins-supplements-and-nutrition/'},
                {name:'Exercise in pregnancy', link:'https://api.nhs.uk/pregnancy/keeping-well/exercise/'},
                {name:'12-week scan', link:'https://api.nhs.uk/pregnancy/your-pregnancy-care/12-week-scan/'},
                {name:'20-week screening scan', link:'https://api.nhs.uk/pregnancy/your-pregnancy-care/20-week-scan/'},
                {name:'Pack your bag for labour', link:'https://api.nhs.uk/pregnancy/labour-and-birth/preparing-for-the-birth/pack-your-bag-for-labour/'}, 
                {name:'Signs that labour has begun', link:'https://api.nhs.uk/pregnancy/labour-and-birth/signs-of-labour/signs-that-labour-has-begun/'},
                {name:'Premature labour and birth', link:'https://api.nhs.uk/pregnancy/labour-and-birth/signs-of-labour/premature-labour-and-birth/'},
                {name:'Pain relief in labour', link:'https://api.nhs.uk/pregnancy/labour-and-birth/what-happens/pain-relief-in-labour/'},
                {name:'Your body after the birth', link:'https://api.nhs.uk/pregnancy/labour-and-birth/after-the-birth/your-body/'}
            ]}}, 

            selectedCat: null,

    methods: {
        getInfo(index) {
            url = this.cats[index].link;
            console.log("url: " + url)

            axios.get(url)

            .then(response => {
                toDisplay = `<h1>${this.cats[index].name}</h1><br>`
                for (obj in response.data["mainEntityOfPage"]) {
                    toDisplay += "<h3>" + response.data["mainEntityOfPage"][obj]["mainEntityOfPage"][0]["headline"] + "</h3><br>" + response.data["mainEntityOfPage"][obj]["mainEntityOfPage"][0]["text"] ;
                }
                document.getElementById("display").innerHTML = toDisplay;
            })

            .catch(error => {
                console.log(error);
            })
        }
    }

        }).mount("#app")
