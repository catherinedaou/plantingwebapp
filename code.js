hideElement("image5");
onEvent("Shovelimage", "click", function( ) {
  setScreen("screen2");
});
onEvent("image4", "click", function( ) {
  hideElement("image4");
  showElement("image5");
});
onEvent("button2", "click", function( ) {
  setScreen("screen6");
});
onEvent("WATERINGCANIMAGE", "click", function( ) {
  setScreen("screen8");
});
onEvent("image20", "click", function( ) {
  timedLoop(1000, function() {
    setSize("image20", 70, 70);
  });
  timedLoop( 3000, function() {
    setSize("image20", 100, 100);
  });
});
