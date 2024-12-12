import React, { useEffect, useState } from "react";
import Greet from "./Greet";
import StateHandling2 from "./StateHandling2";
import StateHandling3 from "./StateHandling3";
import { use } from "react";

const StateHandling = () => {
  // #################  Updating number #################

  const [count, setCount] = useState(0);
  const increament = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  // #################  Updating Array #################
  const [friends, setFriends] = useState(["John", "Doe", "Jane"]);

  const addOneFriend = () => setFriends([...friends, "New Friend"]);
  const removeFriend = () => setFriends(friends.filter((f) => f !== "John"));
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Doe" ? "Jhon Does" : f)));
  };

  // #################  Updating Object #################

  const [movie, setMovie] = useState({ title: "Inception", rating: 9 });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   rating: movie.rating + 1,
    // }
    // setMovie(copyMovie);

    setMovie({ ...movie, rating: movie.rating + 1 });
  };

  // #################  Updating Array of Objects #################

  const [movies, setMovies] = useState([
    { id: 1, title: "Spider Man ", rating: 7 },
    { id: 2, title: "SuperMan ", rating: 6 },
  ]);

  const handleMovies = () => {
    setMovies(
      movies.map( m=> m.id ===1 ? {...movies,title: "Jhon Wick  5"} : m )
    )
  };



  const [number, setNumber] = useState(0);


  // ############## example with  local storage #############

  const [name , setName] = useState(
    () => {
      const savedName = localStorage.getItem('name')
      return savedName ? JSON.parse(savedName) : "";
    }
  )


  useEffect(
    ()=>{
      localStorage.setItem('name', JSON.stringify(name))
    }, [name]
  )

    const handleChange = (event) => {
      setName(event.target.value);
    }
    const handleClear = () => setName("");



  return (
    <section>
      <h1>{count}</h1>
      <button onClick={increament}> + </button>
      <button onClick={decrement}> - </button>

      <div>
        {friends.map((f) => (
          <li key={Math.random()}>{f}</li>
        ))}
      </div>

      <button onClick={addOneFriend}>Add New Friend</button>
      <button onClick={removeFriend}>Remove One Friend</button>
      <button onClick={updateOneFriend}>Update One Friend</button>

      <div>
        <h1>{movie.title}</h1>
        <p>Ratings: {movie.rating}</p>
        <button onClick={handleClick}>Change Rating </button>
      </div>

      <div>
        {movies.map((m) => (
          <li key={Math.random()}>{m.title}</li>
        ))}

        <button onClick={handleMovies}>Change Name</button>
      </div>

      <StateHandling2  number = {number} onClickHandler={()=> setNumber(number+1)} />


      <StateHandling3  number = {number} onClickHandler={()=> setNumber(number+1)} />


      <div>
        <h1>Your Name: {name}</h1>
        <input type="text" value={name} onChange={handleChange} placeholder="Enter your name"/>
        <button onClick={handleClear} >Clear Name</button>
      </div>

    </section>
  );
};

export default StateHandling;
