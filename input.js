const setupInput = function() {
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
  }

};

module.exports = setupInput;
