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

    console.log(typeof(this._inputData)); //saber o tipo da variavel (string, number, date, etc..)
    console.log(this._inputData);

    // utilizando o split
    let data = new Date(this._inputData.value.split('-'));
    console.log("Data com split: " + data);

    //ou utilizando o replace
    let data1 = new Date(this._inputData.value.replace (/-/,','))
    console.log("Data com replace: " + data1);
    // ou utilizando Map modulo de 2 - %2
    let data2 = new Date(...
      this._inputData.value
      .split('-').map(function (item, indice) {
        return item - indice % 2
    }));
    console.log("Data com map e indice (% -modulo de 2): " + data2);

    // ou utilizando Arrow Functions: deixando o código ainda menos verboso
    let data3 = new Date(...
      this._inputData.value
      .split('-').map((item, indice) => item - indice % 2 )); //arrow Functions "=>" retira a expressão function, os cochetes e o return... e coloca =>, pq ele entende que ele tem que fazer isso tudo
    console.log("Data Arrow Functions: " + data3);


    let negociacao = new Negociacao(
      data3,
      this._inputQuantidade.value,
      this._inputValor.value
    );
    console.log(negociacao);
    //adicionar a negociacao em uma lista

    // console.log(this._inputData.value);
    // console.log(this._inputQuantidade.value);
    // console.log(this._inputValor.value);
  }

}
