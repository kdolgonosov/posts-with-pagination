import styles from './PostList.module.css';
import { PostCard } from 'shared/ui';
import { Post } from 'shared/model/post.interface';

type PropsPostList = {
    posts: Post[];
    isLoading: boolean;
};
export const PostList = (props: PropsPostList) => {
    return (
        <ul className={styles.list}>
            {props.isLoading ? (
                <p>Загрузка...</p>
            ) : (
                props.posts.map((post) => <PostCard {...post} key={post.id} />)
            )}
        </ul>
    );
};
