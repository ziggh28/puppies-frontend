import React, {Component} from 'react';

class AddPuppy extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      breed: 'Mixed',
      age: '0'
    }
  };

  formRef = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    // We will write the handleAddPuppy function in our App.js after this step.
    this.props.handleAddPuppy(this.state.formData);
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
        <h1>Add Puppy</h1>
        <form ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Pup's Name (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              name="name"
              value={name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="breedInput" className="form-label">
              Pup's Breed (required)
            </label>
            <input
              type="text"
              className="form-control"
              id="breedInput"
              name="breed"
              value={breed}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ageInput" className="form-label">Pup's Age</label>
            <input
              type="number"
              className="form-control"
              id="ageInput"
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
            Add Puppy
          </button>
        </form>
      </>
    );
  }
}

export default AddPuppy;