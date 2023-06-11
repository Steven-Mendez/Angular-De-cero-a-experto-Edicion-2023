function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
  return `a + b = ${a + b}`;
};

function multiply(
  firstNumber: number,
  secondNumber?: number,
  base: number = 2
): number {
  return firstNumber * base;
}

// const result: string = addNumbers(1, 2).toString();
// const result2: string = addNumberArrow(1, 2);
// const multiplyResult: number = multiply(5);

// console.log({ result, result2, multiplyResult });

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;

  if (character.hp >= 100) {
    character.hp = 100;
  }
};

const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`HP: ${this.hp}`);
  },
};

strider.showHp();

healCharacter(strider, 10);
healCharacter(strider, 10);
strider.showHp();
healCharacter(strider, 50);
strider.showHp();

export {};
