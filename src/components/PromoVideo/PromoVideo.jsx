import  { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X } from 'lucide-react';

const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);


  // Convertir URL de YouTube Shorts a formato embed
  const videoId = '6GhKAsFBtqI';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoId}`;

  const handlePlayPause = () => {
    const iframe = videoContainerRef.current?.querySelector('iframe');
    if (iframe) {
      if (isPlaying) {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const iframe = videoContainerRef.current?.querySelector('iframe');
    if (iframe) {
      if (isMuted) {
        iframe.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
      } else {
        iframe.contentWindow.postMessage('{"event":"command","func":"mute","args":""}', '*');
      }
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (videoContainerRef.current?.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-black/20 backdrop-blur-sm px-6 py-4 border-b border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Video Promocional
            </h2>
            <p className="text-gray-300 text-sm">
              Descubre lo que tenemos para ti
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-400 text-sm font-medium">EN VIVO</span>
          </div>
        </div>
      </div>

      {/* Video Container */}
      <div 
        ref={videoContainerRef}
        className="relative aspect-video bg-black group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
        onClick={handlePlayPause}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
            <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}

        {/* YouTube Iframe */}
        <iframe
          src={embedUrl}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          onLoad={handleVideoLoad}
          title="Video Promocional"
        />

        {/* Custom Controls Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-auto">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlayPause();
                  }}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-200 hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMuteToggle();
                  }}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:scale-110"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFullscreen();
                  }}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all duration-200 hover:scale-110"
                >
                  {isFullscreen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Maximize className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Play Button Overlay (when paused) */}
        {!isPlaying && !isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
            <div className="bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-2xl">
              <Play className="w-12 h-12 text-gray-800 ml-1" />
            </div>
          </div>
        )}
      </div>

      {/* Footer with Call to Action */}
      <div className="bg-black/20 backdrop-blur-sm px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-3 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-white font-medium">
              ¿Te gusta lo que ves?
            </p>
            <p className="text-gray-300 text-sm">
              Únete a miles de usuarios satisfechos
            </p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
              Ver más
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm">
              Compartir
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Optimization Notice */}
      <div className="sm:hidden bg-yellow-500/20 backdrop-blur-sm px-4 py-2 border-t border-yellow-500/30">
        <p className="text-yellow-200 text-xs text-center">
          💡 Gira tu dispositivo para una mejor experiencia
        </p>
      </div>
    </div>
  );
};

export default PromoVideo;