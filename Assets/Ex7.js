/* Script parité */

var a = window.prompt("Saisissez un nombre");

if (a%2 == 0) {

    alert(a + " " + "est paire" );
    
}else 

{

    alert(a + " " + "est impaire");

}

/* Script pour calculer l'âge d'une personne */

var b = window.prompt("Saisissez votre année de naissance");
b = 2023 - b

if (b >= 18) {

    alert("vous avez" + " " + b + "ans" + " " + "vous etes donc majeur" );
    
}else 

{

    alert( "vous avez" + " " + b + "ans" + " " + "vous etes donc mineur" );

}

/* Script Calculatrice */

var nombre1 = window.prompt("Saisissez un nombre");
var nombre2 = window.prompt("Saisissez un deuxième nombre");
var operateur = window.prompt("Choisissez un opérateur");
var resultat;

switch (operateur)
{
    case "+" :
        resultat = +nombre1 + +nombre2;
        alert(resultat);
        break;
    
    case "-" :
        resultat = nombre1 - nombre2;
        alert(resultat);
        break;

    case "*" :
        resultat = nombre1 * nombre2;
        alert(resultat);
        break;

    case "/" :
        resultat = nombre1 / nombre2;
        alert(resultat);
        break;

    default : 
    alert("Erreur Opérateur éronné");
}
