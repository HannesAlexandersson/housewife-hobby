"use client";

import { GalleryImage } from "@/app/gallery/gallery.types";
import { Button } from "@/components/Button/Button";
import Image from "next/image";
import { useState } from "react";

const GalleryDisplay = ({ imageData }: { imageData: GalleryImage[] }) => {
  // 1. Collect & dedupe all categories
  const categories = [...new Set(imageData.flatMap((img) => img.category))];

  // 2. Track selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 3. Filter images by selected category
  const filteredImages =
    selectedCategory === null
      ? imageData
      : imageData.filter((img) => img.category.includes(selectedCategory));

  return (
    <div>
      <section className="section-contain w-full h-auto my-16 md:my-32 ">
        {/* Category buttons */}
        <div className="bg-white z-10 frosted-glass border border-gray-300 shadow-lg px-8 py-12 rounded-lg">
          <div className="flex flex-col md:flex-row gap-5 w-auto h-auto flex-wrap max-w-[1200px] mx-auto justify-center">
            <Button
              variant={
                selectedCategory === null ? "categoryOutline" : "category"
              }
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
            {categories.map((cat, idx) => (
              <Button
                key={idx}
                variant={
                  selectedCategory === cat ? "categoryOutline" : "category"
                }
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>
      <section className="section-contain w-full h-auto my-16 md:my-32">
        <div className="bg-white z-10 frosted-glass border border-gray-300 shadow-lg px-8 py-12 rounded-lg">
          {/* Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <div
                key={img.sys.id}
                className="bg-white rounded-xl overflow-hidden shadow-md flex flex-col hover:scale-[1.02] hover:shadow-xl hover-transition-shadow transition-transform duration-200 cursor-grab"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={img.image.url}
                    alt={img.image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{img.title}</h3>
                  <p className="text-sm text-gray-600">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default GalleryDisplay;
