import Link from 'next/link'
import Head from 'next/head'

const firstpost = () => {
	return(
	<>
<Head><title>First post</title></Head>
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
