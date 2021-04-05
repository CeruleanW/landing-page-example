import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled, {css} from 'styled-components';
import { theme } from '../styles/theme';
import { Transition } from 'react-transition-group';

const iconWidth = 56 * 1.8;
const iconHeight = 34 * 1.7;
const openedVisibleZindex = 1000;
const openMenuTransitionStyles = css`
  transition: 0.7s;
`;

const transitionStyles = {
  entering: { width: '200vw', height: '200vw' },
  entered:  { width: '200vw', height: '200vw' },
  exiting:  { width: 0, height: 0 },
  exited:  { width: 0, height: 0 },
};

const ExpandingCircle = styled.div`
  position: absolute;
  ${openMenuTransitionStyles}
  background-color: ${props => props.bgColor};
  height: ${ ({state}) => transitionStyles[state].height };
  width: ${ ({state}) => transitionStyles[state].width };
  border-radius: 50%;
  top: 30px;
  left: 50px;
  transform: translate(-30%, -45%);
  z-index: 11;
`;

const ExpMenuIcon = styled(MenuIcon)`
  opacity: 1;
  width: ${iconWidth}px;
  height: ${iconHeight}px;
  display: inline flow-root;
  vertical-align: middle;
  color: ${(props) => props.iconcolor};
  position: relative;
  z-index: ${openedVisibleZindex};
  ${openMenuTransitionStyles}
`;

const ExpMenuText = styled.p`
  text-align: left;
  font: normal normal normal 52px/68px liberation-sans;
  letter-spacing: 4.8px;
  color: ${(props) =>
    props.textColor ? props.textColor : theme.palette.primary.main};
  opacity: 1;
  display: inline flow-root;
  width: 258px;
  height: 56px;
  overflow: hidden;
  white-space: nowrap;
  vertical-align: middle;
  position: relative;
  z-index: ${openedVisibleZindex};
  ${openMenuTransitionStyles}
`;

const ListText = styled.p`
  text-align: left;
  font: normal normal bold 47px/57px liberation-sans;
  letter-spacing: 4.7px;
  color: ${theme.palette.white};
  &:hover {
    color: ${(props) => props.hoverColor};
  }
  opacity: 1;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  margin-left: 29px;
  position: absolute;
  z-index: ${openedVisibleZindex};
`;

const MenuItem = (props) => {
  const { text, link, hoverColor } = props;

  return (
    <li>
      <a href={link}>
        <ListText hoverColor={hoverColor}>{text}</ListText>
      </a>
    </li>
  );
};

ExpMenu.defaultProps = {
  color: theme.palette.white,
  bgColor: theme.palette.white,
  circleBgColor: theme.palette.black,
};

export default function ExpMenu(props) {
  const { color, bgColor, circleBgColor } = props;
  const [isOpened, setIsOpened] = useState(false);

  const duration = 1000;

  return (
    <div className='container relative'>
      <Transition in={isOpened} timeout={duration}>
        {(state) => (
          // state change: exited -> entering -> entered -> exiting -> exited
          <ExpandingCircle bgColor={circleBgColor} state={state}/>
        )}
      </Transition>
      <ExpMenuIcon
        onClick={() => setIsOpened(!isOpened)}
        iconcolor={isOpened ? bgColor : theme.palette.primary.main}
      />
      <ExpMenuText textColor={isOpened ? bgColor : null}>EXP|CON</ExpMenuText>
      {isOpened ? (
        <Ul className=''>
          <MenuItem text='WHAT IS IT' link='' hoverColor={bgColor} />
          <MenuItem text='PERKS' link='' hoverColor={bgColor} />
          <MenuItem text='PRICING' link='' hoverColor={bgColor} />
        </Ul>
      ) : null}
    </div>
  );
}
