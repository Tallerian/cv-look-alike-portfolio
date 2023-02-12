let api_url = null

//Wrap every letter in a span
var hello = document.getElementById('myprofile-text')

const cont_css = document.getElementById('desc_text')
const styles = window.getComputedStyle(cont_css, '::before');
var proj_text1 = styles.content
console.log(proj_text1)

var project_text1 = document.getElementById('proj_text')
const phrases = ['Hello my name is Ian Ruvuto Kampwanyi', 'Welcome to my CV-Look-Alike Portfolio ']

var i = 0
var j = 0

var next = null

var done = false

current_txt = []

function loop_my_profile_txt(){

  hello.innerHTML = current_txt.join('')

  if (i < phrases.length){
    if(j < phrases[i].length){
      current_txt.push(phrases[i][j])
      j++
    }
  }
  else{
    done = true
    console.log(done)
    return
  }

  if( j == phrases[i].length){
    i++
    j = 0
    current_txt.push("<br>")
  }
  setTimeout(loop_my_profile_txt, 40)

}


function loop_project_text(){
  project_text1.innerHTML = current_txt.join('')
  
  if (count < proj_text1.length){
    current_txt.push(proj_text1[count])
  }
  else{
    return
  }
  count++
  setTimeout(loop_project_text, 30)
}

function translate_eng(text_edit, lang){
  api_url = `https://api.mymemory.translated.net/get?q=${text_edit}&langpair=${lang}|it`;
  fetch(api_url).then(res => res.json().then(data => {
    console.log(data)
  }));
}

count = 0;
loop_project_text();






  

