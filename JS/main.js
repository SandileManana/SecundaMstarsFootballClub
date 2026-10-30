/*hamburger menu*/
const toggleButton = toggleButton=document.querySelector(".nav-toggle");
const siteNav=document.querySelector("#site-nav");
/*button function when its clivked its must do something*/
toggleButton.addEventListener("click",function (){
    const isOpen=siteNav.classList.toggle("open");
    toggleButton.setAttribute("aria-expanded",isOpen);
    toggleButton.textContent=isOpen ? "\u2715" : "\u2630";
});
/*you are here link*/
const currentPage=window.location.pathname.split("/").pop()|| "home.html";
// grabbing all navLinks
const navLinks=document.querySelectorAll(".nav-links a");
//loop through the list ,one link  at a time
navLinks.forEach(function (link){
    if(link.getAttribute("href")=== currentPage){
        link.classList.add("active");
    }
});
