import { useEffect, useState } from "react";
import typeBitLogo from "@/assets/type-bit.jpg";

function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000;
    const startTime = performance.now();

    let animationFrame: number;

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);

      setProgress(percentage);

      if (percentage >= 100) {
        onComplete?.();
        return;
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [onComplete]);

  return (
    <div className="relative flex min-h-screen w-full select-none flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Dot Grid Background */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-40
          [background-image:radial-gradient(circle,_#000000_1px,_transparent_1px)]
          [background-size:24px_24px]
        "
      />

      {/* Top Left Blob */}
      <div
        className="
          pointer-events-none absolute
          -left-[12vw] -top-[16vh]
          h-[clamp(260px,38vw,680px)]
          w-[clamp(260px,38vw,680px)]
          rounded-full
          bg-primary/90
        "
      />

      {/* Bottom Right Blob */}
      <div
        className="
          pointer-events-none absolute
          -bottom-[16vh] -right-[12vw]
          h-[clamp(260px,38vw,680px)]
          w-[clamp(260px,38vw,680px)]
          rounded-full
          bg-primary/90
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10
          flex w-[min(90vw,520px)]
          flex-col items-center justify-center
          rounded-md border border-border
          bg-white/95
          px-8 py-10
          shadow-xl
          backdrop-blur-sm
        "
      >
        {/* Logo */}
        <img
          src={typeBitLogo}
          alt="Typing Sikho"
          draggable="false"
          className="
            pointer-events-none
            mb-6
            h-[clamp(110px,12vw,160px)]
            w-[clamp(110px,12vw,160px)]
            rounded-md
            object-contain
            shadow-lg
          "
        />

        {/* Title */}
        <h1
          className="
            bg-primary
            bg-[length:200%_auto]
            bg-clip-text
            text-center
            font-space-grotesk
            text-[clamp(1.7rem,2.5vw,2.2rem)]
            font-extrabold
            tracking-tight
            text-transparent
            animate-[shimmer_3s_ease-in-out_infinite]
          "
        >
          Typing Practice
        </h1>

        {/* Subtitle */}
        <p className="mt-2 max-w-sm text-center text-[clamp(0.9rem,1.3vw,1rem)] leading-relaxed text-slate-600">
          Practice typing, boost your speed and accuracy,
          <br />
          and enjoy typing in your favorite language.
        </p>

        {/* Loading */}
        <div className="mt-8 w-full max-w-xs">
          <div className="mb-2 flex items-center justify-between text-xs font-medium text-slate-500">
            <span>Loading...</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-2 w-full overflow-hidden rounded-full bg-background shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-black via-gray-700 to-black shadow-sm"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <p className="relative z-10 mt-8 text-sm text-gray-500">
        Developed By{" "}
        <a
          href="https://pickatoz.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary"
        >
          Pickatoz
        </a>
      </p>
    </div>
  );
}

export default SplashScreen;
