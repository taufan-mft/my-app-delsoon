import {GuessWrapper, MainButton, MainPage} from "./styles";
import Guess from "../../components/Guess";
import {useCallback, useEffect, useMemo, useState} from "react";
import {wordList} from "../../data/wordList";
import guess from "../../components/Guess";
import {type} from "@testing-library/user-event/dist/type";


const HomePage = () => {
    const selectedWord = useMemo(() => {
        const word = wordList[Math.floor(Math.random() * wordList.length-1)];
        console.log('the word', word);
        return word;
    }, [])
    const [typedText, setTypedText] = useState('');
    const [rightLetter, setRightLetter] = useState(['', '', '', '' ,'']);
    const [guesses, setGuesses] = useState([]);

    console.log('right', rightLetter)

    const handleGuessClick = useCallback(() => {
        if (!wordList.includes(typedText)) {
            alert('Please enter valid word');
            return
        }
        for (let i = 0; i < typedText.length; i++) {
            if (rightLetter[i] && rightLetter[i] !== typedText[i]) {
                alert("Don't make this wrong");
                setTypedText('');
                return;
            }
            if (!rightLetter[i] && selectedWord[i] === typedText[i]) {
                setRightLetter(prevState => {
                    prevState[i] = typedText[i];
                    return prevState;
                });
            }
        }
        setGuesses(prevState => [... prevState, typedText]);
        setTypedText('');
    }, [typedText, rightLetter, selectedWord]);

    useEffect(() => {
        if (guesses.includes(selectedWord)) alert('You have won the game');
        if (guesses.length === 6 && !guesses.includes(selectedWord)) alert(`You've lost. The word is ${selectedWord}`);
    }, [selectedWord, guesses]);

    return (
        <MainPage>
            <h1>Word Master</h1>
            <GuessWrapper>
                <Guess text={guesses[0]} selectedWord={selectedWord} />
                <Guess text={guesses[1]} selectedWord={selectedWord} />
                <Guess text={guesses[2]} selectedWord={selectedWord} />
                <Guess text={guesses[3]} selectedWord={selectedWord} />
                <Guess text={guesses[4]} selectedWord={selectedWord} />
                <Guess text={guesses[5]} selectedWord={selectedWord} />
            </GuessWrapper>
            <input type="text" value={typedText} onChange={(e) => setTypedText(e.target.value)} />
            <MainButton onClick={handleGuessClick}>GUESS!</MainButton>
    </MainPage>)
}

export default HomePage;