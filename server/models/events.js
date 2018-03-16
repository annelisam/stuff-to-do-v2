module.exports = (sequelize, DataTypes) => {
  let theEvent = sequelize.define('Event', {
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
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      }
    },
    upVotes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
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

  theEvent.associate = (models) => {
    models.Event.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      }
    })

  }
  
  return theEvent;
}