'use strict';

(function () {
  try {
    IMask(
        document.querySelector('.form__tel input'), {
          mask: '00000000000'
        })();
  } catch (e) {
    if (e.name === 'TypeError') {
      // Пропускаем ошибку
    } else {
      throw e;
    }
  }
})();
