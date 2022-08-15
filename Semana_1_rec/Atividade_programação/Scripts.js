function alturaMaxima(){
    var velocidadeInicial = document.getElementById("velocidadeInicial").value;
  const g = 10;
  let tempo;
  let altura_max
  if (velocidadeInicial >= 0){
    tempo = velocidadeInicial/g
    altura_max = velocidadeInicial**2/(2*g)
  }
  else{
    alert("Números inválidos");
  }
  return alert("Tempo " + tempo + " segundos" + " ; " + "Altura Máxima  " + altura_max + " metros")
}