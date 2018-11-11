import React, { Component } from 'react';

class api_solution extends Component {
  
	constructor(props) {
		super(props);
		this.state = {users: []};
		this.headers = [
			{ key: 'projId', label: 'proect ID' },
			{ key: 'projname', label: 'name' },
		
		];
	}

  componentDidMount() {
    fetch('http://localhost:8080/isr/auth/testLogin')
    
 
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
			});
    
    
    
    
    
    
    
    
    
    
    
    
    

  }

  render () {
    return (
      <table>
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th key = {h.key}>{h.label}</th>
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
    );
  }
}

export default api_solution;