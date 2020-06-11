import React, { Component } from 'react';
import StudentsTable from './StudentsTable';
import {Button,Modal, Media} from 'react-bootstrap';

class AddStudent extends Component {
  state={
    name:'',email:'',mobile:'',city:'',_state:'',country:'',gender:'',_class:'',bio:'',
    hobbies: [],
    datas:[],
    showHide: false
  }

  handleModal=()=>{
    this.setState({showHide: !this.state.showHide})
  }

  changeHandler=(event)=>{
    const students = this.state;
    if (event.target.type === 'checkbox') {
      if (event.target.checked) {
        students.hobbies = students.hobbies.concat(event.target.value)
      } else {
        students.hobbies= students.hobbies.filter(hobby => hobby!==event.target.value)
      }
    }
    else{
      students[event.target.name]= event.target.value
    }
    this.setState({
      students    
    })
  }

  submitHandler= (event)=>{
    event.preventDefault();
    const datas = [...this.state.datas];
    const { name, email, mobile, city, _state, country, gender,_class,bio, hobbies }=this.state
    datas.push({name, email, mobile, city, _state, country, gender,_class, bio,hobbies})
    this.setState({
      datas ,name:'', email:'', mobile:'', city:'', _state:'', country:'', gender:'',_class:'', bio:'', hobbies:[]
    })

  }


  deleteHandler = (index)=>{
    let newData = this.state.datas.filter( (data,id)=> id !== index )
    this.setState({
      datas: newData
    })
  }


