function armazenaMoeda(){  
  var moeda = document.getElementById('selectMoeda');
	var value = moeda.options[moeda.selectedIndex].value;
	return value
  }
     
function calcula(){ 
var cotacao = 0
var requestURL = 'https://economia.awesomeapi.com.br/json/all'
var request = new XMLHttpRequest()
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
 
 
request.onload = function() {
	var moeda = armazenaMoeda()
  const tudo = request.response
  cotacao = parseFloat(tudo[armazenaMoeda()].high)
  var valor = parseFloat(document.querySelector('#valor').value)
  var total = valor * cotacao
  
  if (isNaN(valor)){
		   document.getElementById("caixaResposta").textContent = "Digite um número no valor."
  									}  
  		else
		 				escreveResposta(valor, total, moeda)
   													 }
    
}

function escreveResposta(valorDigitado, total, moeda){
  document.getElementById("caixaResposta").textContent = valorDigitado.toFixed(2) + " equivale a " + total.toFixed(2) + " em " + moeda
}
