import { useState, useEffect } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

interface Props {
  url: string;
  className?: string;
}

export default function Browser({ url, className }: Props) {
  const [browserContent, setBrowserContent] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await invoke('browse_url', { url });
        setBrowserContent(content as string);
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
