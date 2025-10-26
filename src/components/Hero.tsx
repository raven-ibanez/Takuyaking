import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-16 px-3 sm:px-4 overflow-hidden bg-gradient-to-b from-takuya-white to-takuya-cream">
      {/* Subtle floating elements - hidden on mobile */}
      <div className="absolute top-10 left-10 float-animation opacity-30 hidden sm:block">
        <div className="w-8 h-8 bg-takuya-red rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 float-animation opacity-20 hidden sm:block" style={{animationDelay: '1s'}}>
        <div className="w-6 h-6 bg-takuya-orange rounded-full"></div>
      </div>
      <div className="absolute bottom-20 left-20 float-animation opacity-25 hidden sm:block" style={{animationDelay: '2s'}}>
        <div className="w-4 h-4 bg-takuya-red rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10 px-2 sm:px-0">
        {/* Elegant Logo Display */}
        <div className="mb-6 sm:mb-8">
          <div className="inline-block relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-takuya-white rounded-full border-2 border-takuya-gray flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
              <div className="text-4xl sm:text-6xl opacity-60">🐙</div>
            </div>
            {/* Subtle Crown Badge */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 bg-takuya-red rounded-full flex items-center justify-center shadow-md border-2 border-takuya-white">
              <div className="text-white text-sm sm:text-lg">👑</div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-takuya-red mb-3 sm:mb-4 tracking-wide">
          TAKUYA KING
        </h1>
        
        {/* Subtitle */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-takuya-gray mb-3 sm:mb-4">
          Authentic Japanese Takoyaki
        </h2>
        
        {/* Description */}
        <p className="text-sm sm:text-lg text-takuya-gray mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
          Experience the king of takoyaki! Fresh octopus balls with traditional Japanese flavors, 
          crispy on the outside, tender on the inside. Made with love in Banlic Calamba Laguna.
        </p>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
          <a 
            href="#menu"
            className="takuya-button text-sm sm:text-base px-6 py-3 w-full sm:w-auto touch-manipulation"
          >
            Explore Menu
          </a>
          <a 
            href="#takoyaki"
            className="bg-takuya-white text-takuya-red px-6 py-3 rounded-lg hover:bg-takuya-light-gray transition-all duration-300 font-medium text-sm sm:text-base border border-takuya-gray w-full sm:w-auto touch-manipulation"
          >
            Try Takoyaki
          </a>
        </div>

        {/* Subtle Decorative Elements */}
        <div className="mt-6 sm:mt-8 flex justify-center space-x-3 sm:space-x-4 opacity-40">
          <div className="w-1.5 h-2 sm:w-2 sm:h-3 bg-takuya-red rounded-full"></div>
          <div className="w-1.5 h-2 sm:w-2 sm:h-3 bg-takuya-orange rounded-full"></div>
          <div className="w-1.5 h-2 sm:w-2 sm:h-3 bg-takuya-red rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;