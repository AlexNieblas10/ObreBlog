export const Post = ({
	imgURL,
	description,
	autor = "Default",
	category,
	title,
}) => {
	let resumeCategory = category.slice(0, 2);

	let wordsInDescription = description.split(" ");

  let newDescription;

	if (wordsInDescription.length > 20) {
		let newWordsInDescription = wordsInDescription.slice(0, 19);
    newDescription = newWordsInDescription.join().replaceAll(",", " ").concat("...");
	}
  else{
    newDescription = description.concat("...")
  }

	return (
		<div className="post_cotainer">
			<h2 className="post_title">{title}</h2>
			<img src={imgURL} alt="img post" className="post_img" />
			<p className="post_description">{newDescription}</p>
			<ul className="post_list">
				<div className="autor_container">
					<li className="item">{autor}</li>
				</div>
				<div className="category_container">
					{resumeCategory?.map((category) => {
						return <li key={category}>{category}</li>;
					})}
				</div>
			</ul>
			<button className="button_post">Ver post</button>
		</div>
	);
};
