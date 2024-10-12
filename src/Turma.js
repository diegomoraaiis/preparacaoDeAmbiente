function Turma(codigo, nota) {
    this.codigo = codigo;
    this.nota = nota;
  }
  
  Turma.prototype.aprovado = function () {
    return this.nota >= 6;
  };
  
  module.exports = Turma;