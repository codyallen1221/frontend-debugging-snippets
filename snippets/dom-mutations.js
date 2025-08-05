// Helpful for debugging frontend issues when something is changing dynamically
// Examples:
    // >>> A script adds a modal, popup, or dropdown unexpectedly
    // >>> An element disappears after rendering
    // >>> A third-party script injects something into your page
    // >>> Content keeps re-rendering or replacing itself

const observer = new MutationObserver(mutations => {
  mutations.forEach(m => console.log(m));
});
observer.observe(document.body, { childList: true, subtree: true });



// How to stop observing
observer.disconnect();