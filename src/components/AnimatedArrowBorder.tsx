'use client';

interface AnimatedArrowBorderProps {
  position?: 'left' | 'right' | 'center';
  className?: string;
}

export default function AnimatedArrowBorder({ position = 'left', className = '' }: AnimatedArrowBorderProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top border with animated arrows */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: '40px',
                animation: `arrowMove 2s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <i className="fa-solid fa-arrow-right text-secondary text-xs"></i>
            </div>
          ))}
        </div>
      </div>

      {/* Right border with animated arrows */}
      <div className="absolute top-0 right-0 bottom-0 w-1 bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                height: '40px',
                animation: `arrowMoveDown 2s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <i className="fa-solid fa-arrow-down text-secondary text-xs"></i>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom border with animated arrows */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                width: '40px',
                animation: `arrowMoveLeft 2s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <i className="fa-solid fa-arrow-left text-secondary text-xs"></i>
            </div>
          ))}
        </div>
      </div>

      {/* Left border with animated arrows */}
      <div className="absolute top-0 left-0 bottom-0 w-1 bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex flex-col">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0"
              style={{
                height: '40px',
                animation: `arrowMoveUp 2s linear infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <i className="fa-solid fa-arrow-up text-secondary text-xs"></i>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes arrowMove {
          0% {
            transform: translateX(-40px);
          }
          100% {
            transform: translateX(100%);
          }
        }
        @keyframes arrowMoveDown {
          0% {
            transform: translateY(-40px);
          }
          100% {
            transform: translateY(100%);
          }
        }
        @keyframes arrowMoveLeft {
          0% {
            transform: translateX(40px);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        @keyframes arrowMoveUp {
          0% {
            transform: translateY(40px);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  );
}