  render() {
    const {datas}= this.state
    // console.log(datas)
    return (
      <div className='container border border-top-0'>
        <div className="row">
          <div className="col-10"></div>
          <div className="col-2">
            <Button className='mt-1
            
            
            
            
             ' variant="primary" onClick={() => this.handleModal()}>
              <span><i className="fas fa-user-plus"></i> Add Students</span>
            </Button>
            <form onSubmit={this.submitHandler}>
              <Modal show={this.state.showHide}>
                <Modal.Header closeButton onClick={() => this.handleModal()}>
                  <Modal.Title>New Students</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form className='shadow px-3 py-2' onSubmit={this.submitHandler}>
                    <div className="form-row py-1">
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="name">Name:</label>
                          <input
                            type="text"
                            placeholder='enter your name'
                            className='form-control'
                            value={this.state.name}
                            id='name'
                            name='name'
                            onChange={this.changeHandler}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="email">Email:</label>
                          <input
                            type="email"
                            placeholder='xyzabc@mail.com'
                            className='form-control'
                            value={this.state.email}
                            id='email'
                            name='email'
                            onChange={this.changeHandler}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label htmlFor="mobile_no">Mobile No:</label>
                          <input
                            type="tel"
                            placeholder='+880100000000'
                            className='form-control'
                            value={this.state.mobile}
                            id='mobile_no'
                            name='mobile'
                            onChange={this.changeHandler}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-row py-1">
                      <div className="col">
                        <h6>Address:</h6>
                        <div className="form-row">
                          <div className="col">
                            <div className="form-group">
                              <label htmlFor="city">City:</label>
                              <input
                                type="text"
                                placeholder='city'
                                className='form-control'
                                value={this.state.city}
                                id='city'
                                name='city'
                                onChange={this.changeHandler}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label htmlFor="_state">State:</label>
                              <input
                                type="text"
                                placeholder='state'
                                className='form-control'
                                value={this.state._state}
                                id='_state'
                                name='_state'
                                onChange={this.changeHandler}
                              />
                            </div>
                          </div>
                          <div className="col">
                            <div className="form-group">
                              <label htmlFor="country">Country:</label>
                              <input
                                type="text"
                                placeholder='country'
                                className='form-control'
                                value={this.state.country}
                                id='country'
                                name='country'
                                onChange={this.changeHandler}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="form-row py-1">
                          <div className="col">
                            <h6>Gender:</h6>
                            <div className='custom-control custom-control-inline custom-radio pr-1'>
                              <input
                                className='custom-control-input'
                                type='radio'
                                name='gender'
                                id='gender-1'
                                value='male'
                                onChange={this.changeHandler}
                              />
                              <label className='custom-control-label' htmlFor='gender-1'>Male</label>
                            </div>
                            <div className='custom-control custom-control-inline custom-radio pr-1'>
                              <input
                                className='custom-control-input'
                                type='radio'
                                name='gender'
                                id='gender-2'
                                value='female'
                                onChange={this.changeHandler}
                              />
                              <label className='custom-control-label' htmlFor='gender-2'>Female</label>
                            </div>
                            <div className='custom-control custom-control-inline custom-radio'>
                              <input
                                className='custom-control-input'
                                type='radio'
                                name='gender'
                                id='gender-3'
                                value='other'
                                onChange={this.changeHandler}
                              />
                              <label className='custom-control-label' htmlFor='gender-3'>Other</label>
                            </div>
                          </div>
                          <div className="col">
                            <label htmlFor='class'>Choose Class:</label>
                            <select
                              className='custom-select'
                              name='_class'
                              id='class'
                              onChange={this.changeHandler}
                            >
                              <option>Choose.....</option>
                              <option value='class-1'> Class-1 </option>
                              <option value='class-2'> Class-2 </option>
                              <option value='class-3'> Class-3 </option>
                              <option value='class-4'> Class-4 </option>
                              <option value='class-5'> Class-5 </option>
                              <option value='class-6'> Class-6 </option>
                              <option value='class-7'> Class-7 </option>
                              <option value='class-8'> Class-8 </option>
                              <option value='class-9'> Class-9 </option>
                              <option value='class-10'> Class-10 </option>
                            </select>
                          </div>
                        </div>
                        <div className="form-row py-1">
                          <div className="col">
                            <h6>Hobbies:</h6>
                            <div className="custom-control custom-control-inline custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name='hobbies'
                                id='coding'
                                value='Coding'
                                onChange={this.changeHandler}
                              />
                              <label className="custom-control-label" htmlFor="coding">Coding</label>
                            </div>
                            <div className="custom-control custom-control-inline custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name='hobbies'
                                id='sleeping'
                                value='Sleeping'
                                onChange={this.changeHandler}
                              />
                              <label className="custom-control-label" htmlFor="sleeping">Sleeping</label>
                            </div>
                            <div className="custom-control custom-control-inline custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name='hobbies'
                                id='gossip'
                                value='Gossip'
                                onChange={this.changeHandler}
                              />
                              <label className="custom-control-label" htmlFor="gossip">Gossip</label>
                            </div>
                            <div className="custom-control custom-control-inline custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name='hobbies'
                                id='traveling'
                                value='Traveling'
                                onChange={this.changeHandler}
                              />
                              <label className="custom-control-label" htmlFor="traveling">Travelling</label>
                            </div>
                            <div className="custom-control custom-control-inline custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                name='hobbies'
                                id='swiming'
                                value='Swiming'
                                onChange={this.changeHandler}
                              />
                              <label className="custom-control-label" htmlFor="swiming">Swiming</label>
                            </div>
                          </div>
                        </div>
                        <div className="form-row py-1">
                          <div className="col">
                            <label htmlFor="bio">Short Bio:</label>
                            <textarea
                              cols="95"
                              rows="4"
                              className='form-control'
                              placeholder='write your short bio within 250 words...'
                              name='bio'
                              id='bio'
                              value={this.state.bio}
                              onChange={this.changeHandler}
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="col">
                            <button className='btn btn-secondary btn-block my-2' type="submit" onClick={() => this.handleModal() }>Submit</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </Modal.Body>
              </Modal>
            </form>
          </div>
        </div>  
        <div className='row'>
          <div className="col-md-2"></div>
          <div className="col-md-8 py-2 mt-lg-2">
            
          </div>
        </div>
        <div className="row py-2">
          <div className="col-12">
            <h4 className='text-center'>Students List</h4>
            <StudentsTable datas= {datas} deleteHandler= { this.deleteHandler.bind(this) } />          
          </div>
        </div>
      </div>
    );
  }
}

export default AddStudent;
