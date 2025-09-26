import { LinkWithDot } from "../LinkWithDot";
import { useParams } from "react-router-dom";

export default function CenterStats() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="section stack">
            <div className="crumbs">Center / {id}</div>
            <h2>Stats для элемента {id}</h2>
            <div className="alert">У вас непрочитанное сообщение. Нажмите на кнопку ниже для его прочтения</div>
            <div><LinkWithDot to={`/center/${id}/message`} className="btn primary">Открыть сообщение</LinkWithDot></div>
        </div>
    );
}
