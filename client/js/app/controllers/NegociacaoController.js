class NegociacaoController{

  constructor(){

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    this.inputData = $('#data'); // utilizando o $ como objeto .bind()
    this.inputQuantidade = $('#quantidade');
    this.inputValor = $('#valor');
  }

  adiciona(event){

    event.preventDefault();
    alert("Ação realizada com sucesso.");

    console.log(this.inputData.value);
    console.log(this.inputQuantidade.value);
    console.log(this.inputValor.value);
  }

}
