const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = [];

rl.question('Whats your name? ', (answer) => {
  answers.push(answer);
  rl.question('Whats your favorite hobby? ', (answer) => {
    answers.push(answer);
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers.push(answer);
      rl.question('Which meal is your favorite? ', (answer) => {
        answers.push(answer);
        rl.question('What do you like to eat for that meal? ', (answer) => {
          answers.push(answer);
          rl.question('Whats your favorite sport? ', (answer) => {
            answers.push(answer);
            rl.question('Whats your superpower? ', (answer) => {
              answers.push(answer);
              console.log(`
              Nice to meet you, ${answers[0]}, your favorite hobby is ${answers[1]} 
              and you like to listen to ${answers[2]} while doing that.
              You like eating ${answers[4]} at ${answers[3]}.
              Your favorite sport is ${answers[5]}, 
              Your superpower is ${answers[6]}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

