console.log("SkillMatch JS iniciado!");

const candidato = {
  nome: "Luiz Felipe",
  area: "Front-End",
  habilidades: [
    "JavaScript",
    "GitHub",
    "Lógica de Programação",
    "Kanban",
    "Python"
  ],
  experienciaMeses: 12

};

const vaga = [
  {
    id: 1,
    empresa: "Tecnologia TonyStark",
    cargo: "Desenvolvedor Front-End Júnior",
    requisitos: [
      "JavaScript",
      "GitHub",
      "Lógica de Programação"
    ],

    salario: 2800,
    modalidade: "Remoto"

  },

  {
    id: 2,
    empresa: "Programadores.com",
    cargo: "Estágio Front-End",
    requisitos: [
      "JavaScript",
      "Kanban",
      "GitHub"
    ],

    salario: 1800,
    modalidade: "híbrido"
  },
  {
    id: 3,
    empresa: "WebDesenvolvedores",
    cargo: "Programador JavaScript Júnior",
    requisitos: [
      "JavaScript",
      "Arrays",
      "Objetos",
      "Funções"
    ],

    salario: 3000,
    modalidade: "presencial"
  }
];

//console.log(vaga);

function calcularCompatibilidade(candidato,vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
    candidato.habilidades.includes(requisito)
);


const habilidadesFaltantes = vaga.requisitos.filter((requisito) => 
  !candidato.habilidades.includes(requisito)
);


const percentual = (habilidadesEncontradas.length / vaga.requisitos.length) * 100;
return {
  empresa: vaga.empresa,
  cargo: vaga.cargo,
  percentual: Math.round(percentual),
  habilidadesEncontradas,
  habilidadesFaltantes
};

}

//const resultado = calcularCompatibilidade(candidato, vaga[0]);

//console.log(resultado);

//vaga.forEach((vagaAtual)=> {
 // const resultado = calcularCompatibilidade(candidato, vagaAtual);
  //console.log(resultado);
//})

function calcularCompatibilidade(candidato, vaga) {
  const habilidadesEncontradas = vaga.requisitos.filter((requisito) =>
  candidato.habilidades.includes(requisito)
  );

  const habilidadesFaltantes = vaga.requisitos.filter((requisito) =>
  !candidato.habilidades.includes(requisito)
  );

  const percentual = 
  (habilidadesEncontradas.length / vaga.requisitos.length) * 100;

  return {
    empresa: vaga.empresa,
    cargo: vaga.cargo,
    percentual: Math.round(percentual),
    habilidadesEncontradas,
    habilidadesFaltantes
  };
}

// const resultado = calcularCompatibilidade(candidato, vaga[2]);
// console.log (resultado);

/* vaga.forEach((vagaAtual) => {
  const resultado = calcularCompatibilidade (candidato,vagaAtual);
console.log(resultado)
});
*/


