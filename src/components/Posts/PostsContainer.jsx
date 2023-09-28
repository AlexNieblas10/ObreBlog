export const PostsContainer = ({ children }) => {
	return <section className= "animate-showCards duration-500 min-h-[calc(100vh-20vh-40px)] md:min-h-[80vh] p-5 box-border flex justify-evenly gap-6 flex-wrap">{children}</section>;
};
