'use client';

import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

import { cn } from '@/lib/utils';

export const TypewriterEffect = ({
    words,
    className,
    cursorClassName
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    // split text inside of words into array of characters
    const wordsArray = words.map((word) => {
        return {
            ...word,
            text: word.text.split('')
        };
    });

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        if (isInView) {
            animate(
                'span',
                {
                    display: 'inline-block',
                    opacity: 1
                },
                {
                    duration: 0.3,
                    delay: stagger(0.1),
                    ease: 'easeInOut'
                }
            );
        }
    }, [isInView]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline">
                {wordsArray.map((word, idx) => {
                    return (
                        <div key={`word-${idx}`} className="inline-block">
                            {word.text.map((char, index) => (
                                <motion.span
                                    initial={{}}
                                    key={`char-${index}`}
                                    className={cn(`dark:text-white text-black opacity-0 hidden`, word.className)}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            &nbsp;
                        </div>
                    );
                })}
            </motion.div>
        );
    };
    return (
        <div className={cn('text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center', className)}>
            {renderWords()}
            <motion.span
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
                className={cn('inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-blue-500', cursorClassName)}
            ></motion.span>
        </div>
    );
};

export const TypewriterEffectSmooth = ({
    words,
    className,
    cursorClassName
}: {
    words: {
        text: string;
        className?: string;
    }[];
    className?: string;
    cursorClassName?: string;
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const typeSpeed = 50; // Typing speed in ms
    const deleteSpeed = 75; // Deleting speed in ms
    const pauseBeforeDelete = 1000; // Pause before deleting in ms
    const pauseBeforeNext = 500; // Pause before typing next word in ms

    useEffect(() => {
        if (isPaused) return;

        const currentWord = words[currentIndex].text;

        if (!deleting) {
            if (currentText.length < currentWord.length) {
                typingTimeoutRef.current = setTimeout(() => {
                    setCurrentText(currentWord.substring(0, currentText.length + 1));
                }, typeSpeed);
            } else {
                setIsPaused(true);
                setTimeout(() => {
                    setDeleting(true);
                    setIsPaused(false);
                }, pauseBeforeDelete);
            }
        } else {
            if (currentText.length > 0) {
                typingTimeoutRef.current = setTimeout(() => {
                    setCurrentText(currentText.substring(0, currentText.length - 1));
                }, deleteSpeed);
            } else {
                setIsPaused(true);
                setTimeout(() => {
                    setDeleting(false);
                    setCurrentIndex((currentIndex + 1) % words.length);
                    setIsPaused(false);
                }, pauseBeforeNext);
            }
        }

        return () => {
            if (typingTimeoutRef.current) {
                clearTimeout(typingTimeoutRef.current);
            }
        };
    }, [currentText, deleting, isPaused]);

    return (
        <div className={cn('flex space-x-1 my-6', className)}>
            <motion.div className="overflow-hidden pb-2">
                <div
                    className="lg:text:3xl text-xl font-bold xl:text-5xl"
                    style={{
                        whiteSpace: 'nowrap'
                    }}
                >
                    <span className={cn('gradient-text', words[currentIndex].className)}>{currentText}</span>
                </div>
            </motion.div>
            <motion.span
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: 'reverse'
                }}
                className={cn('block rounded-sm w-[4px] h-6 xl:h-12 bg-blue-500', cursorClassName)}
            ></motion.span>
        </div>
    );
};
