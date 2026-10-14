"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Arrows.module.css"

interface ArrowsProps {
    onPrevious: () => void;
    onNext: () => void;
    showPrevious: boolean;
    showNext: boolean;
}

export default function Arrows({
    onPrevious,
    onNext,
    showPrevious,
    showNext,
}: ArrowsProps) {
    return (
        <div className= {styles.carouselContainer}>
            <div className= {styles.carouselArrows}>
                {showPrevious && (
                    <button type="button" className={`${styles.bottonArrow} ${styles.arrowPrevious}`} onClick={(e) => {e.stopPropagation(); onPrevious();}} aria-label="Slide anterior">
                        <ChevronLeft strokeWidth={1}/>
                        <ChevronLeft strokeWidth={1}/>
                        <ChevronLeft strokeWidth={1}/>
                    </button>
                )}

                {showNext && (
                    <button type="button" className={`${styles.bottonArrow} ${styles.arrowNext}`} onClick={(e) => {e.stopPropagation(); onNext();}} aria-label="Slide siguiente">
                        <ChevronRight strokeWidth={1}/>
                        <ChevronRight strokeWidth={1}/>
                        <ChevronRight strokeWidth={1}/>
                    </button>
                )}
            </div>
        </div>
    );
}