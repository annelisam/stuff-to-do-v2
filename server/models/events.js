module.exports = (sequelize, DataTypes) => {
  let Events = sequelize.define('Event', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        min: 20,
      }
    },
    urlPhoto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: true,
      }
    },
    date: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      }
    }
  })

  Events.associate = (models) => {
    models.Event.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    })
    
  }


  return Event;
}