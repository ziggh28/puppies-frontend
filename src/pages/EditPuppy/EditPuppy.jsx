import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EditPuppy extends Component {
  state = {
    invalidForm: false,
    formData: this.props.location.state.puppy
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleUpdatePuppy(this.state.formData);
  };

  handleChange = e => {
    const formData = {...this.state.formData, [e.target.name]: e.target.value};
    this.setState({
      formData,
      invalidForm: !this.formRef.current.checkValidity()
    });
  };

  render() {
		const { name, breed, age } = this.state.formData
    return (
      <>
        <h1>Edit Puppy</h1>
        <form 
					ref={this.formRef}
					autoComplete="off"
					onSubmit={this.handleSubmit}
				>
          <div className="form-group">
            <label>Pup's Name (required)</label>
            <input
              className="form-control"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Pup's Breed (required)</label>
            <input
              className="form-control"
              name="breed"
              value={breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Pup's Age</label>
            <input
              className="form-control"
              name="age"
              value={age}
              onChange={this.handleChange}
            />
          </div>
					<button
            type="submit"
            className="btn btn-success"
            disabled={this.state.invalidForm}
          >
            Save Puppy
          </button>
          <Link 
            className='btn btn-danger m-left'
            to='/'
          >
            Cancel
          </Link>
        </form>
      </>
    );
  }
}

export default EditPuppy;