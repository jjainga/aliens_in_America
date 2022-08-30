module.exports = function(sequelize, DataTypes) {
    var details = sequelize.define("details", {
        favorite_food: {
            type: DataTypes.STRING,
            allowNull: false
          },
        feeding_freuency :DataTypes.String,
        aggressive: DataTypes.String
    });


    return details;
  };
  