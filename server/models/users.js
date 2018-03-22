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
    }
  }, {
    timestamps: false,
  })

  User.associate = (models) => {
    models.User.hasMany(models.Event, {
      onDelete: "cascade",
    });
  }

  return User;
}