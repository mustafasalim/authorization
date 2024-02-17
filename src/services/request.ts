import axios from "axios"

const baseUrl = "https://api.github.com/"

const api = axios.create({
  baseURL: baseUrl,
})

export const fetchData = async (endpoint: any) => {
  try {
    const response = await api.get(endpoint)
    console.log(response.data)

    return response.data
  } catch (error: any) {
    console.log(error.message)
  }
}

export const postData = async (endpoint: any, data: any) => {
  try {
    const response = await api.post(endpoint, data)
    return response.data
  } catch (error: any) {
    console.log(error.message)
  }
}
