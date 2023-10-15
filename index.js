var nameGamer = "Paola"
var xp = 5900

function nivel(){
  if (xp <= 1000) {
      return "Nível Ferro"     
  }

  else if (xp >= 1001 && xp <= 2000) {
    return "Nível Bronze"    
  }

  else if (xp >= 2001 && xp <= 5000) {
    return "Nível Prata"    
  }

  else if (xp >= 5001 && xp <= 7000) {
    return "Nível Ouro"    
  }

  else if (xp >= 7001 && xp <= 8000) {
    return "Nível Platina"    
  }

  else if (xp >= 8001 && xp <= 9000) {
    return "Nível Ascendente"    
  }

  else if (xp >= 9001 && xp <= 10000) {
    return "Nível Imortal"    
  }

  else if (xp >= 10001) {
   return "Nível Radiante"    
  }  
} 

var nivelDoJogador = nivel()

console.log("O herói é " + nameGamer + " e está no " + nivelDoJogador )
