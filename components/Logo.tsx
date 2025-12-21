export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* M letter with gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      
      {/* Background circle */}
      <circle cx="50" cy="50" r="48" fill="url(#logoGradient)" opacity="0.1" />
      
      {/* M Letter */}
      <path
        d="M25 70V30L37.5 45L50 30L62.5 45L75 30V70H67V45L50 60L33 45V70H25Z"
        fill="url(#logoGradient)"
        strokeWidth="2"
      />
      
      {/* Accent dot */}
      <circle cx="82" cy="32" r="4" fill="#EC4899" />
    </svg>
  );
}
