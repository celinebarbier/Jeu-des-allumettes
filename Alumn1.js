console.log("Jeu des allumettes : ce jeu se joue à 2 joueurs. 11 allumettes sont disposées, chaque joueur prend à tour de rôle 1, 2, ou 3 allumettes. Le joueur qui prend la dernière allumette a perdu.");
var allumns = ["|","|","|","|","|","|","|","|","|","|","|"];
var variablejoueur = 0;

var prompt = require('prompt-sync')();     

function joueur(allumns) {

    variablejoueur = 0;
    console.log(allumns);
        
    var nbJoueur = prompt('Your turn:');

        if (nbJoueur == " " || nbJoueur< 0 || isNaN(nbJoueur)) {
            console.log("Error:invalid input (positive number expected");
        }
        else if (nbJoueur === "0") {
            console.log("Error: you have to remove at least one match");
        }
        else if (nbJoueur > 3) {
            console.log("Error : not enough matches");
        }
        else {
            console.log("Matches: " + nbJoueur);
            console.log("Player removed " + nbJoueur + " match(es)");
            allumns.splice(0, nbJoueur);
            variablejoueur += 1;
            return variablejoueur;
        }
}

joueur(allumns);

function AI(allumns) {
    console.log(allumns);
    console.log("AI's turn");
    var nbAI = Math.floor(Math.random() * 3) + 1;
    console.log("AI removed " + nbAI + " match(es)");
    allumns.splice(0, nbAI);
    variablejoueur -= 1;
}

function Allumn1(allumns){
    
    while (allumns.length > 0){
        if (variablejoueur == 0) {
            joueur(allumns);
            //lastPlayer = 0;
        }
        else {
            AI(allumns);
            //lastPlayer = 1;
        }
    }
    if (variablejoueur == 0)
        console.log("You lost, too bad...");
    else
        console.log("You Win!!!");
}

Allumn1(allumns);