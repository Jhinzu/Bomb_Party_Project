fetch("GameAPI.json") // envoie notre dossier json dans notre serv
  .then(promesse => promesse.json()) // je lui fais une prommesse
  .then(data => {

    // Parcourir tous les éléments du tableau
    data.forEach(function(item) {
      console.log(item.title);
    });
  });
