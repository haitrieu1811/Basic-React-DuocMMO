import React, { Fragment } from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                created: new Date().toLocaleString()
            },
            second: {
                created: new Date().getSeconds()
            },
            list: []
        };

        this.getTime = this.getTime.bind(this);
    }

    getTime = () => {
        this.setState({
            ...this.state,
            time: {
                created: new Date().toLocaleString()
            }
        });
    };

    fetchApi = () => {
        const arr = ['BMW', 'Toyota', 'Mercedes'];
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(arr);
            }, 2000);
        });
    };

    componentDidMount() {
        this.fetchApi().then((res) => {
            this.setState({
                ...this.state,
                list: res
            });
        });
    }

    render() {
        const { time } = this.state;
        const { name } = this.props;

        return (
            <Fragment>
                <h1>Hello world {name}</h1>
                <h2>It is {time.created}</h2>
                <button onClick={this.getTime}>Get time</button>
            </Fragment>
        );
    }
}

export default Clock;
