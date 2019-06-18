import React, {
  useState
} from 'react';
import Styles from './App.module.scss';
import Ball from './Components/Ball/Ball';
import InputForm from './Components/InputForm/InputForm';
import fortuneService from './Services/fortune';

function App() {
  const [fortuneMessage, setFortuneMessage] = useState("");
  const [question, setQuestion] = useState("");

  const handleClick = async (e) => {
    e.preventDefault()

    try {
      const fortune = await fortuneService.getFortune();
      setFortuneMessage(fortune);
      setQuestion('');
    } catch {
      console.error("error retrieving fortune");
    }
  }

  const handleChange = (e) => {
    setQuestion(e.target.value);
  }

  return (
    <div>
      <Ball message={fortuneMessage} />
      <InputForm
        question={question}
        onSubmit={handleClick}
        onChange={handleChange} />
    </div>
  );
}

export default App;