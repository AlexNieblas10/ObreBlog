import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { toolbarOptions } from '../utils/toolbarOptions'

export const EditorPost = () => {
	const [value, setValue] = useState('')
	/* 	const [image, setImage] = useState(null) */

	const module = {
		toolbar: toolbarOptions,
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		const info = {
			title: e.target[0].value,
			content: value,
		}
		/* info.append('image', image) */

		try {
			const response = await fetch('http://localhost:6655/enviar', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(info),
			})

			if (response.ok) {
				response.text().then((data) => console.log(data))
			}
		} catch {
			console.log('no se pudo')
		}
	}

	return (
		<form
			className="w-full p-4 gap-5 grid place-items-center"
			onSubmit={(e) => handleSubmit(e)}
		>
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
				placeholder={'Contenido del post'}
			/>
			<input
				/* onChange={(e) => setImage(e.target.files[0])} */
				type="file"
				className="text-black w-full bg-slate-200"
			/>
			<button className="h-14 w-[30%] text-white bg-[#57b846] rounded-2xl text-lg transition-[background-color] duration-300 hover:bg-[#333333]">
				Subir
			</button>
		</form>
	)
}
