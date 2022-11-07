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
                {name: 'Signs and symptoms of pregnancy', link:"signs.html" },
                {name: 'Planning your pregnancy', link: 'planning.html'},
                {name:'Health things you should know in pregnancy', link:'healthThings.html'},
                {name:'Your pregnancy to-do list',link:'toDoList.html'},
                {name:'Have a healthy diet in pregnancy', link:'healthyDiet.html'}, 
                {name:'Foods to avoid in pregnancy', link:'foodsAvoid.html'}, 
                {name:'Vitamins, supplements and nutrition in pregnancy', link:'vitamins.html'},
                {name:'Exercise in pregnancy', link:'exercise.html'},
                {name:'12-week scan', link:'twelveWeek.html'},
                {name:'20-week screening scan', link:'twentyWeek.html'},
                {name:'Pack your bag for labour', link:'packingLabour.html'}, 
                {name:'Signs that labour has begun', link:'signsLabour.html'},
                {name:'Premature labour and birth', link:'prematureLabour.html'},
                {name:'Pain relief in labour', link:'painRelief.html'},
                {name:'Your body after the birth', link:'afterBirth.html'}
            ]}}, 

    // methods: {
    //     write(cat) {
    //         document.getElementById("display").innerHTML = cat.name;

    //     }
    // }

        }).mount("#app")
