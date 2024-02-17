import TextLine from "../../textLine"
import Input from "../../input"
import Button from "../../button"
import { Link } from "react-router-dom"
import { useState } from "react"
import { login } from "../../../services/auth"

function LoginForm() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const payload = {
      email,
      password,
    }
    await login(payload)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-20 flex flex-col gap-y-2"
    >
      <div className="mb-10">
        <div className="text-[22px] font-bold">Login </div>
        <TextLine />
      </div>
      <label className="grid gap-y-1">
        <div className="font-semibold">Email</div>
        <Input
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          type="email"
          placholder=""
        />
      </label>
      <label className="grid gap-y-1">
        <div className="font-semibold">Password</div>
        <Input
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          type="password"
          placholder=""
        />
      </label>

      <div>
        <Button
          title="Log in"
          variant="blue"
        ></Button>
      </div>
      <div className="mt-5">
        Don’t have an account?
        <Link
          className="text-blue-500 hover:underline"
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
