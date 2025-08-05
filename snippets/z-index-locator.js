document.querySelectorAll('*').forEach(el => {
  if (getComputedStyle(el).zIndex !== 'auto') {
    el.style.outline = '2px solid red';
  }
});