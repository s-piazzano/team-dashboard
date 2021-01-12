import React from 'react';

export default function About() {
  const [data, setData] = React.useState('Loading...');

  return (
    <div>
      ABOUT
      {data}
    </div>
  );
}
