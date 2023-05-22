import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import Loader from '../Loader'
// import Error from '../Error'
// import { Table } from 'react-bootstrap'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import { Table } from 'react-bootstrap'
import { getAllUsers } from '../../actions/userAction'


const UserList = () => {


  const userState = useSelector(state => state.getAllUsersReducer)
  const {loading, users, error} = userState;
  const dispatch = useDispatch()
  useEffect(() =>{
    dispatch(getAllUsers())
},[dispatch])
  // console.log(users)
  return (
    <>
 
        <h1>UserList</h1>  
        <div>
   
        {loading && (<Loader/>)}
        {error && (<Error error="something went wrong"/>)}
       <Table striped bordered hover >
       <thead>
         <tr>
           <th>No</th>
           <th>Picture</th>
           <th>Pizza Name</th>
           <th>Price</th>
           <th>Category</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
        
       {users &&
           users.map((user) =>(
            <h4>{user.name}</h4>
           ))
       }
         
       </tbody> 
     </Table>

</div>

    </>
  )
}

export default UserList