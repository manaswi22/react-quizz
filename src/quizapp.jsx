import React, { useState, useEffect } from 'react';
import './quiz.css'


const questionsData = {
  HTML: {
    easy: [
      {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'Hyperlinks and Text Markup Language', 'Home Tool Markup Language'],
        correctAnswer: 'Hyper Text Markup Language',
      },
      {question:'The correct sequence of HTML tags for starting a webpage is',
        options:['HTML, Body, Title, Head',
        'HTML, Head, Title, Body',
        'HTML, Head, Title, Body'],
        correctAnswer:'HTML, Head, Title, Body'
      },
      {
        question:'Which of the following element is responsible for making the text bold in HTML?',
        options:['<pre>','<a>','<b>'],
        correctAnswer:'<b>'
      },
      {
       question:'Which of the following tag is used for inserting the largest heading in HTML?',
       options:['<h3>','<h1>','<h5>'] ,
       correctAnswer:'<h1>'
      },
      {
        question:'Which of the following tag is used to insert a line-break in HTML?',
        options:['<br>','<a>','<pre>'],
        correctAnswer:'<br>'
      }

      // Add more questions here
    ],
    medium: [
      {
        question:'How to create an unordered list (a list with the list items in bullets) in HTML?' ,
        options: ['<ul>','<ol>','<li>'],
        correctAnswer: '<ul>',
      },
      {
        question:'How to create a hyperlink in HTML?',
        options:['<a href=" "> </a>','<a url="" /a>','<a link=""> </a>'],
        correctAnswer:'<a href=" "> </a>'
      },
      {
        question:'How to create an ordered list (a list with the list items in numbers) in HTML?',
        options:['<ul>','<ol>','<li>'],
        correctAnswer:'<ol>'
      },
      {
        question:'Which of the following element is responsible for making the text italic in HTML?',
        options:['<i>','<italic>','<it>'],
        correctAnswer:'<i>'
      },
      {
        question:'How to insert an image in HTML?',
        options:['<img url = "jtp.png" />','<img link = "jtp.png" />','<img src = "jtp.png" />'],
        correctAnswer:'<img src = "jtp.png" />'
      }
      // Add more questions here
    ],
    hard: [
      {
        question: 'Which of the following elements is used to create a hyperlink in HTML?',
        options: ['<a>', '<link>', '<ref>'],
        correctAnswer: '<a>',
      },
      {
        question:'How to add a background color in HTML?',
        options:['<marquee bg color: "red">','<marquee bg-color = "red">','<marquee bgcolor = "red">'],
        correctAnswer:'<marquee bgcolor = "red">'
      },
      {
        question:'<input> is',
        options:['a format tag.','an empty tag.','All of the above'],
        correctAnswer:'an empty tag.'
      },
      {
        question:'Which of the following tag is used to make the underlined text?',
        options:['<i>','<ul>','<u>'],
        correctAnswer:'<u>'
      },
      {
        question:' How to create a checkbox in HTML?',
        options:['<input type = "checkbox">','<input type = "button">','<checkbox>'],
        correctAnswer:'<input type = "checkbox">'
      }
      // Add more questions here
    ],

  },
  CSS: {
    easy: [
        {
          question: 'Which of the following tag is used to embed css in html page?',
          options: [' <!DOCTYPE html>', ' <script>', '<style>'],
          correctAnswer: '<style>',
        },
        {question:'Which of the following CSS selectors are used to specify a group of elements?',
          options:['tag','id','class'],
          correctAnswer:'class'
        },
        {
          question:' Which of the following has introduced text, list, box, margin, border, color, and background properties?',
          options:['HTML','PHP','CSS'],
          correctAnswer:'CSS'
        },
        {
         question:'Which of the following CSS framework is used to create a responsive design?',
         options:['rails','larawell','bootstrap'] ,
         correctAnswer:'bootstrap'
        },
        {
          question:'Which of the following CSS selector is used to specify a rule to bind a particular unique element?',
          options:['tag','id','class'],
          correctAnswer:'class'
        }
  
        // Add more questions here
      ],

      medium: [
        {
          question:'Which of the following type of HTML tag is used to define an internal style sheet?' ,
          options: ['<script>','<style>','<link>'],
          correctAnswer: '<style>',
        },
        {
          question:'Which of the following CSS property is used to make the text bold?',
          options:['text-decoration: bold','font-weight: bold','font-style: bold'],
          correctAnswer:'font-weight: bold'
        },
        {
          question:' Which of the following CSS style property is used to specify an italic text?',
          options:['style','font','font-style'],
          correctAnswer:'font-style'
        },
        {
          question:'Which of the following are the CSS Extension Prefixes for Webkit?',
          options:['-web','-o-','-webkit'],
          correctAnswer:'-webkit'
        },
        {
          question:' Which of the following is the first CSS specification to become an official W3C Recommendation?',
          options:[' CSS level 1','(X)HTML CSS',' CSS level 2'],
          correctAnswer:' CSS level 1'
        }
        // Add more questions here
      ],
      hard: [
        {
          question: 'Which of the following function defines a linear gradient as a CSS image?',
          options: [' gradient()', 'linear-gradient()', 'grayscale()'],
          correctAnswer: 'linear-gradient()',
        },
        {
          question:'Which of the following CSS property sets the font size of text?',
          options:['font-size','text-size','text'],
          correctAnswer:'font-size'
        },
        {
          question:' Which of the following is not the property of the CSS box model?',
          options:['margin',' color',' width'],
          correctAnswer:' color'
        },
        {
          question:'Which of the following CSS property specifies the look and design of an outline?',
          options:[' outline-style','outline-format','outline-font'],
          correctAnswer:' outline-style'
        },
        {
          question:' Which of the following CSS property sets the shadow for a box element?',
          options:['set-shadow',' box-shadow','shadow'],
          correctAnswer:' box-shadow'
        }
        // Add more questions here
      ],
     
    // Add questions for CSS
  },
  JavaScript: {
    easy: [
        {
          question: 'Which type of JavaScript language is',
          options: ['Object-Oriented', 'Object-Based', 'Assembly-language'],
          correctAnswer: 'Object-Based',
        },
        {question:'Which one of the following also known as Conditional Expression:',
          options:['Switch statement','If-then-else statement','immediate if'],
          correctAnswer:'immediate if'
        },
        {
          question:'When interpreter encounters an empty statements, what it will do:',
          options:['Shows a warning','Throws an error','Ignores the statements'],
          correctAnswer:'Ignores the statements'
        },
        {
         question:'The "function" and " var" are known as:',
         options:['Keywords','Declaration statements','Prototypes'] ,
         correctAnswer:'Declaration statements'
        },
        {
          question:'Which one of the following is the correct way for calling the JavaScript code?',
          options:['Triggering Event','Function/Method','RMI'],
          correctAnswer:'Function/Method'
        }
  
        // Add more questions here
      ],
      medium: [
        {
          question:'In the JavaScript, which one of the following is not considered as an error:' ,
          options: ['Syntax error','Missing of semicolons','Division by zero'],
          correctAnswer: 'Division by zero',
        },
        {
          question:'Which of the following number object function returns the value of the number?',
          options:['toString()','valueOf()','toLocaleString()'],
          correctAnswer:'valueOf()'
        },
        {
          question:' Choose the correct snippet from the following to check if the variable "a" is not equal the "NULL":',
          options:['if(a!==null)','if (a!)','if(a!null)'],
          correctAnswer:'if(a!==null)'
        },
        {
          question:'n JavaScript, what will be used for calling the function definition expression:',
          options:['Function prototype','Function literal','Function calling'],
          correctAnswer:'Function literal'
        },
        {
          question:' Which of the following one is the property of the primary expression:',
          options:['stand-alone expressions','contains variable references alone','Contains only keywords'],
          correctAnswer:' stand-alone expressions'
        }
        // Add more questions here
      ],
      hard: [
        {
          question: 'Which one of the following is used for the calling a function or a method in the JavaScript:',
          options: ['Invocation expression', 'Functional expression', 'Property Access Expression'],
          correctAnswer: 'Invocation expression',
        },
        {
          question:'The "new Point(3,2)", is a kind of ___ expression',
          options:['Object Creation Expression','Primary Expression','Invocation Expression'],
          correctAnswer:'Object Creation Expression'
        },
        {
          question:'Which one of the following operator is used to check weather a specific property exists or not:',
          options:['Exists','in',' within'],
          correctAnswer:' in'
        },
        {
          question:'Which one of the following is an ternary operator:',
          options:[' ?',':','-'],
          correctAnswer:'?'
        },
        {
          question:'Which one of the following operator returns false if both values are equal?',
          options:['!','!==','!='],
          correctAnswer:' !='
        }
        // Add more questions here
      ],


    // Add questions for JavaScript
  },
};

