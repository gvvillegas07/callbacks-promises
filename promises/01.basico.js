var miPromesa = new Promise(
    // Recibe un único argumento: 
    // Función ejecutora (executor function)
    function(resolve, reject){
        // Cuerpo de la Función ejecutora
        var operacionExitosa = false;

        if(operacionExitosa){
            // Cambia el estado 'pending' a 'fulfilled' 
            // Y entreg el valor 
            resolve('Los datos se procesaron correctamente')
        }else{
             // Cambia el estado 'pending' a 'fulfilled' 
             // y entrega el motivo del fallo
        }
        
        
    }
)


// then(); Registra una función que se ejecutará cuando 
// la promesa pase al estado fulfilled (cumplida)



// catch(); Registra una función que rechazos y errores 
// que se ejecutará cuando  la promesa pase al estado rejected (rechazada)

miPromesa.then(function(mensajeRecibido){
    console.log("Resultado capturado en then(): " + mensajeRecibido);
}).catch(function(mensajeError){
    console.log("Error capturado en catch(): " + motivoError);
});

