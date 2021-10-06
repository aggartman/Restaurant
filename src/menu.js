function setMenu() {
    const menu = document.createElement('div');
    menu.id = 'menuContain';
   
    const menuTitle = document.createElement('h1');
    menuTitle.id = 'menuTitle';
    menuTitle.innerText = 'Menu';
    menu.appendChild(menuTitle);

    const appsTitle = document.createElement('h2');
    appsTitle.id = 'appsTitle';
    appsTitle.innerText = 'Appetizers';
    menu.appendChild(appsTitle);

    const guinnessCheese = createTile('Guinness Cheese Dip', 'Guinness stout with melted Irish cheeses and cream, served with mini-pretzel rolls');
    menu.appendChild(guinnessCheese);

    const spudSkins = createTile('Spud Skins', 'fried potato boats filled with cheese, corned beef, and sour cream');
    menu.appendChild(spudSkins);


    const entrees = document.createElement('h2');
    entrees.id = 'entrees';
    entrees.innerText = 'Mains';
    menu.appendChild(entrees);

    const reuben = createTile('Reuben', 'Corned Beef, swiss cheese, sauerkraut, and Russian Dressing on Rye');
    menu.appendChild(reuben);

    const cornedBeefHash = createTile('Corned Beef Hash', 'Corned Beef on top of hashed potatoes and onions with a fried egg');
    menu.appendChild(cornedBeefHash);

    const shepherdsPie = createTile('Shepherd\'s Pie', 'Minced meat with carrots and peas topped with creamy mashed potatoes');
    menu.appendChild(shepherdsPie);

    const wedgeSalad = createTile('Wedge Salad', 'Iceberg lettuce wedge, bacon, tomatoes, and blue cheese dressing');
    menu.appendChild(wedgeSalad);

    
    const drinks = document.createElement('h2');
    drinks.id = 'drinks';
    drinks.innerText = 'Drinks';
    menu.appendChild(drinks);

    const water = createTile('Water', '');
    menu.appendChild(water);

    const soda = createTile('Soda', 'Polar\n Coke\n Diet Coke\n Ginger Ale');
    soda.classList.add('soda');
    menu.appendChild(soda);

    const guinness = createTile('Guinness', 'By the pint or draught glass');
    guinness.classList.add('guinness');
    menu.appendChild(guinness);

    const beer = createTile('Beers', 'Blue Moon\n Samuel Adams Boston Lager\n Budweiser')
    beer.classList.add('beer');
    const beerNote = document.createElement('p');
    beerNote.innerText = 'By the Pint or Mug';
    beerNote.style.fontStyle = 'italic'
    beer.appendChild(beerNote);
    menu.appendChild(beer);

    return menu;
}

function createTile(title, para) { 
    const tile = document.createElement('div');
    tile.classList.add('menuItem');

    const titleTxt = document.createElement('h3');
    titleTxt.innerText = title;
    tile.appendChild(titleTxt);

    const paragraph = document.createElement('p');
    paragraph.innerText = para;
    tile.appendChild(paragraph);

    return tile;
}

function loadMenu() {
    const container = document.getElementById('contentContain');
    container.innerText = '';
    container.appendChild(setMenu());
}

export default loadMenu;