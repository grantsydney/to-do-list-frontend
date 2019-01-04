import React from 'react'
import { Form, Select } from 'semantic-ui-react'


class ListForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      color: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSelect = (event, {value}) => {
    this.setState({
      color: value
    })
  }

  //POST for form submission
  handleSubmit = (event) => {
    event.preventDefault()
    fetch('http://localhost:3001/api/v1/users/1/lists', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name,
        color: this.state.color
      })
    })
      .then(r=>r.json())
      .then(l => this.props.addList(l))

    //get form to go back to blank input fields
    this.setState({
      name: '',
      color: ''
    })
  }

  render() {
    const colorOptions = [{ key: 'red', value: 'DE0E47', text: 'Red' }, { key: 'orange', value: 'EB8615', text: 'Orange' }, { key: 'green', value: '2EAE23', text: 'Green' }, { key: 'blue', value: '3A90E1', text: 'Blue' }, {key: 'purple', value: '864ED8', text: 'Purple'}, {key: 'pink', value: 'D64ED8', text: 'Pink'}   ]

    return (

      <div>

        <Form onSubmit={this.handleSubmit}>
          <Form.Group inline className="list-form">
            <Form.Input onChange={this.handleChange} width={6} placeholder="New To-Do" name="name" value={this.state.name} />
            <Select onChange={this.handleSelect} placeholder='Select a Color' name="color" value={this.state.color} options={colorOptions} />
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

export default ListForm
