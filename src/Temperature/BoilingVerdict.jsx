import PropTypes from 'prop-types';

const BoilingVerdict = ({ celsius }) => {
    const result = celsius >= 100 ? 'boil' : 'not boil';
    return <h1>Water would {result}</h1>;
};

BoilingVerdict.propTypes = {
    celsius: PropTypes.number.isRequired
};

export default BoilingVerdict;
