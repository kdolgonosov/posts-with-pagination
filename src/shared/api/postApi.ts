const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPostsByPage = (page: number) => {
    return fetch(`${BASE_URL}?_page=${page}`).then((res) =>
        res.json().then((json) => ({
            json,
            total: res.headers.get('X-Total-Count'),
        })),
    );
};
export const getPostById = (id: string) => {
    return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
};
