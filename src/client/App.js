import React from 'react';
import SideMenu from "./components/SideMenu";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <SideMenu/>
            </div>
        );
    }
}
