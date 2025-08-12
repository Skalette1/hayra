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
  const [isDark, setIsDark] = useState<boolean>(
    typeof window !== 'undefined'
      ? document.documentElement.classList.contains('dark')
      : false
  );

  useEffect(() => {
    setQuery(initialQ);
  }, [initialQ]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const results = useMemo(() => searchItems(query), [query]);
  const descriptionColor = isDark ? '#fff' : '#555';
  const metaColor = isDark ? '#fff' : '#666';

  return (
    <>
      <ScrollToTop />
      <HeroSection />
      <div className={styles.pageBlock}>
        <h2>Поиск</h2>
        <p style={{ marginTop: -4, color: metaColor }}>Запрос: {query ? `“${query}”` : '—'}</p>

        {query && results.length > 0 && (
          <p style={{ marginTop: 12, marginBottom: 20, color: metaColor }}>Найдено: {results.length}</p>
        )}

        {!query && (
          <p style={{ color: metaColor }}>Введите запрос в поле поиска вверху.</p>
        )}

        {query && results.length === 0 && (
          <p style={{ marginTop: 12, color: metaColor }}>По вашему запросу ничего не найдено</p>
        )}

        <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: 12 }}>
          {results.map((r) => (
            <li key={r.id} style={{ marginBottom: 16 }}>
              <Link to={r.path} style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                {r.title}
              </Link>
              <div style={{ color: descriptionColor, marginTop: 6 }}>
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


