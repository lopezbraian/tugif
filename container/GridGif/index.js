import React from "react"

export default function GridGif({ gifs }) {
  return (
    <div>
      {gifs.map((gif, index) => {
        return (
          <div className="gif" key={index}>
            <img src={gif.images.original.url} alt={gif.title} />
          </div>
        )
      })}
      <style jsx>{`
        @media screen and (min-width: 1024px) {
          div {
            width: 60%;
            margin: 0 auto;
          }
        }
        div {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-template-rows: 1fr auto;
          align-items: center;
          gap: 10px;
        }
        .gif {
          border: 2px solid #5a4488;
          height: 300px;
          border-radius: 5px;
          width: 100%;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}
