import React from "react"
import { Title } from "../../components/Title"
import TrendingSvg from "../../components/svg/TrendingSvg"
export const ListGift = ({ data, title = "Default Title" }) => {
  return (
    <div className="container">
      <Title title="Trending" svg={<TrendingSvg />} />
      <div className="container-list-gif">
        {data.map((p, index) => {
          return (
            <img
              loading="lazy"
              height="100px"
              key={index}
              src={p.images.original.url}
            ></img>
          )
        })}
      </div>
      <style jsx>{`
        .container {
          background-color: black;
          padding: 5px;
          border-radius: 5px;
        }
        .container-list-gif {
          gap: 10px;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          grid-template-rows: 100px;
        }
        img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  )
}
