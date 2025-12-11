import Pagination from "react-bootstrap/Pagination";

export default function AppPagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const items = [];

  const goToPage = (page) => {
    if (!onPageChange) return;
    if (page < 1 || page > totalPages || page === currentPage) return;
    onPageChange(page);
  };

  items.push(
    <Pagination.Prev
      key="prev"
      onClick={() => goToPage(currentPage - 1)}
      disabled={currentPage === 1}
    />
  );

  if (totalPages <= 5) {
    for (let page = 1; page <= totalPages; page++) {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => goToPage(page)}
        >
          {page}
        </Pagination.Item>
      );
    }
  } else {
    const addPage = (page) => {
      items.push(
        <Pagination.Item
          key={page}
          active={page === currentPage}
          onClick={() => goToPage(page)}
        >
          {page}
        </Pagination.Item>
      );
    };

    addPage(1);

    if (currentPage > 3) {
      items.push(<Pagination.Ellipsis key="start-ellipsis" disabled />);
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let page = start; page <= end; page++) {
      addPage(page);
    }

    if (currentPage < totalPages - 2) {
      items.push(<Pagination.Ellipsis key="end-ellipsis" disabled />);
    }

    addPage(totalPages);
  }

  items.push(
    <Pagination.Next
      key="next"
      onClick={() => goToPage(currentPage + 1)}
      disabled={currentPage === totalPages}
    />
  );

  return <Pagination>{items}</Pagination>;
}
