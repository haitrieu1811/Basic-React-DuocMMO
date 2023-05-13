import PropTypes from 'prop-types';

const BareInput = ({ type: inputType, ...rest }) => {
    return <input type={inputType} {...rest} />;
};

BareInput.propTypes = {
    type: PropTypes.string.isRequired
};

export default BareInput;
