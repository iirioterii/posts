/**
 * Created by yuriyreva on 31.05.17.
 */
import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';
import _ from 'lodash';


class PostsNew extends Component {


    renderTextField(field) {
        const {meta: {touched, error}} = field;
        const className = `form-group ${touched && error ? 'has-danger' : '' }`;


        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }

    onFormSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }


    render() {
        const {handleSubmit} = this.props;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
                    <Field name="title" label="Title" component={this.renderTextField}/>
                    <Field name="categories" label="Categories" component={this.renderTextField}/>
                    <Field name="content" label="Content" component={this.renderTextField}/>

                    <button className="btn btn-primary">Submit</button>
                    <Link to="/" className="btn btn-danger">Cancel</Link>

                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Required";
    }
    if (values.title && values.title.length < 3) {
        errors.title = "Enter a title that at least 3 characters!";
    }
    if (!values.categories) {
        errors.categories = "Required";
    }
    if (!values.content) {
        errors.content = "Required";
    }
    console.log(errors);
    // Logic of validation(if errors empty -> no errors)
    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);