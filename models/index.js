const sequelize = require('sequelize');
const sqlDB = new Sequelize('postgres://localhost5432/ShatterSands', {logging: false});

const Characters = sqlDB.define('character', {
  name: {
    type: SEQUELIZE.string,
    allowNull: false
  },
  actor: {
    type: SEQUELIZE.string,
    allowNull: false
  },
  class: {
    type: SEQUELIZE.string,
    allowNull: false
  },
  bio: {
    type: SEQUELIZE.string
  },
  headShot:  {
    type: SEQUELIZE.string
  }
})


const Stats = sqlDB.define('stats', {
    DEX: {
      type: SEQUELIZE.integer,
      allowNull: false,
      defaultValue: 10,
      validate: {min: 0, max: 40}
    },
    CON: {
      type: SEQUELIZE.integer,
      allowNull:false,
      defaultValue: 10,
      validate: {min: 0, max: 40},
    },
    INT: {
      type: SEQUELIZE.integer,
        allowNull:false,
        defaultValue: 10,
        validate: {min: 0, max: 40}
    },
    CHA: {
      type: SEQUELIZE.integer,
        allowNull:false,
        defaultValue: 10,
        validate: {min: 0, max: 40}
    },
    STR: {
      type: SEQUELIZE.integer,
        allowNull:false,
        defaultValue: 10,
        validate: {min: 0, max: 40}
    },
    WIS: {
      type: SEQUELIZE.integer,
        allowNull:false,
        defaultValue: 10,
        validate: {min: 0, max: 40}
    }
});

const Episode = sqlDB.define({
  title: {

  },
  logo: {

  },
  cast: {

  }




});
