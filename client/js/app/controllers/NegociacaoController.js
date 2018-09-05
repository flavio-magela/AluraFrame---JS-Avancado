class NegociacaoController{
  adiciona(event){
    event.preventDefault();
    alert("Ação realizada com sucesso.");

    let $ = document.querySelector.bind(document) // metodo .bind() mantem a associação com o document (pai) como objeto e não como variável...
    let inputData = $('#data'); // utilizando o $ como objeto .bind()
    let inputQuantidade = $('#quantidade');
    let inputValor = $('#valor');

    console.log(inputData.value);
    console.log(inputQuantidade.value);
    console.log(inputValor.value);
  }

}
