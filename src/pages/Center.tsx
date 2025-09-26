import { LinkWithDot } from "../LinkWithDot";
import { useAttention } from "../attentionStore";

export default function Center() {
    const { markUnread, reset, activeLeaves } = useAttention();

    return (
        <div className="section stack">
            <h2>Center</h2>
            <div className="stack">
                <h3>Демо-кнопки</h3>
                <div className="row">
                    {[1, 2, 3].map(id => (
                        <div key={id}>
                            <LinkWithDot to={`/center/${id}`} className="btn" dotPath={`/center/${id}`}>Перейти в {id}</LinkWithDot>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <button className="btn" onClick={() => markUnread("/center/1/message")}>Создать новое сообщение (путь /center/1/message)</button>
                    <button className="btn" onClick={reset}>Сбросить все точки</button>
                </div>
                <div>Активные листы: {Array.from(activeLeaves).join(", ") || "нет"}</div>
            </div>
        </div>
    );
}
