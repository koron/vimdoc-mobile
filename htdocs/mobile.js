(function() {
  $(document).bind('mobileinit', on_mobileinit);

  function on_mobileinit() {
    //console.log('#on_mobileinit');
    $.mobile.addBackBtn = true;
  }

})();
// vim:set ts=8 sts=2 sw=2 tw=0 et:
