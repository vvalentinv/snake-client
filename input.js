// Stores the active TCP connection object.
let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};




const handleUserInput = function(data) {
  // your code here
  // \u0003 maps to ctrl+c input
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w") {
    connection.write("Move: up");
  } else if (data === "a") {
    connection.write("Move: left");
  } else if (data === "s") {
    connection.write("Move: down");
  } else if (data === "d") {
    connection.write("Move: right");
  } else if (data === "q") {
    connection.write("Say: Watch out!!");
  } else if (data === "e") {
    connection.write("Say: THAT is MIIIIINE!");
  }
  // for (let i = 0; i < 10; i++) {
  //   setTimeout(() => conn.write("Say: here I come"), i * 50);
  // }
};

module.exports = setupInput;
