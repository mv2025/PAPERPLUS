export const tokens = {
  colors: {
    primary: {
      DEFAULT: '#C8A24D',
      hover: '#D8B56B',
      soft: '#F3E7C6',
    },
    background: {
      DEFAULT: '#0D0D0D',
      surface: '#171717',
      surfaceHover: '#222222',
    },
    text: {
      DEFAULT: '#FFFFFF',
      muted: '#A1A1AA',
    },
    status: {
      success: '#10B981',
      error: '#EF4444',
      warning: '#F59E0B',
      info: '#3B82F6',
    }
  },
  typography: {
    fonts: {
      sans: "'Inter', system-ui, sans-serif",
      heading: "'Outfit', system-ui, sans-serif",
    }
  },
  radius: {
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    glow: '0 0 15px rgba(200, 162, 77, 0.3)',
  },
  motion: {
    transition: {
      DEFAULT: '0.2s ease-in-out',
      slow: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  }
};
