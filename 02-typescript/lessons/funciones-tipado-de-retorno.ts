(() => {

  const sumar = (a:number, b:number):number => a + b;

  const nombre = ():string => 'Hola Julian';

  const obtenerNombre = ():Promise<string> => {
    return new Promise( (resolve, reject) => {
      resolve('Julian');
    });
  }

  obtenerNombre().then( (result) => {
    console.log( result.toUpperCase() )
  } )

})();