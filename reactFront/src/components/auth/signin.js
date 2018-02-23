import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
class Signin extends Component {
  handleFormSubmit({email, password}) {
    console.log(email, password);
    // Need to do something
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
        <button action="submit" className="btn btn-primary">Sign In</button>
      </form>
    );
  }
}
export default reduxForm({
  form: 'signin'
})(Signin);
