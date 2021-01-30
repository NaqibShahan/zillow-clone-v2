import React, {useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import {db}

function App() {
  const [posts, setPosts] = useState([
  { 
      username:"naqibshahan",
      caption:"Wow it work!",
      imageUrl:"https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    { 
      username:"amanda",
      caption:"Wow it work!",
      imageUrl:"https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png"
    }
  ]);

  useEffect (() => {

  }, [])

  return (
    <div className="App">
      <div className="app_header">
          <img
            className="app_headerImage"
            src="https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png"
            alt=""></img>
      </div>
     <h1>Hello Clever Programmers</h1>

      {
        posts.map(post => (
          <Post username={post.usename} caption={post.caption} imageUrl={post.imageUrl}></Post>
        ))
      }
    
     
     {/* Posts */}
  
    </div>
  );
}

export default App;
