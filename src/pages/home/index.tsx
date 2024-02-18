import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/button"
import { logOut } from "../../services/auth"
import { jwtDecode } from "jwt-decode"

function Home() {
  const token = localStorage.getItem("ms_token")
  const navigate = useNavigate()
  const user = token ? jwtDecode<any>(token) : null
  useEffect(() => {
    if (!user) {
      navigate("/login")
    }
  }, [])

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="">
          <div className="flex gap-x-2 text-[40px]">
            <h1>Hoşgeldin </h1>
            <h1 className="text-blue-500">{user ? user.user.fullName : ""}</h1>
          </div>
          <div className="flex items-center justify-center">
            <Button
              onClick={logOut}
              variant="danger"
              title="Log out"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
