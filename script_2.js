function factorial() {
    var number = prompt("De quel nombre veux-tu calculer la factorielle ?", "");
    var result = 1;
    for(let count = 1; count <= number; count++){
        result = result * count;
      }
    console.log("Le resultat de la factorial de " + number + " est " + result);

  }
  
  factorial();