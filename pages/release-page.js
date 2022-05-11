import Layout from '../components/Layout'
import Post from '../components/Post';
import { getAllPostsData } from '../lib/posts'

const Release = ({ posts }) => {
    return (
        <Layout title="Release">
            <ul className="m-10">
                {posts && posts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
        </Layout>
    );
}

export default Release

export async function getStaticProps() {
    const posts = await getAllPostsData();
    return {
        props: { posts },
    };
}