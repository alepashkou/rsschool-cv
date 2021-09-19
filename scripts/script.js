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
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
  console.log("☑ Вёрстка валидная (+10)")
  console.log("☑ Вёрстка семантическая (+20)")
  console.log("--- <article>, <footer>, <header>, <main>, <nav>, <section>, <details>, <summary>, <h1>, <h2>, <h3>, <h4>")
  console.log("☑ Для оформления СV используются css-стили (+10)")
  console.log("☑ Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы (+10)")
  console.log("☑ Вёрстка адаптивная: ни на одном из разрешений экрана до 320px (+10)")
  console.log("☑ Eсть адаптивное бургер-меню (+10)")
  console.log("--- Появляется при уменьшении разрешения")
  console.log("☑ На странице СV присутствует изображение - фото или аватарка автора CV (+10)")
  console.log("☑ Контакты для связи и перечень навыков оформлены в виде списка (+10)")
  console.log("☑ CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского (+10)")
  console.log("☑ CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода.(+10)")
  console.log("☑ CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. (+10)")
  console.log("☑ CV выполнено на английском языке (+10)")
  console.log("☑ Выполнены требования к Pull Request (+10)")
  console.log("☒ Есть видеорезюме автора CV на английском языке. (+10)")
  console.log("☑ дизайн, оформление, качество выполнения CV не ниже чем в примерах CV (+10)")
  console.log("150/150")
