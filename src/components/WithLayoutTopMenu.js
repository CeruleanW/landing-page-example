import TryItNowButton from './TryItNowButton';
import ExpMenu from './ExpMenu';
import { theme } from '../styles/theme';

export function WithLayoutTopMenu(props) {
  const { noTryItNow, sectionBgColor, buttonType } = props;
  const circleColor = convertToCircleColor(sectionBgColor);

  return (
    <div className={'w-full mt-16 px-12 z-10 flex'}>
      <ExpMenu bgColor={sectionBgColor} circleBgColor={circleColor} />
      <div className='flex-grow'></div>
      {noTryItNow ? null : (
        <TryItNowButton
          bgcolor={sectionBgColor}
          type={buttonType}
        />
      )}
    </div>
  );
}

function convertToCircleColor(sectionBgColor) {
  if (sectionBgColor === theme.palette.black) {
    return theme.palette.blue;
  } else {
    return theme.palette.black;
  }
}