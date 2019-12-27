const models = require("../models");
const comment = models.comment;

//fungsi get semua
exports.index = (req, res) => {
  comment
    .findAll({
      include: [
        {
          model: articles,
          as: "article",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        },
        {
          model: users,
          as: "user",
          attributes: {
            exclude: ["createAt", "updateAt"]
          }
        }
      ]
    })
    .then(data => res.send(data));
};

// add data
exports.add = (req, res) => {
  comment.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};

exports.show = (req, res) => {
  comment
    .findOne({ where: { id: req.params.id } })
    .then(data => res.send(data));
};

exports.update = (req, res) => {
  comment.update(req.body, { where: { id: params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};

exports.delete = (req, res) => {
  comment.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};
