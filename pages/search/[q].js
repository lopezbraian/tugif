import React, { useState } from "react"
import { useRouter } from "next/router"
import useGetData from "../../hooks/useGetData"
import { URL_BASE } from "../../config"
import { Title } from "../../components/Title"
import Loading from "react-loader-spinner"
import Head from "next/head"

export default function Search() {
  const router = useRouter()
  const { q } = router.query

  const url = q
    ? `${URL_BASE}gifs/search?api_key=${process.env.API_KEY_GIPHY}&q=${q}&limit=25`
    : false

  const [resp, loading, error] = useGetData(url)

  if (error) return ""
  const { data } = resp

  return (
    <section>
      <Head>
        <title>Resultado busqueda: {q}</title>
      </Head>
      <div className="container">
        <Title title={`Resultado de tu busqueda ${q}`}></Title>
        <div className="container-images">
          {loading ? (
            <Loading
              color="#32D3A9"
              type="ThreeDots"
              style={{ textAlign: "center" }}
            />
          ) : (
            data &&
            data.map((d, index) => (
              <img key={index} src={d.images.original.url}></img>
            ))
          )}
        </div>
        <style jsx>{`
          .container-images {
            max-width: 468px;
            width: 100%;
          }
          img {
            display: inline;
            width: 100%;
          }
        `}</style>
      </div>
    </section>
  )
}
