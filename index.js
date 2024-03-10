import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";
const questions =     {
        type: 'input',
        name: 'url',
        message: 'enter the url : '
    };
inquirer.prompt(questions).then(answers => {
    var qr_png = qr.image(answers.url, { type: 'png' });
    qr_png.pipe(fs.createWriteStream('i_love_qr.png'));
    fs.writeFile("url.txt",answers.url,(err)=>{
        if (err) throw err;
        else{
            console.log("there was an error");
        }
    });
});






