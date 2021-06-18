import axios from "axios"
import { useState, useEffect } from "react"

function useGetData(url) {
  const [resp, setResp] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function getData() {
      setLoading(true)
      setLoading(true)
      try {
        const resp = await axios.get(url)
        const { data } = resp
        setResp(data)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
      setLoading(false)
    }
    if (url) getData()
  }, [url])

  return [resp, loading, error]
}

export default useGetData
