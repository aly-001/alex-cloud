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
    if (window.innerWidth > 768) {
      input.placeholder = 'Enter domain name here...';
    } else {
      input.placeholder = 'Domain name...';
    }
  }
});

/* window.addEventListener('uncollapse', function() {
  var sections = document.querySelectorAll('.collapsible');
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (window.innerWidth <= 768) {
      if (i === 0) {
        section.classList.add('collapsible--expanded');
      } else {
        section.classList.remove('collapsible--expanded');
      }
    } else if (!section.classList.contains('collapsible--expanded')) {
      section.classList.add('collapsible--expanded');
    }
  }
});

// Call the 'uncollapse' event on page load and window resize
window.addEventListener('DOMContentLoaded', function() {
  window.dispatchEvent(new Event('uncollapse'));
});

window.addEventListener('resize', function() {
  window.dispatchEvent(new Event('uncollapse'));
});
 */