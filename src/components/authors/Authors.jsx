import React from 'react';
import classNames from 'classnames';

import './authors.scss';

const Authors = ({ name, count_pub, pageviews, image, number }) => {
  const letter = name.split('')[0];

  return (
    <>
      <tr className="authors-block-table__body-info">
        <td className="authors-number">{number + 1}</td>
        <td className="authors-name-letter">
          <span
            className={classNames('authors-name-letter', {
              'letter-a': letter.toString() === 'А',
              'letter-b': letter.toString() === 'Б',
              'letter-c': letter.toString() === 'Я',
            })}
          >
            {letter}
          </span>
        </td>
        <td className="authors-name-info">
          <span className="authors-name">{name}</span>
          <span className="authors-pub">{`${count_pub} публ.`}</span>
        </td>
        <td className="authors-svg">
          <img src={image}></img>
        </td>
        <td className="authors-pageviews">{pageviews}</td>
      </tr>
    </>
  );
};

export default Authors;
