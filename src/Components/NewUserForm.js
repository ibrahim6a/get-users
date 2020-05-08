import React, { Component } from 'react';

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userStatus: 'user'
    }

    formHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    formSubmit = (event) => {
        console.log(this.state);
        fetch('https://asoat.herokuapp.com/api/users/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)            
        })
         .then( (response) => {
             return response.json();
         })
          .then( (data) => {
              console.log(data);
          })
          .catch( (error) => {
              console.log(error);
          })
    }

    render() {

        return (
            <tr> 
                <td><input className = 'form-control' type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.formHandler}></input></td>
                <td><input className = 'form-control' type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.formHandler}></input></td>
                <td><input className = 'form-control' type = 'text' name = 'email' value = {this.state.email} onChange = {this.formHandler}></input></td>
                <td><input className = 'form-control' type = 'password' name = 'password' value = {this.state.password} onChange = {this.formHandler}></input></td>
                <td><select name = 'userStatus' className = 'form-control' value = {this.state.userStatus} onChange = {this.formHandler}>
                               <option value="user">User</option>
                               <option value="admin">Admin</option>
                </select></td>
                <td> <input type = 'submit' value = 'Add' className = 'btn btn-primary' onClick = {this.formSubmit}></input></td>
            </tr>
        )
    }
}


export default NewUserForm;