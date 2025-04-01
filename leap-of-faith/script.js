document.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    let assassin = document.getElementById("assassin");

    //Adjust falling speed based on scroll position
    assassin.style.top = 20 + scrollPos * 0.3 + "%";

    //optional: add fade-in effect when near haystack
    if (scrollPos > window.innerHeight * 1.8) {
        assassin.style.opacity = "0";
    }else{
        assassin.style.opacity = "1"
    }
});