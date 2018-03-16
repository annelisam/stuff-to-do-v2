module.exports = (sequelize, DataTypes) => {
  let Locations = sequelize.define('Locations', {
    address: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        min: 3,
      }
    },
    city: {
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: {
        min: 2,
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 2,
      }
    },
    zipCode: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        min: 5,
      }
    }
  })

  Locations.associate = (models) => {
    models.Locations.belongsto(models.Events, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    })
  }
}