

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var words = {
      movie: ['Back to the Future','The Godfather','Taxidriver','Interstellar','How to Train Your dragon','The Deer Hunter','Mononoke Hime','When Harry Met Sally','The Lord of the Ring','Harry Potter','Star Wars',],
      dog:  ['Dachshund','Pembroke Welsh Corgi','German Shaperd','Golden Ritriver','Jindo','Shiba Inu  ','Samoyed','Siberian Husky','Alaskan Malamute'],
      superHero: ['Captain America','Thor','Iron Man','Super Man','Spider Man', 'Luke Cage'],
      videoGame: ['Portal','Super Smash Brothers','Heros of Might and Magic','Ori and The Blind Forest','Five Nights at Freddys'],
      harryPotter: ['Animagus','Blood Traitor','Muggle','Occulmens','Parselmouth','Order of the Phoenix','Lord Voldmort','Hogwarts','Gringotts','Honeydukes','Felix Felicis','Polyjuice','Acid Pop','Butterbeer','Horcuxes','Pensive','Quidditch','Blast-Ended Skrewt','Hippogriff','Hungarian Horntail','Accio','Avada Kedavra','Crucio','Expecto Patronum','Sectumsemptra','Lumos'],
    };

var word;
var rand;
var wordHolder;
var correct;
var guesses = [];
var lives =7;


//creating alphabet ul



  var myButtons = document.getElementById('buttons');
  var letters = document.createElement('ul');

  for(var i = 0; i < alphabet.length; i++){
    letters.id = 'alphabet';//The id property sets or returns the id of an element (the value of an element's id attriute). Syntax: HTMLElemntObject.id
    var list = document.createElement('li');
    list.id ='letter';
    list.innerHTML = alphabet[i];
    myButtons.appendChild(letters);
    letters.appendChild(list);
    click();
  }


//when categry is clicked, then it should show the randome word from the bank.
function movies(){
  rand = Math.floor(Math.random()*words.movie.length);
  word = words.movie[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Movies";
  document.getElementById('category').style.display="none";
  console.log(word);
  console.log(word.length);
  result();
  console.log(word);
  $("#mylives").html("<b>You have "+lives+" lives left<b>");
 }



function dogs(){
   rand = Math.floor(Math.random()*words.dog.length);
   word = words.dog[rand];
   document.getElementById('categoryNames').innerHTML ="You picked Dogs";
   document.getElementById('category').style.display="none";
   console.log(word);
   result();
   $("#mylives").html("<b>You have "+lives+" lives left<b>");
  }

function superHeros(){
   rand = Math.floor(Math.random()*words.superHero.length);
   word = words.superHero[rand];
   document.getElementById('categoryNames').innerHTML ="You picked Super Heros";
   document.getElementById('category').style.display="none";
   console.log(word);
   result();
   $("#mylives").html("<b>You have "+lives+" lives left<b>");
}

function videoGames(){
  rand = Math.floor(Math.random()*words.videoGame.length);
  word = words.videoGame[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Video Games";
  document.getElementById('category').style.display="none";
  console.log(word);
  result();
  $("#mylives").html("<b>You have "+lives+" lives left<b>");
}


function harryPotters(){
  rand = Math.floor(Math.random()*words.harryPotter.length);
  word = words.harryPotter[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Harry Potter!!";
  document.getElementById('category').style.display="none";
  console.log(word);
  result();
  $("#mylives").html("<b>You have "+lives+" lives left<b>");
}

///////////////////////
function result(){
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');
  for (var i = 0; i < word.length; i++){
    correct.setAttribute('id','chosen-word');
    var guess = document.createElement('li');
    guess.setAttribute('class','guess');
    if (word[i]===" "){
    guess.innerHTML = " ";
     }else{
    guess.innerHTML = "_";
  }
  guesses.push(guess);
  wordHolder.appendChild(correct);
  correct.appendChild(guess);
  }
}


function click(){
   list.onclick = function( ) {
    var guess = (this.innerHTML);
    this.setAttribute("class","active");
    this.onclick = null;
    var guessNotInWord = true;
    for (var i =0; i<word.length; i++){
      if (word[i].toLowerCase()===guess){
        guesses[i].innerHTML = word[i];
        guessNotInWord = false;
      }
    }
    if(guessNotInWord) {
      lives = lives - 1;
      console.log(lives)
      $('#mylives').html("you have "+lives+" lives left!");
    }
    if(lives==0){
      $('#mylives').html("<b>You Died!!!</b> The answer was <i>"+word+"</i>");
      // TODO: stop letters buttons
    }
    var youWin = true;
    for(var i=0; i < guesses.length; i++){
      if(guesses[i].innerHTML == "_"){
        youWin = false;
      }
    }
    if(youWin == true){
      $('#win').html("<b>You Won!!</b>");

    }
  }
}
