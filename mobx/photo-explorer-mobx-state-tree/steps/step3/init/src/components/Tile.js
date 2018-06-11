import React from 'react';
import {GridTile} from 'material-ui/GridList';

const styles = {
    gridTile: {
        cursor: 'pointer'
    }
}

export default class Tile extends React.Component{

    render(){
        return (
            <GridTile style={styles.gridTile}>
            </GridTile>
        )
    }
}