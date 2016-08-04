$("document").ready(function($){

  var waypoint = new Waypoint({
  element: document.getElementById('function-offset'),
  handler: function(direction) {
  },
  offset: function() {
    return -this.element.clientHeight
  }
})
$('#navbar').scrollspy()
});
