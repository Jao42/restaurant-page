import createMenu from './general';

function createDefaultFigures(place, image, alt, caption) {

  const homeDivFigure = document.createElement('div');
  const homeFigure = document.createElement('figure');
  const homeFigureImg = document.createElement('img');
  const homeFigCaption = document.createElement('figcaption');

  homeDivFigure.classList.add('home-image-div');
  homeFigure.classList.add('home-image');
  homeFigCaption.classList.add('default-figcaption');

  homeFigureImg.setAttribute('src', image);
  homeFigureImg.setAttribute('alt', alt);
  homeFigCaption.innerHTML = caption;

  homeDivFigure.appendChild(homeFigure);
  homeFigure.appendChild(homeFigureImg);
  homeFigure.appendChild(homeFigCaption);

  place.appendChild(homeDivFigure);
  return 0;
  } 

function renderHome() {

  const main = document.querySelector('main');
  const pageContent = document.querySelector('.content');

  createDefaultFigures(
      main,
      './imgs/restaurant4-red.jpg', 
      'Restaurant lounge',
      'Ricco Ristourante<br>for over 10,000 years making the most expensive food i n Italy');

  createDefaultFigures(
      main,
      './imgs/restaurant-red.jpg', 
      'A restaurant Chief', 
      'With incredibly well-paid chefs');
  
  createMenu(pageContent, main);
  
  }

export default renderHome