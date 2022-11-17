const FavoriteMovieList = ({ list }) => {

  return (list?.length && (
    <ul>
      {list.map(({ id, userName, movieName }) => (
        <li key={id}>{userName}'s favorite movie is {movieName}</li>
      ))}
    </ul>
  ))
}

export default FavoriteMovieList