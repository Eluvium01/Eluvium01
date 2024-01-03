var ennemiPoints = [100, 100, 100];
var joueurPoints = [100, 100, 100];

function updateCompteurs() {
    // Mettez à jour les compteurs de l'ennemi
    for (var i = 1; i <= 3; i++) {
        var degatsEnnemi = parseFloat(document.getElementById(`degatsEnnemi${i}`).value);

        if (!isNaN(degatsEnnemi) && degatsEnnemi >= 0) {
            ennemiPoints[i - 1] -= degatsEnnemi;
            document.getElementById(`ennemiCompteur${i}`).textContent = `Ennemi ${i}: ${Math.max(0, ennemiPoints[i - 1]).toFixed(2)}`;
            document.getElementById(`degatsEnnemi${i}`).value = "";
        }
    }

    // Mettez à jour les compteurs du joueur
    for (var j = 1; j <= 3; j++) {
        var degatsJoueur = parseFloat(document.getElementById(`degatsJoueur${j}`).value);

        if (!isNaN(degatsJoueur) && degatsJoueur >= 0) {
            var ancienPoints = joueurPoints[j - 1];
            joueurPoints[j - 1] -= degatsJoueur;
            document.getElementById(`joueurCompteur${j}`).textContent = `Joueur ${j}: ${Math.max(0, joueurPoints[j - 1]).toFixed(2)}`;
            document.getElementById(`degatsJoueur${j}`).value = "";

            // Affichez le message de perte de points
            var pertePoints = ancienPoints - joueurPoints[j - 1];
            document.getElementById('message').textContent = `Joueur ${j} a perdu ${pertePoints} points de vie !`;

            // Réinitialisez le message après quelques secondes
            setTimeout(function() {
                document.getElementById('message').textContent = '';
            }, 3000);
        }
    }
}
