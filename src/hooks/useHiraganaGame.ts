import { useState, useEffect, useCallback, useRef } from 'react';
import { hiraganaData } from '../data/hiragana';
import type { HiraganaChar } from '../data/hiragana';

export type GameMode = 'linear' | 'random';

export const useHiraganaGame = () => {
    const [mode, setMode] = useState<GameMode>('linear');
    const [deck, setDeck] = useState<HiraganaChar[]>([...hiraganaData]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [speed, setSpeed] = useState(3); // seconds

    // Refs for timer management to avoid stale closures
    const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Shuffle function
    const shuffleDeck = useCallback((data: HiraganaChar[]) => {
        const newDeck = [...data];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        return newDeck;
    }, []);

    // Initialize deck based on mode
    useEffect(() => {
        if (mode === 'random') {
            setDeck(shuffleDeck(hiraganaData));
        } else {
            setDeck([...hiraganaData]);
        }
        setCurrentIndex(0);
    }, [mode, shuffleDeck]);

    const nextCard = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = prev + 1;
            if (next >= deck.length) {
                // Loop back
                if (mode === 'random') {
                    // Re-shuffle on loop
                    setDeck(shuffleDeck(hiraganaData));
                }
                return 0;
            }
            return next;
        });
    }, [deck.length, mode, shuffleDeck]);

    const prevCard = useCallback(() => {
        setCurrentIndex((prev) => {
            const next = prev - 1;
            if (next < 0) return deck.length - 1;
            return next;
        });
    }, [deck.length]);

    const togglePlay = useCallback(() => {
        setIsPlaying((prev) => !prev);
    }, []);

    // Timer Logic
    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);

        if (isPlaying) {
            timerRef.current = setInterval(() => {
                nextCard();
            }, speed * 1000);
        }

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isPlaying, speed, nextCard]);

    return {
        currentCard: deck[currentIndex],
        currentIndex,
        totalCards: deck.length,
        mode,
        isPlaying,
        speed,
        actions: {
            setMode,
            setSpeed,
            nextCard,
            prevCard,
            togglePlay,
        },
    };
};
