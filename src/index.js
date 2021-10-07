import _, { set } from 'lodash';
import './style.css';
import './pageLoad.js';
import Shamrocks from './Shamrocks.png';
import FightinIrish from './FightinIrish.png';
import setHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import loadHome from './home';

// sets up base html divs
document.body.id = 'reset';
const container = document.createElement('div');
document.body.appendChild(container);
container.id = 'content';
document.body.style.backgroundImage = Shamrocks;

function setBase() { 
    const background = document.createElement('div');
    const titleElement = document.createElement('h1');
    titleElement.classList.add('title');
    titleElement.innerText = 'Mickey\'s Pub';
    background.appendChild(titleElement);
    const sectionContainer = document.createElement('div');
    sectionContainer.id = 'sectionContainer';
    background.appendChild(sectionContainer);
    sectionContainer.appendChild(setNav());
    sectionContainer.appendChild(setContainer());
    
    return background;
}

function setNav() {
    const navBar = document.createElement('div');
    navBar.id = 'nav';

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('nav-button');
    homeBtn.classList.add('active');
    homeBtn.innerText = 'Home';
    homeBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setContainer();
        setActive(homeBtn);
        setHome();
    });

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('nav-button');
    menuBtn.innerText = 'Menu';
    menuBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setContainer();
        setActive(menuBtn);
        loadMenu();
    })

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('nav-button');
    contactBtn.innerText = 'Contact';
    contactBtn.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setContainer();
        setActive(contactBtn);
        loadContact();
    });

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);

    return navBar;
}

function setActive(button) {
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((btn) => {
        // btn.classList.remove("active");
        if (btn !== this) {
            btn.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function setContainer() {
    const contentContainer = document.createElement('div');
    contentContainer.id = 'contentContain';

    return contentContainer;
}

// sets up consistent content
// function titleSet() {
//     const titleElement = document.createElement('div');
//     titleElement.classList.add('background'); 
//     titleElement.innerHTML = _.join(['Mickey\'s', 'Pub'], ' ');
    
//     return titleElement
// }


// function bodySet() {
//     const sectionElement = document.createElement('div');
//     sectionElement.id = ('sectionContainer');
//     const navBar = document.createElement('div')
//     navBar.id = 'nav';
//     sectionElement.appendChild(navBar);
//     const homeBtn = document.createElement('button');
//     const menuBtn = document.createElement('button');
//     const contactBtn = document.createElement('button');
//     homeBtn.innerText = 'Home';
//     menuBtn.innerText = 'Menu';
//     contactBtn.innerText = 'Contact';
//     navBar.appendChild(homeBtn);
//     navBar.appendChild(menuBtn);
//     navBar.appendChild(contactBtn);
//     return sectionElement;
// }

// function home() {
//     const homePage = document.createElement('div');
//     homePage.id = "homepage";
//     const homeTitle = document.createElement('h1');
//     const homeSubTitle = document.createElement('h4')
//     homePage.appendChild(homeTitle);
//     homeTitle.innerText = 'Welcome to Mickey\'s'
//     homePage.appendChild(homeSubTitle);
//     homeSubTitle.innerText = 'Don\'t break nothin and be nice to Molly';
//     const notreDame = document.createElement('div');
//     notreDame.classList.add('notreContain');
//     const notreTxt = document.createElement('p');
//     notreTxt.innerText = 'In this pub there is only one team we root for. \n So don\'t ask to change the channel!';
//     notreTxt.classList.add('notreTxt');
//     notreDame.appendChild(notreTxt);
//     const homeImg = document.createElement('div');
//     homeImg.id = 'irishImg';
//     notreDame.appendChild(homeImg);
//     homePage.appendChild(notreDame);

//     return homePage;
// };

// function pageLoad(page) {
//     const sectionContainer = document.getElementById('sectionContainer');
//     sectionContainer.innerHTML = '';
//     sectionContainer.appendChild(setNav())
//     sectionContainer.appendChild(page);
// }

container.appendChild(setBase());
container.appendChild(loadHome());
// container.appendChild(bodySet());
// sectionElement.appendChild(home());