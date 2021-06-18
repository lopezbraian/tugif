import React from "react"

export const Title = ({ title, svg }) => {
  return (
    <div>
      {svg}
      <h2>{title}</h2>
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
        }
        h2 {
          margin: 0;
          padding: 10px;
          margin-bottom: 5px;
        }
      `}</style>
    </div>
  )
}
