import {Circle} from "./styles";
import {useMemo} from "react";


const CustomCircle = ({text, index, goalWord}) => {

    const bgColor = useMemo(() => {
        if (!text?.[index]) return '#36394A';
        if (goalWord.includes(text[index]) && goalWord[index] !== text[index]) return 'orange';
        if (!goalWord.includes(text[index])) return 'grey';
        return 'green';
    }, [text, index, goalWord]);
    return(
        <Circle style={{backgroundColor: bgColor}}>
            {text?.[index]}
        </Circle>
    )
};

export default CustomCircle;