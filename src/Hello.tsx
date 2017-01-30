import * as React from "react";

interface HelloProps {
    name: string;
}

export default class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>Hello, {this.props.name} </div>;
    }
}