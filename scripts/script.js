window.onload = function () {
  // ============= Arrow Jump ================
  //Get arrow element
  if (document.getElementById('arrow')) {
    const arrow = document.getElementById("arrow");
    arrowJump();
    //Makes arrow jump
    function arrowJump () {
      arrow.classList.add('jump');
    }
    function removeJump () {
      arrow.classList.remove('jump');
    }
     //Set jump class
     setInterval(arrowJump, 20000);
    //remove jump class
    arrow.addEventListener('transitionend', removeJump);
  }
}
