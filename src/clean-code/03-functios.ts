(() => {

    // función para obtener información de una película por Id
    function getMovieById( id: string ) {
        console.log({ movieId: id });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorById( Id: string ) {
        console.log({ ActorId: Id });
    }
    
    // Crear una película
    interface Movie {
        cast: string[];
        description: string; 
        rating: number; 
        title: string; 
    }

    function createMovie({title, description, rating, cast}: Movie ){
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }
})();