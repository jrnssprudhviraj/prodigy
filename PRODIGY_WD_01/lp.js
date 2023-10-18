// Add interactivity to the navigation menu
window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      document.querySelector('.navigation').classList.add('active');
    } else {
      document.querySelector('.navigation').classList.remove('active');
    }
  });
  
  // Change the color of the menu item when hovered over
  document.querySelectorAll('.navigation a').forEach(function(link) {
    link.addEventListener('mouseover', function() {
      this.style.color = '#fff';
    });
  
    link.addEventListener('mouseout', function() {
      this.style.color = '#000';
    });
  });
  