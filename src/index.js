import renderHome from './home'
import createMenu from './general'

const pageContent = document.querySelector('.content');
const mainContent = document.querySelector('main');

createMenu(pageContent, mainContent);
renderHome();
