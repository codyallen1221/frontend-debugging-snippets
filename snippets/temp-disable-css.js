// Stop animations during debugging

const style = document.createElement('style');
style.innerHTML = '* { transition: none !important; animation: none !important; }';
document.head.appendChild(style);