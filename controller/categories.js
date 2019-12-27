const articles = require("../models").articles;
const categories = require("../models").categories;
const users = require("../models").users;

//fungsi get semua

exports.index2 = (req, res) => {
  categories
    .findAll({
      order: [["id", "DESC"]],
      limit: 10,
      include: [
        {
          model: articles,
          as: "articles",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        }
      ]
    })
    .then(data => res.send(data));
};

exports.index = (req, res) => {
  categories.findAll().then(data => res.send(data));
};

exports.index = (req, res) => {
  const { id } = req.params;
  categories.findAll().then(data => res.send(data));
};

// add data
exports.add = (req, res) => {
  categories.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};

exports.show = (req, res) => {
  categories
    .findOne({ where: { id: req.params.id } })
    .then(data => res.send(data));
};

exports.update = (req, res) => {
  categories.update(req.body, { where: { id: params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};

exports.delete = (req, res) => {
  categories.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};
