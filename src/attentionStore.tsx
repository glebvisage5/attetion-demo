import { createContext, useContext } from "react";

export type AttentionAPI = {
    activeLeaves: Set<string>;
    hasAttention: (path: string) => boolean;
    markUnread: (leafPath: string) => void;
    markRead: (leafPath: string) => void;
    reset: () => void;
};

export const AttentionCtx = createContext<AttentionAPI | null>(null);

export const useAttention = (): AttentionAPI => {
    const ctx = useContext(AttentionCtx);
    if (!ctx) throw new Error("the useAttention function should be used in the AttentionProvider");
    return ctx;
};
