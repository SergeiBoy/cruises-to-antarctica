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
