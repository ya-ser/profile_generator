const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let profile = {
  'nickname': '',
  'activity': '',
  'music': '',
  'meal': '',
  'food': '',
  'sport': '',
  'superpower': ''
};

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  profile.nickname = answer;
  
  rl.question(`What's an activity you like doing? `, (answer) => {
    profile.activity = answer;
    
    rl.question(`What do you listen to while doing that? `, (answer) => {
      profile.music = answer;
      
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        profile.meal = answer;
        
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          profile.food = answer;
          
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            profile.sport = answer;

            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              profile.superpower = answer;

              console.log(`Great! Here is your profile:\n Your name is ${profile.nickname} and you like to ${profile.activity}.\n Your favourit music is ${profile.music}.\n Your favourite meal of the day is ${profile.meal}, and your favourite food for that is ${profile.food}.\n Your favourite sport is ${profile.sport}.\n Your superpower is ${profile.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});