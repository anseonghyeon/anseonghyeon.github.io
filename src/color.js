function changeColor() {
    // document.getElementsByTagName("*");
    var a = document.getElementById("body");
    if(a.style.backgroundColor == "black") {
        a.style.backgroundColor = "white";    
    } else {
        a.style.backgroundColor = "black";
    }
    
}