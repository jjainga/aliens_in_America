module.exports = function(sequelize, DataTypes) {
    var location = sequelize.define("location", {
        current_location: {
            type: DataTypes.STRING,
            allowNull: false
          },
        state :DataTypes.STRING,
        country: DataTypes.STRING,
        occupation: DataTypes.STRING
    });


    return location;
  };
  