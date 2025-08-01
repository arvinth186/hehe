import React, { useState } from 'react';

function App() {
  const [currentNoIndex, setCurrentNoIndex] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [showCatImage, setShowCatImage] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  const noOptions = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give me a chance!",
    "Don't be so cold!",
    "Change your mind?",
    "Please?",
    "Pretty please?",
    "With a cherry on top?",
    "You're breaking my heart!",
    "What if I cry?",
    "I'll be good!",
    "Just one date?",
    "You know you want to!",
    "The stars are aligned!",
    "Destiny is calling!",
    "OK, what about coffee?",
    "Just think about it!",
    "You're missing out!",
    "I promise I'm fun!",
    "Trust me!",
    "Life is short!",
    "YOLO!",
    "Please please please?",
    "I'm running out of options!",
    "You're gonna make me cry!",
    "This is my final form!",
    "I can't take rejection!",
    "My heart can't handle this",
    "You're really testing me",
    "I'll do anything!",
    "Name your price!",
    "I'll even do the dishes!",
    "Come on, live a little!",
    "What's the worst that could happen?",
    "Just say yes already!",
    "Fine, you win... kidding!",
    "The button is getting smaller...",
    "Seriously, just click yes",
    "This could go on forever",
    "I'm not giving up!",
    "Yes is inevitable!",
    "Resistance is futile!",
    "Just... please?"
  ];

  const catImages = [
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1170986/pexels-photo-1170986.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/774731/pexels-photo-774731.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2071882/pexels-photo-2071882.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1183434/pexels-photo-1183434.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1314550/pexels-photo-1314550.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1056251/pexels-photo-1056251.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1741206/pexels-photo-1741206.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  const handleNoClick = () => {
    if (currentNoIndex < noOptions.length - 1) {
      setShowCatImage(true);
      setCurrentCatIndex(currentNoIndex % catImages.length);
      setCurrentNoIndex(currentNoIndex + 1);
      // Make Yes button bigger with each No click
      setYesButtonSize(prev => Math.min(prev + 0.1, 2));
      
      // Hide cat image after 2 seconds
      setTimeout(() => {
        setShowCatImage(false);
      }, 2000);
    }
  };

  const handleYesClick = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Animated success cats */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">😸</div>
          <div className="absolute top-20 right-20 text-5xl animate-pulse">😻</div>
          <div className="absolute bottom-32 left-32 text-4xl animate-spin">🐱</div>
          <div className="absolute bottom-20 right-32 text-6xl animate-bounce">😺</div>
          <div className="absolute top-1/2 left-20 text-3xl animate-pulse">🐈</div>
          <div className="absolute top-1/3 right-10 text-5xl animate-bounce">😽</div>
        </div>
        
        <div className="text-center animate-bounce">
          <div className="text-8xl mb-8 animate-pulse">😻 🎉 😻</div>
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            PURR-FECT!!!
          </h1>
          <p className="text-2xl text-white mb-8 drop-shadow-md">
            I knew you'd come around, human! 😸 ✨
          </p>
          <div className="flex justify-center space-x-4 text-6xl animate-bounce">
            <span>🐾</span>
            <span>💕</span>
            <span>🐾</span>
          </div>
          <p className="text-xl text-white mt-8 opacity-90">
            Get ready for the most purr-fect date ever! 😻 💕
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="max-w-2xl w-full">
        {/* Floating cats animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-3xl animate-bounce">😸</div>
          <div className="absolute top-40 right-20 text-2xl animate-pulse">😻</div>
          <div className="absolute bottom-32 left-20 text-4xl animate-spin">🐱</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-bounce">😺</div>
          <div className="absolute top-1/3 left-1/4 text-2xl animate-pulse">🐈</div>
          <div className="absolute bottom-1/3 right-1/4 text-3xl animate-bounce">😽</div>
          <div className="absolute top-1/2 right-1/3 text-2xl animate-spin">🙀</div>
          <div className="absolute bottom-1/2 left-1/3 text-4xl animate-pulse">😿</div>
          <div className="absolute top-10 right-1/2 text-2xl animate-bounce">🐾</div>
          <div className="absolute bottom-10 left-1/2 text-3xl animate-pulse">🐾</div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-white/20">
          {/* Cat image popup */}
          {showCatImage && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fade-in">
              <div className="bg-white rounded-2xl p-6 max-w-md mx-4 animate-bounce">
                <img 
                  src={catImages[currentCatIndex]} 
                  alt="Sad cat" 
                  className="w-full h-64 object-cover rounded-xl mb-4"
                />
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  This cat is sad you said no! 😿
                </p>
                <p className="text-sm text-gray-600">
                  Maybe reconsider? 🥺
                </p>
              </div>
            </div>
          )}

          <div className="mb-8">
            <div className="text-6xl mb-6 animate-bounce">😻 💕 😻</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Will you go on a date with me? 😸
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              I promise it'll be purr-fectly amazing! 😻 ✨
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={handleYesClick}
              style={{ 
                transform: `scale(${yesButtonSize})`,
                transition: 'transform 0.3s ease'
              }}
              className="bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 min-w-[120px] border-2 border-green-300"
            >
              Yes! 😻 💖
            </button>

            <button
              onClick={handleNoClick}
              className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 min-w-[120px] text-sm border-2 border-gray-300"
              style={{
                transform: `scale(${Math.max(0.3, 1 - currentNoIndex * 0.02)})`,
                opacity: Math.max(0.3, 1 - currentNoIndex * 0.02)
              }}
            >
              {noOptions[currentNoIndex]}
            </button>
          </div>

          {currentNoIndex > 5 && (
            <div className="mt-8 text-sm text-gray-500 animate-pulse">
              The "No" button is getting weaker... I'm persistent! 😸
            </div>
          )}

          {currentNoIndex > 15 && (
            <div className="mt-4 text-xs text-gray-400">
              Attempts: {currentNoIndex + 1} | Persistence Level: Maximum 😹 💪
            </div>
          )}

          {currentNoIndex > 25 && (
            <div className="mt-4 p-4 bg-pink-100 rounded-lg border border-pink-300">
              <p className="text-pink-800 text-sm">
                😸 <strong>Pro tip:</strong> The "Yes" button is looking pretty good right about meow... 😻
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Made with 💕 and a lot of determination 😸
        </div>
      </div>
    </div>
  );
}

export default App;