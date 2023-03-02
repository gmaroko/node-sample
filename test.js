let fs = require("fs");

fs.readFile("./public/index.htmlyttyu", (error, data)=>{
    if (err != null){
        console.log("something went wrong");
    } else {
        console.log(data);
    }
});





// function showHomePage(req, res){
//     res.write("Home page");
//     res.end();
// }

