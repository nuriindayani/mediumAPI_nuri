const articles = require("../models").articles;
const categories = require("../models").categories;
const users = require("../models").users;

exports.index = (req, res) => {
  articles
    .findAll({
      attributes: {
        exclude: ["updateAt"]
      },
      include: [
        {
          model: categories,
          as: "category",
          attributes: {
            exclude: ["createdAt", "updateAt"]
          }
        }
      ]
    })
    .then(data => res.send(data));
};

exports.index2 = (req, res) => {
  articles
    .findAll({
      order: [["id", "DESC"]],
      limit: 10,
      include: [
        {
          model: categories,
          as: "category",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        }
      ]
    })
    .then(data => res.send(data));
};

exports.articleDetails = (req, res) => {
  const { id } = req.params;
  categories
    .findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [
        {
          model: articles,
          as: "articles",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        }
      ],
      where: {
        id
      }
    })
    .then(data => res.send(data));
};

exports.add = (req, res) => {
  articles.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};

exports.show = (req, res) => {
  articles
    .findOne({ where: { id: req.params.id } })
    .then(data => res.send(data));
};

exports.update = (req, res) => {
  articles.update(req.body, { where: { id: req.params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};

exports.delete = (req, res) => {
  articles.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};
