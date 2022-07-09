import memeData from "../memeData";

export default function Meme() {
  function getMemeImage() {
    const memeArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomNumber].url
    console.log(url)
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
    </section>
  );
}
