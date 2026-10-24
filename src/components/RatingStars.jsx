import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating, reviewCount }) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < fullStars
                ? 'text-amber-400 fill-amber-400'
                : i === fullStars && hasHalf
                ? 'text-amber-400 fill-amber-200'
                : 'text-zinc-300 fill-zinc-100'
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-zinc-800">{rating}</span>
      <span className="text-sm text-zinc-500">({reviewCount.toLocaleString()} reviews)</span>
    </div>
  );
};
