import React, { useState } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  ul {
    display: flex;
    position: relative;
    > li {
      transition: all 0.6s;
      cursor: pointer;
      box-shadow: 0 0 0.8rem black;
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.8rem;
      font-weight: 800;
      margin-right: -1rem;
      &.selected {
        transform: translateY(-1.6rem);
      }
    }
  }
  &.expand ul li:not(:last-child) {
    margin-right: 0;
  }
  .divider {
    position: absolute;
    right: -1.2rem;
    top: 50%;
    transform: translateY(-50%);
    color: #aaa;
  }
  .tip {
    position: absolute;
    right: -4.3rem;
    top: 110%;
    padding: 0.3rem 0.5rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;
    color: #fff;
    background: rgba(0, 0, 0, 0.49);
  }
  .btn {
    cursor: pointer;
    position: absolute;
    right: -4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    background: #333;
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    transition: all 0.6s;
    box-shadow: 1px -1px 6px black;
  }
  &.expand .btn {
    transform: rotate(180deg);
  }
`;

const ColorSet = ({ currSetName, setCurrSet, sets }) => {
  const [isHover, setIsHover] = useState(false);

  const handleSetClick = name => {
    console.log('clicked set name', name);

    setCurrSet(name);
  };

  const handleSetHover = () => {
    setIsHover(prev => !prev);
  };
  return (
    <Wrapper className={`sets ${isHover ? 'expand' : ''}`}>
      <ul>
        {sets.map(({ name, RGB }) => {
          return (
            <li
              onClick={handleSetClick.bind(null, name)}
              key={name}
              style={{
                background: `rgba(${RGB.join(',')})`
              }}
              className={name == currSetName ? 'selected' : ''}
            >
              {name}
            </li>
          );
        })}
      </ul>
      <i className="divider">|</i>
      <button onClick={handleSetHover} className="btn">
        巜
      </button>
      <span className="tip">色系</span>
    </Wrapper>
  );
};

export default ColorSet;
