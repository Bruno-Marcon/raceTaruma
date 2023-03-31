const tamanho_corrida = 40

const motos = [
    { name: "CB500F", position: 0 },
    { name: "Hornet", position: 0 },
    { name: "MT 03", position: 0 },
    { name: "Z400", position: 0 },
];

while(true){
    const pergunta = prompt("Quer que a corrida inicie? S/N")

    if(pergunta === S){
        console.log("A corrida começou")
        break;
    }else if(pergunta === N){
        console.log("Estaremos a disposição assim que desejar iniciar a corrida");
        break;
    }else{
        console.log("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.");
    }


}