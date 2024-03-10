import { PostList } from 'entities/PostList/ui/PostList';
import { Pagination } from 'features/catalog/Pagination';
import { useState, useEffect } from 'react';
import { Title } from 'shared/ui';
import { getPostsByPage } from 'shared/api/postApi';
import { Post } from 'shared/model/post.interface';

export const PostCatalog = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        getPostsByPage(page)
            .then(({ json, total }) => {
                setPosts(json);
                setTotal(parseInt(total!));
            })
            .finally(() => setIsLoading(false));
    }, [page]);
    return (
        <>
            <Title type='h1'>Все посты</Title>
            <PostList isLoading={isLoading} posts={posts} />
            <Pagination total={total} handleSetPage={setPage} page={page} />
        </>
    );
};
