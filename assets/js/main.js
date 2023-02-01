// Wrap every letter in a span
var hello = document.getElementById('myprofile-text')
const phrases = ['Hello my name is Ian Ruvuto Kampwanyi', 'Welcome to my CV-Look-Alike Portfolio ']

var i = 0
var j = 0

current_txt = []

function loop_my_profile_txt(){

  hello.innerHTML = current_txt.join('')

  if (i < phrases.length){
    if(j < phrases[i].length){
      current_txt.push(phrases[i][j])
      j++
    }
  }

  if( j == phrases[i].length){
    i++
    j = 0
    current_txt.push("<br>")
  }
  setTimeout(loop_my_profile_txt, 40)

}

loop_my_profile_txt()


  

