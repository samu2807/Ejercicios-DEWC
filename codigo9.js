{
    function esmayus (cadena){
        let mostrar;
        if(cadena == cadena.toUpperCase()){
            mostrar = "La cadena esta formada solo por mayusculas";
        }
        else if(cadena == cadena.toLowerCase()){
            mostrar = "La cadena esta formada solo por minusculas";
            }
            else {
                mostrar ="La cadena esta formada por mayusculas y minusculas";
            }
        return mostrar;
    }
    alert(esmayus(prompt("Introduzca una frase")));
}