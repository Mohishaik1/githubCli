import readline from "readline-sync";
import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

// function main() {

// console.log('Hello')
// let fname = readline.question('Enter Your First Name: ');
// let lname = readline.question('Enter Your Last Name: ');
// let age = readline.questionInt('Enter Your Age: ');
// let city = readline.question('Enter Your City: ');
// let email = readline.questionEMail('Enter Your Email: ');
// console.log(fname, lname, age, city, Email);
//         let email = readline.questionEMail(chalk.red('Enter Your Email: '));
//         let password = readline.question(chalk.red('Enter Your Password: '),{hideEchoBack:true});
//         console.log(chalk.white.bgMagentaBright("Instagram-Login"))
//         console.log(chalk.redBright.bold.bgCyanBright("Your Email: ",email) )
//         console.log(chalk.red.bgYellow("Your Password: ",password)  )
// };

// main();

//  console.log(boxen(chalk.blue("Your Username: ", username)));
//     console.log(boxen(chalk.bgYellow("Your Gmail: ", gmail)));
//     console.log(boxen(chalk.yellowBright.bgGreen("Your Password: ", password)));
//     console.log(boxen((chalk.blue.bgRed("Your Fullname:", fullname))));
//     console.log(chalk.blue.bgYellow("Your Bio: ",bio)), {padding: 1};


function cli() {
    console.log(
        figlet.textSync("INSTAGRAM", {
            horizontalLayout: "default",
            verticalLayout: "default",
            width: 75,
            whitespaceBreak: true,
        })
    );
    let username = readline.question(chalk.red("Enter Username: "));
    let gmail = readline.question(chalk.white.bgGreenBright("Enter gmail: "), { padding: 1 });
    let password = readline.questionInt(chalk.red.bgYellowBright("Enter Password: "), { hideEchoBack: true });
    let fullname = readline.question(chalk.red.bgMagenta("Enter Full-Name: "));
    let bio = readline.question(chalk.red.bgCyan("Enter Bio: "));
    console.log(boxen(chalk.bold.red.bgGreen(" 📛 Username: ", username),{padding:1}));
    console.log(boxen(chalk.bold.red.bgYellow(" 💬 Gmail: ", gmail),{padding:1}));
    console.log(boxen(chalk.bold.red.bgWhite(" 📌 Password: ", password),{padding:1}));
    console.log(boxen(chalk.bold.red.bgMagenta(" 😶‍🌫️ FullName: ", fullname),{padding:1}));
    console.log(boxen(chalk.bold.red.bgGreen(" 😎 Bio: ", bio),{padding:1}));


};

cli();