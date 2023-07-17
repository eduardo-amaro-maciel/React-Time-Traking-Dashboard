import ActivityCard from '../ActivityCard';

import playIcon from '../../assets/img/icon-play.svg';
import excerciseIcon from '../../assets/img/icon-exercise.svg';
import socialIcon from '../../assets/img/icon-social.svg';
import selfCareIcon from '../../assets/img/icon-self-care.svg';
import studyIcon from '../../assets/img/icon-study.svg';
import workIcon from '../../assets/img/icon-work.svg';

type Timeframe = {
    current: string;
    previous: string;
};

type TimeframeKey = 'daily' | 'weekly' | 'monthly';

type Activity = {
    title: string;
    timeframes: {
        daily: Timeframe;
        weekly: Timeframe;
        monthly: Timeframe;
    };
};

type ActivityContainerProps = {
    current: TimeframeKey;
    previous: TimeframeKey;
    data: Activity[];
};

const icons = [
    workIcon,
    playIcon,
    studyIcon,
    excerciseIcon,
    socialIcon,
    selfCareIcon,
];

const iconAltText = [
    'work-icon',
    'play-icon',
    'study-icon',
    'excercise-icon',
    'social-icon',
    'self-care-icon',
];

export default function ActivityContainer({
    data,
    current,
    previous,
}: ActivityContainerProps) {
    return (
        <>
            {data.map((activity, index) => (
                <ActivityCard
                    key={index}
                    title={activity.title}
                    timeFrameCurrent={activity.timeframes[current].current}
                    timeFramePrevious={activity.timeframes[previous].previous}
                    icon={icons[index]}
                    alt={iconAltText[index]}
                />
            ))}
        </>
    );
}
