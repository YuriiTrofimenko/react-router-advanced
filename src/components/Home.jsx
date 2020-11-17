import React from 'react'
function Home(props) {
  return (
    <div>
        <h1>Home</h1>
        <h2>ID = {props.match.params.id}</h2>
        <h2>
            Color = {new URLSearchParams(props.location.search).get("color")}
        </h2>
        <h2>
            Year = {new URLSearchParams(props.location.search).get("year")}
        </h2>
    </div>
  );
}

export default Home;
