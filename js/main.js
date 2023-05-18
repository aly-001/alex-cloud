const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

window.addEventListener('resize', function() {
  var inputs = document.querySelectorAll('.scalable-placeholder');
  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    if (window.innerWidth > 500) {
      input.placeholder = 'Enter domain name here...';
    } else {
      input.placeholder = 'Domain name...';
    }
  }
});