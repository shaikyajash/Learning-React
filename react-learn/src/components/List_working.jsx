import React from 'react'


const List_working = () => {


   
const users = [
  {
      username: "john_doe",
      location: "USA",
      email: "john.doe@example.com"
  },
  {
      username: "jane_smith",
      location: "Canada",
      email: "jane.smith@example.com"
  },
  {
      username: "alice_johnson",
      location: "UK",
      email: "alice.johnson@example.com"
  }
];


  return (
    <div>
      {
        users.map(({username,location,email})=>(

          <ul key={Math.random()}>
            <li>
            username : {username} <br />
            location : {location} <br />
            email : {email }
            </li>
          </ul>

        ))
      }
    </div>

  )
}

export default List_working







// const List_working = () => {

// const numbers = [1,2,3,4,5];


//   return (
//     <div>
//         {
//             numbers.map((number)=> (
//                 <ul key={number}>
//                 <li>{number}</li>
//                 </ul>
//             ) )
//         }
//     </div>
//   )
// }


// export default List_working