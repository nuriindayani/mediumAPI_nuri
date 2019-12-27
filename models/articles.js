"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER
      // user_id: DataTypes.INTEGER
    },
    {}
  );
  articles.associate = function(models) {
    articles.belongsTo(models.categories, {
      as: "category",
      foreignKey: "category_id",
      sourceKey: "name"
    });
    articles.belongsTo(models.users, {
      foreignKey: "user_id",
      sourceKey: "id"
    });
    // articles.belongsTo(models.comment, {
    //   foreignKey: "article_id",
    //   as: "comment"
    // });
    // associations can be defined here
  };
  return articles;
};
