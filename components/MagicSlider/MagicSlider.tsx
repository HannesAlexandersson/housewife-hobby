"use client";

import { ShowcaseProps } from "@/app/page.types";
import { cn } from "@/utils/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Typography from "../Typography/Typography";

interface SliderProps {
  cardData: ShowcaseProps[];
  className?: string;
}

const MagicSlider = ({ cardData, className }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = cardData.length;

  const goTo = (direction: "left" | "right") => {
    setCurrentIndex((prev) =>
      direction === "left" ? (prev - 1 + total) % total : (prev + 1) % total
    );
  };

  return (
    <div
      className={cn(
        "relative mb-8 w-full flex flex-col items-center justify-center min-h-[400px]",
        className
      )}
    >
      {/* Arrow Buttons */}
      <button
        onClick={() => goTo("left")}
        className="bg-primaryAccent hover:bg-linkHoverClr absolute top-1/2 left-4 z-10 -translate-y-1/2 rounded-full p-2 shadow-md cursor-pointer"
      >
        <ChevronLeft color="white" />
      </button>
      <button
        onClick={() => goTo("right")}
        className="bg-primaryAccent hover:bg-linkHoverClr absolute top-1/2 right-4 z-10 -translate-y-1/2 rounded-full p-2 shadow-md cursor-pointer"
      >
        <ChevronRight color="white" />
      </button>

      {/* Fading Content */}
      <div className="w-full flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={cardData[currentIndex].sys.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[800px] flex justify-center"
          >
            <Image
              src={cardData[currentIndex].image.url}
              alt={cardData[currentIndex].image.title || "Showcase image"}
              width={600}
              height={400}
              className="object-cover rounded-lg shadow-lg"
            />

            <Typography variant="h2">{cardData[currentIndex].title}</Typography>
            <Typography variant="p">
              {cardData[currentIndex].beskrivning}
            </Typography>
            <Typography variant="p">
              {" "}
              {cardData[currentIndex].pris} SEK
            </Typography>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MagicSlider;
