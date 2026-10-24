import React from 'react';

export const SizePicker = ({ sizes, outOfStock, selected, onSelect }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-800">Size (EU)</span>
        <button className="text-sm text-zinc-500 underline underline-offset-2 hover:text-zinc-900">
          Size Guide
        </button>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {sizes.map((size) => {
          const isOut = outOfStock.includes(size);
          const isSelected = selected === size;
          return (
            <button
              key={size}
              onClick={() => !isOut && onSelect(size)}
              disabled={isOut}
              className={`h-11 rounded-xl text-sm font-medium border transition-all relative ${
                isOut
                  ? 'border-zinc-200 text-zinc-300 cursor-not-allowed bg-zinc-50'
                  : isSelected
                  ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm'
                  : 'border-zinc-200 text-zinc-700 hover:border-zinc-400 bg-white'
              }`}
            >
              {size}
              {isOut && (
                <span className="absolute inset-x-0 top-1/2 h-px bg-zinc-200 -rotate-12 mx-2" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
