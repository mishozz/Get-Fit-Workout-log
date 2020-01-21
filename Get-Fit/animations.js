"use strict";
const setupHeaderUi = (user)=>{
    
        if(user) {
            const login_register_links = document.querySelectorAll(".login-register-link");
            login_register_links.forEach(element => {
                element.style.display = "none";
            });
        }
        else {
            const logout_link = document.getElementById("logout-link");
            const exercise_link = document.getElementById("exercises-page");
              exercise_link.style.display = "none";
              logout_link.style.display = "none";
        }
}

const navigation = ()=>{
    const min_media = window.matchMedia("(min-width: 1024px)");
    const element = document.getElementById("header-ul");
    const menu_button = document.getElementById("menu-btn");
    
    min_media.addListener(()=>{
       element.classList.remove("active-nav");
    })
    menu_button.addEventListener("click", ()=>{      
        element.classList.toggle("active-nav");
    }) 
}

navigation();




