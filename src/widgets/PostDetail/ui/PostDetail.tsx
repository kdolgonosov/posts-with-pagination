import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './PostDetail.module.css';
import { getPostById } from 'shared/api/postApi';
import { Post } from 'shared/model/post.interface';
import { Title } from 'shared/ui';

type PostDetailProps = {
    id: string;
};
export const PostDetail = (props: PostDetailProps) => {
    const [post, setPost] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(true);
        getPostById(props.id)
            .then((res) => setPost(res))
            .finally(() => setIsLoading(false));
    }, [props.id]);

    // useEffect(() => {
    //     setIsLoading(true);
    //     getPostsByPage(page)
    //         .then(({ json, total }) => {
    //             setPosts(json);
    //             setTotal(parseInt(total!));
    //         })
    //         .finally(() => setIsLoading(false));
    // }, [page]);
    return (
        <>
            <Title type='h1'>Страница поста</Title>
            {isLoading ? (
                <p>Загрузка...</p>
            ) : (
                post && (
                    <div className={styles.wrapper}>
                        <span className={styles.row}>
                            <span className={styles.row_key}>id:</span> {post.id}
                        </span>
                        <span className={styles.row}>
                            <span className={styles.row_key}>title:</span> {post.title}
                        </span>
                        <span className={styles.row}>
                            <span className={styles.row_key}>body:</span> {post.body}
                        </span>
                    </div>
                )
            )}
            <Link to='/' className={styles.button}>
                Вернуться
            </Link>
        </>
    );
};
