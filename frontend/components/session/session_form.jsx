import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
    <div>
      <h1>{this.props.formType}</h1><br />

        <form onSubmit={this.handleSubmit.bind(this)}>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <label>Username:
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')} />
          </label><br />

          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')} />
          </label><br />

          <label>Password:
            <input type="text"
              value={this.state.password}
              onChange={this.update('password')} />
          </label><br />

          <input type="submit" value={this.props.formType} />
        </form>

    </div>
    );
  }

}

export default withRouter(SessionForm);
