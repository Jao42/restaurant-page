import { renderDishesMenu } from './menu'
import renderHome from './home'
import renderContact from './contact';

function createMenu(place, mainContent) {
  const navMenu = document.createElement('nav');
  const menuList = document.createElement('ul');

  const menuHome = document.createElement('li');
  const menuMenu = document.createElement('li');
  const menuContact = document.createElement('li');

  navMenu.classList.add('menu-nav');
  menuList.classList.add('menu-list');
  menuList.id = 'nav-menu-menu';

  menuHome.textContent = 'Home';
  menuHome.classList.add('menu-link', 'active');

  menuMenu.textContent = 'Menu';
  menuMenu.classList.add('menu-link');

  menuContact.textContent = 'Contact';
  menuContact.classList.add('menu-link');

  navMenu.appendChild(menuList);
  menuList.appendChild(menuHome);
  menuList.appendChild(menuMenu);
  menuList.appendChild(menuContact);

  place.prepend(navMenu);
  addListenersNavMenu(menuList, mainContent);

}

function addListenersNavMenu(menuList, pageContent) {

  let list = menuList.childNodes;
  list.forEach((i) => {
    i.addEventListener('click', () => { 
      if (!(i.classList.contains('active'))){
        let tabActive = document.getElementsByClassName('active')[0];
        tabActive.classList.remove('active');
        i.classList.add('active');
        pageContent.innerHTML = '';
        let tabName = i.textContent;
        if (tabName == 'Menu') renderDishesMenu(pageContent);
        else if (tabName == 'Home') renderHome();
        else renderContact(pageContent);
          
      }
    })
  });
}

export default createMenu
