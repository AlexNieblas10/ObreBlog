

export const Comment = ({ comment }) => {
  return (

    <li key={comment.Comment} className="w-full p-2 snap-y flex sm:flex-row flex-col justify-center items-center border-2 gap-4">
      <aside className=" w-1/4 flex flex-col justify-center items-center">
        <img className="w-12 h-12 rounded-full" src={comment.Image} alt="Imagen del usuario" />
        <h2>{comment.Username}</h2>
      </aside>

      <aside className="sm:w-3/4 sm:items-center max-h-44 flex flex-col overflow-y-auto p-2">
        <p >{comment.Comment}</p>
      </aside>
    </li>


  )
}


