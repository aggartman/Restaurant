function setHome() {
    const homePage = document.createElement('div');
    homePage.id = "homepage";

    const homeTitle = document.createElement('h1');
    const homeSubTitle = document.createElement('h4')
    homePage.appendChild(homeTitle);
    homeTitle.innerText = 'Welcome to Mickey\'s'
    homePage.appendChild(homeSubTitle);
    homeSubTitle.innerText = 'Don\'t break nothin and be nice to Molly';

    const notreDame = document.createElement('div');
    notreDame.classList.add('notreContain');
    const notreTxt = document.createElement('p');
    notreTxt.innerText = 'In this pub there is only one team we root for. \n So don\'t ask to change the channel!';
    notreTxt.classList.add('notreTxt');
    notreDame.appendChild(notreTxt);

    const homeImg = document.createElement('div');
    homeImg.id = 'irishImg';
    notreDame.appendChild(homeImg);
    homePage.appendChild(notreDame);
    
    return homePage;
};

function loadHome() {
    const contentContainer = document.getElementById('contentContain');
    contentContainer.innerText = '';
    contentContainer.appendChild(setHome());
}

export default loadHome;