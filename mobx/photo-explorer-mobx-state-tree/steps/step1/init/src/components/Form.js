import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

const style = {
    margin: 12,
};

export default class Form extends React.Component{

    getButton(){
        return (
            <RaisedButton label="SEARCH" primary={true} style={style} />
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