let rep = 1
while(rep == 1){
let heroi = prompt ("Qual o nome do heroi ")
let experiencia = prompt ("Qual é seu XP ")
let nivel = ""

if(experiencia <= 1000){
     nivel = "Ferro"

}else if(experiencia >= 1001 && experiencia <= 2000){
    nivel = "Bronze"

}else if(experiencia >= 2001 && experiencia <= 3000){
    nivel = "Prata"

}else if(experiencia >= 3001 && experiencia <= 5000){
    nivel = "Ouro"

}else if (experiencia >= 5001 && experiencia <= 7000){
    nivel = "Platina"

}else if(experiencia >= 7001 && experiencia <= 8000){
    nivel = "Ascendente"

}else if(experiencia >= 8001 && experiencia <= 10000){
    nivel = "Imortal"

}else if(experiencia <= 10001){
    nivel = "Radiante"
}


document.write(heroi + " possui um Nivel de " + nivel + "<br/>")


let repeticao = prompt("Voçe quer adicionar outro heroi. 1 = Sim 2 =Não")

if(repeticao == 2){
    break
}


}





















