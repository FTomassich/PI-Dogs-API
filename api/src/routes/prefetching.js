const axios= require ('axios');
const {Dog, Temperaments} = require ('../db');


const getApiInfo= async () => {
    const apikey= process.env.API_KEY;
    const apiURL= await axios.get ('https://api.thedogapi.com/v1/breeds?api_key=' + apikey);
    const apiInfo= await apiURL.data.map (el => {
        return {
            id: el.id,
            image: el.image.url,
            name: el.name,
            height: el.height.metric,
            weight: el.weight.metric,
            life_span: el.life_span,
            temperament: el.temperament

        }
    }

)
return apiInfo;

};


const getDbInfo= async () => {
    const dogsFromDb= await Dog.findAll({
        include: {
            model: Temperaments,
            attributes: ['name'],
            through: {
                attributes : []
            }
        }
    })

    const dogsFormatted = dogsFromDb.map((dog) => {
        // Mapea los dogs de la DB y transforma los equipos en una cadena de strings
        const temperamentsAsString = dog.Temperaments.map((temperament) => temperament.name).join(', ');
        return {
            id: dog.id,
            image: dog.image,
            name: dog.name,
            height: dog.height,
            weight: dog.weight,
            life_span: dog.life_span,
          createdInDb: dog.createdInDb,
          temperament: temperamentsAsString, // Convierte la matriz de objetos en una cadena
        };
      });
    
      return dogsFormatted;
};

const getAllDogs= async () => {
    const apiDogs= await getApiInfo ();
    const dbDogs= await getDbInfo ();
    const allDogs= apiDogs.concat(dbDogs);
    return allDogs
};

module.exports = { getAllDogs, getApiInfo };