/* ── Bringo Design Tokens ──────────────────────────────────────────────────
   Shared Tailwind config + global CSS.
   Usage: <script src="bringo-tokens.js"></script>  (after Tailwind CDN)
   ───────────────────────────────────────────────────────────────────────── */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        olive: {
          50:  '#f5f7f0',
          100: '#e8edda',
          200: '#d2dbb8',  /* ★ primary */
          300: '#b5c48e',
          400: '#97ac66',
          500: '#7a9248',
          600: '#607538',
          700: '#4a5a2b',
          800: '#364220',
          900: '#252e16',
        },
        gold: {
          50:  '#fdf6f0',
          100: '#f7e6d8',
          200: '#edcaad',
          300: '#d9a67c',  /* ★ accent — réz/bronz */
          400: '#c4834f',
          500: '#a8622f',  /* fémes bronz */
          600: '#8b4e22',
          700: '#6e3b18',
          800: '#4f2a10',
          900: '#321a09',
        },
        cream: {
          50:  '#fefcf8',
          100: '#fdf7ee',
          200: '#f8ecda',
          300: '#f0dbbf',  /* ★ háttér */
          400: '#e5c89a',
        },
        blush: {
          100: '#fce8e8',
          200: '#f7cdcd',
          300: '#edaaaa',
          400: '#df8080',
        },
      },

      fontFamily: {
        display:   ['"Playfair Display"', 'Georgia', 'serif'],
        body:      ['"DM Sans"', 'system-ui', 'sans-serif'],
        signature: ['"CalendaryHands"', 'cursive'],
      },

      fontSize: {
        'signature':      ['clamp(2.8rem, 6vw, 5rem)', { lineHeight: '1.1' }],
        'hero':           ['clamp(2.5rem, 5vw, 4rem)',  { lineHeight: '1.15' }],
        'signature-logo': ['2rem',                      { lineHeight: '1.2' }],
      },

      spacing: {
        'hero-top': 'clamp(1rem, 4vw, 3rem)',
        'section-gap': 'clamp(1.5rem, 3vw, 2rem)',
        'section-pad': 'clamp(2.5rem, 5vw, 4rem)',
      },

      borderRadius: {
        card: '1.25rem',
        pill: '9999px',
      },

      boxShadow: {
        soft: '0 4px 24px 0 rgba(96,117,56,0.08)',
        card: '0 8px 40px 0 rgba(96,117,56,0.12)',
        gold: '0 4px 20px 0 rgba(168,98,47,0.30)',
      },

      backgroundImage: {
        'gold-metal':   'linear-gradient(135deg, #e8c07a 0%, #c4834f 40%, #8b4e22 100%)',
        'gold-metal-h': 'linear-gradient(90deg,  #e8c07a 0%, #c4834f 50%, #a8622f 100%)',
        'gold-btn':     'linear-gradient(135deg, #d9a67c 0%, #a8622f 100%)',
      },
    },
  },
};

/* Inject shared CSS into <head> */
(function () {
  const style = document.createElement('style');
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }

    @font-face {
      font-family: 'CalendaryHands';
      src: url('fonts/CalendaryHands.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
    }

    .text-gold-gradient {
      background: linear-gradient(90deg, #e8c07a 0%, #c4834f 50%, #8b4e22 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blend-multiply {
      mix-blend-mode: multiply;
    }

    body > * {
      position: relative;
      z-index: 1;
    }

    .divider {
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 64rem;
      margin-left: auto;
      margin-right: auto;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    @media (min-width: 768px) {
      .divider {
        padding-left: 4rem;
        padding-right: 4rem;
      }
    }
    .divider::before,
    .divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background-color: #e5c89a;
    }

    .text-gold-gradient-v {
      background: linear-gradient(160deg, #f0d090 0%, #c4834f 45%, #7e4a1e 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .card-gold-border {
      padding: 1px;
      border-radius: 1.25rem;
      background: linear-gradient(135deg, #e8c07a 0%, #c4834f 40%, #8b4e22 100%);
      box-shadow: 0 4px 20px 0 rgba(168,98,47,0.30);
    }
    .card-gold-border > div {
      border-radius: calc(1.25rem - 1px);
    }

    .service-card {
      transition: transform 0.22s ease-out, box-shadow 0.22s ease-out;
    }
    .service-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 32px 0 rgba(168, 98, 47, 0.16);
    }
  `;
  document.head.appendChild(style);
})();
