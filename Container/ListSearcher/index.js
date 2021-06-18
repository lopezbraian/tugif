import React, { useState } from "react"
import useGetData from "../../hooks/useGetData"
import { URL_BASE } from "../../config"
import { Title } from "../../components/Title"
import LoupeTrendSvg from "../../components/svg/LoupeTrendSvg"
import Loading from "react-loader-spinner"

export const ListSearcher = () => {
  const url = `${URL_BASE}trending/searches?api_key=${process.env.API_KEY_GIPHY}&limit=25`
  const [resp, loading, error] = useGetData(url)

  const { data } = resp
  return (
    <div className="container">
      <Title title="Searcher trending" svg={<LoupeTrendSvg />} />
      <ul>
        {loading ? (
          <Loading
            color="#32D3A9"
            type="ThreeDots"
            style={{ textAlign: "center" }}
          />
        ) : (
          data &&
          data.map((t, index) => {
            return <li key={index}>{t}</li>
          })
        )}
      </ul>
      <style jsx>{`
        ul {
          margin: 0;
          padding: 0;
          text-align: center;
        }
        li {
          list-style: none;
          background: linear-gradient(to right, #2dccc2, #31d1ad, #33d59f);
          margin: 5px;
          border-radius: 10px;
          text-align: center;
          padding: 5px;
          display: inline-block;
          color: white;
          font-weight: 700;
        }
      `}</style>
    </div>
  )
}
