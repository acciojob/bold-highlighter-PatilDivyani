function highlight() {
    //Write your code here
    for(let i = 0; i<boldText.length; i++){
        boldText[i].style.color = "green";
    }

}


function return_normal() {
    //Write your code here
    for(let i = 0; i<boldText.length; i++){
        boldText[i].style.color = "black";
    }
    
}

//let boldText = document.getElementsByTagName("p")[1].children;
let boldText = document.getElementsByTagName("strong");
