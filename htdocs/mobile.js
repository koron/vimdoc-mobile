(function() {
  $(document).bind('mobileinit', on_mobileinit);

  function on_mobileinit() {
    $.mobile.defaultPageTransition = 'slide';
    $.mobile.touchOverflowEnabled = true;
  }

})();
// vim:set ts=8 sts=2 sw=2 tw=0 et:
