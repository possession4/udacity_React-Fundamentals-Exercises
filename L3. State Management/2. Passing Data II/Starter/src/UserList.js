
const UserList = (movieID, { users }) => {

  return (
    <ul>
      {users.find((movieID, { id }, { name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  )
}

export default UserList