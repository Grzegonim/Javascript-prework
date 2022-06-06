function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } if(argMoveId == 2){
    return 'papier';
  } if(argMoveId == 3){
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);


printMessage('Twój ruch to: ' + playerMove);

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
  } if (argComputerMove == argPlayerMove){
    printMessage('Remis');
  } if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } if (argComputerMove == 'kamień' && argPlayerMove == "nożyce"){
    printMessage('Przegrałeś');
  } if (argComputerMove == 'papier' && argPlayerMove == "kamień"){
    printMessage('Przegrałeś');
  } if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrałeś');
  } if (argPlayerMove == 'nieznany ruch'){
    printMessage('Wybierz 1, 2 lub 3');
  }
}

displayResult(computerMove, playerMove)


