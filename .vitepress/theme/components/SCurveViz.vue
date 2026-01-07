<template>
  <div style="padding: 1rem;">
    <svg viewBox="0 0 400 280" style="width: 100%; max-width: 500px; display: block; margin: 0 auto;">
      <defs>
        <linearGradient id="pvGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#667eea" stop-opacity="1" />
          <stop offset="100%" stop-color="#764ba2" stop-opacity="1" />
        </linearGradient>
        <linearGradient id="evGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#11998e" stop-opacity="1" />
          <stop offset="100%" stop-color="#38ef7d" stop-opacity="1" />
        </linearGradient>
        <linearGradient id="acGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#f093fb" stop-opacity="1" />
          <stop offset="100%" stop-color="#f5576c" stop-opacity="1" />
        </linearGradient>
      </defs>
      
      <line x1="50" y1="230" x2="380" y2="230" stroke="var(--vp-c-text-2)" stroke-width="2" />
      <line x1="50" y1="230" x2="50" y2="30" stroke="var(--vp-c-text-2)" stroke-width="2" />
      
      <text x="215" y="260" fill="var(--vp-c-text-2)" font-size="12" text-anchor="middle">Time</text>
      <text x="25" y="130" fill="var(--vp-c-text-2)" font-size="12" text-anchor="middle" transform="rotate(-90, 25, 130)">Cumulative $</text>
      
      <line x1="50" y1="50" x2="370" y2="50" stroke="var(--vp-c-text-3)" stroke-width="1" stroke-dasharray="5,5" />
      <text x="55" y="45" fill="var(--vp-c-text-2)" font-size="11">BAC</text>
      
      <text x="50" y="250" fill="var(--vp-c-text-2)" font-size="10" text-anchor="middle">Start</text>
      <text x="370" y="250" fill="var(--vp-c-text-2)" font-size="10" text-anchor="middle">Finish</text>
      
      <path d="M50,230 Q120,200 180,150 T320,55 L370,50" fill="none" stroke="url(#pvGradient)" stroke-width="3" stroke-linecap="round" />
      <circle cx="370" cy="50" r="6" fill="#667eea" />
      
      <path d="M50,230 Q130,210 200,160 T330,75" fill="none" stroke="url(#evGradient)" stroke-width="3" stroke-linecap="round" />
      <circle cx="330" cy="75" r="6" fill="#11998e" />
      
      <path d="M50,230 Q110,190 170,130 T320,65" fill="none" stroke="url(#acGradient)" stroke-width="3" stroke-linecap="round" />
      <circle cx="320" cy="65" r="6" fill="#f5576c" />
      
      <rect x="260" y="170" width="120" height="55" rx="8" fill="var(--vp-c-bg-soft)" stroke="var(--vp-c-divider)" stroke-width="1" />
      <line x1="270" y1="185" x2="295" y2="185" stroke="url(#pvGradient)" stroke-width="3" />
      <text x="302" y="189" fill="var(--vp-c-text-1)" font-size="11">PV (Planned)</text>
      <line x1="270" y1="200" x2="295" y2="200" stroke="url(#evGradient)" stroke-width="3" />
      <text x="302" y="204" fill="var(--vp-c-text-1)" font-size="11">EV (Earned)</text>
      <line x1="270" y1="215" x2="295" y2="215" stroke="url(#acGradient)" stroke-width="3" />
      <text x="302" y="219" fill="var(--vp-c-text-1)" font-size="11">AC (Actual)</text>
    </svg>
    <div style="text-align: center; margin-top: 0.75rem; font-size: 0.85rem; color: var(--vp-c-text-2);">
      This example shows: <strong style="color: #f5576c;">Over budget</strong> (AC above EV) and <strong style="color: #11998e;">Behind schedule</strong> (EV below PV)
    </div>
  </div>
</template>
