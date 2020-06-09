import React, { Component } from 'react'

class StudentsTable extends Component {
  render() {
    const datas = this.props.datas;
    // console.log(datas)
    return (
      
      <div className='container-fluid'>
        <div className="row">
          <div className="col-12">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile No</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Country</th>
                <th scope="col">Gender</th>
                <th scope="col">Class</th>
                <th scope="col">Hobbies</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                datas.map( (data,id)=>{
                  console.log(datas);
                  
                  return(
                    <tr key={id}>
                      <td>{ id+1}</td>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.mobile}</td>
                      <td>{data.city}</td>
                      <td>{data._state}</td>
                      <td>{data.country}</td>
                      <td>{data.gender}</td>
                      <td>{data._class}</td>
                      <td> 
                        { 
                        data.hobbies.map( hobby=>( <div key={id}> <span> { hobby } </span> </div> )) 
                        } 
                      </td>
                      <td>
                        <ul className="nav justify-content-center">
                          <li className="nav-item">
                            <span>
                              <i className="fas fa-external-link-alt"></i>
                            </span>
                          </li>
                          <li className="nav-item px-2">
                            <span>
                              <i className="far fa-edit"></i>
                            </span>
                          </li>
                          <li className="nav-item">
                            <span style={{cursor:'pointer',}} onClick= { ()=> this.props.deleteHandler(id) }>
                              <i className="fas fa-user-minus"></i>
                            </span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentsTable;