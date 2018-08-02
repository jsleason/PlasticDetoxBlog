import React from "react";
import ReactDOM from "react-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from 'prop-types';
import { BlogPost } from './post';
import { NewPost } from './post1';

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

class Blog extends React.Component {
    state = {
        blogRef: ""
    }

    showPost = (postRef) => {
        this.setState({ blogRef: "postRef" });
        const tesNode = ReactDOM.findDOMNode(this.refs.blogContent);
        window.scrollTo(0, tesNode.offsetTop)
    }

    render() {
        const { classes } = this.props;
        return (
            <div id="blog" className="BlogViewContainerStyle">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12}>
                        <h1 className='headingsWhite'>Blog</h1>
                    </Grid>
                    <Grid item xs={6} sm={4} >
                        <div className={"blogSelection"} onClick="showPost(BlogPost)">
                            <Paper >
                                <h3>This is a post </h3>
                            </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={4} >
                        <div className={"blogSelection"} onClick="showPost(NewPost)">
                            <Paper >
                                <h3>This is another post </h3>
                            </Paper>
                        </div>
                    </Grid>
                </Grid>


                 <div class="blogContainerWindow" ref="blogContent">
                    {
                        this.state.blogRef == "BlogPost" ?
                            <p>blog post </p>
                           // <BlogPost/>

                            :

                            this.state.blogRef == "NewPost" ?
                                <p>new post</p>
                                // <NewPost/>
                            :
                                null
				}
                </div>



            </div>
        )
    }
}

Blog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Blog;
