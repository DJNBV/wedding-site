import { useState, useEffect } from 'react';

interface Props {
  url: string;
  className?: string;
}

export default function Browser({ url, className }: Props) {
  const [browserContent, setBrowserContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Для веб-версии используем iframe или просто ссылку
        // Прямой fetch URL может быть заблокирован CORS
        setBrowserContent(url);
      } catch (err) {
        setError('Не удалось загрузить контент');
        console.error('Ошибка загрузки:', err);
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchContent();
    }
  }, [url]);

  if (loading) {
    return <div className={className}>Загрузка...</div>;
  }

  if (error) {
    return <div className={className}>Ошибка: {error}</div>;
  }

  return (
    <div className={className}>
      {/* Вариант 1: Iframe */}
      <iframe 
        src={url} 
        width="100%" 
        height="600px"
        frameBorder="0"
        title="Browser content"
      />
      
      {/* Вариант 2: Простая ссылка */}
      {/* <a href={url} target="_blank" rel="noopener noreferrer">
        Открыть {url}
      </a> */}
    </div>
  );
}