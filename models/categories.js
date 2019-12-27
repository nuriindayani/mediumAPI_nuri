"use strict";
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define(
    "categories",
    {
      name: DataTypes.STRING
    },
    {}
  );
  categories.associate = function(models) {
    categories.hasMany(models.articles, {
      as: "articles",
      foreignKey: "category_id",
      sourceKey: "id"
    });
    // associations can be defined here
  };
  return categories;
};
