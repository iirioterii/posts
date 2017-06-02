/**
 * Created by yuriyreva on 31.05.17.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import _ from 'lodash';

class PostsIndex extends Component {

    renderPosts() {
        return _.map(this.props.posts, post => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                )
            }
        )
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {posts: state.posts};
}

export default connect(mapStateToProps)(PostsIndex);