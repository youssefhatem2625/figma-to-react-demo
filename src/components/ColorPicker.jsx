import React from 'react';
import { Check } from 'lucide-react';

export const ColorPicker = ({ colors, selected, onSelect }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-800">Color</span>
        <span className="text-sm text-zinc-500">{colors[selected].name}</span>
      </div>
      <div className="flex gap-3">
        {colors.map((color, i) => (
          <button
            key={i}
            onClick={() => onSelect(i)}
            title={color.name}
            className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
              i === selected ? 'border-zinc-900 scale-110' : 'border-transparent hover:scale-105'
            }`}
            style={{ backgroundColor: color.hex }}
          >
            {i === selected && (
              <Check
                className="w-4 h-4"
                style={{ color: color.hex === '#f5f5f0' ? '#1a1a1a' : '#ffffff' }}
                strokeWidth={3}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};
