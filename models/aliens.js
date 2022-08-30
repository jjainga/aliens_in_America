module.exports = function(sequelize, DataTypes) {
    var aliens = sequelize.define("aliens", {
        first_name: DataTypes.STRING,
        last_name :DataTypes.STRING,
        email: DataTypes.STRING,
        gender: DataTypes.STRING,
        type: DataTypes.STRING,
        birthYear: DataTypes.INTEGER
    });


    return aliens;
  };
  