window.addEventListener('load', fn, false)

//=========================================//
/*/*            02) Preloader         */
//=========================================//
function fn() {
  // Preloader
  if (document.getElementById('preloader')) {
    setTimeout(() => {
      document.getElementById('preloader').style.visibility = 'hidden';
      document.getElementById('preloader').style.opacity = '0';
    }, 350);
  }
}




