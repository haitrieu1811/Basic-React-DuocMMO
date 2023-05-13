import { Fragment, useState } from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

const Calculator = () => {
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');

    // CHANGE CELSIUS
    const handleChangeCelsius = (e) => {
        const value = Number(e.target.value);
        setCelsius(value);

        let fahrenheit = value * 1.8 + 32;
        fahrenheit = Math.round(fahrenheit);
        setFahrenheit(fahrenheit);
    };

    // CHANGE FAHRENHEIT
    const handleChangeFahrenheit = (e) => {
        const value = Number(e.target.value);
        setFahrenheit(value);

        let celsius = (value - 32) / 1.8;
        celsius = Math.round(celsius);
        setCelsius(celsius);
    };

    return (
        <Fragment>
            <TemperatureInput title='Celsius' value={celsius} onChange={handleChangeCelsius} />
            <TemperatureInput title='Fahrenheit' value={fahrenheit} onChange={handleChangeFahrenheit} />
            <BoilingVerdict celsius={Number(celsius)} />
        </Fragment>
    );
};

export default Calculator;
