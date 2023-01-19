const fs = require("fs")

/*create folder

if(fs.existsSync("./aula12/pasta1")) console.log("Folder already exists")
else fs.mkdir("./aula12/pasta1", (err) => { if(err) console.log(err); else console.log("Folder was been created"); })

*/

if(!fs.existsSync("./aula12/pasta1")) console.log("Folder not exists")
else fs.rm("./aula12/pasta1", { recursive: true } , (err) => { if(err) console.log(err); else console.log("Folder was been deleted"); })