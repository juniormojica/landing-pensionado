import  { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, X, Home } from 'lucide-react';

const PromoVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [player, setPlayer] = useState(null);
  const videoContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Convertir URL de YouTube Shorts a formato embed
  const videoId = '6GhKAsFBtqI';

  // Cargar YouTube API
  useEffect(() => {
    // Cargar la API de YouTube si no está cargada
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = () => {
        initializePlayer();
      };
    } else {
      initializePlayer();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const initializePlayer = () => {
    const newPlayer = new window.YT.Player('youtube-player', {
      height: '100%',
      width: '100%',
      videoId: videoId,
      playerVars: {
        autoplay: 0,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        loop: 1,
        playlist: videoId,
        mute: 1,
        fs: 1,
        iv_load_policy: 3
      },
      events: {
        onReady: (event) => {
          setPlayer(event.target);
          setIsLoading(false);
        },
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            setIsPlaying(true);
          } else if (event.data === window.YT.PlayerState.PAUSED) {
            setIsPlaying(false);
          }
        }
      }
    });
  };

  const handlePlayPause = () => {
    if (player) {
      if (isPlaying) {
        player.pauseVideo();
        setIsPlaying(false);
      } else {
        player.playVideo();
        setIsPlaying(true);
      }
    }
  };

  const handleMuteToggle = () => {
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
    }
  };

  const handleFullscreen = () => {
    if (!isFullscreen) {
      if (videoContainerRef.current?.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if (videoContainerRef.current?.webkitRequestFullscreen) {
        videoContainerRef.current.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement || !!document.webkitFullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-slate-800 px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-green-500 p-2 rounded-xl">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Conoce tu futuro hogar
              </h2>
              <p className="text-gray-300 text-base">
                Descubre las comodidades de Pensión UPC
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center space-x-3 bg-green-500/20 px-4 py-2 rounded-full">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-semibold">TOUR VIRTUAL</span>
          </div>
        </div>
      </div>

      {/* Video Container */}
      <div 
        ref={videoContainerRef}
        className="relative aspect-video bg-gray-900 group cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => isPlaying && setShowControls(false)}
      >
        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 z-10">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-green-500 rounded-full animate-spin"></div>
              <p className="text-white text-sm">Cargando video...</p>
            </div>
          </div>
        )}

        {/* YouTube Player */}
        <div id="youtube-player" className="w-full h-full"></div>

        {/* Custom Controls Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'} pointer-events-none`}>
          <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-auto">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  disabled={!player}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-full p-4 transition-all duration-200 hover:scale-110 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6 ml-1" />
                  )}
                </button>

                <button
                  onClick={handleMuteToggle}
                  disabled={!player}
                  className="bg-gray-700/80 hover:bg-gray-600 disabled:bg-gray-500 disabled:cursor-not-allowed rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>

                <div className="text-sm text-gray-300">
                  {!player ? 'Cargando...' : isMuted ? 'Sin audio' : 'Con audio'}
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={handleFullscreen}
                  className="bg-gray-700/80 hover:bg-gray-600 rounded-full p-3 transition-all duration-200 hover:scale-110 backdrop-blur-sm"
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
        {!isPlaying && !isLoading && player && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 transition-opacity duration-300">
            <button
              onClick={handlePlayPause}
              className="bg-green-500 hover:bg-green-600 backdrop-blur-sm rounded-full p-8 transition-all duration-300 hover:scale-110 shadow-2xl"
            >
              <Play className="w-16 h-16 text-white ml-2" />
            </button>
          </div>
        )}

        {/* Audio Notice */}
        {player && (
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm">
            {isMuted ? (
              <span className="flex items-center space-x-2">
                <VolumeX className="w-4 h-4" />
                <span>Click para activar audio</span>
              </span>
            ) : (
              <span className="flex items-center space-x-2">
                <Volume2 className="w-4 h-4" />
                <span>Audio activado</span>
              </span>
            )}
          </div>
        )}
      </div>

    

      {/* Mobile Optimization Notice */}
      <div className="sm:hidden bg-green-50 px-6 py-4 border-t border-green-100">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
          <p className="text-green-700 text-sm font-medium">
            Gira tu dispositivo para una mejor experiencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromoVideo;