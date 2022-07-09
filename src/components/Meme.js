export default function Meme() {
  return (
    <section className="main">
      <form className="form">
        <input type="text" placeholder="Top text" className="form--input"></input>
        <input type="text" placeholder="Bottom text" className="form--input"></input>
        <button className="form--button">Get a new meme image 🖼️</button>
      </form>
    </section>
  );
}