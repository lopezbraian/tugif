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
          display: flex;
          overflow: hidden;
          overflow-x: auto;
          padding-bottom: 50px;
        }
        img {
          margin: 0 5px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  )
}
