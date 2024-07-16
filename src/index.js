import _ from 'lodash';
import './style.css';

function globalContainer(){
    const element = document.createElement("div");

    // Lodash, now imported by this script
    element.classList.add("global-container");

    return element;
}

function addButtons()
{
    const button = document.createElement("button");
    button.classList.add("home");
    button.classList.add("the_menu");
    button.classList.add("contact_us");
}

console.log("Hello, it is working.");
document.body.appendChild(globalContainer());
// document.body.globalContainer().appendChild(addButtons());