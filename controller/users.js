const models = require("../models").users;
const users = models;

exports.index = (req, res) => {
  users
    .findAll({
      attributes: [
        "id",
        "fullname",
        "username",
        "email",
        "password",
        "is_active",
        "createdAt",
        "updatedAt"
      ]
    })
    .then(data => res.send(data));
};

// exports.index = (req, res) => {
//   users.findAll().then(data => res.send(data));
// };
// add data
exports.add = (req, res) => {
  users.create(req.body).then(data =>
    res.send({
      message: "success",
      data
    })
  );
};

exports.show = (req, res) => {
  users.findOne({ where: { id: req.params.id } }).then(data => res.send(data));
};

exports.update = (req, res) => {
  users.update(req.body, { where: { id: params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};

exports.delete = (req, res) => {
  users.destroy({ where: { id: req.params.id } }).then(data => {
    res.send({
      message: "success",
      data
    });
  });
};
