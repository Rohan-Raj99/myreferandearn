// Simple script for any interactivity (if needed)
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
      });
  
      card.addEventListener('mouseleave', function() {
        card.style.transform = 'scale(1)';
      });
    });
  });
  