import Link from 'next/link'

const firstpost = () => {
	return(
	<>
	<h1>First post</h1>
	<h2>
		<Link href="/">
			<a>Home</a>
		</Link>
	</h2>
	</>
)
}

export default firstpost;
