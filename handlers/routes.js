let fs = require('fs');

let routes = {    
    handler: (req, res, filename) => {
        let templateName = "./public/html/" + filename;
        let headers = {
            "content-type": "text/html; charset=UTF-8"
        }
        fs.readFile(templateName, (err, data)=>{
            if(err != null){
                res.writeHead(500, headers);
                res.write("Something went wrong! Please refresh");
                res.end();
            } else {
                res.writeHead(200, headers);
                res.write(data);
                res.end();
            }
        });
        
    }
}

module.exports = routes;