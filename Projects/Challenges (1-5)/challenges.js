//Challenge 1
function ageInDays(){
    let birthYear = prompt('Enter year of birth ')
    let ageInDayss = (2021   - birthYear) * 365
    let age = (2021-birthYear)
    let h3 = document.createElement('h3')
    h3.setAttribute('id','ageInDays')
    textAnswer = document.createTextNode('Age(In years) - '+age+' Age(In days) - '+ageInDayss)
    h3.appendChild(textAnswer)// basically your textAnswer taking the characteristics of your h3 element
    document.getElementById('result-row-2').appendChild(h3)
}
function reset(){
    document.getElementById('ageInDays').remove()
}
//Challenge 2
document.querySelector('#generate-button').addEventListener('click',generateButton)
function generateButton(images){
    let div = document.getElementById('flex-picture-gen')
    let img = document.createElement('img')
    img.src = 'images/picGen/005.jpg'  
    div.appendChild(img)
}
//Challenge 3   
//collects human input and stores it in a variable (line 50)
//randomly generate bot input and stores it in a variable (line 58-61 and 51)
//display human input and bot random input removing other flex items(line 63-73)
//compute result - i.e decide winner
//specify state of the game(win,loss,tie)

//This Specifes parameters needed in the game
rpsGameVal = {
    'rpsChoices':['rock','paper','scissors'],
    'bot':['rock','paper','scissors'],
    'human':['rock','paper','scissors'],
    'winrps':0,
    'lossrps':0,
    'drawrps':0,
}
//Constants in accessing values in the rpsGameVal dictionary(object)
const botInput = rpsGameVal['bot']
const humanChoices = rpsGameVal['human']
const botChoices = rpsGameVal['bot']
const rpsChoice = rpsGameVal['rpsChoices']
//---------------- Global Variables ----------------
let botChoice,humanChoice,yourChoice,winner,bot,human
//---------------------------------------------------------------------------------------------
//1(line 44) Basically the activities that will be going on in the game
function rpsGame(yourChoice){
    humanChoice = yourChoice.id
    botChoice = randomChoice()
    console.log('Human choice - '+humanChoice)
    console.log('Computer choice - '+botChoice)
    displayRps(humanChoice,botChoice)
    //computeResult()
}
//2 The random number generated here(line 60) will be used to access the values in rpsGameVal(line 33) using their index numbers(line 49)
function randomChoice(){
    randomIndex = Math.floor(Math.random() * 3)
    return rpsGameVal['bot'][randomIndex]    
}
//3 Displays the input of both players (human and bot)
function displayRps(humanImageChoice, botImageChoice){
    imageDatabase = {
        'rock':document.querySelector('#rock').src,
        'paper':document.querySelector('#paper').src,
        'scissors':document.querySelector('#scissors').src,
    }
    document.querySelector('#rock').remove()
    document.querySelector('#paper').remove()
    document.querySelector('#scissors').remove()

    humanDiv = document.createElement('div')
    botDiv = document.createElement('div')
    messageDiv = document.createElement('div')
    humanDiv.innerHTML = "<img src='"+imageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px black'>"
    messageDiv.innerHTML = "<h3 style='color:'black';font-size:60px;padding:30px'>"+decideWinner() + "</h3>"
    botDiv.innerHTML = "<img src='"+imageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow:0px 10px 50px red'>"
    document.querySelector('.flex-box-rps-row-1').appendChild(humanDiv)
    document.querySelector('.flex-box-rps-row-1').appendChild(messageDiv)
    document.querySelector('.flex-box-rps-row-1').appendChild(botDiv)   
}
//4 Decide winner
function decideWinner(){
    rpsGameVal['winrps']++
    rpsGameVal['lossrps']++
    rpsGameVal['drawrps']++
    if (humanChoice === botChoice){
        document.querySelector('#drawrps').textContent = rpsGameVal['drawrps']
        return 'You Tied!'
    }else if (humanChoice == 'rock' && botChoice == 'paper' || botChoice == 'scissors'){
        document.querySelector('#winrps').textContent = rpsGameVal['winrps']
        return 'You Won!'
    }else if (humanChoice == 'paper' && botChoice == 'scissors' || botChoice == 'rock'){
        document.querySelector('#lossrps').textContent = rpsGameVal['lossrps']
        return 'You Lost!'
    }else if (botChoice == 'rock' && humanChoice == 'paper' || humanChoice == 'scissors'){
        document.querySelector('#lossrps').textContent = rpsGameVal['lossrps']
        return 'You Lost!'
    }else if (botChoice == 'paper'  && humanChoice == 'scissors' || humanChoice == 'rock'){
        document.querySelector('#winrps').textContent = rpsGameVal['winrps']
        return 'You Won!'
    }else if (botChoice == 'scissors' && humanChoice == 'paper'){
        document.querySelector('#lossrps').textContent = rpsGameVal['lossrps']
        return 'You Lost'
    }
    return message
}
//The comparison between the human/bot choice will determine the winner
//Challenge 4
let allButtons,copyAllButtons;
allButtons = document.getElementsByTagName('button');
copyAllButtons = []
for (i=0; i<allButtons.length; i++){
    copyAllButtons.push(allButtons[i].classList[1])
}
console.log(copyAllButtons)
function buttonColorChange(button){
    buttonValue = button.value
    if (buttonValue == 'random'){
        buttonRandom()
    }else if (buttonValue == 'blue'){
        buttonBlue()
    }else if (buttonValue == 'grey'){
        buttonGrey()
    }else if (buttonValue == 'yellow'){
        buttonYellow()
    }else if (buttonValue == 'green'){
        buttonGreen()
    }else if (buttonValue == 'crimson'){
        buttonCrimson()
    }else if (buttonValue == 'reset'){
        buttonReset()
    }
}
function buttonRandom(){
    let choices = ['btn-primary','btn-secondary','btn-danger','btn-warning','btn-success']
    for (r=0; r<allButtons.length; r++){
        allButtons[r].classList.remove(allButtons[r].classList[1])
        allButtons[r].classList.add(choices[Math.floor(Math.random()*5)])
    }
}function buttonBlue(){
    for (b=0; b<allButtons.length; b++){
        allButtons[b].classList.remove(allButtons[b].classList[1])
        allButtons[b].classList.add('btn-primary')
    }  
}function buttonGrey(){
    for (g=0; g<allButtons.length; g++){
        allButtons[g].classList.remove(allButtons[g].classList[1])
        allButtons[g].classList.add('btn-secondary')
    }
}function buttonYellow(){
    for (y=0; y<allButtons.length; y++){
        allButtons[y].classList.remove(allButtons[y].classList[1])
        allButtons[y].classList.add('btn-warning')
    }  
}function buttonGreen(){
    for (g=0; g<allButtons.length; g++){
        allButtons[g].classList.remove(allButtons[g].classList[1])
        allButtons[g].classList.add('btn-success')
    }  
}function buttonCrimson(){
    for (c=0; c<allButtons.length; c++){
        allButtons[c].classList.remove(allButtons[c].classList[1])
        allButtons[c].classList.add('btn-danger')
    }  
}function buttonReset(){
    for (r=0; r<allButtons.length; r++){
        allButtons[r].classList.remove(allButtons[r].classList[1])
        allButtons[r].classList.add(copyAllButtons[r])
    }
}
//Challenge 5
//We want to play a game
//when we click the hit button, it randomly displays cards on the playersBox and update players score
//when we click the stand button, it randomly displays cards every 1000ms on the dealersBox and update the score
//we control the flow of cards in each respective box by setting up the game rules/conditions
//we compute result depending on the rules and conditions of the game we've set e.g how a player can win,loose, tie e.t.c
//we display the winner in the result box e.g You Won! or Dealer Won!
//when we click the deal button it clears all cards and reset the score in each player box
//we update the scores in the table records when the deal button is clicked, and can only be formatted when the page is refreshed
blackJackGame = {
    'you':{'div':'.playerBox','scoreSpan':'.player-blackJack-score','score':0},
    'dealer':{'div':'.dealerBox','scoreSpan':'.dealer-blackJack-score','score':0},
    'cards':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    'cardsValue':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
    'wins':0,
    'loss':0,
    'draws':0,
}
//-------------------- Global Variables and Constants ---------------------
    //Constants
