/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
let sec = document.querySelectorAll('section'); 



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

for(let i = 0 ; i < sec.length ; i++){
    let listi = document.createElement('li');
    let node = sec[i].getAttribute('data-nav');
    let link = sec[i].id;
    
    
    listi.innerHTML = `<a class="menu__link" href="#${link}">${node}</a>`;
    
    navbar.appendChild(listi);
    
    }


// Add class 'active' to section when near top of viewport

function position(section){
    return (Math.floor(section.getBoundingClientRect().top));
}

function activeClass(){
    sec.forEach(element => {
        const elementPosition = position(element);
    if(elementPosition < 180 && elementPosition >= -180){
        element.classList.add('your-active-class');

    }
    else{
        element.classList.remove('your-active-class');
    }   

        
    });
}

const items = document.getElementsByClassName('menu__link');
function isActive(){
    
    sec.forEach((element, index) => {
        if(element.classList.contains('your-active-class')){
            items[index].style.background = 'yellow';
        }
        
        else{
            items[index].style.background = 'white';
        }
    })
}

// Scroll to anchor ID using scrollTO event
const scrollLinks = document.querySelectorAll('.navbar__menu a');
scrollLinks.forEach(link=>{
    link.addEventListener('click' , ()=>{
    for(let i = 0 ; i< sec.length ; i++){
        sec[i].addEventListener('click' , sec[i].scrollIntoView());
    }
    })
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
window.addEventListener('scroll' , activeClass);
window.addEventListener('scroll' , isActive);

// Set sections as active


