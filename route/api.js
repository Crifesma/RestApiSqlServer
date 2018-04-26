var express = require('express');
var router = express.Router();

function ejecutarcomando(respuesta,consulta) {
    require(__base + "database/conect")(respuesta,consulta);
}    

//GET API
router.get("/api/user", function(req , res){
    var query = "select USER_ID,EMPLOYEEID from View_Tecnicos";                
    ejecutarcomando (res, query);
});

//POST API
router.post("/api/user", function(req , res){
    var query = "INSERT INTO [user] (Name,Email,Password) VALUES (req.body.Name,req.body.Email,req.body.Password)";
    ejecutarcomando (res, query);
});

//PUT API
router.put("/api/user/:id", function(req , res){
    var query = "UPDATE [user] SET Name= " + req.body.Name  +  " , Email=  " + req.body.Email + "  WHERE Id= " + req.params.id;
    ejecutarcomando (res, query);
});

// DELETE API
router.delete("/api/user /:id", function(req , res){
    var query = "DELETE FROM [user] WHERE Id=" + req.params.id;
    ejecutarcomando (res, query);
});

module.exports = router;
