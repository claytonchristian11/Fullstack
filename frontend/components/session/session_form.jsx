import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.autoFill = this.autoFill.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      username: "",
      email: "email@email.com",
      password: ""
    };
    this.idx = 0;
    this.idx2 = 0;
  }

  autoFill() {
    let speed = 50;
    const text1 = "Demo User";
    const text2 = "starwars12345678";

    if (this.idx < text1.length) {
      this.setState({
        username: this.state.username + text1.charAt(this.idx)
      }, () => {
        this.idx++;
        setTimeout(this.autoFill, 100);
      });
    } else if (this.idx2 < text2.length) {
      this.setState({
        password: this.state.password + text2.charAt(this.idx2)
      }, () => {
        this.idx2++;
        setTimeout(this.autoFill, 50);
      });
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user).then(this.props.closeModal);
    }
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
      <ul className="login-errors">
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

        <form onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">X</div>


            <div className="modal-image-cont"><img className="modal-image" src="https://drupalintegration.com/sites/default/files/styles/large/public/app-images/soundcloud.png?itok=yDupitEu" /></div>

            <input type="text"
              placeholder="Please enter username"
              id="modal-input-username"
              className="modal-input"
              value={this.state.username}
              onChange={this.update('username')}
               />
             <br />
            <input type="password"
              placeholder="Please enter password"
              id="modal-input-password"
              className="modal-input"
              value={this.state.password}
              onChange={this.update('password')} />
            <br />
            {this.renderErrors()}

            <input type="submit" className="modal-continue-button" value="Continue" />
            <br />
            <input type="button" className="modal-demo-button" onClick={this.autoFill} value="Demo User" />
        </form>

    </div>
    );
  }

}

export default withRouter(SessionForm);
