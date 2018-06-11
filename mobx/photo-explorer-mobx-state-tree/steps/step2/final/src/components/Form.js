import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {observer, inject} from 'mobx-react';

const style = {
    margin: 12,
};

@inject('store')
@observer
export default class Form extends React.Component{
    search(){
        const termToSearch = this.input.getValue();
        this.props.store.search.requestPics(termToSearch);
    }

    getButton(){
        return (
            <RaisedButton label="SEARCH" primary={true} style={style} onClick={this.search.bind(this)} />
        )
    }

    getSpinner(){
        return (
            <CircularProgress size={35} thickness={5}/>
        )
    }

    render(){
        return (
            <div>
                <TextField ref={(c) => this.input = c} hintText="e.g. Batman" />
                {
                    this.props.store.search.isSearching ? this.getSpinner() : this.getButton()
                } 
            </div>
        )
    } 
}