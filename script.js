const questions = [{
  questionNumber: 0,
  question: 'What does GLOW stand for?',
  answers: [
    'George Loves Onion Wedges',
    'Gorgeous Ladies of Wrestling',
    'Giant Lettuces of Wisconsin ',
    'Gregarious Lesbians of Windsailing'
  ],
  correctAnswerString: 'Gorgeous Ladies of Wrestling',
  correctAnswer: 1,
  imgsrc: 'GLOW.jpg',
  imgalt: 'the cast of Glow'
},

{
  questionNumber: 1,
  question: "What historical artifact is one of the characters named after?",
  answers: [
    'The Liberty Bell',
    'Lincoln Memorial',
    'The Declaration of Independence ',
    'Statue of Liberty'
  ],
  correctAnswerString: 'The Liberty Bell',
  correctAnswer: 0,
  imgsrc: 'Debbie-Egan.jpg',
  imgalt: 'actress Betty Gilpin'
},

{
  questionNumber: 2,
  question: 'What causes the tension between Ruth and Debby?',
  answers: [
    'Ruth kills Randy.',
    'Debby and Ruth are divorced.',
    'Ruth slept with Debby’s husband.',
    'Debby runs a bridge club and will not let Ruth join because she is from Sugarditch.'
  ],
  correctAnswerString: 'Ruth slept with Debby’s husband.',
  correctAnswer: 2,
  imgsrc: 'Debbie-Ruth-Fight.jpg',
  imgalt: 'two women wrestling'
},

{
  questionNumber: 3,
  question: "Who did Bash Howard (Chris Lowell) marry?",
  answers: [
    'Britannica',
    'Sheila the She-Wolf',
    'Cherry Bang',
    'Junk Chain'
  ],
  correctAnswerString: 'Britannica',
  correctAnswer: 0,
  imgsrc: 'Bash.jpg',
  imgalt: 'actor Chris Lowell'
},

{
  questionNumber: 4,
  question: "The actual G.L.O.W (Yes, it was real) first aired in what year?",
  answers: [
    '1999',
    '1986',
    '1978',
    '1992'
  ],
  correctAnswerString: '1986',
  correctAnswer: 1,
  imgsrc: 'Glow Original.jpg',
  imgalt: 'the original cast of Glow'
}];


let right = 0;
let wrong = 0;
let i = 0;


function startQuiz () {
  $('.startbutton').click(function (e) {
     event.preventDefault()
    $('.form, .xoutofy, .pic, .scoreKeeper, .submit, .rightorwrong').show()
    $('.startbox').hide()

    renderQ()
  })
}

function renderQ(){


if (i > 4) {
   endGame();
}
      
  $(".questionBox").text( questions[i].question)

  $('.xoutofy').show()
  
  questions[i].answers.forEach(function(answer, index) {
   $(".alltheAnswers").append(
         `<div class="answerButton">
          <input type="radio" class="answer" id="${index}" name="drone" value="${answer}">
            <label for=${index}>${answer}</label>
            </div>`
          )
  })

  $('.pic').empty()

  $('.pic').append(
  `<img src="${questions[i].imgsrc}" alt="${questions[i].imgalt}"/>`
   )
   
  }

  $('.form').submit(function (event) {
    event.preventDefault()

    if ($(this).find(".answer:checked").length === 0) {

      $('.rightorwrong').empty()

      $('.rightorwrong').append(
      `<div class="alertchoose"> 
      You must choose an answer.
      </div>`);

    }

    else {

    let selected = $(this).find(".answer:checked").val()

    if (selected === questions[i].correctAnswerString){
      right++
      showScores()
      renderQ()


      $('.rightorwrong').append(
        `<div class="alertright"> 
        <strong>RIGHT</strong> The right answer was "${questions[i-1].correctAnswerString}".
      </div>`);
    }
    
    else {
      wrong++;
      showScores()
      renderQ()
      
      $('.rightorwrong').append(
        `<div class="alertwrong">
        <strong>WRONG!</strong> The right answer was "${questions[i-1].correctAnswerString}"
      </div>`)

    }
    }
  })


  function showScores() {

    if (i < 5) {
      i++
    
    }

    $('.right').empty().append(`<p>Right: ${right}</p>`)
    
    $('.wrong').empty().append(`<p>Wrong: ${wrong}</p>`)
    
    $(".alltheAnswers").empty()

  $('.rightorwrong').empty()

  $('.xoutofy').empty()

  if (i < 5) {
    $('.xoutofy').append(
    `<p>This is question ${i+1} out of 5.</p>`
   )
  }

  else {
    $('.xoutofy').append(
    `<p>This is question ${i} out of 5.</p>`
   )
  }

  }


   function endGame() {
      $('.submit').empty()
      $('.questionBox').addClass('hidden')

      if (right > wrong) {
          $('.rightorwrong').append(
          `<div class="alertright">
        You got ${right}/${questions.length}
          </div>
       <button value="Refresh Page" onClick="window.location.reload()">Try Again</button>`)
      }

      else  {
          $('.rightorwrong').append(
          `<div class="alertwrong">
        You got ${right}/${questions.length}. You should watch more <a href="https://www.netflix.com/title/80114988">Glow</a>. 
          </div>
       
       <button value="Refresh Page" onClick="window.location.reload()">Try Again</button>`)

       
      }
 }


$(startQuiz)
