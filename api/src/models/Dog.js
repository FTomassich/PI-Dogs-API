const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,    //para evitar conflictos con los ID
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    height: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    weight: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    life_span: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    }

  },
  {
      
    timestamps: false, // Esto evita que se creen createdAt y updatedAt
  });
};
