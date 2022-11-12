navbar = document.getElementsByClassName("navbar")[0];
logoCon = document.getElementsByClassName("logo_container")[0];
linksCon = document.getElementsByClassName("links_container")[0];
rigthNav = document.getElementsByClassName("right_nav_container")[0];
burger = document.getElementsByClassName('burger')[0];

burger.addEventListener("click" , ()=>{
    navbar.classList.toggle("h-nav-resp")
    logoCon.classList.toggle("v-class-resp")
    linksCon.classList.toggle("v-class-resp")
    rigthNav.classList.toggle("v-class-resp")
})

