import classNames from "classnames"

interface buttonProps {
  title: any
  variant: string
  onClick?: any
}

function Button({ title, variant, ...props }: buttonProps) {
  return (
    <button
      className={classNames("p-2 px-4 transition-all text-white  rounded-md", {
        "bg-blue-500 hover:backdrop-grayscale-0 hover:bg-blue-500/30 ":
          variant === "blue",
        "bg-red-500 text-red-200 hover:bg-red-800 hover:text-red-500":
          variant === "danger",
      })}
      {...props}
    >
      {title}
    </button>
  )
}

export default Button
