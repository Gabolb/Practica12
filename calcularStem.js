function calcula_densidad(){
    
    // Nuevo código para el ejercicio propuesto
    var radio_tierra_cm = 0.5; // Radio de la Tierra en cm
    var radio_tierra_m = 6.37e6; // Radio de la Tierra en metros
    var escala = radio_tierra_m / radio_tierra_cm; // Escala de conversión
    var diametro_sol_m = 1.3927e9; // Diámetro del Sol en metros
    var diametro_sol_cm = diametro_sol_m / escala; // Diámetro del Sol en cm
    var distancia_tierra_sol_m = 1.496e11; // Distancia entre la Tierra y el Sol en metros
    var distancia_tierra_sol_cm = distancia_tierra_sol_m / escala; // Distancia entre la Tierra y el Sol en cm
  
    // Mostrar resultados en la página
    var resultadoB = document.createElement("p");
    resultadoB.innerHTML = "El diámetro del Sol es de " + diametro_sol_cm.toFixed(2) + " cm, y la distancia entre la Tierra y el Sol es de " + distancia_tierra_sol_cm.toFixed(2) + " cm.";
    var resultadoSection = document.getElementsByClassName("resultado")[0];
    resultadoSection.appendChild(resultadoB);
  }