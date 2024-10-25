function checkOrientation() {
  if (window.innerWidth > window.innerHeight) {
    document.getElementById('warningBox').style.display = 'block';
  } else {
    document.getElementById('warningBox').style.display = 'none';
  }
}

// Check orientation on load and resize
window.addEventListener('load', checkOrientation);
window.addEventListener('resize', checkOrientation);
