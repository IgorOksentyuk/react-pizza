import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton: React.FC = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={300}
    height={500}
    viewBox="0 0 300 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="10" y="409" rx="10" ry="10" width="83" height="30" />
    <rect x="143" y="403" rx="20" ry="20" width="127" height="46" />
    <rect x="6" y="327" rx="18" ry="18" width="265" height="69" />
    <circle cx="137" cy="148" r="130" />
    <rect x="3" y="289" rx="8" ry="8" width="263" height="23" />
  </ContentLoader>
);

export default Skeleton;
