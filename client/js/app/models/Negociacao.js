class Negociacao {
  constructor(data, quantidade, valor) {

    this._data = new Date(data.getTime()); // maior segurança para imutabilidade - vc instancia uma nova data. Boas práticas de programação
    this._quantidade = quantidade;
    this._valor = valor;
    Object.freeze(this);
  }

  // Função criada dentro de uma Classe, chama-se de Método...
  // Funcção criada fora de uma Classe, chama-se de Função mesmo...
  get volume(){ //propriedade de leitura - Get - não pode atribuir um valor
    return this._quantidade * this._valor;
  }
  get data() {//propriedade de leitura - Get - não pode atribuir um valor
    return new Date(this._data.getTime());
  }
  get quantidade() {//propriedade de leitura - Get - não pode atribuir um valor
    return this._quantidade;
  }
  get valor() {//propriedade de leitura - Get - não pode atribuir um valor
    return this._valor;
  }

}
