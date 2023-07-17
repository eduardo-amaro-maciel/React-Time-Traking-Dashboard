import './style.css';
import userPic from '../../assets/img/image-jeremy.png';

type NameCardProps = {
    changeDisplayedData: (timeFrame: string) => void; 
    current: string;
}

function NameCard({ changeDisplayedData, current } : NameCardProps) {

    return (
        <header className="name-and-options-card-container">
            <div className="name-card">
                <img src={userPic} alt="user" />
                <div className="name-card-text">
                    <p>Report for</p>
                    <h1>Jeremy Robson</h1>
                </div>
            </div>

            <div className="time-options-container">
                <ul>
                    <li>
                        <button
                            onClick={() => changeDisplayedData('daily')}
                            className="time-button"
                            style={
                                current === 'daily'
                                    ? { color: 'white' }
                                    : { color: '#7078c9' }
                            }
                        >
                            Daily
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeDisplayedData('weekly')}
                            className="time-button"
                            style={
                                current === 'weekly'
                                    ? { color: 'white' }
                                    : { color: '#7078c9' }
                            }
                        >
                            Weekly
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => changeDisplayedData('monthly')}
                            className="time-button"
                            style={
                                current === 'monthly'
                                    ? { color: 'white' }
                                    : { color: '#7078c9' }
                            }
                        >
                            Monthly
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
}
export default NameCard;