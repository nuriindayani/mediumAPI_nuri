"use strict";
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define(
    "follow",
    {
      user_id: DataTypes.INTEGER,
      followers: DataTypes.INTEGER
    },
    {}
  );
  follow.associate = function(models) {
    follow.hasMany(models.articles, {
      as: "user",
      foreignKey: "user_id"
    });
    follow.hasMany(models.users, {
      foreignKey: "user_id"
    });
    // associations can be defined here
  };
  return follow;
};
