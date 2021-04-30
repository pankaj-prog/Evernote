import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../helpers';

class SidebarItemComponent extends React.Component{
    
    

    render(){

        const {_index , _notes , classes , selectedNoteIndex } = this.props;

        return(
            <div key = {_index}>
                <ListItem
                    className={classes.ListItem}
                    selected={selectedNoteIndex ===_index}>
                </ListItem>
            </div>
        );
    }
}

export default withStyles(styles)(SidebarItemComponent);