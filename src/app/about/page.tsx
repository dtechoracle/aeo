"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroSlides = [
    {
      image: "/Images/AeoFooter.jpg",
      title: "ABOUT ANENDLESSOCEAN",
      subtitle: "A gospel artist passionate about reaching the next generation through worship music"
    },
    {
      image: "/Images/AeoFooter2.jpg",
      title: "MY MISSION",
      subtitle: "Using music to share the gospel and inspire revival in hearts"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const bibleVerses = [
    {
      verse: "Psalm 96:1-2",
      text: "Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name; proclaim his salvation day after day.",
      highlight: "Sing to the Lord a new song"
    },
    {
      verse: "Colossians 3:16",
      text: "Let the message of Christ dwell among you richly as you teach and admonish one another with all wisdom through psalms, hymns, and songs from the Spirit, singing to God with gratitude in your hearts.",
      highlight: "singing to God with gratitude in your hearts"
    },
    {
      verse: "Psalm 150:6",
      text: "Let everything that has breath praise the Lord. Praise the Lord.",
      highlight: "Let everything that has breath praise the Lord"
    },
    {
      verse: "Ephesians 5:19",
      text: "Speaking to one another with psalms, hymns, and songs from the Spirit. Sing and make music from your heart to the Lord.",
      highlight: "Sing and make music from your heart to the Lord"
    }
  ];

  return (
    <div className="font-mono min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-20 flex items-center h-full px-4 sm:px-6 md:px-8 lg:px-16">
          <div className={`max-w-2xl text-white transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed animate-fade-in-delay">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-delay-2">
              <button className="bg-white text-black px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                My Story
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 font-semibold text-base md:text-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105">
                Listen to Music
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 transition-all duration-300 transform hover:scale-125 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            ></button>
          ))}
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                My Story
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                My journey as a gospel artist began with a simple desire to use the gift of music to glorify God and touch lives. What started as a passion for worship has grown into a calling to reach the next generation with the transformative power of gospel music.
              </p>
              <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
                Through my music, I strive to create worship experiences that break down barriers, heal hearts, and bring people closer to God. Every song is written with the intention of inspiring revival and transformation in the hearts of listeners.
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                My mission is to use the universal language of music to share the gospel message and create moments where people can encounter the presence of God.
              </p>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-blue-100 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <img src={"/Images/AeoSS.jpg"} alt="Screenshot of my music" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bible Verses Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              Scripture That Inspires My Music
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Bible verses that guide my ministry and inspire my worship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bibleVerses.map((verse, index) => (
              <div key={index} className="bg-blue-50 p-8 rounded-lg animate-slide-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-xl font-bold mb-4 text-blue-600">{verse.verse}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {verse.text}
                </p>
                <div className="bg-yellow-100 p-3 rounded transform hover:scale-105 transition-transform duration-300">
                  <p className="text-blue-800 font-semibold italic">
                    "{verse.highlight}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* My Impact Section */}
      <section className="py-12 md:py-20 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-900">
              My Ministry Impact
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              The difference my music is making in communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '0ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-count-up">50+</div>
              <p className="text-lg text-gray-600">Churches Reached</p>
            </div>
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '200ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-count-up">10K+</div>
              <p className="text-lg text-gray-600">Lives Touched</p>
            </div>
            <div className="text-center animate-slide-in-up" style={{ animationDelay: '400ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-count-up">100+</div>
              <p className="text-lg text-gray-600">Worship Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-blue-600">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white animate-fade-in">
            Join Me in This Mission
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Be part of the movement that's transforming lives through gospel music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <button className="bg-white text-blue-600 px-8 py-4 font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Listen to My Music
            </button>
            <button className="border-2 border-white text-white px-8 py-4 font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Book Me for an Event
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes fade-in-delay-2 {
          0% { opacity: 0; }
          75% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        @keyframes count-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }
        
        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1.5s ease-out;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 2s ease-out;
        }
        
        .animate-count-up {
          animation: count-up 1s ease-out;
        }
      `}</style>
    </div>
  );
} 