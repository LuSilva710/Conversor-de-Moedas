var resultado;

$.ajax({
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function (data) {
    resultado = data
  },
  error: function (data) {
    alert('Erro! o site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
  }
});

function converter() {
  var euro = resultado["EUR"]["bid"]
  var dolar = resultado["USD"]["bid"]
  var dolarTurismo = resultado["USDT"]["bid"]
  var dolarCanadense = resultado["CAD"]["bid"]
  var dolarAustraliano = resultado["AUD"]["bid"]
  var libra = resultado["GBP"]["bid"]
  var peso = resultado["ARS"]["bid"]
  var iene = resultado["JPY"]["bid"]
  var yuan = resultado["CNY"]["bid"]
  var franco = resultado["CHF"]["bid"]
  var shekel = resultado["ILS"]["bid"]
  var btcoin = resultado["BTC"]["bid"]
  var ethereum = resultado["ETH"]["bid"]
  var ltcoin = resultado["LTC"]["bid"]
  var dogecoin = resultado["DOGE"]["bid"]
  var xrp = resultado["XRP"]["bid"]

  function getHorarioAtualizacao(codigoMoeda) {
    var data = (resultado[codigoMoeda]["create_date"])
    //Mudando a formatação da data para DD/MM/AA 
    var dia = data.substring(8, 10)
    var mes = data.substring(5, 7)
    var ano = data.substring(0, 4)
    var hora = data.substring(11, 16)
    var dataFormatada = `${dia}/${mes}/${ano} às ${hora}`
    var atualizacao = document.querySelector("#atualizacao");
    atualizacao.innerHTML = 'Cotação atualizada em ' + dataFormatada;
  }

  var numeroDigitado = document.querySelector("#valor").value;
  numeroDigitado = parseFloat(numeroDigitado);

  var calculo;

  var saida = document.querySelector("#valorConvertido");
  var selecionado = document.querySelector("#moedas").value;

  function calcular(valorMoeda, codigoMoeda){
    calculo = numeroDigitado * valorMoeda
    numeroDigitado = numeroDigitado.toLocaleString('en-us', { style: 'currency', currency: codigoMoeda });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    saida.innerHTML = `Valor da moeda hoje: ${codigoMoeda} ${valorMoeda} <br> Resultado:${calculo}`
    getHorarioAtualizacao(codigoMoeda)
  }

  if (isNaN(numeroDigitado) == true && selecionado == "NULL") {
    alert("Digite um valor e escolha uma moeda!")
  } else {
    if (isNaN(numeroDigitado) == true) {
      alert("Digite um valor!")
    }
    if (selecionado == "NULL") {
      alert("Escolha uma moeda!")
    }
  }

  if (numeroDigitado <= 0) {
    alert("Valor inválido! Digite somente valores positivos e diferentes de zero")
  }

  if (selecionado == "EUR" && !isNaN(numeroDigitado) && !isNaN(euro)) {
      calcular(euro, "EUR")
  }

  if (selecionado == "USD" && !isNaN(numeroDigitado) && !isNaN(dolar)) {
      calcular(dolar, "USD")
  }

  if (selecionado == "USDT" && !isNaN(numeroDigitado) && !isNaN(dolarTurismo)) {
    calcular(euro, "USDT")
  }

  if (selecionado == "CAD" && !isNaN(numeroDigitado) && !isNaN(dolarCanadense)) {
      calcular(dolarCanadense, "CAD")        
  }

  if (selecionado == "AUD" && !isNaN(numeroDigitado) && !isNaN(dolarAustraliano)) {
      calcular(dolarAustraliano, "AUD")
  }

  if (selecionado == "GBP" && !isNaN(numeroDigitado) && !isNaN(libra)) {
      calcular(libra, "GBP")
  }

  if (selecionado == "ARS" && !isNaN(numeroDigitado) && !isNaN(peso)) {
      calcular(peso, "ARS")
  }

  if (selecionado == "UYU" && !isNaN(numeroDigitado) && !isNaN(pesoUruguaio)) {
    calcular(pesoUruguaio, "UYU")
}

  if (selecionado == "JPY" && !isNaN(numeroDigitado) && !isNaN(iene)) {
      calcular(iene, "JPY")
  }

  if (selecionado == "CNY" && !isNaN(numeroDigitado) && !isNaN(yuan)) {
      calcular(yuan, "CNY")
  }

  if (selecionado == "CHF" && !isNaN(numeroDigitado) && !isNaN(franco)) {
      calcular(franco, "CHF")
  }

  if (selecionado == "ILS" && !isNaN(numeroDigitado) && !isNaN(shekel)) {
      calcular(shekel, "ILS")
  }

  if (selecionado == "BTC" && !isNaN(numeroDigitado) && !isNaN(btcoin)) {
      btcoin = btcoin * 1000
      calcular(btcoin, "BTC")
  }

  if (selecionado == "ETH" && !isNaN(numeroDigitado) && !isNaN(ethereum)) {
      calcular(ethereum, "ETH")
  }

  if (selecionado == "LTC" && !isNaN(numeroDigitado) && !isNaN(ltcoin)) {
      calcular(ltcoin, "LTC")
  }

  if (selecionado == "DOGE" && !isNaN(numeroDigitado) && !isNaN(dogecoin)) {
      calcular(dogecoin, "XDG")
  }

  if (selecionado == "XRP" && !isNaN(numeroDigitado) && !isNaN(xrp)) {
      calcular(xrp, "XRP")
  }

}
/*
function obtemMoedaSaida() {
    var valorSaida = document.querySelector("#moeda_saida").value;
    return valorSaida;
   
}

function converter() {
    var moedaSaidaSelecionada = obtemMoedaSaida();

    if (moedaSaidaSelecionada == "USD") {
        converterDolar();
    } else if (moedaSaidaSelecionada == "EUR") {
        converterEuro();
    } else if (moedaSaidaSelecionada == "ARS") {
        converterPesoArgentino();
    } else if (moedaSaidaSelecionada == "UYU") {
        converterPesoUruguaio();
    } else if (moedaSaidaSelecionada == "bitcoin") {
        converterBitcoin();
    } else if (moedaSaidaSelecionada == "ethereum") {
        converterEthereum();
    }
}

function converterDolar() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolar = parseFloat(valor);
    var valorEmReal = valorEmDolar * 5.18;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Dólar = $" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuro = parseFloat(valor);
    var valorEmReal = valorEmEuro * 5.18;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Euro = $" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterPesoArgentino() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmPesoArgentino = parseFloat(valor);
    var valorEmReal = valorEmPesoArgentino * 27.18;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Peso Argentino = $" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterPesoUruguaio() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmPesoUruguaio = parseFloat(valor);
    var valorEmReal = valorEmPesoUruguaio * 7.72;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Peso Uruguaio = $" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmBitcoin = parseFloat(valor);
    var valorEmReal = valorEmBitcoin * 0.0000097;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Bitcoin= (&#x20BF;)" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converterEthereum() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEthereum = parseFloat(valor);
    var valorEmReal = valorEmEthereum * 0.00013;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "Valor em Ethereum= ETH " + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
}

*/
