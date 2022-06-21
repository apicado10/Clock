import { render } from "@testing-library/react";
import { useEffect, useState, useRef } from "react";

const Clock = function () {
    const [ date, setDate ] = useState(new Date());
    let timerId = useRef();
    

    // sin parametro, siempre se ejecuta
    // [] -> arreglo vacio, renderiza => solo la primera vez
    // la [a, b, c] -> vigila y reacciona a los cambios
    // return -> el que se ejecuta en el dismount 
    useEffect(() => {
        console.log('componentDidMount');
        timerId.current = setInterval(() => tick(), 1000);
        return () => {
            console.log('componentWillUnmount');
            clearInterval(timerId.current);
        };
    }, []);

    useEffect(() => console.log('componentDidMount'));

    const tick = () => {
        console.log('tick');
        setDate(new Date());
      };

    return(
        <div>
            <h2>Hello All!</h2>
            <h2>It's {date.toLocaleTimeString()}</h2>
      </div>
    );
};

export default Clock;