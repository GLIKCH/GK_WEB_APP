'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "DOB" to table "gkuserdata"
 *
 **/

var info = {
    "revision": 2,
    "name": "gk_migration_02_DOB",
    "created": "2020-11-15T07:56:34.814Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "gkuserdata",
        "DOB",
        {
            "type": Sequelize.DATEONLY,
            "field": "DOB",
            "allowNull": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};
