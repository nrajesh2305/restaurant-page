import "./style.css";


function Menu()
{
    const home = document.querySelector("#home");
    const contact_us = document.querySelector("#contact_us");
    const menu = document.querySelector("#menu");
    home.style.backgroundColor = "tan";
    contact_us.style.backgroundColor = "tan";
    menu.style.backgroundColor = "rgb(165, 137, 103)";
    const info_section = document.querySelector("#info-section");
    info_section.innerHTML = "";
    info_section.classList.add('menu-grid');
    info_section.classList.remove("home-grid");
    info_section.classList.remove("contact-grid");
    for(let i = 0; i < 6; i++)
    {
        const gridItem = document.createElement('div');
        gridItem.className = "menu_item";
        info_section.appendChild(gridItem);
    }
}

export default Menu;