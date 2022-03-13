const app = require("./app");

// look for an enviroment variable called "PORT", if not listen to port 3000
app.listen(process.env.PORT || 3000);




// The server is separate from the app so tests run only in the app