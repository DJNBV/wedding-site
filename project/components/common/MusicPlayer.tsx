'use client';

import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set the start time to 51 seconds
    audio.currentTime = 51;

    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        audio.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    };

    // Add event listeners for user interaction
    document.addEventListener('click', handleInteraction);
    document.addEventListener('scroll', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [hasInteracted]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMuted) {
      audio.volume = 0.3;
      setIsMuted(false);
    } else {
      audio.volume = 0;
      setIsMuted(true);
    }
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onLoadedData={() => {
          if (audioRef.current) {
            audioRef.current.currentTime = 51;
            audioRef.current.volume = 0.3;
          }
        }}
      >
        <source src="https://lmusic.kz/api/download/207600" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <AnimatePresence>
        {hasInteracted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-amber-200">
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full hover:bg-amber-100 transition-colors"
                  aria-label={isPlaying ? 'Pause music' : 'Play music'}
                >
                  {isPlaying ? (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-1 h-4 bg-amber-600 mr-1"></div>
                      <div className="w-1 h-4 bg-amber-600"></div>
                    </div>
                  ) : (
                    <div className="w-4 h-4 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-amber-600 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  )}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full hover:bg-amber-100 transition-colors"
                  aria-label={isMuted ? 'Unmute music' : 'Mute music'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-amber-600" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-amber-600" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;