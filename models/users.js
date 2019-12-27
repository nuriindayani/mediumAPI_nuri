"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      fullname: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      is_active: DataTypes.TINYINT
    },
    {}
  );
  users.associate = function(models) {
    users.hasMany(models.articles, {
      as: "user",
      foreignKey: "user_id",
      sourceKey: "id"
    });

    users.hasMany(models.comment, {
      foreignKey: "user_id",
      sourceKey: "id"
    });

    users.hasMany(models.follow, {
      foreignKey: "user_id",
      sourceKey: "id"
    });
    // associations can be defined here
  };
  return users;
};