const QuizApp = () => {
  const [selectedTopic, setSelectedTopic] = useState('HTML');
  const [selectedDifficulty, setSelectedDifficulty] = useState('easy');
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timer, setTimer] = useState(10); // Timer in seconds
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(questionsData[selectedTopic][selectedDifficulty]);
    setCurrentQuestionIndex(0);
    setTimer(10); // Reset timer when topic or difficulty changes
    setScore(0); // Reset score
  }, [selectedTopic, selectedDifficulty]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        // Time's up, move to the next question
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setTimer(10); // Reset timer for the next question
        } else {
          // Quiz ends
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, currentQuestionIndex, questions]);

  const handleOptionSelect = (selectedOption) => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      // Increment score for correct answer
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(10); // Reset timer for the next question
    } else {
      // Quiz ends
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
      setSelectedTopic('HTML');
      setSelectedDifficulty('easy');
    }
  };

  return (
    <div className='container' style={{width:'650px'}}>
      <h1>Quiz App</h1>
      <div className='container1'>
        <label htmlFor="topic">Select Topic:</label>
        <select id="topic" value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
          <option value="HTML">Hyper Text MarkUp Language</option>
          <option value="CSS">Cascading Style Sheets</option>
          <option value="JavaScript">JavaScript</option>
        </select>
      </div>
      <div className='container2'>
        <label htmlFor="difficulty">Select Difficulty:</label>
        <select id="difficulty" value={selectedDifficulty} onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div>
        {questions.length > 0 && (
          <div className='container3'>
            <p>Question: {currentQuestionIndex + 1}</p>
            <p>{questions[currentQuestionIndex].question}</p>
            <p >Options:</p>
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button key={index} onClick={() => handleOptionSelect(option)} className='border border-danger m-2 p-2'>
                
                {option}
              </button>
            ))}
            <p className='fw-bold'>Time Left: {timer} seconds</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizApp;