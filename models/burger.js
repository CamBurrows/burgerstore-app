var orm = require("../config/orm.js");


//the different query functions we are going to execute, using our ORM
var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    }
}




module.exports = burger;