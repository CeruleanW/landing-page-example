import TryItNowButton from './TryItNowButton';
import ExpMenu from './ExpMenu';


export function WithLayoutTopMenu(props) {
  return (
    <div className={'w-full mt-16 px-12 z-10 flex'}>
      <ExpMenu bgColor={props.sectionBgColor} />
      <div className='flex-grow'></div>
      <TryItNowButton bgcolor={props.sectionBgColor} type={props.buttonType} />
    </div>
  );
}