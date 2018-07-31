import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class NewPost extends React.Component {
    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root} id="blog" style={{textAlign: 'left'}}>
                <Grid container spacing={24}>  
                        <Grid item xs={12} sm={12}>
                            <h1 className='headings' style={{color:'white'}}>Blog Post</h1>
                            <hr className='headingUnderLine'/>
                        </Grid>  
                        <Grid item xs={12} sm={12}>

                            <h3 style={{textAlign:'left'}}>This is post content.</h3>

                        </Grid>
                </Grid>
            </div>
        )
    }
}

NewPost.propTypes = {
	classes: PropTypes.object.isRequired
};

export default NewPost;