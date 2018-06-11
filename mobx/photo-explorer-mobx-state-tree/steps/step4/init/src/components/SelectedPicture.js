import React from 'react';
import {Card, CardMedia} from 'material-ui/Card';

const style = {
    width: '50%',
    margin: 0,
    float: 'left',
    overflow: 'hidden'
}

export default class SelectedPicture extends React.Component{
    render(){
       
        return (
            <Card style={style}>
                <CardMedia>
                    
                </CardMedia>
            </Card>
        )
    } 
}