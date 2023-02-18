function getComputerChoice()
{
    const arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random()*3)];
}


function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection)
    {
        return 'tie';
    }

    else if(playerSelection == 'rock' && computerSelection == 'scissors')
    {
        return 'player wins';
    }

    else if(playerSelection == 'rock' && computerSelection == 'paper')
    {
        return 'computer wins'
    }

    else if(playerSelection == 'paper' && computerSelection == 'rock')
    {
        return 'player wins'
    }

    else if(playerSelection == 'paper' && computerSelection == 'scissors')
    {
        return 'computer wins'
    }

    else if(playerSelection == 'scissors' && computerSelection == 'paper')
    {
        return 'player wins'
    }

    else if(playerSelection == 'scissors' && computerSelection == 'rock')
    {
        return 'computer wins'
    }
}

function game()
{
    let userScore = 0;
    let cpuScore = 0;
    for(let i = 0; i < 5; i++)
    {
        const playerSelection = prompt();
        if(playRound(playerSelection, getComputerChoice()) == 'player wins')
        {
            userScore += 1;
        }

        else if(playRound(playerSelection, getComputerChoice()) == 'computer wins')
        {
            cpuScore += 1;
        }
    }
    console.log(userScore);
    console.log(cpuScore);
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));

game();