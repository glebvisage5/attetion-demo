import { useEffect } from "react";
import { useAttention } from "../attentionStore";


export default function CenterStatsMessage() {
    const { markRead } = useAttention();

    useEffect(() => {
        markRead("/center/stats/message");
    }, [markRead]);


    return (
        <div className="section stack">
            <div className="crumbs">Center / Stats / Message</div>
            <h2>Сообщение</h2>
            <p>Вы прочли уведомление. Факт посещения данного сообщения снимает точки внимания на всех уровнях (message → stats → center), потому что они считаются по префиксам.</p>
        </div>
    );
}