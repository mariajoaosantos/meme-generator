import memeData from "../memeData";
import React from "react";

export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "https://i.imgflip.com/30b1gx.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memeData);

  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <section className="main">
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        ></input>
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼️
        </button>
      </div>
      <img src={meme.randomImage} className="meme--image"></img>
    </section>
  );
}
