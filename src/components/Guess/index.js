import {Circle, MainWrapper} from "./styles";
import CustomCircle from "./CustomCircle";


const Guess = ({text, selectedWord}) => {

    return(
        <MainWrapper>
            <CustomCircle text={text} goalWord={selectedWord} index={0} />
            <CustomCircle text={text} goalWord={selectedWord} index={1} />
            <CustomCircle text={text} goalWord={selectedWord} index={2} />
            <CustomCircle text={text} goalWord={selectedWord} index={3} />
            <CustomCircle text={text} goalWord={selectedWord} index={4} />
        </MainWrapper>
    )
};

export default Guess;