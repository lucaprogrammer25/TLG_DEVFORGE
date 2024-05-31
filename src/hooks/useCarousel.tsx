import { useState } from "react";

export function useCarousel(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(totalItems - itemsPerPage, 0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return {
    currentIndex,
    goToNext,
    goToPrev,
  };
}
