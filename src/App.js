import React, {useState} from 'react'
import './App.css'

const questionData = [
  {
    text: 'It is important to me that others approve of me.',
    type: 1,
  },
  {
    text: 'I hate to fail at anything.',
    type: 1,
  },
  {
    text: 'People who do wrong deserve what they get.',
    type: 1,
  },
  {
    text: 'I usually accept what happens philosophically.',
    type: 2,
  },
  {
    text: 'If a person wants to, he can be happy under almost any circumstances.',
    type: 2,
  },
  {
    text: 'I have a fear of some things that often bothers me.',
    type: 1,
  },
  {
    text: 'I usually put off important decisions.',
    type: 1,
  },
  {
    text: 'Everyone needs someone he can depend on for help and advice.',
    type: 1,
  },
  {
    text: '"A zebra cannot change his stripes."',
    type: 1,
  },
  {
    text: 'I prefer quiet leisure above all things.',
    type: 1,
  },
  {
    text: "I like the respect of others, but I don't have to have it.",
    type: 2,
  },
  {
    text: 'I avoid things I cannot do well.',
    type: 1,
  },
  {
    text: 'Too many evil persons escape the punishment they deserve.',
    type: 1,
  },
  {
    text: "Frustrations don't upset me.",
    type: 2,
  },
  {
    text: 'People are disturbed not by situations but by the view they take of them.',
    type: 2,
  },
  {
    text: 'I feel little anxiety over unexpected dangers or future events.',
    type: 2,
  },
  {
    text: 'I try to go ahead and get irksome tasks behind me when they come up.',
    type: 2,
  },
  {
    text: 'I try to consult an authority on important decisions.',
    type: 1,
  },
  {
    text: 'It is almost impossible to overcome the influences of the past.',
    type: 1,
  },
  {
    text: 'I like to have a lot of irons in the fire.',
    type: 2,
  },
  {
    text: 'I want everyone to like me.',
    type: 1,
  },
  {
    text: "I don't mind competing in activities in which others are better than I.",
    type: 2,
  },
  {
    text: 'Those who do wrong deserve to be blamed.',
    type: 1,
  },
  {
    text: 'Things should be different from the way they are.',
    type: 1,
  },
  {
    text: 'I cause my own moods.',
    type: 2,
  },
  {
    text: "I often can't get my mind off some concern.",
    type: 1,
  },
  {
    text: 'I avoid facing my problems.',
    type: 1,
  },
  {
    text: 'People need a source of strength outside themselves.',
    type: 1,
  },
  {
    text: "Just because something once strongly affects your life doesn't mean it need do so in the future.",
    type: 2,
  },
  {
    text: "I'm most fulfilled when I have lots to do.",
    type: 2,
  },
  {
    text: "I can like myself even when many others don't.",
    type: 2,
  },
  {
    text: "I like to succeed at something, but I don't feel I have to.",
    type: 2,
  },
  {
    text: 'Immorality should be strongly punished.',
    type: 1,
  },
  {
    text: "I often get disturbed over situations I don't like.",
    type: 1,
  },
  {
    text: 'People who are miserable have usually made themselves that way.',
    type: 2,
  },
  {
    text: "If I can't keep something from happening, I don't worry about it.",
    type: 2,
  },
  {
    text: 'I usually make decisions as promptly as I can.',
    type: 2,
  },
  {
    text: 'There are certain people that I depend on greatly.',
    type: 1,
  },
  {
    text: 'People overvalue the influence of the past.',
    type: 2,
  },
  {
    text: 'I most enjoy throwing myself into a creative project.',
    type: 2,
  },
  {
    text: "If others dislike me, that's their problem, not mine.",
    type: 2,
  },
  {
    text: 'It is highly important to me to be successful in everything I do.',
    type: 1,
  },
  {
    text: 'I seldom blame people for their wrongdoings.',
    type: 2,
  },
  {
    text: "I usually accept things the way they are, even if I don't like them.",
    type: 2,
  },
  {
    text: "A person won't stay angry or blue long unless he keeps himself that way.",
    type: 2,
  },
  {
    text: "I can't stand to take chances.",
    type: 1,
  },
  {
    text: 'Life is too short to spend it doing unpleasant tasks.',
    type: 1,
  },
  {
    text: 'I like to stand on my own two feet.',
    type: 2,
  },
  {
    text: 'If I had had different experiences I could be more like I want to be.',
    type: 1,
  },
  {
    text: "I'd like to retire and quit working entirely.",
    type: 1,
  },
  {
    text: 'I find it hard to go against what others think.',
    type: 1,
  },
  {
    text: 'I enjoy activities for their own sake, no matter how good I am at them.',
    type: 2,
  },
  {
    text: 'The fear of punishment helps people be good.',
    type: 1,
  },
  {
    text: 'If things annoy me, I just ignore them.',
    type: 2,
  },
  {
    text: 'The more problems a person has, the less happy he will be.',
    type: 1,
  },
  {
    text: 'I am seldom anxious over the future.',
    type: 2,
  },
  {
    text: 'I seldom put things off.',
    type: 2,
  },
  {
    text: 'I am the only one who can really understand and face my problems.',
    type: 2,
  },
  {
    text: 'I seldom think of past experiences as affecting me now.',
    type: 2,
  },
  {
    text: 'Too much leisure time is boring.',
    type: 2,
  },
  {
    text: "Although I like approval, it's not a real need for me.",
    type: 2,
  },
  {
    text: 'It bothers me when others are better than I am at something.',
    type: 1,
  },
  {
    text: 'Everyone is basically good.',
    type: 2,
  },
  {
    text: "I do what I can to get what I want and then don't worry about it.",
    type: 2,
  },
  {
    text: 'Nothing is upsetting in itself - only in the way you interpret it.',
    type: 2,
  },
  {
    text: 'I worry a lot about certain things in the future.',
    type: 1,
  },
  {
    text: 'It is difficult for me to do unpleasant chores.',
    type: 1,
  },
  {
    text: 'I dislike for others to make my decisions for me.',
    type: 2,
  },
  {
    text: 'We are slaves to our personal histories.',
    type: 1,
  },
  {
    text: 'I sometimes wish I could go to a tropical island and just lie on the beach forever.',
    type: 1,
  },
  {
    text: 'I often worry about how much people approve of and accept me.',
    type: 1,
  },
  {
    text: 'It upsets me to make mistakes.',
    type: 1,
  },
  {
    text: 'It\'s unfair that "the rain falls on both the just and the unjust."',
    type: 1,
  },
  {
    text: 'I am fairly easygoing about life.',
    type: 2,
  },
  {
    text: 'More people should face up to the unpleasantness of life.',
    type: 1,
  },
  {
    text: "Sometimes I can't get a fear off my mind.",
    type: 1,
  },
  {
    text: 'A life of ease is seldom very rewarding.',
    type: 2,
  },
  {
    text: 'I find it easy to seek advice.',
    type: 2,
  },
  {
    text: 'Once something strongly affects your life, it always will.',
    type: 1,
  },
  {
    text: 'I love to lie around.',
    type: 1,
  },
  {
    text: 'I have considerable concern with what people are feeling about me.',
    type: 1,
  },
  {
    text: 'I often become quite annoyed over little things.',
    type: 1,
  },
  {
    text: 'I usually give someone who has wronged me a second chance.',
    type: 2,
  },
  {
    text: 'People are happiest when they have challenges and problems to overcome.',
    type: 1,
  },
  {
    text: 'There is never any reason to remain sorrowful for very long.',
    type: 2,
  },
  {
    text: 'I hardly ever think of such things as death or atomic war.',
    type: 2,
  },
  {
    text: 'I dislike responsibility.',
    type: 1,
  },
  {
    text: 'I dislike having to depend on others.',
    type: 2,
  },
  {
    text: 'People never change basically.',
    type: 1,
  },
  {
    text: "Most people work too hard and don't get enough rest.",
    type: 1,
  },
  {
    text: 'It is annoying but not upsetting to be criticized.',
    type: 2,
  },
  {
    text: "I'm not afraid to do things which I cannot do well.",
    type: 2,
  },
  {
    text: 'No one is evil, even though his deeds may be.',
    type: 2,
  },
  {
    text: 'I seldom become upset over the mistakes of others.',
    type: 2,
  },
  {
    text: 'Man makes his own hell within himself.',
    type: 2,
  },
  {
    text: 'I often find myself planning what I would do in different dangerous situations.',
    type: 1,
  },
  {
    text: 'If something is necessary, I do it even if it is unpleasant.',
    type: 2,
  },
  {
    text: "I've learned not to expect someone else to be very concerned about my welfare.",
    type: 2,
  },
  {
    text: "I don't look upon the past with any regrets.",
    type: 2,
  },
  {
    text: "I can't feel really content unless I'm relaxed and doing nothing.",
    type: 1,
  },
]

