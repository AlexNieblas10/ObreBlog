import { useState } from "react"

export const UseValidPassword = () => {

  const [samePassword, setSamePassword] = useState(false)
  const [activeChange, setActiveChange] = useState(false)
  const [currentPassword, setCurrentPassword] = useState("")
	const [newPassword, setNewPassword] = useState("")
  const [repeatNewPassword, setRepeatNewPassword] = useState("")
  const [lengthPassword, setLengthPassword] = useState(false)
	const [characterPassword, setCharacterPassword] = useState(false)
	const [isRepeatNewPassword, setIsRepeatNewPassword] = useState(false)
	const [passwordLength, setPasswordLength] = useState(false)


  const setPasswords = (e) => {
		if (e.target.id === "NEW") {
			setNewPassword(e.target.value)
		}

		if (e.target.id === "CURRENT") {
			setCurrentPassword(e.target.value)
		}

		if (e.target.id === "REPEAT") {
			setRepeatNewPassword(e.target.value)
		}
	}


  return (
    <div
    className={`${
      activeChange ? "max-md:h-[240px] h-[195px]" : "h-0"
    } transition-all duration-300 overflow-hidden flex flex-col gap-2 `}
  >
    <form
      onChange={setPasswords}
      className="flex gap-10 flex-col items-center"
    >
      <div className="flex max-md:flex-col w-full">
        <input
          type="password"
          id="CURRENT"
          placeholder="Contraseña actual"
          className="outline-none text-center w-full"
        />
        <input
          type="password"
          id="NEW"
          placeholder="Contraseña nueva"
          className="outline-none text-center w-full"
        />
        <input
          type="password"
          id="REPEAT"
          placeholder="Repite la contraseña"
          className="outline-none text-center w-full"
        />
      </div>

      <button className="w-1/2 transition-[background-color]  cursor-pointer text-white bg-[#57b846] rounded-2xl duration-400 hover:bg-[#333333]">
        Cambiar
      </button>
    </form>
    <article className="flex flex-col items-center">
      <p
        className={`${
          samePassword ? "text-green-600" : "text-red-600"
        } transition-colors duration-300`}
      >
        Ingresa la contraseña actual
      </p>
      <p
        className={`${
          lengthPassword ? "text-green-600" : "text-red-600"
        } transition-colors duration-300`}
      >
        Tu nueva contraseña debe tener mas de 14 letras
      </p>
      <p
        className={`${
          characterPassword ? "text-green-600" : "text-red-600"
        } transition-colors duration-300`}
      >
        Tu nueva contraseña debe tener una letra especial
      </p>
      <p
        className={`${
          isRepeatNewPassword ? "text-green-600" : "text-red-600"
        } transition-colors duration-300`}
      >
        Tu nueva contraseña debe coincidir
      </p>
    </article>
  </div>
  )
}

