import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
//import Grid from 'material-ui/core/Grid';

// const styles = theme => ({
//     root: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing.unit * 2,
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
// });

class Blog extends React.Component {
    state = {
        blogRef: "",
    }
    render() {
       const { classes } = this.props;
        return (
            <div id="blog">
                <h1 className="headingsWhite">Blog</h1>
            </div>
        )
    }
}

Blog.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default Blog;
