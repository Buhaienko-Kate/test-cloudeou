import React, { useEffect, useState } from 'react';
import Main from './components/main/Main';
import { authorsData } from './infoGateway';
import first from './image/1st.svg';
import second from './image/2nd.svg';
import third from './image/3rd.svg';

const App = () => {
  const [authors, setAuthors] = useState([]);

  const array = [first, second, third];

  const info = authorsData
    .slice()
    .sort((a, b) => b.pageviews - a.pageviews)
    .map((author, index, arrayImg) => {
      if (index === arrayImg[index]) {
        return { ...author, image: arrayImg[index] };
      }
      return author;
    });
  console.log(info);

  const authorsInfo = authorsData
    .slice()
    .sort((a, b) => b.pageviews - a.pageviews)
    .map((author, index) => {
      if (index === 0) {
        return { ...author, image: first };
      }
      if (index === 1) {
        return { ...author, image: second };
      }
      if (index === 2) {
        return { ...author, image: third };
      }
      return author;
    });

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
