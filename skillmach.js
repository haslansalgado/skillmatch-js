console.log("SkillMatch JS iniciado!");

const candidato = {
  nome: "Luiz Felipe",
  area: "Front-End",
  habilidades: [
    "javaScript",
    "GitHub",
    "Lógica de Programação",
    "kanban",
    "Python"
  ],
  experienciaMeses: 12

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

console.log(vagas);