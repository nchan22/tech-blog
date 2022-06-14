const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create comment class that has properties of Model
class Comment extends Model {}
