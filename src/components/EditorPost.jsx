import { useContext, useState } from "react"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import { toolbarOptions } from "../utils/toolbarOptions.d.js"
import { MainContext } from "../context/FullContext.jsx"
const userAccount = localStorage.getItem("user")

export const EditorPost = () => {
	const [value, setValue] = useState("")
	const [image, setImage] = useState(null)
	const [selectedImage, setSelectedImage] = useState(false)
	const [response, setResponse] = useState(null)

	const {serverUrl} = useContext(MainContext)

	const module = {
		toolbar: toolbarOptions,
	}

	const handleChangePhoto = (e) => {
		const imageFile = e.target.files[0]
		const reader = new FileReader()

		reader.onload = function (e) {
			const base64Data = e.target.result
			setSelectedImage(base64Data)
			setImage(true)
		}

		reader.readAsDataURL(imageFile)
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (userAccount) {
			let category = e.target[0].value

			if (e.target[1].value.length > 0 && value.length > 0 && image) {
				const data = {
					title: e.target[1].value,
					value: value,
					image: selectedImage,
				}

				let dataFetch = {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(data),
				}

				try {
					const response = await fetch(
						`${serverUrl}UploadPost/?username=${userAccount}&category=${category}`,
						dataFetch
					)

					if (response.ok) {
						response.text().then((data) => setResponse(data))
						setTimeout(() => {
							window.location.reload()
						}, 1000)
					}
					if (response.status === 400) {
						response.json().then((data) => setResponse(data.error))
					}
				} catch {
					setResponse("Intentalo mas tarde, algo falló")
				}
			} else {
				setResponse("Debes llenar todos los campos necesarios")
			}
		} else {
			setResponse("Debes estar registrado para poder crear un post")
		}
	}

	return (
		<form
			encType="multipart/form-data"
			className="relative w-full p-4 gap-5 grid place-items-center text-black"
			onSubmit={(e) => handleSubmit(e)}
		>
			<div className="absolute top-0 left-0 flex gap-2">
				<label htmlFor="Categories" className="text-green-600">
					Categoria:
				</label>
				<select name="Categoria" id="Categories">
					<option>Ciudad</option>
					<option>Tecnologia</option>
					<option>Videojuegos</option>
					<option>Deportes</option>
					<option>Social</option>
				</select>
			</div>

			<input
				type="text"
				placeholder="Titulo del post"
				className="w-full text-black p-4 text-center text-5xl outline-none"
			/>
			<ReactQuill
				className="text-black w-full"
				modules={module}
				theme="snow"
				value={value}
				onChange={setValue}
				placeholder={"Contenido del post"}
			/>

			<input
				onChange={(e) => handleChangePhoto(e)}
				type="file"
				className="  file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
			/>
			{selectedImage && (
				<div className="w-1/8 h-[140px]">
					<img
						className="w-full h-full object-cover"
						src={selectedImage}
						alt="Selected"
					/>
				</div>
			)}
			{response && <h2>{response}</h2>}
			<button className="w-1/2 transition-[background-color]  cursor-pointer text-white bg-[#57b846] rounded-2xl duration-400 hover:bg-[#333333]">
				Mandar
			</button>
		</form>
	)
}
