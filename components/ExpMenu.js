import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { theme } from '../styles/theme';

const ExpMenuIcon = styled(MenuIcon)`
  opacity: 1;
  /* fill: ${(props) =>
    props.textColor
      ? theme.palette[`${props.textColor}`]
      : theme.palette.primary.main}; */
  width: ${56 * 1.8}px;
  height: ${34 * 1.7}px;
  display: inline flow-root;
  vertical-align: middle;
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
`;

const ListText = styled.p`
  text-align: left;
  font: normal normal bold 47px/57px liberation-sans;
  letter-spacing: 4.7px;
  color: #ffffff;
  &:hover {
    color: ${(props) => props.hoverColor};
  }
  opacity: 1;
`;

const MenuItem = (props) => {
  const { text, link, hoverColor } = props;

  return (
    <li>
      <a href={link}>
        <ListText hoverColor={hoverColor} >{text}</ListText>
      </a>
    </li>
  );
};

const MyMenuItem = styled(MenuItem)`
`;

ExpMenu.defaultProps = {
  color: 'white',
};

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 20px;
  margin-left: 29px;
`;

export default function ExpMenu(props) {
  const { color, bgColor } = props;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className='container relative'>
      <div className='absolute'></div>
      <ExpMenuIcon
        onClick={() => setIsOpened(!isOpened)}
        textColor={isOpened ? bgColor : null}
        style={{ color: isOpened ? bgColor : theme.palette.primary.main }}
      />
      <ExpMenuText textColor={isOpened ? bgColor : null}>
        EXP|CON
      </ExpMenuText>
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
