'use strict';

(function () {
  var header = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__toggle');

  header.classList.add('page-header--menu-closed');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('page-header--menu-closed')) {
      header.classList.remove('page-header--menu-closed');
      header.classList.add('page-header--menu-opened');
    } else {
      header.classList.add('page-header--menu-closed');
      header.classList.remove('page-header--menu-opened');
    }
  });
})();

'use strict';
/* global IMask */
/* eslint no-undef: "error"*/
/* eslint new-cap: ["error", { "capIsNewExceptions": ["IMask"] }]*/
(function () {
  try {
    IMask(
        document.querySelector('.form__tel input'), {
          mask: '[#]00000000000',
          definitions: {
            '#': /[+]/
          }
        })();
  } catch (e) {
    if (e.name === 'TypeError') {
      // Пропускаем ошибку
    } else {
      throw e;
    }
  }
})();

//pattern="[+]0[ ][\][(]000[\)][ ]000[-]00[-]00"
