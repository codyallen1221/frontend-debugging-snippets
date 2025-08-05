// Highlight sticky/fixed elements that might block UI

document.querySelectorAll('*').forEach(el => {
  const pos = getComputedStyle(el).position;
  if (pos === 'fixed' || pos === 'sticky') {
    el.style.outline = '3px solid purple';
  }
});