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

(function () {
  try {
    IMask(
        document.querySelector('.form__tel input'), {
          mask: '+{7}(000)000-00-00'
        })();
  } catch (e) {
    if (e.name === 'TypeError') {
      // Пропускаем ошибку
    } else {
      throw e;
    }
  }
})();
