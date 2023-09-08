function filterBooks(category, clickedButton) {
  // Récupère tous les boutons
  var buttons = document.querySelectorAll('.btn');
  
  // Parcours tous les boutons
  buttons.forEach(function(button) {
    if (button === clickedButton) {
      // Active le bouton actuel
      button.classList.add('active-button');
    } else {
      // Désactive les autres boutons
      button.classList.remove('active-button');
    }
  });

  // Récupère tous les éléments avec la classe "portfolio-item"
  var books = document.querySelectorAll('.portfolio-item');
  
  // Parcours tous les livres
  books.forEach(function(book) {
    // Vérifie si le livre a la classe correspondant à la catégorie
    if (category === 'tous' || book.classList.contains(category)) {
      book.style.display = 'block'; // Affiche le livre
    } else {
      book.style.display = 'none'; // Masque le livre
    }
  });
}
