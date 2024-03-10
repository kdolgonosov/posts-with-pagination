import { useParams } from 'react-router-dom';
import { Layout } from 'shared/ui';
import { PostDetail } from 'widgets/PostDetail';

export const PostPage = () => {
    const { postId } = useParams();
    return (
        <Layout>
            <PostDetail id={postId!} />
        </Layout>
    );
};
