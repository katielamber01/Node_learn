const http = require("http");

const server = new http.Server(); // не прямой наследник of EventEmitter but <net.Server>

let i = 0;
// on - отслеживаются события
// emit - бросаются события создаютсяя]Ф]
server.on("request", (req, res) => {
  i++;
  res.end(`Hello world. ${i}`);
});

// to see events
// reassign emit
// listening is not Event of http.Server but Extends: <net.Server>
const emit = server.emit;
server.emit = (...args) => {
  console.log(args[0]); // event name
  return emit.apply(server, args);
};
server.listen(8080);
// i increments by 2 because of favicon
// listening;
// connection;
// connection;
// request; // i increments by 2 because of favicon
// request; // i increments by 2 because of favicon
// timeout;
// connection;
// connection;
// request;
// request;
// timeout;
