interface InputProps {
  placholder: string
  type: string
  onChange?: any
  value?: any
  className?: any
}

function Input({ placholder, type, ...props }: InputProps) {
  return (
    <input
      placeholder={placholder}
      type={type}
      className={`p-2 border focus:outline-2 focus:outline-blue-500 focus:border-red-600 transition-all border-gray-400  rounded-md outline-none`}
      {...props}
    />
  )
}

export default Input
