// кнопка бургер
const menuButton = document.querySelector('.menu-button');
const headerBlock = document.querySelector('.header');

function hendleMenuButtonClick() {
  menuButton.classList.toggle('menu-button_type_active');

  if (headerBlock.classList.contains('header_type_hide') && menuButton.classList.contains('menu-button_type_active')) {
    headerBlock.classList.remove('header_type_hide');
  } else {
    headerBlock.classList.add('header_type_hide');
  };
}

menuButton.addEventListener('click', hendleMenuButtonClick);

