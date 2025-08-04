[].forEach.call(document.querySelectorAll('*'), function(el) {
  if (el.offsetWidth > document.documentElement.clientWidth) {
    console.log('Overflowing element:', el);
  }
});