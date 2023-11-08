import { useUploadImage } from '../Hooks/UseUploadImage'

export const UploadImage = () => {
	const { handleChangePhoto, handleSendPhoto, selectedImage, statusImage } = useUploadImage()

	return (
		<article className="flex flex-col justify-center w-full">
			<p className="w-full text-xl text-center">Cambiar foto de perfil </p>
			<form
				onSubmit={(e) => handleSendPhoto(e)}
				onChange={(e) => handleChangePhoto(e)}
				className="flex items-center flex-col gap-4"
			>
				<input
					type="file"
					className="  file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
				/>
				{selectedImage && (
					<div className="w-1/4 h-[120px]">
						<img
							className="w-full h-full object-cover"
							src={selectedImage}
							alt="Selected"
						/>
					</div>
				)}
				<button className="w-1/2 transition-[background-color]  cursor-pointer text-white bg-[#57b846] rounded-2xl duration-400 hover:bg-[#333333]">
					Mandar
				</button>
			</form>
			{statusImage ? <h2 className="text-center text-green-600">{statusImage}</h2> : ''}
		</article>
	)
}

export default UploadImage
