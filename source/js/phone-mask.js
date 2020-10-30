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
