/**
 * Theme: Dastone - Responsive Bootstrap 5 Admin Dashboard
 * Author: Uwingo
 * Form Repeater
 */

$(document).ready(function () {
  'use strict';

  $('.repeater-default').repeater();

  $('.repeater-custom-show-hide').repeater({
    show: function () {
      $(this).slideDown();
    },
    hide: function (remove) {
      if (confirm('Are you sure you want to remove this item?')) {
        $(this).slideUp(remove);
      }
    }
  });
});