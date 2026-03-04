"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (el?: HTMLElement) => void;
        createTweet: (
          id: string,
          el: HTMLElement,
          options?: Record<string, string>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export function TweetEmbed({ tweetUrl }: { tweetUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const tweetId = tweetUrl.split("/").pop()?.split("?")[0];

  useEffect(() => {
    if (!tweetId || !containerRef.current) return;

    const loadWidget = () => {
      if (window.twttr && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.twttr.widgets.createTweet(tweetId, containerRef.current, {
          theme: "dark",
          align: "center",
        });
      }
    };

    if (window.twttr) {
      loadWidget();
    } else {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = loadWidget;
      document.head.appendChild(script);
    }
  }, [tweetId]);

  if (!tweetId || tweetUrl === "https://x.com/SuperSisi") {
    return null;
  }

  return (
    <div ref={containerRef} className="min-h-[200px] flex items-center justify-center">
      <div className="shimmer rounded-xl w-full max-w-[550px] h-[280px]" />
    </div>
  );
}
