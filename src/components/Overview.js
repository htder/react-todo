import React, { Component } from 'react';

function Overview(props) {
  const { tasks } = props;
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li key={index}>
            {task}
          </li>
        );
      })}
    </ul>
  );
}

export default Overview
