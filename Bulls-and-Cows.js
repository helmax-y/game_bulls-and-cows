'use strict';

function numberGenerator() {
  const number = [Math.floor(Math.random() * (9 + 1 - 1) + 1)];

  while(number.length !== 4) {
    let randomDigit = Math.floor(Math.random() * (9 + 1 - 0) + 0);
    if (!number.includes(randomDigit)) {
      number.push(randomDigit);
    }
  }

  return number.join('');
}

function bullsAndCows() {
  const score = { bulls: 0, cows: 0, };
  const generatedNumber = numberGenerator();
  let enteredNumber;
  let allEnteredNumbers = '';
  let attempts = 0;
  let toggler;

  while(score.bulls !== 4) {
    enteredNumber = enteredNumber
      ? prompt(
`        Bulls: ${score.bulls}
        Cows: ${score.cows}

Your previous attempts:
${allEnteredNumbers}`
      , '0000')
      : prompt('Enter 4-digit number, but make sure digits not to repeat', '0000');

    if (enteredNumber === null) {
      return;
    }

    score.bulls = 0;
    score.cows = 0;
    toggler = true;

    while(toggler) {
      if (!isFinite(enteredNumber) || enteredNumber.trim().length !== 4) {
        enteredNumber = prompt('Please make sure to enter exactly 4-digit number', '0000');

        if (enteredNumber === null) {
          return;
        }

        continue;
      }

      toggler = false;

      for (const digit of enteredNumber) {
        if (enteredNumber.indexOf(digit) !== enteredNumber.lastIndexOf(digit)) {
          enteredNumber = prompt('Please make sure your digits not to repeat', '0000');

          if (enteredNumber === null) {
            return;
          }

          toggler = true;
          break;
        }
      }

      if (enteredNumber[0] === '0') {
        enteredNumber = prompt('Please make sure your number to be more than 1000', '0000');

        if (enteredNumber === null) {
          return;
        }
        
        toggler = true;
      }
    }

    for (let i = 0; i < 4; i++) {
      if (generatedNumber.includes(enteredNumber[i])) {
        score.cows++;
      }
  
      if (generatedNumber[i] === enteredNumber[i]) {
        score.cows--;
        score.bulls++;
      }
    }

    allEnteredNumbers += `${enteredNumber}     b: ${score.bulls} c: ${score.cows}` + '\n';
    attempts++;
  }

  alert(
`Congratulations!!! You won!

    Computer: ${generatedNumber}
    User: ${enteredNumber}

Your result is ${attempts} attempts`
  );
}

bullsAndCows();