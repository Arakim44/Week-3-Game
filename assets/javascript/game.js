

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
var lives;


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
    check();
  }


//when categry is clicked, then it should show the randome word from the bank.
function movies(){
  rand = Math.floor(Math.random()*words.movie.length);
  word = words.movie[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Movies";
  document.getElementById('category').style.display="none";
  console.log(word);
  console.log(word.length);
  word = word.replace(/\s/g, "-");
  result();
  console.log(word);
 }



function dogs(){
   rand = Math.floor(Math.random()*words.dog.length);
   word = words.dog[rand];
   document.getElementById('categoryNames').innerHTML ="You picked Dogs";
   document.getElementById('category').style.display="none";
   console.log(word);
   word = word.replace(/\s/g, "-");
   result();
  }

function superHeros(){
   rand = Math.floor(Math.random()*words.superHero.length);
   word = words.superHero[rand];
   document.getElementById('categoryNames').innerHTML ="You picked Super Heros";
   document.getElementById('category').style.display="none";
   console.log(word);
   word = word.replace(/\s/g, "-");
   result();

}

function videoGames(){
  rand = Math.floor(Math.random()*words.videoGame.length);
  word = words.videoGame[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Video Games";
  document.getElementById('category').style.display="none";
  console.log(word);
  word = word.replace(/\s/g, "-");
  result();
}


function harryPotters(){
  rand = Math.floor(Math.random()*words.harryPotter.length);
  word = words.harryPotter[rand];
  document.getElementById('categoryNames').innerHTML ="You picked Harry Potter!!";
  document.getElementById('category').style.display="none";
  console.log(word);
  word = word.replace(/\s/g, "-");
  result();
}

/////write in jQuery***********
function result(){
  wordHolder = document.getElementById('hold');
  correct = document.createElement('ul');
  for (var i = 0; i < word.length; i++){
    correct.setAttribute('id','chosen-word');
    var guess = document.createElement('li');
    guess.setAttribute('class','guess');
    if (word[i]==="-"){
    guess.innerHTML = " ";
    space = 1;
     }else{
    guess.innerHTML = "_";
  }
  guesses.push(guess);
  wordHolder.appendChild(correct);
  correct.appendChild(guess);
  }
}


function check(){
   list.onclick = function( ) {
    var guess = (this.innerHTML);
    this.setAttribute("class","active");
    this.onclick = null;
    for (var i =0; i<word.length; i++){
      if (word[i]===guess){
        guesses[i].innerHTML = guess;
      }
    }
  }
}















//when clicking the letters, this happens:
// function check() {
//     function list.onclick() {
//      var geuss = (this.innerHTML);
//      this.setAttribute("class", "active");
//      this.onclick = null;
//      for (var i = 0; i < word.length; i++) {
//        if (word[i] === geuss) {
//          geusses[i].innerHTML = geuss;
//          counter += 1;
//        }
//      }
    //  var j = (word.indexOf(geuss));
    //  if (j === -1) {
      //  lives -= 1;
      //  comments();
      //  animate();
    //  } else {
      //  comments();
    //  }
 // }
 // }

///show lives
//  comments = function () {
//   showLives.innerHTML = "You have " + lives + " lives";
//   if (lives < 1) {
//     showLives.innerHTML = "Game Over";
//   }
//   for (var i = 0; i < geusses.length; i++) {
//     if (counter + space === geusses.length) {
//       showLives.innerHTML = "You Win!";
//     }
//   }
// }










// Create geusses ul But I think I am gonna have to make these separet function and
// have play button so it runs separately.
// This is way too harder than I thought.
   //
  //  var wordHolder = document.getElementById('hold');
  //  var correct = document.createElement('ul');
  //
  //  for (var i = 0; i < word.length; i++) {
  //    correct.setAttribute('id', 'my-word');
  //    var  guess = document.createElement('li');
  //    guess.setAttribute('class', 'guess');
  //    if (word[i] === "-") {
  //      guess.innerHTML = "-";
  //      space = 1;
  //    } else {
  //      guess.innerHTML = "_";
  //    }
  //
  //    geusses.push(guess);
  //    wordHolder.appendChild(correct);
  //    correct.appendChild(guess);
  //  }
