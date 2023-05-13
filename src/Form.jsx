import { Fragment, useRef, useState } from 'react';

const Form = () => {
    const [currentFile, setCurrentFile] = useState(null);

    const inputFile = useRef();

    const handleChangeFile = (e) => {
        const file = e.target.files[0];
        setCurrentFile(file);

        const formData = new FormData();
        formData.append('avatar', file, file.name);
        console.log('>>> formData: ', formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(inputFile.current);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <input ref={inputFile} type='file' onChange={handleChangeFile} />
                <button>Submit</button>
            </form>
        </Fragment>
    );
};

export default Form;
