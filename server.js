const express = require("express");
const app = express();
// if you are hosting it on a website( like heroku) it will use that 
//and if it doesnt have a port then it uses the 5000
const PORT = process.env.PORT||5000
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes")

//urlencoding makes it so the cant mess up the url by having a wrong char
app.use(express.urlencoded({extended: true}));
//allowing json data to be passed back and forth
app.use(express.json());
//statically serving up the public folder a the front end
//allows ease of access and browser see's it as front end
app.use(express.static("public"))

app.use("/api", apiRoutes)

//for html routes you just want the forward slash
app.use("/", htmlRoutes)

app.listen(PORT, () => console.log(`litsening at port http://localhost:${PORT}`))


