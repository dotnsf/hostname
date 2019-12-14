//.  app.js
var express = require( 'express' ),
    fs = require( 'fs' ),
    app = express();

app.use( express.static( __dirname + '/public' ) );

app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );


app.get( '/', function( req, res ){
  var hostname = fs.readFileSync( '/etc/hostname' );
  fs.readFile( '/etc/hostname', "utf-8", function( err, text ){
    if( err ){
      console.log( err );
      res.render( 'index', { hostname: JSON.stringify( err ) } );
    }else{
      res.render( 'index', { hostname: text } );
    }
  });
});

var port = process.env.PORT || 3000;
app.listen( port );
console.log( "server starting on " + port + " ..." );
