function contandoCaracteres(cadena = "") {
    if (!cadena){
    console.warn("No ingresaste ningun caracter")
    }else{
        console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
}

contandoCaracteres();
contandoCaracteres("Hola Mundo");