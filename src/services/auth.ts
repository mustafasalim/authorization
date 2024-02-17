import axios from "axios"

import toast from "react-hot-toast"
import { redirect } from "react-router-dom"

const baseUrl = "http://localhost:3000/api/auth"

const api = axios.create({
  baseURL: baseUrl,
})

api.interceptors.response.use(
  function (response) {
    const token = response.data.token
    const isRegisterUser = response.data.fullName
    if (token) {
      localStorage.setItem("ms_token", token)
      toast.success("Giriş Başarılı")
      setTimeout(() => {
        window.location.href = "/"
      }, 3000)
    }
    if (isRegisterUser) {
      toast.success("Kayıt Başarılı")
      setTimeout(() => {
        window.location.href = "/login"
      }, 3000)
    }
    console.log(response)

    return response
  },
  function (error) {
    const isUnAuthorized = error.response.status === 401
    const badRequest = error.response.status === 400
    const errorMessage = error.response.data.message
    if (isUnAuthorized) {
      redirect("/login")
      localStorage.removeItem("ms_token")
      toast.error(errorMessage)
    }
    if (badRequest) {
      toast.error(errorMessage)
    }
    return Promise.reject(error)
  }
)

export const login = async (payload: any) => {
  return await api.post("/login", payload)
}

export const register = async (payload: any) => {
  return await api.post("/register", payload)
}

export const logOut = () => {
  localStorage.removeItem("ms_token")
  window.location.href = "/login"
}
