import { FC, useEffect, useState } from "react";

interface SubtitlesSidebarProps {
  latestMessage: string; // Pass AI text responses here
}

export const SubtitlesSidebar: FC<SubtitlesSidebarProps> = ({ latestMessage }) => {
  const [subtitles, setSubtitles] = useState<string[]>([]);

  useEffect(() => {
    if (latestMessage) {
      const sentences = latestMessage.match(/[^.!?]+[.!?]/g) || [latestMessage];
      setSubtitles((prev) => [...prev, ...sentences]);
    }
  }, [latestMessage]);

  return (
    <aside className="fixed right-0 top-0 w-64 h-full bg-black/80 border-l border-cyan-400 overflow-y-auto p-3 text-cyan-300 font-mono text-sm">
      <h2 className="text-cyan-400 font-bold mb-2">AI Subtitles</h2>
      {subtitles.map((line, i) => (
        <p key={i} className="mb-1 hover:text-white transition-colors">
          {line}
        </p>
      ))}
    </aside>
  );
};
