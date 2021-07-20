const diceContainer = <HTMLDivElement>document.getElementById("dice-container");
const generateDie = <HTMLButtonElement>document.getElementById("generate-die");
const sumDice = <HTMLButtonElement>document.getElementById("sum-dice");
const rollDice = <HTMLButtonElement>document.getElementById("roll-dice");
let diceArr: Die[] = [];



generateDie.addEventListener("click", () => new Die());

sumDice.addEventListener("click", () => {
    let sum = 0;
    diceArr.forEach(die => sum += die.value);
    alert(sum);
});

rollDice.addEventListener("click", () => diceArr.forEach(die => die.roll()));

class Die {
    [x: string]: any;
    dieDiv: HTMLDivElement;
    value!: number;

    constructor() {
        this.dieDiv = document.createElement("div");
        this.dieDiv.className = "dice";
        this.dieDiv.addEventListener("click", () => this.roll());
        this.dieDiv.addEventListener("dblclick", () => {
            let index = diceArr.indexOf(this);
            diceArr.splice(index, 1);
            diceContainer.removeChild(this.dieDiv);
        });
        this.roll();
        diceContainer.appendChild(this.dieDiv);
        diceArr.push(this);
    }

    roll() {
        let randomNum = Math.floor((Math.random() * 6) + 1);
        this.value = randomNum;
        this.div.innerHTML = this.value;
    }
}