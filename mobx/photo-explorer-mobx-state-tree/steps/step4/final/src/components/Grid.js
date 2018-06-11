import React from 'react';
import {observer, inject} from 'mobx-react';
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

@inject("store")
@observer
export default class Grid extends React.Component{
    render(){
        return (
          <div style={styles.root}>
            <Chip style={styles.chip}>
                {`total images: ${this.props.store.photoGallery.totalPics}`} 
            </Chip>
            <GridList
                cellHeight={180}
                cols={3}
                padding={5}
                style={styles.gridList}>
                    {
                        this.props.store.picsList.map(pic => <Tile key={pic.id} data={pic}/>)
                    }
            </GridList>
          </div>
        )
    } 
}