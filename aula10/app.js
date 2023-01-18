const fs = require("fs")

//read file

if(fs.existsSync("./aula10/dados.csv")){
    fs.readFile("./aula10/dados.csv", (err, data) => {
        if(err){
            console.log(err);
        }else{
            console.log(data.toString());
        }
    })
}else{
    console.log("File not found");
}

console.log("last")