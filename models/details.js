module.exports = function(sequelize, DataTypes) {
    var details = sequelize.define("details", {
        favorite_food: {
            type: DataTypes.STRING,
            allowNull: false
          },
        feeding_freuency :DataTypes.STRING,
        aggressive: DataTypes.STRING
    });


    return details;
  };
  