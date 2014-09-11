
var deployd = require('deployd');
var url = require('url');
var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');

var mongourl;

if(process.env.VCAP_SERVICES){
  var env = JSON.parse(process.env.VCAP_SERVICES);
  mongourl = env['mongolab'][0]['credentials']['uri'];
}else{
  mongourl = "LOCAL_MONGO_URL";
}

var db_url = url.parse(mongourl);

var server = deployd({
    port: port,
    env: 'development',
    db: {
        "host": db_url.hostname,
        "port": parseInt(db_url.port),
        "name": db_url.pathname.slice(1),
        "credentials": {
            "username": db_url.auth.split(':')[0],
            "password": db_url.auth.split(':')[1]
        }
    }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});
