const MovieList = ({ list }) => {

  console.log(list)
  return (list?.length && (

    <ul>
      {
        list.map(({ id, name }) => (
          <li key={id}>{name}</li>
          //<UserList movieID={id}></UserList>

        ))
      }
    </ul>
  ))
}

export default MovieList