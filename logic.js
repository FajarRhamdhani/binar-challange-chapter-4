class Game {
    constructor(computer, randomCom, finalRandom){
        this.computer = computer;
        this.randomCom = randomCom;
        this.finalRandom = finalRandom;
    }

    _computerChoice() {
        this.computer = document.querySelectorAll(".computer");
        this.randomCom = Math.floor(Math.random() * 3);
        this.finalRandom = "";

        for (let i = 0; i < this.computer.length; i++) {
            if(this.randomCom === 0){
                this.computer[0].id === "rock";
                this.computer[0].className = "pictbackground listpict";
                return this.finalRandom += this.computer[0].id
            }else if(this.randomCom === 1) {
                this.computer[1].id === "scissors";
                this.computer[1].className = "pictbackground listpict";
                return this.finalRandom += this.computer[1].id
            }else if(this.randomCom === 2) {
                this.computer[2].id === "paper";
                this.computer[2].className = "pictbackground listpict";
                return this.finalRandom += this.computer[2].id
            }
        }
    }
}

class Main extends Game {
    constructor(computer, randomCom, finalRandom, player, notif, pilihKomputer){
        super(computer, randomCom, finalRandom);
        super._computerChoice();
        this.player = player;
        this.notif = notif;
        this.pilihKomputer = pilihKomputer;
    }

    gamePlay() {
        this.pilihKomputer = this.finalRandom;
        this.player = document.querySelectorAll(".player");
        this.notif = document.getElementById("notif");

        this.player.forEach(
            (playerchoice, i, arr) => {
                playerchoice = arr[i];
                playerchoice.addEventListener("click", (e) => {
    
                    if(playerchoice.id === "rock"){
                        if(this.pilihKomputer === "scissors") {
                            this.notif.textContent = "Player Win";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "paper") {
                            this.notif.textContent = "Player Lose";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "rock"){
                            this.notif.textContent = "Draw";
                            this.notif.className = "note";
                            e.preventDefault();
                        }
                    }else if(playerchoice.id === "scissors") {
                        if(this.pilihKomputer === "scissors") {
                            this.notif.textContent = "Draw";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "paper") {
                            this.notif.textContent = "Player Win";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "rock"){
                            this.notif.textContent = "Player Lose";
                            this.notif.className = "note";
                            e.preventDefault();
                        }
                    }else if(playerchoice.id === "paper") {
                        if(this.pilihKomputer === "scissors") {
                            this.notif.textContent = "Player Lose";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "paper") {
                            this.notif.textContent = "Draw";
                            this.notif.className = "note";
                            e.preventDefault();
                        }else if(this.pilihKomputer === "rock"){
                            this.notif.textContent = "Player Win";
                            this.notif.className = "note";
                            e.preventDefault();
                        }
                    }
                })
            }
        )

    }

}

let result = new Main();

result.gamePlay();


