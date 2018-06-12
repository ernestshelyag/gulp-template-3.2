function modals () {

  // form

  $('.modal-link').magnificPopup({
    type: 'inline',
    preloader: false,
    removalDelay: 300,
    mainClass: 'my-mfp-animate',
    focus: '.focus-item',
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '.focus-item';
        }
      }
    }
  });

  // video

  $('.video-link').magnificPopup({
    mainClass: 'my-mfp-animate',
    removalDelay: 300,
    type: 'iframe',
    preloader: false
  });

}
