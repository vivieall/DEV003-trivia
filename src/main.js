/*
  Aquí va tu JavaScript
*/

var sumScore = 0;

function startGame() {
  let name = document.getElementById('username').value;
  if(name.length === 0 || name === null){
    document.getElementById("head").innerHTML = "Por favor ingresa tu nombre para continuar :)";
  } else {
    document.getElementById("head").innerHTML = "¡Bienvenid@ " + name + " a la Trivia de Superhéroes!";
    let x = document.getElementById('choose');
    let z = document.getElementById('welcome');
    x.style.display = 'block';
    z.style.display = 'none';
  }
}

function startDC() {
  let alternatives = document.getElementById('choose');
  let dcQ1 = document.getElementById('panelDC-q1');
  alternatives.style.display = 'none';
  dcQ1.style.display = 'block';
}

function startMarvel() {
  let alternatives = document.getElementById('choose');
  let mvQ1 = document.getElementById('panelMarvel-q1');
  alternatives.style.display = 'none';
  mvQ1.style.display = 'block';
}

function checkAnswer(panel, last){
  let legend = document.getElementById(panel).getElementsByClassName("score-label")[0];
  let showColors = document.getElementById(panel).querySelectorAll('input[type="radio"]');
  [].forEach.call(showColors, function(alternative) {
    if(alternative.value == 1){
      alternative.parentNode.style.background = 'green';
    } else {
      alternative.parentNode.style.background = 'red';
    }
  });

  let isCorrect = document.querySelector('input[type="radio"]:checked').value;
  if(isCorrect == '1'){
    legend.innerHTML = "¡Respuesta correcta!";
    sumScore = sumScore + 1;
  } else {
    legend.innerHTML = "¡Respuesta incorrecta!";
  }
  
  setTimeout(() => {
    changePanel(panel, last);
  }, "1200")
}

function changePanel(panel, last){
  let dcQ1 = document.getElementById('panelDC-q1');
  let dcQ2 = document.getElementById('panelDC-q2');
  let dcQ3 = document.getElementById('panelDC-q3');

  let mvQ1 = document.getElementById('panelMarvel-q1');
  let mvQ2 = document.getElementById('panelMarvel-q2');
  let mvQ3 = document.getElementById('panelMarvel-q3');

  if(dcQ1.style.display == 'block' &&  dcQ3.style.display == 'none') {
    dcQ1.style.display = 'none';
    dcQ2.style.display = 'block';
  }
  else if(dcQ2.style.display == 'block' && dcQ1.style.display == 'none') {
    dcQ2.style.display = 'none';
    dcQ3.style.display = 'block';
  }
  else if(mvQ1.style.display == 'block' &&  mvQ3.style.display == 'none') {
    mvQ1.style.display = 'none';
    mvQ2.style.display = 'block';
  }
  else if(mvQ2.style.display == 'block' && mvQ1.style.display == 'none') {
    mvQ2.style.display = 'none';
    mvQ3.style.display = 'block';
  }

  if(last == true){
    totalScore(panel);
  } else {
    cleanChecked();
  }
}

function cleanChecked(){
  let options = document. querySelectorAll('input[type="radio"]')
  options.forEach(item => {
    item.checked = false
  })
}

function totalScore(panel){
  let finalScore = document.getElementById(panel).getElementsByClassName("score-label")[0];
  finalScore.innerHTML = "Obtuviste " + sumScore + " respuesta(s) correcta(s) de 3 preguntas";
  let hideButton = document.getElementById(panel).getElementsByClassName("button next final")[0];
  hideButton.style.display = 'none';
  let returnButton = document.getElementById(panel).getElementsByClassName("button next home")[0];
  returnButton.style.display = 'block';
  sumScore = 0;
}

function hidePanels(){
  let alternatives = document.getElementById('choose');
  alternatives.style.display = 'none';

  let panelq1 = document.getElementById('panelDC-q1');
  panelq1.style.display = 'none';
  let panelq2 = document.getElementById('panelDC-q2');
  panelq2.style.display = 'none';
  let panelq3 = document.getElementById('panelDC-q3');
  panelq3.style.display = 'none';

  let panelm1 = document.getElementById('panelMarvel-q1');
  panelm1.style.display = 'none';
  let panelm2 = document.getElementById('panelMarvel-q2');
  panelm2.style.display = 'none';
  let panelm3 = document.getElementById('panelMarvel-q3');
  panelm3.style.display = 'none';

  let hideButton = document.getElementById('return')
  hideButton.style.display = 'none';
  let hideButton2 = document.getElementById('home')
  hideButton2.style.display = 'none';
}

hidePanels();