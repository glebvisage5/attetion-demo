import { LinkWithDot } from "../LinkWithDot";


export default function CenterStats() {
    return (
        <div className="section stack">
            <div className="crumbs">Center / Stats</div>
            <h2>Stats</h2>
            <div className="alert">У вас непрочитанное сообщение. Нажмите на кнопку ниже для его прочтения</div>
            <div><LinkWithDot to="/center/stats/message" className="btn primary">Открыть сообщение</LinkWithDot></div>
        </div>
    );
}