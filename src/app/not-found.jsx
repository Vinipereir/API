import styles from "./not-found.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFoundContainer}>
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe.</p>
            <a href="/" className={styles.notFoundLink}>
                Voltar para a página inicial
            </a>
        </div>
    );
}
