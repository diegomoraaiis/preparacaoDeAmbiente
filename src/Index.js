const Aluno = require('./Aluno');
const TurmaPresencial = require('./TurmaPresencial');


const aluno1 = new Aluno('João Silva', 'joaos', '123456');
const turma1 = new TurmaPresencial('T123', 8, 80);
const aluno2 = new Aluno('diego', 'diego1', '123');
const turma2 = new TurmaPresencial('T456', 8, 74);

console.log(`Aluno: ${aluno1.nome}`);
console.log(`Aprovado na turma? ${turma1.aprovado() ? 'Está aprovado' : 'Não está aprovado'}`);

console.log(`Aluno: ${aluno2.nome}`);
console.log(`Aprovado na turma? ${turma2.aprovado() ? 'Está aprovado' : 'Não está aprovado'}`);