import "./style.css";

let global_container = document.createElement("div");
let nav_container = document.createElement("div");

global_container.className = "global-container";
nav_container.className = "nav-container";

let home = document.createElement("button");
let menu = document.createElement("button");
let contact_us = document.createElement("button");

home.className = "home";
home.innerText = "Home";
home.style.backgroundColor = "rgb(165, 137, 103)";

menu.className = "the_menu";
menu.innerText = "Menu";

contact_us.className = "contact_us";
contact_us.innerText = "Contact Us";

home.addEventListener("click", () =>
{
    home.style.backgroundColor = "rgb(165, 137, 103)";
    menu.style.backgroundColor = "tan";
    contact_us.style.backgroundColor = "tan";
    home.addEventListener("mouseover", () => 
    {
        home.style.transition = "0.25s";
        home.style.backgroundColor = "rgb(165, 137, 103)";
    });
    home.addEventListener("mouseout", () => 
    {
        home.style.transition = "0.25s";
        home.style.backgroundColor = "rgb(165, 137, 103)";
    });
    menu.addEventListener("mouseover", () => 
    {
        menu.style.transition = "0.25s";
        menu.style.backgroundColor = "rgb(165, 137, 103)";
    });
    menu.addEventListener("mouseout", () => 
    {
        menu.style.transition = "0.25s";
        menu.style.backgroundColor = "tan";
    });
    contact_us.addEventListener("mouseover", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    });
    contact_us.addEventListener("mouseout", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "tan";
    });
});

menu.addEventListener("click", () =>
{
    menu.style.backgroundColor = "rgb(165, 137, 103)";
    home.style.backgroundColor = "tan";
    contact_us.style.backgroundColor = "tan";
    menu.addEventListener("mouseover", () =>
    {
        menu.style.backgroundColor = "rgb(165, 137, 103)";
    });
    menu.addEventListener("mouseout", () =>
    {
        menu.style.backgroundColor = "rgb(165, 137, 103)";
    });
    home.addEventListener("mouseover", () => 
    {
        home.style.transition = "0.25s";
        home.style.backgroundColor = "rgb(165, 137, 103)";
    });
    home.addEventListener("mouseout", () => 
    {
        home.style.transition = "0.25s";
        home.style.backgroundColor = "tan";
    });
    contact_us.addEventListener("mouseover", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    });
    contact_us.addEventListener("mouseout", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "tan";
    });
});

contact_us.addEventListener("click", () =>
{
    contact_us.addEventListener("mouseover", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    });
    contact_us.addEventListener("mouseout", () => 
    {
        contact_us.style.transition = "0.25s";
        contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    });
    contact_us.style.backgroundColor = "rgb(165, 137, 103)";
    home.style.backgroundColor = "tan";
    menu.style.backgroundColor = "tan";
});

let info_section = document.createElement("div");
info_section.className = "info-section";

document.body.appendChild(global_container);
global_container.appendChild(nav_container);
global_container.appendChild(info_section);
nav_container.appendChild(home);
nav_container.appendChild(menu);
nav_container.appendChild(contact_us);
