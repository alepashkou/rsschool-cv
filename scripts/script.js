function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu_button', '.burger-menu_lines');
  let links = menu.find('.burger-menu_link');
  let overlay = menu.find('.burger-menu_overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overlow', 'hidden');
    } else {
      $('body').css('overlow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');

function diffDates() {
  let dn = 1;
  let mn = 7;
  let yn = 2019;
  let day_1 = new Date(yn, mn, dn).getTime(), // y, m, d
    day_2 = new Date().getTime();
  z = Math.floor((day_1 - day_2) / (60 * 60 * 24 * 1000));
  let sumDays = Math.abs(z);
  let year = Math.floor(sumDays / 365);
  let mounth = Math.floor((sumDays - year * 365) / 30);
  let days = sumDays - (year * 365 + mounth * 30);
  document.getElementById('date').innerHTML = `${year}y ${mounth}m ${days}d`;
}
diffDates();
