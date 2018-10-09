{
    let numero= prompt("Introduzca numero para calcular su factorial");
    let resultado=1;
    for(let i=numero; i>0; i--){
        resultado= resultado * i;
    }
    alert(resultado);
}