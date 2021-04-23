function renderContact(place) {

  const contactDiv = document.createElement('div');
  const openingHours = document.createElement('div');
  const restaurantLocation = document.createElement('div');
  const remoteContact = document.createElement('div');

  contactDiv.classList.add('contact-info');
  openingHours.classList.add('opening-hours');
  restaurantLocation.classList.add('location');
  remoteContact.classList.add('remote-contact');
  const contactCards = { openingHours, restaurantLocation, remoteContact };

  restaurantLocation.innerHTML = '<h1>Location</h1><span>Nohaveidea Street 12</span><span>00171, Roma RM, Italy</span>';

  remoteContact.innerHTML = '<h1>Remote Contact</h1><span>(83) 98860-2823</span><span>ricco@restaurant.com</span>';

  openingHours.innerHTML = '<h1>Opening Hours</h1><span>12:00-23:00</span><span>**Sunday, Wednesday, Friday and Saturday**</span>';

  contactDiv.appendChild(restaurantLocation);
  contactDiv.appendChild(remoteContact);
  contactDiv.appendChild(openingHours);

  

  place.appendChild(contactDiv);
  
}

export default renderContact
