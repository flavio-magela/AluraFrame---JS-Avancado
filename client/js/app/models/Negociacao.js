class Negociacao {
  constructor(data, quantidade, valor) {
    this._data = data;
    this._quantidade = quantidade;
    this._valor = valor;
  }
  // Função criada dentro de uma Classe, chama-se de Método...
  // Funcção criada fora de uma Classe, chama-se de Função mesmo...
  get volume(){ //propriedade de leitura - Get - não pode atribuir um valor
    return this._quantidade * this._valor;
  }
  get data() {//propriedade de leitura - Get - não pode atribuir um valor
    return this._data;
  }
  get quantidade() {//propriedade de leitura - Get - não pode atribuir um valor
    return this._quantidade;
  }
  get valor() {//propriedade de leitura - Get - não pode atribuir um valor
    return this._valor;
  }

}
