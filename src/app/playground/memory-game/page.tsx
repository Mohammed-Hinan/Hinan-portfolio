"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

// Card interface
interface Card {
  id: number;
  src: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export default function MemoryGamePage() {
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [timer, setTimer] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (gameStarted && !gameWon) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [gameStarted, gameWon]);

  // Check for win condition
  useEffect(() => {
    if (cards.length > 0 && cards.every(card => card.isMatched)) {
      setGameWon(true);
      triggerConfetti();
    }
  }, [cards]);

  const initializeGame = async () => {
    setIsLoading(true);
    setGameWon(false);
    setMoves(0);
    setTimer(0);
    setFlippedCards([]);
    setGameStarted(false);

    // Image paths (assuming these exist in your public/images/game folder)
    const imagePaths = [
      '/images/game/card1.jpg',
      '/images/game/card2.jpg',
      '/images/game/card3.jpg',
      '/images/game/card4.jpg',
      '/images/game/card5.jpg',
      '/images/game/card6.jpg',
      '/images/game/card7.jpg',
      '/images/game/card8.jpg',
    ];

    // Create pairs of cards
    let cardPairs: Card[] = [];
    imagePaths.forEach((path, index) => {
      // Create two cards with the same image
      cardPairs.push({
        id: index * 2,
        src: path,
        isFlipped: false,
        isMatched: false
      });
      cardPairs.push({
        id: index * 2 + 1,
        src: path,
        isFlipped: false,
        isMatched: false
      });
    });

    // Shuffle cards
    cardPairs = shuffleCards(cardPairs);
    setCards(cardPairs);
    setIsLoading(false);
  };

  const shuffleCards = (cardArray: Card[]) => {
    const shuffled = [...cardArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (id: number) => {
    // Start the game on first card click
    if (!gameStarted) {
      setGameStarted(true);
    }

    // Ignore clicks if already two cards flipped or clicking on matched/flipped card
    if (
      flippedCards.length === 2 || 
      flippedCards.includes(id) || 
      cards.find(card => card.id === id)?.isMatched
    ) {
      return;
    }

    // Flip the card
    const newCards = cards.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    );
    setCards(newCards);

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, id];
    setFlippedCards(newFlippedCards);

    // If two cards are flipped, check for match
    if (newFlippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      
      const firstCardId = newFlippedCards[0];
      const secondCardId = newFlippedCards[1];
      
      const firstCard = newCards.find(card => card.id === firstCardId);
      const secondCard = newCards.find(card => card.id === secondCardId);
      
      if (firstCard && secondCard && firstCard.src === secondCard.src) {
        // Match found
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(card => 
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, isMatched: true }
                : card
            )
          );
          setFlippedCards([]);
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          setCards(prevCards => 
            prevCards.map(card => 
              card.id === firstCardId || card.id === secondCardId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className="pt-8 px-4 pb-12 ml-16 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 flex items-center">
          <Link
            href="/playground"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Playground</span>
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Memory Game</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Test your memory by matching pairs of cards. Try to complete the game in as few moves as possible!
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-md">
                <span className="font-medium">Moves: {moves}</span>
              </div>
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-md">
                <span className="font-medium">Time: {formatTime(timer)}</span>
              </div>
            </div>
            <button 
              onClick={initializeGame}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
              Restart
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center h-[400px]">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {cards.map(card => (
                <div 
                  key={card.id}
                  onClick={() => handleCardClick(card.id)}
                  className={`
                    relative h-32 sm:h-36 md:h-40 rounded-lg cursor-pointer transition-all duration-300
                    ${card.isMatched ? 'opacity-80' : ''}
                    hover:scale-105
                  `}
                >
                  {/* Card back (question mark) */}
                  <div className={`
                    absolute w-full h-full rounded-lg transition-all duration-300
                    ${(card.isFlipped || card.isMatched) ? 'opacity-0' : 'opacity-100'}
                    bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center
                    border-2 border-white/20
                  `}>
                    <span className="text-4xl text-white">?</span>
                  </div>
                  
                  {/* Card front (image) */}
                  <div className={`
                    absolute w-full h-full rounded-lg transition-all duration-300
                    ${(card.isFlipped || card.isMatched) ? 'opacity-100' : 'opacity-0'}
                    bg-white p-2
                  `}>
                    <div className="relative w-full h-full">
                      <Image
                        src={card.src}
                        alt="Card"
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {gameWon && (
          <div className="text-center bg-green-100 dark:bg-green-900/30 p-6 rounded-lg border border-green-200 dark:border-green-900 animate-bounce">
            <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-2">Congratulations!</h2>
            <p className="text-green-700 dark:text-green-400">
              You completed the game in {moves} moves and {formatTime(timer)}!
            </p>
            <button 
              onClick={initializeGame}
              className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md transition-colors"
            >
              Play Again
            </button>
          </div>
        )}

        <div className="mt-12 bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">How to Play</h2>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>Click on any card to reveal its image</li>
            <li>Click on a second card to find a match</li>
            <li>If the cards match, they stay face up</li>
            <li>If they don't match, they flip back over</li>
            <li>The game is complete when all pairs are matched</li>
            <li>Try to finish with the fewest moves and fastest time!</li>
          </ul>
        </div>
      </div>
    </main>
  );
}