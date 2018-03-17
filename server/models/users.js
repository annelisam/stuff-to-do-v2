module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      }
    },
    email: {
      type: DataTypes.STRING, 
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    company: {
      type: DataTypes.STRING, 
      allowNull: true,
      defaultValue: 'N/A',
    },
    upVotes: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: '[]',
    }
  }, {
    timeStamp: true,
  })

  User.associate = (models) => {
    models.User.hasMany(models.Event);
  }

  return User;
}