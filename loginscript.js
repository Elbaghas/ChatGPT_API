const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
alert("Centre Régional des Métiers de l'Education et de la Formation -Souss Massa")
const passwordInput = document.getElementById('password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (usernameInput.value.trim() === '') {
    alert('Veuillez saisir un nom d\'utilisateur.');
    usernameInput.focus();
    return;
  }
  if (passwordInput.value.trim() === '') {
    alert('Veuillez saisir un mot de passe.');
    passwordInput.focus();
    return;
  }
  // Vérifiez les informations d'identification de l'utilisateur ici en utilisant une requête Ajax ou une méthode similaire.
  // Si les informations sont correctes, redirigez l'utilisateur vers la page contenant le chatbot.
  // Sinon, affichez un message d'erreur.
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  if (username === 'baghas@.ma' && password === '123456789Hp') {
    window.location.href = 'index.html'; // Rediriger vers la page contenant le chatbot
  } else {
    alert('Les informations d\'identification sont incorrectes. Veuillez réessayer.');
  }
});

