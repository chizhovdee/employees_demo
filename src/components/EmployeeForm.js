import React from 'react'
import PropTypes from 'prop-types'
import '../../stylesheets/EmployeeForm.scss'

class EmployeeForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      post: this.props.post,
      description: this.props.description
    }
  }

  handleSubmit = (e)=> {
    e.preventDefault();

    if(!this.state.firstName || !this.state.lastName || !this.state.post) {
      return alert("Заполните обязательные поля");
    }

    let args = [];
    if(this.props.mode === 'edit'){
      args.push(this.props.id);
    }

    args.push(this.state);

    this.props.handleSubmit(...args);
  };

  handleChange = (e)=> {
    const target = e.target;

    this.setState({
      [target.name]: target.value
    });
  };

  render(){
    return (
      <form className="employee-form" onSubmit={this.handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Имя*:</label>
          <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required={true}/>
        </div>

        <div className="form-control">
          <label htmlFor="lastName">Фамилия*:</label>
          <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required={true}/>
        </div>

        <div className="form-control">
          <label htmlFor="post">Должность*:</label>
          <input type="text" name="post" value={this.state.post} onChange={this.handleChange} required={true}/>
        </div>

        <div className="form-control">
          <label htmlFor="description">Описание:</label>
          <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
        </div>

        <div className="form-control">
          <input type="submit" value="Добавить" />
        </div>
      </form>
    );
  }
}

EmployeeForm.propTypes = {
  id: PropTypes.number,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  post: PropTypes.string,
  description: PropTypes.string,
  mode: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

EmployeeForm.defaultProps = {
  firstName: '',
  lastName: '',
  post: '',
  description: ''
};

export default EmployeeForm