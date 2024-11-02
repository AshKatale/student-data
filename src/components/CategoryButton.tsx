'use client'

import React, { useState } from "react";

type CategoryButtonProps = {
    setFilter: (filter: string) => void;
};

export default function CategoryButton({ setFilter }: CategoryButtonProps) {
    const [filter, setLocalFilter] = useState('all');

    const handleFilterChange = (newFilter: string) => {
        setLocalFilter(newFilter);
        setFilter(newFilter);
    };

    return (
        <div className="flex space-x-2">
            <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 py-2 rounded-full font-semibold ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
                All
            </button>
            <button
                onClick={() => handleFilterChange('Present')}
                className={`px-4 py-2 rounded-full font-semibold ${filter === 'Present' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
                Present
            </button>
            <button
                onClick={() => handleFilterChange('Absent')}
                className={`px-4 py-2 rounded-full font-semibold ${filter === 'Absent' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
            >
                Absent
            </button>
        </div>
    );
}
