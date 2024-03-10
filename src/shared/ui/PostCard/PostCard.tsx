import styles from './PostCard.module.css';
import { Title } from 'shared/ui';
import { Post } from 'shared/model/post.interface';

export const PostCard = (props: Post) => {
    return (
        <li className={styles.card}>
            <div className={styles.card_header}>
                <span>userId: {props.userId}</span>
                <span>id: {props.id}</span>
            </div>
            <Title type='h2'>{props.title}</Title>
            <p className={styles.card_body}>{props.body}</p>
            <a href={`/${props.id}`} className={styles.card_link}>
                Страница поста
            </a>
        </li>
    );
};
