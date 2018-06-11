import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, observer} from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    cont: {
        width: '100%',
        margin: 'auto'
    },
    child: {
        float: 'left'
    }
}

export class App extends React.Component{
    render(){
        return (<MuiThemeProvider>
                    <div>

                    </div>
                </MuiThemeProvider>)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)

