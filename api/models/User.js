const {Model, DataTypes} = require('sequelize');
const sequelize = require('../database')
class User extends Model {}

User.init({
    firstname:{
        type:DataTypes.STRING
    },
    surname:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    number:{
        type:DataTypes.NUMBER
    },
    gender:{
        type:DataTypes.STRING,
    },
    birthdate:{
        type:DataTypes.DATEONLY
    },
    comment:{
        type:DataTypes.STRING
    }, 

},{
    sequelize,
    modelName:'user'
})

module.exports = User;