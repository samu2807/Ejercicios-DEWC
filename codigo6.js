{
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
    'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let numeroDni = prompt("Introduzca su numero de DNI");
    let letraDni = prompt("Introduzca su leta de DNI");
    

    if(numeroDni < 0 || numeroDni > 99999999){
        alert("Numero erroneo");
    }
    else{
        let calculoletra = numeroDni % 23;
        if (letras[calculoletra] != letraDni){
            alert("Letra erronea");
        }
        else{
            alert("Numero y Letra de DNI correctos");
        }
    }

    
}