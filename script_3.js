function pyramide() {
    let number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", "");
    let result;
    for(let count = 1; count <= number; count++){
        result = "";
        for(let space = 1; space <= number - count; space++){
            result += " ";
        }
        for(let i = 1; i <= count; i++){
            result += "*";
        }
        console.log(result);
    }
  }
  
  pyramide();