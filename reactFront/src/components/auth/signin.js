import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
    // Need to do something
    this.props.signinUser({ email, password });
  }

 renderAlert() {
   if (this.props.errorMessage) {
     return (
       <div className="alert alert-danger">
        <strong>Oops!</strong> {this.props.errorMessage}
       </div>
     );
   }
 }

 fieldHelper(field){
    return(
      <div>
        <input {...field.input } type={field.type} className="form-control" />
      </div>
    );
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit = {handleSubmit(this.handleFormSubmit.bind(this))} >
        <div className="form-group">
          <label>Email:</label>
          <Field type="text" name="email" component={this.fieldHelper} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <Field type="password" name="password" component={this.fieldHelper} />
        </div>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm(
  {
    form: 'signin',
    fields: ['email', 'password'],
  })(
    connect(mapStateToProps, actions)(Signin)
);
