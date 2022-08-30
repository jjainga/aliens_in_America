module.exports = function(sequelize, DataTypes) {
    var location = sequelize.define("location", {
        current_location: {
            type: DataTypes.STRING,
            allowNull: false
          },
        state :DataTypes.String,
        country: DataTypes.String,
        occupation: DataTypes.String
    });


    return location;
  };
  