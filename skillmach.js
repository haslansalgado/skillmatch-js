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
  experienciaMeses: 6

};

const vagas = [
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


function classificarCompatibilidade (percentual) {

  if (percentual >= 80) {
    return "Alta compatibilidade";
  }
  
  if (percentual >= 50) {
    return "Média compatibilidade";
    }
  
  return "Baixa compatibilidade";
}

const resultado = calcularCompatibilidade(candidato, vagas[0]);

console.log(resultado);

console.log(
  classificarCompatibilidade(resultado.percentual)
);

vagas.forEach((vaga) => {
  const resultado = calcularCompatibilidade(candidato, vaga);

console.log("==================== RESULTADO ======================")
console.log(`Empresa: ${resultado.empresa}`);
console.log(`Cargo: ${resultado.cargo}`);
console.log(`Compatibilidade: ${resultado.percentual}%`);

console.log(`Habilidades encontradas: ${resultado.habilidadesEncontradas.join(", ") }`
);

console.log(`Habilidades faltantes: ${resultado.habilidadesFaltantes.join(", ") }`
);

console.log(
  `Classificação: ${classificarCompatibilidade(resultado.percentual)}`
);

});

const resultados = vagas.map((vaga) =>
  calcularCompatibilidade(candidato, vaga)
);

const melhorVaga = resultados.reduce((melhor, atual) => {

  return atual.percentual > melhor.percentual
  ? atual
  : melhor;
});

console.log ("=========================================");
console.log ("MELHOR VAGA");
console.log (
  `${melhorVaga.empresa} - ${melhorVaga.cargo}`
);

console.log(
  `Compatibilidade: ${melhorVaga.percentual}%`
);

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo () {
    return `${this.cargo} na empresa ${this.empresa}`;
  }
}

class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
    }
    exibirNivel() {
      return `Nivel da vaga: ${this.nivel}`;
    }
}

const vagasComPOO = [
  new VagaFrontEnd(
    "Tecnologia TonyStark", 
    "Desenvolvedor Front-End Júnior", 
    ["JavaScript", "GitHub", "Lógica de Programação"], 
    2800, 
    "Remoto", 
    "Júnior"
  ),
  
  new VagaFrontEnd(
    "Programadores.com", 
    "Estágio Front-End", 
    ["JavaScript", "Kanban", "GitHub"], 
    1800, "Híbrido", 
    "Estágio"
  ),
 
  new VagaFrontEnd(
    "WebDesenvolvedores", 
    "Programador JavaScript Júnior", 
    ["JavaScript", "Arrays", "Objetos", "Funções"], 
    3000, "Presencial", 
    "Junior" 
  )
];

vagasComPOO.forEach((vaga) => {
  console.log("================ POO ================");
  console.log(vaga.exibirResumo());
  console.log(vaga.exibirNivel());
});