const scoreCategories = [
  'The higher the total, the greater your agreement with the irrational idea that it is and absolute necessity for an adult to have love and approval from peers, family, & friends.',
  'The higher the total, the greater your agreement with the irrational idea that you must be unfailingly competent and almost perfect in all you undertake.',
  'The higher the total, the greater your agreement with the irrational idea that certain people are evil, wicked, and villainous, and should be punished.',
  'The higher the total, the greater your agreement with the irrational idea that it is horrible when things are not the way you would like them to be.',
  'The higher the total, the greater your agreement with the irrational idea that external events cause most human misery-people simply react as events trigger their emotions.',
  'The higher the total, the greater your agreement with the irrational idea that you should feel fear or anxiety about anything that is unknown, uncertain, or potentially dangerous.',
  "The higher the total, the greater your agreement with the irrational idea that it is easier to avoid than to face life's difficulties and responsibilities.",
  'The higher the total, the greater your agreement with the irrational idea that you need something other or stronger or greater than yourself to rely on.',
  'The higher the total, the greater your agreement with the irrational idea that the past has a lot to do with determining the present.',
  'The higher the total, the greater your agreement with the irrational idea that happiness can be achieved by inaction, passivity, and endless leisure.',
]

const App = () => {
  const [scores, setScores] = useState(
    scoreCategories.map(category => ({
      score: 0,
      text: category,
    }))
  )
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questions, setQuestions] = useState(
    questionData.map(question => ({
      ...question,
      answer: 0,
    }))
  )
  const [showScore, setShowScore] = useState(false)
  const quizComplete = currentQuestion >= 99

  const handleAnswer = answer => {
    var currentQuestions = questions
    questions[currentQuestion].answer = answer
    console.log(questions[currentQuestion])
    setQuestions(currentQuestions)
  }

  const submitQuiz = () => {
    questions.forEach((q, i) => {
      const currentQuestionNumber = i + 1
      if (q.answer === q.type) {
        const secondDigit = Number(
          String(currentQuestionNumber).charAt(currentQuestionNumber < 10 ? 0 : 1)
        )
        var currentScores = scores
        currentScores[(secondDigit == 0 ? 10 : secondDigit) - 1].score =
          currentScores[(secondDigit == 0 ? 10 : secondDigit) - 1].score + 1
        setScores(currentScores)
        console.log(
          'Question ' +
            currentQuestionNumber +
            ' +1 point to category ' +
            (secondDigit == 0 ? 10 : secondDigit)
        )
      } else {
        console.log('Question ' + currentQuestionNumber + ' No Point')
      }
    })
    setShowScore(true)
  }
  const prevQuestion = () => {
    setCurrentQuestion(currentQuestion - 1)
  }
  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
    console.log(scores)
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScores(
      scoreCategories.map(category => ({
        score: 0,
        text: category,
      }))
    )
    setQuestions(
      questionData.map(question => ({
        ...question,
        answer: 0,
      }))
    )
    setShowScore(false)
  }
  const _onAnswer = answer => {
    handleAnswer(answer)
    if (!quizComplete) {
      nextQuestion()
    } else {
      submitQuiz()
    }
  }

  return (
    <div className='quiz-container'>
      <h1>Beliefs Inventory</h1>
      <hr></hr>
      <p className='desc'>
        It is not necessary to ponder over any item very long. Check off your answer quickly and go
        on to the next statement. Be sure to mark how you actually think about the statement, not
        how you think you should think.
      </p>

      {showScore ? (
        <>
          <br></br>

          <button className='button' onClick={restartQuiz}>
            Take Again
          </button>
          <br></br>
          <br></br>

          {scores.map((score, i) => (
            <>
              <div class='row'>
                <div class='column'>
                  <br></br>

                  <h1 className='score'>{score.score}</h1>
                </div>
                <div class='column'>
                  <p>{score.text}</p>
                </div>
              </div>
              <br></br>
              <br></br>
            </>
          ))}
        </>
      ) : (
        <>
          <h2 id='question-number'>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className='question'>{questions[currentQuestion].text}</p>
          <button className='button agree' onClick={() => _onAnswer(1)}>
            Agree
          </button>
          <button className='button disagree' onClick={() => _onAnswer(2)}>
            Disagree
          </button>

          <button
            style={{
              border: '1px solid #888888',
              backgroundColor: currentQuestion == 0 && 'transparent',
              color: currentQuestion == 0 && '#888888',
            }}
            disabled={currentQuestion == 0}
            className='button back'
            onClick={prevQuestion}>
            Back
          </button>
        </>
      )}
    </div>
  )
}

export default App
