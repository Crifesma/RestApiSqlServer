//Function to connect to database and execute query
module.exports = function(res, query){   
            var sql = require("mssql");		
            var config = require(__base + "config/database");	
			var conn = new sql.ConnectionPool(config,err=>{
				if (err) {
                    console.log("Error en : " + err);						
                    res.send(err);
					conn.close();
				}
				conn.request().query(query, (err, linea) => {
					if (err) {
                        console.log("Error : " + err);
                        res.send(err);						
						conn.close();
                    }  
                    res.send(linea);                    
					console.log("Dato Enviado");
					conn.close();
				});
        });     
}