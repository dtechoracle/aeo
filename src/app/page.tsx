"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [spotifyTracks, setSpotifyTracks] = useState([]);
  const [heroImages, setHeroImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const slides = [
    {
      image: "/Images/hero1.jpg",
      title: "REVIVAL THROUGH SONGS",
      subtitle: "Join AnEndlessOcean in powerful worship experiences that transform hearts"
    },
    {
      image: "/Images/hero2.jpg",
      title: "EMPOWERING THE NEXT GENERATION",
      subtitle: "Reaching teenage students across high schools with gospel music"
    },
    {
      image: "/Images/hero3.jpg",
      title: "LIVE WORSHIP EXPERIENCES",
      subtitle: "Experience the presence of God through anointed worship"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Fetch Spotify tracks from our secure API route
  useEffect(() => {
    const fetchSpotifyTracks = async () => {
      try {
        const response = await fetch('/api/spotify');
        const data = await response.json();

        if (data.success && data.tracks) {
          setSpotifyTracks(data.tracks);
          if (data.heroImages && data.heroImages.length > 0) {
            setHeroImages(data.heroImages);
          }
        } else {
          console.error('Spotify API error:', data.error);
          setSpotifyTracks([]);
        }
      } catch (error) {
        console.error('Error fetching Spotify tracks:', error);
        setSpotifyTracks([]);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyTracks();
  }, []);

  return (
    <div className="font-mono min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => {
          // Use Spotify album image if available, otherwise fallback to default
          const backgroundImage = heroImages.length > index ? heroImages[index] : slide.image;
          return (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            ></div>
          );
        })}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 flex items-center h-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button className="bg-white text-black px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg hover:bg-gray-100 transition-colors">
                Watch Latest
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-colors">
                Listen Now
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 transition-colors ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
            ></button>
          ))}
        </div>
      </section>

      {/* Songs Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Latest Songs
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Discover powerful worship songs that inspire and transform hearts
            </p>
          </div>

          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 md:space-x-6 pb-4 px-2">
                {loading ? (
                  // Loading skeleton
                  Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="flex-shrink-0 w-72 sm:w-80 bg-white border border-gray-200 p-3 sm:p-4">
                      <div className="w-full h-48 bg-gray-200 mb-3 animate-pulse"></div>
                      <div className="h-6 bg-gray-200 mb-2 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 mb-2 animate-pulse w-3/4"></div>
                      <div className="flex justify-between items-center mb-4">
                        <div className="h-3 bg-gray-200 animate-pulse w-12"></div>
                        <div className="h-3 bg-gray-200 animate-pulse w-16"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="flex-1 h-8 bg-gray-200 animate-pulse"></div>
                        <div className="w-10 h-8 bg-gray-200 animate-pulse"></div>
                      </div>
                    </div>
                  ))
                ) : (
                  // Display Spotify tracks or fallback data
                  (spotifyTracks.length > 0 ? spotifyTracks : [
                    { name: "Ocean of Grace", album: { name: "Endless Ocean" }, duration_ms: 272000, popularity: 85, external_urls: { spotify: "#" }, images: [] },
                    { name: "Waves of Mercy", album: { name: "Endless Ocean" }, duration_ms: 225000, popularity: 78, external_urls: { spotify: "#" }, images: [] },
                    { name: "Deeper Waters", album: { name: "Endless Ocean" }, duration_ms: 312000, popularity: 92, external_urls: { spotify: "#" }, images: [] },
                    { name: "Tide of Love", album: { name: "Generational Testimony" }, duration_ms: 258000, popularity: 65, external_urls: { spotify: "#" }, images: [] },
                    { name: "Flowing River", album: { name: "Generational Testimony" }, duration_ms: 238000, popularity: 73, external_urls: { spotify: "#" }, images: [] },
                    { name: "Still Waters", album: { name: "Generational Testimony" }, duration_ms: 285000, popularity: 69, external_urls: { spotify: "#" }, images: [] }
                  ]).map((track, index) => {
                    const formatDuration = (ms: number) => {
                      const minutes = Math.floor(ms / 60000);
                      const seconds = ((ms % 60000) / 1000).toFixed(0);
                      return `${minutes}:${seconds.padStart(2, '0')}`;
                    };

                    const formatPopularity = (popularity: number) => {
                      if (popularity > 80) return `${(popularity * 25000).toLocaleString()}`;
                      if (popularity > 60) return `${(popularity * 20000).toLocaleString()}`;
                      return `${(popularity * 15000).toLocaleString()}`;
                    };

                    return (
                      <div key={index} className="flex-shrink-0 w-72 sm:w-80 bg-white border border-gray-200 p-3 sm:p-4 hover:shadow-lg transition-shadow">
                        <div className="w-full h-48 bg-blue-100 mb-3 flex items-center justify-center overflow-hidden">
                          {(track.album as any)?.images?.[0]?.url ? (
                            <img
                              src={(track.album as any).images[0].url}
                              alt={track.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-3xl text-blue-600">♪</span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 truncate">{track.name}</h3>
                        <p className="text-gray-600 mb-2 truncate">{track.album?.name || 'Unknown Album'}</p>
                        <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                          <span>{formatDuration(track.duration_ms)}</span>
                          <span>{formatPopularity(track.popularity)} plays</span>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => window.open(track.external_urls?.spotify, '_blank')}
                            className="flex-1 bg-blue-600 text-white py-2 font-semibold hover:bg-blue-700 transition-colors"
                          >
                            Play on Spotify
                          </button>
                          <button className="px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors">
                            ♡
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Worship Videos Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Music Videos.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Watch the latest music videos from AnEndlessOcean.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "AnEndlessOcean - Gratitude (Live)",
                videoId: "LzAdpgIOzXI",
                views: "12K",
                duration: "4:15",
                thumbnail: "https://img.youtube.com/vi/LzAdpgIOzXI/maxresdefault.jpg"
              },
              {
                title: "AnEndlessOcean - Gratitude",
                videoId: "8IHfj29eAQs",
                views: "8.5K",
                duration: "3:48",
                thumbnail: "https://img.youtube.com/vi/8IHfj29eAQs/maxresdefault.jpg"
              },
              {
                title: "AnEndlessOcean - P&A",
                videoId: "EWFp4zBo73A",
                views: "5.2K",
                duration: "2:42",
                thumbnail: "https://img.youtube.com/vi/EWFp4zBo73A/maxresdefault.jpg"
              },
              {
                title: "AnEndlessOcean - Juba",
                videoId: "KlrcGDy0QNs",
                views: "7.8K",
                duration: "3:16",
                thumbnail: "https://img.youtube.com/vi/KlrcGDy0QNs/maxresdefault.jpg"
              }
            ].map((video, index) => (
              <div key={index} className="group cursor-pointer">
                <div
                  className="relative aspect-video mb-4 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank')}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center group-hover:bg-red-700 transition-colors shadow-lg">
                      <div className="w-0 h-0 border-l-6 border-l-white border-t-3 border-t-transparent border-b-3 border-b-transparent ml-1"></div>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 text-sm rounded">
                    {video.duration}
                  </div>

                  {/* YouTube logo */}
                  <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                    YOUTUBE
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{video.views} views</span>
                    <span>AnEndlessOcean</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 font-semibold hover:bg-blue-700 transition-colors">
              More Videos
            </button>
          </div>
        </div>
      </section>



      {/* Background Image Section for Footer */}
      <section className="relative">
        <div className="h-screen bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/Images/AeoFooter.jpg')" }}>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>
    </div>
  );
}