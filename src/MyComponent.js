import React, {} from 'react';

/*class MyComponent extends Component {
    render() {
        return (
            <div>Hello wellcome to reactjs </div>
        )
    }
};*/

const MyComponent = (props) => (
    <div> Hello {props.name}!</div>
);

export default MyComponent;