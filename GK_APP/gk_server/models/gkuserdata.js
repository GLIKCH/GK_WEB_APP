/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gkuserdata', {
    primaryKey: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    userid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(75),
      allowNull: true,
      unique: "username_UNIQUE"
    },
    useremail: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "useremail_UNIQUE"
    },
    userpassword: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    usercartitems: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'gkuserdata',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "primaryKey" },
        ]
      },
      {
        name: "username_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "useremail_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "useremail" },
        ]
      },
    ]
  });
};
