import React from 'react';
import {Container, Row,Col} from 'reactstrap';

import axios from 'axios' ;



function Foydalanuvchi(){
    const [ users, setUsers ] = React.useState([]);


    React.useEffect(()=>{
        axios.get('http://www.amock.io/api/Ziyodbek/users-list')
        .then(res => {
            setUsers(res.data);
        })
    },[])
  

   
    return(
<>
<Container>
    <Row>
     <Col>
<table className='table'>
<thead>
    <tr>
    <th>Number</th>
        <th>Id</th>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Adress</th>
        <th>Street</th>
        <th>City</th>
        <th>Phone</th>
        <th>Website</th>
        <th>Company</th>
    </tr>
</thead>
<tbody>
        {
            users.map((user, index)=>{
                return(
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.adress}</td>
                        <td>{user.street}</td>
                        <td>{user.city}</td>
                        <td>{user.phone}</td>
                        <td>{user.website}</td>
                        <td>{user.company}</td>
                    </tr>
                )
            })
        }
</tbody>
</table>

</Col> 
    </Row>
</Container>
</>
    )

}



export default Foydalanuvchi;
