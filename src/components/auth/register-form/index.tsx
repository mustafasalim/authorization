import { Link } from "react-router-dom"
import Button from "../../button"
import Input from "../../input"
import TextLine from "../../textLine"
import { useState } from "react"
import { register } from "../../../services/auth"
import toast from "react-hot-toast"

function RegisterForm() {
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [checked, setChecked] = useState<boolean>(false)

  const handleChecked = () => {
    checked === false ? setChecked(true) : setChecked(false)
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const payload = {
      fullName: userName,
      email: email,
      password: password,
      memberAgreementVersion: "v1",
    }
    checked ? await register(payload) : toast.error("accept conditions")
  }
  console.log(checked)

  return (
    <form
      onSubmit={handleSubmit}
      className="p-20  flex flex-col gap-y-2"
    >
      <div className="mb-10">
        <div className="text-[22px] font-bold">Register </div>
        <TextLine />
      </div>

      <label className="grid gap-y-1">
        <div className="font-semibold">Username</div>
        <Input
          value={userName}
          type="text"
          placholder=""
          onChange={(e: any) => setUserName(e.target.value)}
        />
      </label>
      <label className="grid gap-y-1">
        <div className="font-semibold">Email</div>
        <Input
          value={email}
          type="email"
          placholder=""
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </label>
      <label className="grid gap-y-1">
        <div className="font-semibold">Password</div>
        <Input
          value={password}
          type="password"
          placholder=""
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </label>
      <label className="flex gap-x-1">
        <Input
          className={`outline-none`}
          type="checkbox"
          onChange={handleChecked}
          placholder=""
        />
        <div>I accept the terms and conditions</div>
      </label>
      <div>
        <Button
          title="Sign up"
          variant="blue"
        ></Button>
      </div>
      <div className="mt-5">
        Already have an account?
        <Link
          className="text-blue-500 hover:underline"
          to="/login"
        >
          Login
        </Link>
      </div>
    </form>
  )
}

export default RegisterForm
