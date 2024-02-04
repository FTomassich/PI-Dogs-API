const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Temperaments",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },{
      
      timestamps: false, // Esto evita que se creen createdAt y updatedAt
    }
    
  );
};