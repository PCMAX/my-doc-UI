import React, { Component } from 'react';

class api_solution extends Component {
  
  constructor(props) {
    super(props);
    this.state = {users: []};
		this.headers = [
			{ key: 'userId', label: 'User ID' },

		
		
		];
  }

  componentDidMount() {
	//	fetch('https://jsonplaceholder.typicode.com/posts')
	//	fetch('http://localhost:8080/isr/auth/testLogin')
   // .then(response => {
   //   return response.json();
   // }).then(result => {
   //   this.setState({
	//			users:result
							
	//		});
	//		console.log(result);
				
	 // });
	 
   fetch('http://localhost:8080/isr/auth/testLogin')
    .then(response =>  response.json())
    .then(resData => {
       console.log(JSON.stringify(resData))
       //do your logic here       
       let person = resData.results
     //  this.setState({ person: resData.results }); //this is an asynchronous function
    })



  }

  render () {
    return (
			<div>
			{ 
				
			}
		</div>
  
  
    );
  }
}

export default api_solution;

<table>
<thead>
    <tr>
    {
        this.pvdm_UserProjectAccess.project.map(function(project) {
            return (
                <th key = {project.key}>{project.label}</th>
            )
        })
    }
    </tr>
</thead>
<tbody>
    {
        this.state.users.map(function(item, key) {             
        return (
                <tr key = {key}>
                  <td>{item.projId}</td>
                  <td>{item.projname}</td>
        
                </tr>
            )
        })
    }
</tbody>
</table>