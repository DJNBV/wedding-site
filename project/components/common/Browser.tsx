import { useState, useEffect } from 'react';

interface Props {
  url: string;
  className?: string;
}

export default function Browser({ url, className }: Props) {
  const [browserContent, setBrowserContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const content = await response.text();
        setBrowserContent(content);
      } catch (error) {
        console.error('Error fetching browser content:', error);
      }
    };

    fetchContent();
  }, [url]);

  return (
    <div className={`browser-wrapper ${className || ''}`}>
      {browserContent ? (
        <div dangerouslySetInnerHTML={{ __html: browserContent }} />
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-700" />
        </div>
      )}
    </div>
  );
}
