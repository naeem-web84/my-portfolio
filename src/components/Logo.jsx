import React from 'react';
import { useNavigate } from 'react-router';

export default function Logo() {
  const navigate = useNavigate();

  return (
    <div
      className="flex items-center gap-0 cursor-pointer"
      onClick={() => navigate('/letsDiscuss')}
    >
      <svg
        className="w-9 h-9"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 80V20C20 18 22.5 17.5 23.5 19L76 78C77 79.5 75 82 73 81L26.5 34.5C25.5 33.5 24 34.2 24 35.5V80"
          stroke="#64da91"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="ml-[-8px] text-lg font-semibold tracking-tight text-transparent bg-gradient-to-r from-[#64da91] via-[#A9A9A9] to-[#64da91] bg-[200%] bg-clip-text animate-gradient-x font-urbanist">
        Naeem
      </span>
    </div>
  );
}
