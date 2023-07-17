import './style.css';
import ellipsisIcon from '../../assets/img/icon-ellipsis.svg';

type ActivityCardProps = {
    icon: string;
    alt: string;
    title: string;
    timeFramePrevious: string;
    timeFrameCurrent: string;
}

function ActivityCard({ icon, alt, title, timeFramePrevious, timeFrameCurrent }: ActivityCardProps) {
    return (
        <section className="dashboard-item">
            <div className="background-pic">
                <img src={icon} alt={alt} />
            </div>

            <div className="dashboard-item-text">
                <div className="flex-top">
                    <h2 className="activity-title">{title}</h2>
                    <img src={ellipsisIcon} alt="ellipsis" />
                </div>
                <div className="flex-bottom">
                    <h3 className="time-amount">{timeFrameCurrent}hrs</h3>
                    <p className="previous-time-amount">
                        Last Week - {timeFramePrevious}
                    </p>
                </div>
            </div>
        </section>
    );
}
export default ActivityCard;