import React, { useCallback, useMemo, useState } from "react";
import { AttentionCtx, type AttentionAPI } from "./attentionStore";

const AttentionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeLeaves, setLeaves] = useState<Set<string>>(
        new Set(["/center/2/message"])
    );

    const hasAttention = useCallback(
        (path: string) => {
            for (const leaf of activeLeaves) {
                if (leaf === path || leaf.startsWith(path + "/")) return true;
            }
            return false;
        },
        [activeLeaves]
    );

    const markUnread = useCallback((leafPath: string) => {setLeaves((prev) => new Set(prev).add(leafPath))}, []);

    const markRead = useCallback((leafPath: string) => {
        setLeaves((prev) => {
            const next = new Set(prev);
            next.delete(leafPath);
            return next;
        });
    }, []);

    const reset = useCallback(() => setLeaves(new Set()), []);

    const value = useMemo<AttentionAPI>(() => ({ activeLeaves, hasAttention, markUnread, markRead, reset }),
        [activeLeaves, hasAttention, markUnread, markRead, reset]
    );

    return <AttentionCtx.Provider value={value}>{children}</AttentionCtx.Provider>;
};

export default AttentionProvider;