import { useEffect, useState } from 'react';

interface Props {
  url: string;
  className?: string;
}

export default function SimpleBrowser({ url, className }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url]);

  return (
    <div className={`browser-wrapper relative ${className || ''}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-amber-50/80 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700" />
        </div>
      )}
      <iframe
        src={url}
        className="w-full h-full rounded-lg shadow-lg border border-amber-100"
        style={{ minHeight: '400px' }}
      />
    </div>
  );
}
