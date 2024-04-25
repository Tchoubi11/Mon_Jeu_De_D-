//Déclaration des variables principales à ajouter dans le code

//let score :tableau qui stocke les scores globaux des joueurs

//let roundScore : Un nombre entier qui stocke le score temporaire (ROUND) du joueur actif pendant son tour.

// let activePlayer : Un nombre entier qui indique le joueur actif. Il peut être 1 pour le joueur 1 ou 2 pour le joueur 2.

//let gamePlaying : Un booléen qui indique si le jeu est en cours ou non. Il est utilisé pour contrôler le déroulement du jeu et pour empêcher les actions des joueurs lorsque le jeu est terminé.
let scores, roundScore, activePlayer, gamePlaying;


init();

//Récupérons le bouton Lancer de Dé et vérifions ce qui se passe lorsque le joueur lance le dé
document.querySelector('#roll').addEventListener('click', function() {
    if (gamePlaying) {
        //Générons un nombre entier entre 1 et 6 inclus,simulant le lancé de Dé à 6 faces
        let dice = Math.floor(Math.random() * 6) + 1;

        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#round-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

    //Récupérons le bouton Hold qui ajoute le score global du joueur après chaque lancé de Dé
});document.querySelector('#hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer - 1] += roundScore;
        document.querySelector('#global-' + activePlayer).textContent = scores[activePlayer - 1];

        if (scores[activePlayer - 1] >= 100) {
            document.querySelector('#score-' + activePlayer).classList.add('active');
            document.querySelector('#score-' + activePlayer).textContent = 'Winner!';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});
