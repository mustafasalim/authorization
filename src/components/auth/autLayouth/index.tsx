import { Toaster } from "react-hot-toast"
import Snowfall from "react-snowfall"

interface AuthLayoutProps {
  children: any
}

function AuthLayouth({ children }: AuthLayoutProps) {
  return (
    <>
      <div className="flex  items-center justify-center w-full h-screen">
        {children}
      </div>
      <Toaster />
      <Snowfall />
    </>
  )
}

export default AuthLayouth