const You = blackJackGame['you']
const Dealer = blackJackGame['dealer']
const Cards = blackJackGame['cards']
    //Variables
let hitBtnSound = new Audio('challenge5/sounds/swish.m4a')
let lossSound = new Audio('challenge5/sounds/aww.mp3')
let winSound = new Audio('challenge5/sounds/cash.mp3')
let message, messageColor
let playerImage, dealerImage
//buttons and the functions they'll operate from
document.querySelector('#blackJack-hit-button').addEventListener('click',hitButton)
document.querySelector('#blackJack-stand-button').addEventListener('click',standButton)
document.querySelector('#blackJack-deal-button').addEventListener('click',dealButton)
function hitButton(){
    hitBtnSound.play()
    let cards = randomIndex(You)
    showCard(You,cards)
    updateScore(You,cards)
    showScore(You)
}
function showCard(activePlayer,cards){
    let cardImage = document.createElement('img');
    cardImage.src = `challenge5/images/${cards}.png`;
    document.querySelector(activePlayer['div']).appendChild(cardImage)
}
function randomIndex(activePlayer){
    randomNumber =  Math.floor(Math.random() * 13)
    return blackJackGame['cards'][randomNumber]
}
function updateScore(activePlayer,cards){
    if (cards == 'A'){
        if (activePlayer['score'] + blackJackGame['cardsValue'][cards][1] <= 21){
            activePlayer['score'] += blackJackGame['cardsValue'][cards][1]
        }else{
            activePlayer['score'] += blackJackGame['cardsValue'][cards][0]
        }
    }else{
        activePlayer['score'] += blackJackGame['cardsValue'][cards]
    }
}
function showScore(activePlayer){
    if (activePlayer['score'] > 21){
        lossSound.play()
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust!'
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
    }
}
async function standButton(){
    while (Dealer['score'] <= 16){
    hitBtnSound.play()
    let cards = randomIndex(Dealer)
    showCard(Dealer,cards)
    updateScore(Dealer,cards)
    showScore(Dealer)
    if (Dealer['score']> 15){
        winner = computeResult()
        showResult(winner)
    }
    await timer(1000)
}
}function timer(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}
function dealButton(){
    playerImage = document.querySelector('.playerBox').querySelectorAll('img')
    dealerImage = document.querySelector('.dealerBox').querySelectorAll('img')
    for (p=0; p<playerImage.length; p++){
        playerImage[p].remove()
    }
    for (d=0; d<dealerImage.length; d++){
        dealerImage[d].remove()
    }
    You['score'] = 0
    Dealer['score'] = 0
    document.querySelector('.result').textContent = "Let's Play!"
    document.querySelector('.result').style.color = '#343a40'
    document.querySelector('.player-blackJack-score').textContent = 0
    document.querySelector('.dealer-blackJack-score').textContent = 0
    document.querySelector('.dealer-blackJack-score').style.color = '#343a40'
    document.querySelector('.player-blackJack-score').style.color = '#f8f9fa'
}
function computeResult(){
    if (You['score'] <= 21){
        if(You['score'] > Dealer['score'] || Dealer['score'] > 21){
        winner = You
        blackJackGame['wins']++
        }else if (Dealer['score'] > You['score']){
        winner = Dealer
        blackJackGame['loss']++
        }
    }else if(You['score'] > 21 && Dealer['score'] <= 21){
        blackJackGame['loss']++
        winner = Dealer
    }else if(You['score'] > 21 && Dealer['score'] > 21){
        blackJackGame['draws']++
    }if (You['score'] == Dealer['score']){
        blackJackGame['draws']++
    }
    console.log('Winner is ',winner)
    return winner
}
function showResult(winner) {
    if (winner === You){
        winSound.play()
        message = 'You Won'
        messageColor = 'green'
        document.querySelector('#wins').textContent = blackJackGame['wins']
    }else if (winner === Dealer){
        lossSound.play()
        message = 'You Lost'
        messageColor = 'red'
        document.querySelector('#loss').textContent = blackJackGame['loss']
    }else{
        lossSound.play()
        message = 'You Drew'
        messageColor = 'black'
        document.querySelector('#draws').textContent = blackJackGame['draws']
    }
    document.querySelector('.result').textContent = message
    document.querySelector('.result').style.color = messageColor
}
