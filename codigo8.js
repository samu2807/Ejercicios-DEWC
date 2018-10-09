{
    function espar (numero){
        let mostrar= "";
        if(numero %2 == 0) {
            mostrar = "El numero es par"
        }
        else{
            mostrar = "El numero es impar" 
        }
        return mostrar;
    }

    alert(espar(prompt("Introduzca un numero")));
}