import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/button"
import { logOut } from "../../services/auth"
import Snowfall from "react-snowfall"

function Home() {
  const token = localStorage.getItem("ms_token")
  const navigate = useNavigate()

  useEffect(() => {
    if (!token) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <div>Home</div>
      <Button
        onClick={logOut}
        title="Log out"
        variant="danger"
      />
      <Snowfall />
    </>
  )
}

export default Home
