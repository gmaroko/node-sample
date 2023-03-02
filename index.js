let http = require("http");
let customRoutes = require("./handlers/routes");

const PORT = 5000;  // 1000 - 65200

http.createServer(requestListner).listen(PORT);


function requestListner(req, res){
    let endpoint = req.url;
    if (endpoint == "/"){
        customRoutes.handler(req, res, "index.html");
    } else if (endpoint == "/login"){
        customRoutes.handler(req, res, "login.html");
    } else if (endpoint == "/register"){
        customRoutes.handler(req, res, "register.html");
    } else if (endpoint == "/about-us"){
        customRoutes.handler(req, res, "about.html");
    } else {
        customRoutes.handler(req, res, "404.html");
    }
}

