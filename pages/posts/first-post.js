import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'


const firstpost = () => {
	return (
	<Layout>
<Head><title>First post</title></Head>
	<h1>First post</h1>
	<h2>
		<Link href="/">
			<a>Home</a>
		</Link>
	</h2>
	</Layout>
)
}

export default firstpost;
