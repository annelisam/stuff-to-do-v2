module.exports = (sequelize, DataTypes) => {
  let Users = sequelize.define('Users', {
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
      validate: {
        min: 2,
      }
    },
    upVotes: {
      
    }
  })

  Users.associate = (models) => {
    models.Users.hasMany(models.Events);
  }

  return User;
}