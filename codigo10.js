{
    function espalindromo (cadena){
        let mostrar;
        let palabras=[];
        let caracteres = [];
        let caracteresreverse=[];
        let bandera = 1;

        palabras = cadena.split(" ");
        for(let i=0; i<palabras.length; i++){
            caracteres = caracteres.concat(palabras[i].split(""));
        }
        
        for(let i=caracteres.length-1; i>-1; i--){
            caracteresreverse= caracteresreverse.concat(caracteres[i]);
        }
        

        for (let i = 0; i<caracteres.length && bandera == 1 ; i++){
            if (caracteres[i] != caracteresreverse[i]){
                bandera= 2;
                mostrar= "Esta cadena no es palindromo";
            }
            else {
                mostrar="Esta cadena es palindromo";
            }
            
        }
        return mostrar;
    }

  let mostrar= espalindromo(prompt("Introduzca una cadena"));
}