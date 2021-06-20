import React, { useRef } from "react"
import LoupeSvg from "../svg/LoupeSvg"
import { useRouter } from "next/router"

export const Searcher = () => {
  const router = useRouter()
  const valueForm = useRef(null)
  const form = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const value = valueForm.current.value
    if (value !== "") {
      form.current.reset()
      router.push(`/search/${value}`)
    }
  }
  return (
    <>
      <form className="searcher" ref={form} onSubmit={handleSubmit}>
        <input ref={valueForm} placeholder="Buscador"></input>
        <button type="submit">
          <LoupeSvg />
        </button>
      </form>
      <style jsx>{`
        .searcher {
          max-width: 400px;
          margin: 10px auto;
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          position: relative;
        }
        button {
          border: none;
          background-color: #5a4488;
          position: absolute;
          padding: 5px;
          right: 0;
          top: 0;
          bottom: 0;
          width: 30px;
          border-radius: 0 5px 5px 0;
        }
        .searcher > input {
          border: none;
          font-weight: 300;
          font-size: 1.1rem;
          padding: 10px;
          height: 100%;
          flex-grow: 1;
          border-radius: 5px;
        }
      `}</style>
    </>
  )
}
