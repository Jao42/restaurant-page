function renderDishesMenu(place) {

  let menuDiv = document.createElement('div');
  
  menuDiv.classList.add('dishes-menu');
  place.appendChild(menuDiv);

  createDish(['./imgs/pasta1.jpg', 'PASTA', '$450'], menuDiv);
  createDish(['./imgs/pasta2.jpg', 'PASTA', '$800'], menuDiv);
  createDish(['./imgs/pasta3.jpg', 'PASTA', '$1610'], menuDiv);
  createDish(['./imgs/pasta4.jpg', 'PASTA', '$10010'], menuDiv);

}

function createDish(dish, place) {

  let menuDishDiv = document.createElement('div');
  let dishImg = document.createElement('img');
  let dishName = document.createElement('span');
  let dishFruFru = document.createElement('span');
  let dishPrice = document.createElement('span');
  
  dishImg.setAttribute('src', dish[0]);

  menuDishDiv.classList.add('dishes-menu-item');
  dishImg.classList.add('dish-menu-image');
  dishName.classList.add('dish-name');
  dishFruFru.classList.add('frufru');
  dishPrice.classList.add('dish-price');
  

  dishName.textContent = dish[1];
  dishPrice.textContent = dish[2];

  menuDishDiv.appendChild(dishImg);
  menuDishDiv.appendChild(dishName);
  menuDishDiv.appendChild(dishFruFru);
  menuDishDiv.appendChild(dishPrice);

  place.appendChild(menuDishDiv);

  }

export { renderDishesMenu, createDish };
