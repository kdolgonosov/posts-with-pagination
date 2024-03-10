import styles from './Title.module.css';

type Props = {
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children: React.ReactNode;
};
export const Title = (props: Props) => {
    switch (props.type) {
        case 'h1':
            return <h1 className={styles.title_h1}>{props.children}</h1>;
        case 'h2':
            return <h2 className={styles.title_h2}>{props.children}</h2>;
        case 'h3':
            return <h3 className={styles.title_h3}>{props.children}</h3>;
        case 'h4':
            return <h4 className={styles.title_h4}>{props.children}</h4>;
        case 'h5':
            return <h5 className={styles.title_h5}>{props.children}</h5>;
        case 'h6':
            return <h6 className={styles.title_h6}>{props.children}</h6>;
    }
};
