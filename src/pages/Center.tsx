import { LinkWithDot } from "../LinkWithDot";
import { useAttention } from "../attentionStore";


export default function Center() {
    const { markUnread, reset, activeLeaves } = useAttention();

    return (
        <div className="section stack">
            <h2>Center</h2>
            <div className="row"><LinkWithDot to="/center/stats" className="btn" dotPath="/center/stats">Перейти в Stats</LinkWithDot></div>
            <div className="stack">
                <h3>Демо-кнопки</h3>
                <div className="row">
                    <button className="btn" onClick={() => markUnread("/center/stats/message")}>Создать новое сообщение (путь /center/stats/message)</button>
                    <button className="btn" onClick={reset}>Сбросить все точки</button>
                </div>
                <div>Активные листы: {Array.from(activeLeaves).join(", ") || "нет"}</div>
            </div>
        </div>
    );
}