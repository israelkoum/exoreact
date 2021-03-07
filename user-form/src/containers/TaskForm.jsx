import React, {Component as ReactComponent} from 'react'
import DisplayUser from '../components/DisplayUser'

const defaultValues = {
    name: '',
    username: '',
    email: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    lat: '',
    lng: ''
}

class TaskForm extends ReactComponent {

   constructor () {
       super ()

       this.state = {
        form: {...defaultValues},
        listForm: []
       }
   }

   componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            // .then(data => console.log(data)) 
            .then(data => this.setState({...this.state, listForm: [...data]})) 
 }
     

   
   handleChange(e, valeur){
       console.log(e.target.value)
       this.setState({ form: { ...this.state.form, [valeur]: e.target.value}})
   }

  
   handleClick (e){
       this.setState({listForm: this.state.listForm.push({
           name: this.state.form.name,
           username: this.state.form.username,
           email: this.state.form.email,
           address: {
               street: this.state.form.street,
               suite: this.state.form.suite,
               city: this.state.form.city,
               zipcode: this.state.form.zipcode,
               geo: {
                   lat: this.state.form.lat,
                   lng: this.state.form.lng
               }
           }
       }), form: {...defaultValues}})
       
       console.log(this.state.listForm)
   }


    render () {

        return (
            <div>
                <label> Name</label> <br/>
                     <input type="text" value={this.state.form.name} placeholder="Name" onChange ={e => this.handleChange(e,'name')}/>   
                <label> username</label> <br/>
                    <input type="text" value ={this.state.form.username} placeholder="Username" onChange = {e => this.handleChange(e,'username')}/>   
                <label> email</label> <br/>
                    <input type="text" value ={this.state.form.email} placeholder="Email" onChange = {e => this.handleChange(e,'email')}/>  
                 <label> street</label> <br/>
                <input type="text" value={this.state.form.street} placeholder="street" onChange={e => this.handleChange(e,'street')}/> 
                <label> suite</label> <br/>
                <input type="text" value={this.state.form.suite} placeholder="suite" onChange={e => this.handleChange(e,'suite')}/>
                <label> city</label> <br/>          
                    <input type="text" value ={this.state.form.city} placeholder="city" onChange = {e => this.handleChange(e,'city')}/>         
                <label> zipcode</label> <br/> 
                    <input type="text" value ={this.state.form.zipcode} placeholder="zipcode" onChange = {e => this.handleChange(e,'zipcode')}/>  
                <label> latitude</label> <br/>
                <input type="text" value={this.state.form.lat} placeholder="Latitude" onChange={e => this.handleChange(e,'lat')}/>     
                <label> Longitude</label> <br/>    
                <input type="text" value={this.state.form.lng} placeholder="Longitude" onChange={e => this.handleChange(e,'lng')}/>
                <div>
                    <button onClick={e => this.handleClick(e)}>Add User</button>
                </div>
                <div>
                    { this.state.listForm !== [] && this.state.listForm.map((elt, index) => <DisplayUser key={index} elt={elt} />) }
                </div>           
            </div>
        )
    }
}

export default TaskForm