import { createBrowserRouter } from 'react-router-dom';
import { PostsPage } from 'pages/posts';
import { PostPage } from 'pages/post';

export const appRouter = () =>
    createBrowserRouter([
        {
            path: '/',
            element: <PostsPage />,
        },
        {
            path: ':postId',
            element: <PostPage />,
        },
    ]);
