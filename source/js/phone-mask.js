'use strict';

(function () {
  IMask(
      document.querySelector('.form__tel input'), {
        mask: '+{7}(000)000-00-00'
      })();
})();
