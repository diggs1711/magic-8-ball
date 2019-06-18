import React, {
  useState
} from 'react';
import Ball from './Components/Ball/Ball';
import InputForm from './Components/InputForm/InputForm';
import fortuneService from './Services/fortune';

function App() {
  const [fortuneMessage, setFortuneMessage] = useState("");
  const [question, setQuestion] = useState("");

  const handleFormBtnClick = async (e) => {
    e.preventDefault()
    //make sure message is cleared before submitting question
    if (fortuneMessage.length) {
      alert("you are very eager to ask questions")
      return;
    }

    if (!question || question === "") {
      alert("you must ask a question")
      return
    }

    try {
      const fortune = await fortuneService.getFortune();
      setFortuneMessage(fortune);
      setQuestion('');

      //reset the fortune message after animation has ended
      setTimeout(() => setFortuneMessage(''), 5000);
    } catch {
      console.error("error retrieving fortune");
    }
  }

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  }

  return ( <
    div >
    <
    Ball message = {
      fortuneMessage
    }
    /> <
    InputForm question = {
      question
    }
    onSubmit = {
      handleFormBtnClick
    }
    onChange = {
      handleQuestionChange
    }
    /> < /
    div >
  );
}

export default App;
