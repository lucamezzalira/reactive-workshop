import React from 'react';
import ReactDOM from 'react-dom';
import {Provider, observer} from 'mobx-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form';
import Stores from './stores/Stores';
import GalleryModel from './models/GalleryModel';
import Config from './configs/Configuration';
import Grid from './components/Grid';
import SelectedPicture from './components/SelectedPicture';
import {types} from 'mobx-state-tree';

const style = {
    cont: {
        width: '100%',
        margin: 'auto'
    },
    child: {
        float: 'left'
    }
}

const augmentedStore = types.compose(GalleryModel, Stores);
const PicsGalleryStore = augmentedStore.create({}, {config: Config});

@observer
export class App extends React.Component{
    render(){
        return (
            <Provider store={PicsGalleryStore}>
                <MuiThemeProvider>
                    <div>
                        <Form />
                        <Grid style={style.child} />
                        <SelectedPicture style={style.child} />
                    </div>
                </MuiThemeProvider>
            </Provider>)
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)

