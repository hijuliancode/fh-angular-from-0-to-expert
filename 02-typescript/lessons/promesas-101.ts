(() => {
  console.log('Start');

    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Se termino el time-out')
      }, 1000);
    });

    prom1
      .then( mensaje => console.log(mensaje))
      .catch( error => console.error(error))

  console.log('End');
})();