document.querySelectorAll('*').forEach(el => {
  const style = getComputedStyle(el);
  if (parseInt(style.marginTop) > 0) el.style.borderTop = '2px dashed orange';
  if (parseInt(style.marginBottom) > 0) el.style.borderBottom = '2px dashed orange';
});