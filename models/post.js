const db = require("./banco");

const Agendamentos = db.sequelize.define("clima", {
  umidade: {
    type: db.Sequelize.STRING,
  },
  temperatura: {
    type: db.Sequelize.STRING,
  },
});

// Agendamentos.sync({ force: true });

module.exports = Agendamentos;
