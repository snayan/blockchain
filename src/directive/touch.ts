import Vue from 'vue';
import browser from '@/utils/browser';

Vue.directive('touch', {
  // When the bound element is inserted into the DOM...
  inserted: function(el, binding) {
    const fn = binding.value;
    const arg = binding.arg;
    if (browser.pc) {
      if (arg) {
        return false;
      } else {
        el.addEventListener('click', fn);
      }
    } else {
      el.addEventListener('touchstart', fn);
    }
  },
});
