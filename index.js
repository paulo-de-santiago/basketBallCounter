/* Variables p elements */

let home = document.getElementById("counting-home")
let guest = document.getElementById("counting-guest")

console.log(home)



/* Functions for onclick events buttons  */

/* Count Home - Add 1 Add2 Add 3 points */

let countHome = 0; 

function addOneHome() {
    countHome += 1;{
    home.textContent = countHome;}
    
    console.log("Button +1 clicked", countHome)
}

function addTwoHome(){
    countHome += 2;
    home.textContent = countHome;
    console.log("Button +2 clicked", countHome)
}

function addThreeHome() {
    countHome += 3; 
    home.textContent = countHome; 
    console.log("Button +3 clicked", countHome)
}



/* Count Guest - Add 1 Add2 Add 3 points */


let countGuest = 0; 

function addOneGuest() {
    countGuest += 1;{
    guest.textContent = countGuest;}
    
    console.log("Button +1 clicked", countGuest)
}

function addTwoGuest(){
    countGuest += 2;
    guest.textContent = countGuest;
    console.log("Button +2 clicked", countGuest)
}

function addThreeGuest() {
    countGuest += 3; 
    guest.textContent = countGuest; 
    console.log("Button +3 clicked", countGuest)
}


function reset() {
    countHome = 0; 
    countGuest = 0; 
    home.textContent = 0; 
    guest.textContent =0; 
}

