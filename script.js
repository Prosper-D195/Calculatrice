let premierNombre = '';
let deuxiemeNombre = '';
let operateur = '';
let resultat = '';

const ecran = document.getElementById('ecran');

document.querySelectorAll('button').forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeur = bouton.textContent;

    if (valeur >= '0' && valeur <= '9') {
      if (operateur === '') {
        premierNombre += valeur;
        ecran.value = premierNombre;
      } else {
        deuxiemeNombre += valeur;
        ecran.value = deuxiemeNombre;
      }
    } else if (valeur === '+' || valeur === '-' || valeur === '*' || valeur === '/') {
      operateur = valeur;
        } else if (valeur === '=') {
      calculer();
    } else if (valeur === 'Effacer') {
      effacer();
    }
  });
});

function calculer() {
  const num1 = parseFloat(premierNombre);
  const num2 = parseFloat(deuxiemeNombre);

  switch (operateur) {
    case '+':
      resultat = num1 + num2;
      break;
    case '-':
      resultat = num1 - num2;
      break;
    case '*':
         resultat = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        resultat = 'Erreur : division par zéro !';
      } else {
        resultat = num1 / num2;
      }
      break;
    default:
      resultat = 'Erreur : opérateur inconnu !';
  }

  ecran.value = resultat;
  premierNombre = resultat.toString();
  deuxiemeNombre = '';
  operateur = '';
}


function effacer() {
  premierNombre = '';
  deuxiemeNombre = '';
  operateur = '';
  resultat = '';
  ecran.value = '';
}