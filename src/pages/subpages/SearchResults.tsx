import { useEffect, useMemo, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { searchItems } from '../../share/search/searchIndex';
import styles from './Pages.module.css';
import { HeroSection } from '../../widgets/HeroSection/HeroSection';
import { Footer } from '../../widgets/footer/Footer';
import { ScrollToTop } from '../../share/components/ScrollToTop';

function useQueryParam(name: string): string {
  const { search } = useLocation();
  return useMemo(() => {
    const params = new URLSearchParams(search);
    return params.get(name) || '';
  }, [search, name]);
}

export default function SearchResults() {
  const initialQ = useQueryParam('q');
  const [query, setQuery] = useState(initialQ);

  useEffect(() => {
    setQuery(initialQ);
  }, [initialQ]);

  const results = useMemo(() => searchItems(query), [query]);

  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2>Поиск</h2>
        <p style={{ marginTop: -4 }}>Запрос: {query ? `“${query}”` : '—'}</p>

        {query && (
          <p style={{ marginTop: 12, marginBottom: 20 }}>
            Найдено: {results.length}
          </p>
        )}

        {!query && (
          <p>Введите запрос в поле поиска вверху.</p>
        )}

        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 12 }}>
          {results.map((r) => (
            <li key={r.id} style={{ marginBottom: 16 }}>
              <Link to={r.path} style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {r.title}
              </Link>
              <div style={{ color: 'var(--muted, #555)', marginTop: 6 }}>
                {r.content}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}


