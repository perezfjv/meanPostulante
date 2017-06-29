

var configDB = require('../config/database.js');

var conString = process.env.DATABASE_URL ||configDB.url


module.exports = function(app) {

  /**
   * Find and retrieves all employees
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  selectAllPostulantes = function(req, res) {
    console.log("GET - /employee");
    
    
        var pg = require('pg');  
      
        var client = new pg.Client(conString);

        client.connect();

        var query = client.query("select * from postulante");

        query.on("row", function (row, result) { 
            result.addRow(row); 
        });

        query.on("end", function (result) {          
            client.end();
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write(JSON.stringify(result.rows, null, "    ") + "\n");
            res.end();  
        });


  };





  /**
   * Creates a new employee from the data request
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  addPostulante = function(req, res) {

    console.log('INGRESO POST - /addPostulante....');

        var pg = require('pg');  
   
        var client = new pg.Client(conString);

        client.connect();
        var query = client.query("insert into postulante (name,lastname,birthdate,expertise,yearexperience) "+ 
                                "values ('"+req.body.name+"','"+req.body.lastname+"','"+
                                    req.body.birthdate+"','"+req.body.expertise+"','"+req.body.yearexperience+"')");
    
        
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });

    

  };







  /**
   * Delete a employee by its ID
   * @param {Object} req HTTP request object.
   * @param {Object} res HTTP response object.
   */
  deletePostulante = function(req, res) {

    
    console.log("ID DE POSTULANTE >>>>>>>>> "+req.query.id);
    
        var pg = require('pg');     
        
        var client = new pg.Client(conString);

        client.connect();
         
        var query = client.query( "Delete from postulante Where id ="+req.query.id);
    
        query.on("end", function (result) {          
            client.end(); 
            res.write('Success');
            res.end();  
        });

   

  }

  //Link routes and actions

  app.get('/listPostulante',selectAllPostulantes);
  app.post('/addPostulante',addPostulante);
  //app.put('/postulante/:id',updatePostulante);
  app.get('/postulante',deletePostulante);


}