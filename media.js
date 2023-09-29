function medianota(){
    var media1 = document.getElementById("media1").value;
    var media2 = document.getElementById("media2").value;
    var media3 = document.getElementById("media3").value;
    var media4 = document.getElementById("media4").value;
    var media5 = document.getElementById("media5").value;

    var falta1 = document.getElementById("falta1").value;
    var falta2 = document.getElementById("falta2").value;
    var falta3 = document.getElementById("falta3").value;
    var falta4 = document.getElementById("falta4").value;
    var falta5 = document.getElementById("falta5").value;

    var media = (parseFloat(media1) + parseFloat(media2) + parseFloat(media3) + parseFloat(media4) + parseFloat(media5))/5;
    document.getElementById("media").value = "A de média de nota é : " + media;

    var falta = (parseFloat(falta1) + parseFloat(falta2) + parseFloat(falta3) + parseFloat(falta4) + parseFloat(falta5))/5;
    document.getElementById("falta").value = "A média de falta é : " + falta;

    if(falta1>3){
        document.getElementById("resultado1").innerHTML = "Você estorou em faltas"
  }

    if(falta2>3){
        document.getElementById("resultado2").innerHTML = "Você estorou em faltas"
  }

    if(falta3>3){
        document.getElementById("resultado3").innerHTML = "Você estorou em faltas"
  }

    if(falta4>3){
        document.getElementById("resultado4").innerHTML = "Você estorou em faltas"
  }

    if(falta5>3){
        document.getElementById("resultado5").innerHTML = "Você estorou em faltas"
  }

  if(media1<6){
    document.getElementById("resultado6").innerHTML = "Você tirou menos de 6"
}

if(media2<6){
    document.getElementById("resultado7").innerHTML = "Você tirou menos de 6"
}

if(media3<6){
    document.getElementById("resultado8").innerHTML = "Você tirou menos de 6"
}

if(media4<6){
    document.getElementById("resultado9").innerHTML = "Você tirou menos de 6"
}

if(media5<6){
    document.getElementById("resultado10").innerHTML = "Você tirou menos de 6"
}
}
    
  