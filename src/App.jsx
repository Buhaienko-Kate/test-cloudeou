import React, { useEffect, useState } from 'react';
import Main from './components/main/Main';
import { authorsData } from './infoGateway';
import first from './image/1st.svg';
import second from './image/2nd.svg';
import third from './image/3rd.svg';

const App = () => {
  const [authors, setAuthors] = useState([]);

  const arrayImg = [first, second, third];

  const authorsInfo = authorsData
    .slice()
    .sort((a, b) => b.pageviews - a.pageviews)
    .slice(0, 3)
    .map((author, index) => ({ ...author, image: arrayImg[index] }))
    .concat(authorsData.slice(3));

  const getCardsList = () => {
    setAuthors(authorsInfo);
  };

  useEffect(() => {
    getCardsList();
  }, []);

  const onSortByPageviews = () => {
    const menus = authors.slice().sort((a, b) => b.pageviews - a.pageviews);
    setAuthors(menus);
  };

  const onSortByName = () => {
    const menus = authors.slice().sort((a, b) => a.name.localeCompare(b.name));
    setAuthors(menus);
  };

  return (
    <div className="page">
      <Main authors={authors} onSortByPageviews={onSortByPageviews} onSortByName={onSortByName} />
    </div>
  );
};
export default App;
