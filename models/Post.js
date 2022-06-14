const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model that extends from Model class
class Post extends Model {}
