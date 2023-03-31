// Trabalho de paradigmas da computação

// Corrida no circuito de Tarumã

// Aluno: Bruno Marcon

//Define o tamanho da corrida.
const tamanhoCorrida = 20

//Define o array com as motos juntamente com a posição inicial de cada uma.
const motos = [
    { name: "CB500F", position: 0 },
    { name: "Hornet", position: 0 },
    { name: "MT 03", position: 0 },
    { name: "Z400", position: 0 },
];

while(true){ 
    console.log("Olá seja bem vindo ao autodromo de Tarumã, Está pronto para corrida??")

    //Pergunta ao usuário se deseja iniciar a corrida.
    const pergunta = prompt("Quer que a corrida inicie? S/N \n")
    //Recebe a resposta do usuário.
    if(pergunta === "s"){ 
        console.log("A corrida começou")
        break;
    }else if(pergunta === "n"){
        console.log("Estaremos a disposição assim que desejar iniciar a corrida");
        break;
    }else{
        console.log("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.");
        break
    }
}
while(true) {
    // Desenha a pista e as motos, além de atualizar sempre que acontecer uma interação.
  console.log("-".repeat(tamanhoCorrida))
  motos.forEach((moto) =>
    console.log(" ".repeat(moto.position) + moto.name)
  )
  console.log("-".repeat(tamanhoCorrida))
    //Escolhe a moto a qual deseja iniciar a corrida.
    while(true){ 
        const escolheMoto = prompt("Selecione a moto que deseja acelerar de 1 a 4 \n");
        const arrayMotos = ["1", "2", "3", "4"];
        if (arrayMotos.includes(escolheMoto)) {
          const indexMoto = parseInt(escolheMoto) - 1;
          //Atualiza a posição da moto escolhida
          motos[indexMoto].position += Math.floor(Math.random() * 2) + 1;
          //Atualiza a posição de uma moto aleatoria
          const indexRandom = Math.floor(Math.random() * arrayMotos.length);
          motos[indexRandom].position += Math.floor(Math.random() * 2) + 1 ;
          
          break;
        } else {
          console.log(
            "Resposta inválida. Por favor, digite um número entre 1 e 4."
          );
        }
    }
     //Verifica que alguma moto chegou ao final da corrida
    const ganhador = motos.filter((moto) => moto.position >= tamanhoCorrida);

     //Define o vencedor após a verificação feita acima
    if (ganhador.length > 0) { 
        console.log("Temos um vencedor!");
        ganhador.forEach((motos) =>
          console.log(
            motos.name,
            "chegou na primeira posição"))
            break;
        }
    }// Trabalho de paradigmas da computação

// Corrida no circuito de Tarumã

// Aluno: Bruno Marcon


//Define o tamanho da corrida.
const tamanhoCorrida = 20

//Define o array com as motos juntamente com a posição inicial de cada uma.
const motos = [
    { name: "CB500F", position: 0 },
    { name: "Hornet", position: 0 },
    { name: "MT 03", position: 0 },
    { name: "Z400", position: 0 },
];

while(true){ 
    console.log("Olá seja bem vindo ao autodromo de Tarumã, Está pronto para corrida??")

    //Pergunta ao usuário se deseja iniciar a corrida.
    const pergunta = prompt("Quer que a corrida inicie? S/N \n")
    //Recebe a resposta do usuário.
    if(pergunta === "s"){ 
        console.log("A corrida começou")
        break;
    }else if(pergunta === "n"){
        console.log("Estaremos a disposição assim que desejar iniciar a corrida");
        break;
    }else{
        console.log("Resposta inválida. Por favor, digite 's' para sim ou 'n' para não.");
        break
    }
}
while(true) {
    // Desenha a pista e as motos, além de atualizar sempre que acontecer uma interação.
  console.log("-".repeat(tamanhoCorrida))
  motos.forEach((moto) =>
    console.log(" ".repeat(moto.position) + moto.name)
  )
  console.log("-".repeat(tamanhoCorrida))
    //Escolhe a moto a qual deseja iniciar a corrida.
    while(true){ 
        const escolheMoto = prompt("Selecione a moto que deseja acelerar de 1 a 4 \n");
        const arrayMotos = ["1", "2", "3", "4"];
        if (arrayMotos.includes(escolheMoto)) {
          const indexMoto = parseInt(escolheMoto) - 1;
          //Atualiza a posição da moto escolhida
          motos[indexMoto].position += Math.floor(Math.random() * 2) + 1;
          //Atualiza a posição de uma moto aleatoria
          const indexRandom = Math.floor(Math.random() * arrayMotos.length);
          motos[indexRandom].position += Math.floor(Math.random() * 2) + 1 ;
          
          break;
        } else {
          console.log(
            "Resposta inválida. Por favor, digite um número entre 1 e 4."
          );
        }
    }
     //Verifica que alguma moto chegou ao final da corrida
    const ganhador = motos.filter((moto) => moto.position >= tamanhoCorrida);

     //Define o vencedor após a verificação feita acima
    if (ganhador.length > 0) { 
        console.log("Temos um vencedor!");
        ganhador.forEach((motos) =>
          console.log(
            motos.name,
            "chegou na primeira posição"))
            break;
        }
    }