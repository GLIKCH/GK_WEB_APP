'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "gkuserdata", deps: []
 * addIndex "useremail_UNIQUE" to table "gkuserdata"
 * addIndex "username_UNIQUE" to table "gkuserdata"
 * addIndex "PRIMARY" to table "gkuserdata"
 *
 **/

var info = {
    "revision": 1,
    "name": "gk_migration_01",
    "created": "2020-11-15T07:52:25.240Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "gkuserdata",
            {
                "primaryKey": {
                    "type": Sequelize.INTEGER,
                    "field": "primaryKey",
                    "primaryKey": true,
                    "defaultValue": 0,
                    "allowNull": false
                },
                "userid": {
                    "type": Sequelize.INTEGER,
                    "field": "userid",
                    "allowNull": true
                },
                "username": {
                    "type": Sequelize.STRING(75),
                    "field": "username",
                    "unique": "username_UNIQUE",
                    "allowNull": true
                },
                "useremail": {
                    "type": Sequelize.STRING(45),
                    "field": "useremail",
                    "unique": "useremail_UNIQUE",
                    "allowNull": true
                },
                "userpassword": {
                    "type": Sequelize.STRING(45),
                    "field": "userpassword",
                    "allowNull": false
                },
                "usercartitems": {
                    "type": Sequelize.INTEGER,
                    "field": "usercartitems",
                    "defaultValue": 0,
                    "allowNull": true
                }
            },
            {}
        ]
    },
    {
        fn: "addIndex",
        params: [
            "gkuserdata",
            [{
                "name": "useremail"
            }],
            {
                "indexName": "useremail_UNIQUE",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "gkuserdata",
            [{
                "name": "username"
            }],
            {
                "indexName": "username_UNIQUE",
                "indicesType": "UNIQUE"
            }
        ]
    },
    {
        fn: "addIndex",
        params: [
            "gkuserdata",
            [{
                "name": "primaryKey"
            }],
            {
                "indexName": "PRIMARY",
                "indicesType": "UNIQUE"
            }
        ]
    }
];

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
