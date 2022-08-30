module.exports = function(sequelize, DataTypes) {
    var aliens = sequelize.define("aliens", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        last_name :DataTypes.String,
        email: DataTypes.String,
        gender: DataTypes.String,
        type: DataTypes.String,
        birthYear: DataTypes.INTEGER
    });


    return aliens;
  };
  