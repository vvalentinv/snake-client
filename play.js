const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
    // connection.write(`🦜: ${data}`);
    // broadcast(listOfConnections, data);

    // Send a message to everybody but the sender
    //	betterBroadcast(listOfConnections, data, connection.id);
  });
  return conn;
};

console.log("Connecting ...");
connect();
