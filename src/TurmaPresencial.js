const Turma = require('./Turma');

function TurmaPresencial(codigo, nota, frequencia) {
  Turma.call(this, codigo, nota);
  this.frequencia = frequencia;
}

TurmaPresencial.prototype = Object.create(Turma.prototype);

TurmaPresencial.prototype.aprovado = function () {
  return Turma.prototype.aprovado.call(this) && this.frequencia >= 75;
};

module.exports = TurmaPresencial;
