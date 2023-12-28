import { useEffect, useState } from "react"

export const Comment = ({ comment }) => {
  const [fullComment, setFullComment] = useState(false)
  const [changeFullComment, setChangeFullComment] = useState(false)
  const [textComment, setTextComment] = useState("Ver completo")

  useEffect(() => {
    if (comment.Comment.length > 170) {
      setFullComment(true)
      setChangeFullComment(true)
    }
    let size = document.getElementById("commentSiz e")
    console.log(size);
  }, [])

  function changeHeight() {
    setChangeFullComment(!changeFullComment)
    setTextComment(textComment === "Ver completo" ? "Ver menos" :"Ver completo")
  }

  return (
    <li className={`lg:flex flex-row w-full overflow-hidden text-center justify-center p-3 h-[80px] max-w-[800px] rounded-lg transition-[height] duration-1000 bg-green-50 ${fullComment ?"" :"items-center"} ${changeFullComment ?"h-[400px]" : ""}`}>
      <aside className="flex w-1/4 items-center gap-2">
        <img className="w-14 rounded-full" src={comment.Image} />
        <h1>{comment.Username}</h1>
      </aside>

      <p id={fullComment ?"commentSize" : ""} className="w-3/4">{comment.Comment}</p>

      {fullComment && (
        <h1 onClick={changeHeight} className="text-center font-semibold cursor-pointer w-16">{textComment}</h1>
      )}
    </li>
  )
}
