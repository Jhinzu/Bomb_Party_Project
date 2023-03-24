
fetch("GameAPI.json") // envoie notre dossier json dans notre serv
.then(promesse => promesse.json()) // je lui fais une prommesse
.then(data => {
    // Parcourir tous les éléments du tableau
    data.forEach(function(item) {

        console.log(item.title);
      });
  const inputTitre = document.getElementById("input-titre");
  const btnValider = document.getElementById("btn-valider");
  const scoreContainer = document.getElementById("score");
  let scoreValue = 0 ;
  function displayScore(){
    scoreContainer.innerHTML = scoreValue;
  }


  function randomWords() {
    // Définir l'alphabet
    const alphabet = 'o';
    // Générer un index aléatoire pour le premier mot
    const index1 = Math.floor(Math.random() * alphabet.length);
    // Générer un index aléatoire pour le deuxième mot
    const index2 = Math.floor(Math.random() * alphabet.length);
    // Récupérer les lettres correspondant aux index générés
    const letter1 = alphabet.charAt(index1);
    // Retourner les deux lettres sous forme de mot
    return letter1 
  }
  
  // Exemple d'utilisation de la fonction
  const randomletter = randomWords();
  console.log(randomletter); // affichera deux lettres aléatoires de l'alphabet, par exemple "kp"
  

  // Ajouter un écouteur d'événement keypress à l'élément input
  inputTitre.addEventListener("keypress", function(event) 
    {
        // Vérifier si la touche pressée est la touche Entrée
        if (event.keyCode === 13) {
        event.preventDefault(); // Empêcher le comportement par défaut (soumission du formulaire)
        btnValider.click(); // Déclencher le clic sur le bouton "Valider"
        }
    });

  btnValider.addEventListener("click", function() 
  {
    const entreeUtilisateur = inputTitre.value.toLowerCase();
                                                               //function pour que les Maj et Min ne sois pas pris en compte
    const titresEnMinuscules = data.map(function(item) {
      return item.title.toLowerCase();
    });
    console.log(entreeUtilisateur)
    // const indexTitre = titresEnMinuscules.includes(entreeUtilisateur);
    // if (titresEnMinuscules.includes(entreeUtilisateur) ) {
    if(titresEnMinuscules.indexOf(entreeUtilisateur) >= 0 && titresEnMinuscules[titresEnMinuscules.indexOf(entreeUtilisateur)].includes(randomletter) ){
      alert("Titre trouvé !");
      scoreValue ++;
      console.log(scoreValue)
      return displayScore;
    } else {
      alert("Titre non trouvé !");
      console.log(randomletter);
      scoreValue --;
      console.log(scoreValue)
    }
  });
});


