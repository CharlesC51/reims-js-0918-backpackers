"use strict";

var dbm;
var type;
var seed;

/**
 * We receive the dbmigrate dependency from dbmigrate initially.
 * This enables us to not have to rely on NODE_PATH.
 */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable(
    "users",
    {
      id: { type: "int", primaryKey: true, autoIncrement: true },
      username: { type: "string", length: 100, notNull: true, unique: true },
      birthDate: { type: "date", notNull: true },
      mail: { type: "string", length: 100, unique: true },
      password: { type: "string", length: 100 },
      favorites: {
        type: "int"
      },
      hobbies: { type: "string", length: 50, defaultValue: "" },
      historic: {
        type: "int"
      },
      rights: { type: "string", length: 50 },
      picture: { type: "text" },
      description: { type: "string", length: 255, defaultValue: "" }
    },
    callback
  );
};

exports.down = function(db, callback) {
  db.dropTable("users", callback);
};

exports._meta = {
  version: 1
};
