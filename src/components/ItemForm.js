import React from 'react'
import { Form } from 'semantic-ui-react'

class ItemForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }



  handleSubmit = (event) => {
    event.preventDefault()

    fetch(`http://localhost:3001/api/v1/users/1/lists/${this.props.clickedListId}/items`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.name
      })
    })
    //   .then(r=>r.json())
    //   .then(l => this.props.addItem(l)
    // )

      //get form to go back to blank input fields
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Item!</h3>
        <Form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default ItemForm
