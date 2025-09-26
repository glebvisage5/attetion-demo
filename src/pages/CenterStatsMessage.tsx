import { useEffect } from "react";
import { useAttention } from "../attentionStore";
import { useParams } from "react-router-dom";

export default function CenterStatsMessage() {
    const { id } = useParams<{ id: string }>();
    const { markRead } = useAttention();

    useEffect(() => {
        markRead(`/center/${id}/message`);
    }, [markRead, id]);

    return (
        <div className="section stack">
            <div className="crumbs">Center / {id} / Message</div>
            <h2>Сообщение для элемента {id}</h2>
            <p>Вы прочли уведомление. Факт посещения данного сообщения снимает точки внимания на всех уровнях (message → stats → center), потому что они считаются по префиксам.</p>
        </div>
    );
}
