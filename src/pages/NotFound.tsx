import React from "react";
import styles from "./subpages/Pages.module.css";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404</h1>
      <h3>Страница не найдена</h3>
      <p>
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>
      <button>
        🠔
        <Link to="/">Назад</Link>
      </button>
    </div>
  );
};
