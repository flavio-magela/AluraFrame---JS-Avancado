class NegociacaoController{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this._inputData = $('#data'); // utilizando o $ como objeto .bind()
    this._inputQuantidade = $('#quantidade');
    this._inputValor = $('#valor'); // "_" utilizando a convenção de acessar somente dentro do método controllers.
  }

  adiciona(event){

    event.preventDefault();
    alert("Ação realizada com sucesso.");

    console.log(this._inputData.value);
    console.log(this._inputQuantidade.value);
    console.log(this._inputValor.value);
  }

}
