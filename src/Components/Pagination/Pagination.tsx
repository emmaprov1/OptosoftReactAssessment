import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../Hooks/usePagination';
import './pagination.scss';
const Pagination = (props: { onPageChange: any; totalCount: any; siblingCount?: 1 | undefined; currentPage: any; pageSize: any; className: any; }) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className
  } = props;

  const paginationRange:any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange.length < 1) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage);
  };

  const onPrevious = () => {
    if (currentPage !== 0 || paginationRange.length < 1) {
      onPageChange(currentPage - 1);
    }
  };

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul
      className={classnames('pagination-container', { [className]: className })}
    >
       {/* Left navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === 0
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber: {} | null | undefined, index: React.Key | null | undefined) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }
        // Render our Page Pills
        return (
          <li
            key={index}
            className={classnames('pagination-item', {
              selected: pageNumber === currentPage
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      {/*  Right Navigation arrow */}
      <li
        className={classnames('pagination-item', {
          disabled: currentPage === lastPage
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;
