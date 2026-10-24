import React, { useEffect, useRef } from 'react';

/**
 * MorphingBlobs - Organic, morphing SVG blob shapes
 * Creates a mesmerizing liquid-like animation using SVG filters and animated paths.
 */
export default function MorphingBlobs({ className = '' }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <svg className="absolute w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="morphing-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
          </filter>
          <linearGradient id="blob-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#452080" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#6B3FB5" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="blob-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFCA29" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#FFD54F" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="blob-grad-3" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#5E2EB0" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#452080" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <g filter="url(#morphing-goo)">
          {/* Blob 1 - Purple */}
          <path fill="url(#blob-grad-1)">
            <animate
              attributeName="d"
              dur="12s"
              repeatCount="indefinite"
              values="
                M400,300 C460,220 540,260 520,340 C500,420 440,460 380,420 C320,380 340,380 400,300;
                M420,280 C500,240 560,300 530,380 C500,460 420,480 360,430 C300,380 340,320 420,280;
                M390,310 C450,230 530,270 510,350 C490,430 430,470 370,430 C310,390 330,390 390,310;
                M400,300 C460,220 540,260 520,340 C500,420 440,460 380,420 C320,380 340,380 400,300
              "
            />
          </path>
          {/* Blob 2 - Amber */}
          <path fill="url(#blob-grad-2)">
            <animate
              attributeName="d"
              dur="15s"
              repeatCount="indefinite"
              values="
                M250,200 C310,140 380,160 370,230 C360,300 300,340 240,310 C180,280 190,260 250,200;
                M270,180 C340,130 400,170 380,250 C360,330 280,360 220,320 C160,280 200,230 270,180;
                M240,210 C300,150 370,180 360,250 C350,320 290,350 230,320 C170,290 180,270 240,210;
                M250,200 C310,140 380,160 370,230 C360,300 300,340 240,310 C180,280 190,260 250,200
              "
            />
          </path>
          {/* Blob 3 - Violet */}
          <path fill="url(#blob-grad-3)">
            <animate
              attributeName="d"
              dur="18s"
              repeatCount="indefinite"
              values="
                M600,400 C660,340 720,370 710,440 C700,510 640,540 580,510 C520,480 540,460 600,400;
                M620,380 C690,330 740,380 720,460 C700,540 630,560 570,520 C510,480 550,430 620,380;
                M590,410 C650,350 720,380 700,450 C680,520 620,550 570,520 C520,490 530,470 590,410;
                M600,400 C660,340 720,370 710,440 C700,510 640,540 580,510 C520,480 540,460 600,400
              "
            />
          </path>
        </g>
      </svg>
    </div>
  );
}
