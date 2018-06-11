import React from 'react';
import {GridList} from 'material-ui/GridList';
import Chip from 'material-ui/Chip';
import Divider from 'material-ui/Divider';
import Tile from './Tile';

const styles = {
    root: {
      width: '50%',
      float: 'left',
      display: 'flex',
      flexWrap: 'wrap',
    },
    gridList: {
      width: '100%',
      overflowY: 'auto',
    },
    chip: {
        margin: '5px'
    }
  };

export default class Grid extends React.Component{
    render(){
        return (
          <div style={styles.root}>
            <Chip style={styles.chip}>
                
            </Chip>
            <GridList
                cellHeight={180}
                cols={3}
                padding={5}
                style={styles.gridList}>
                   
            </GridList>
          </div>
        )
    } 
}