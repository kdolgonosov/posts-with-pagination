import styles from './Pagination.module.css';
import { Dispatch, SetStateAction, memo } from 'react';

type PropsPagination = {
    total: number;
    page: number;
    handleSetPage: Dispatch<SetStateAction<number>>;
};
export const Pagination = memo((props: PropsPagination) => {
    console.log('render');
    return (
        <div className={styles.wrapper}>
            {Array.from({ length: Math.floor(props.total / 10) }, (_, i) => i + 1).map((item) => (
                <button
                    className={`${styles.button} ${props.page === item && styles.button_current}`}
                    key={item}
                    onClick={() => props.handleSetPage(item)}
                >
                    {item}
                </button>
            ))}
        </div>
    );
});
