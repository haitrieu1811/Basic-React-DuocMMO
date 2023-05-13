import { Fragment } from 'react';
import PropTypes from 'prop-types';

const TemperatureInput = ({ title, value, onChange }) => {
    return (
        <Fragment>
            <h3>Enter temperature in {title}</h3>
            <input type='text' value={value} onChange={onChange} />
        </Fragment>
    );
};

TemperatureInput.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onchange: PropTypes.func
};

export default TemperatureInput;
