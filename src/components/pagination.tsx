import PageLink from "./pageLink";

export type Props = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

function Pagination({ currentPage, setCurrentPage }: Props) {
  const pageNums = [1, 2, 3, 4, 5];

  return (
    <nav className="pagination" aria-label="Pagination">
      <PageLink
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
      >
        Previous
      </PageLink>
      {pageNums.map((pageNum, idx) => (
        <PageLink
          key={idx}
          active={currentPage === pageNum}
          disabled={isNaN(pageNum)}
          onClick={() => setCurrentPage(pageNum)}
        >
          {pageNum}
        </PageLink>
      ))}
      <PageLink onClick={() => setCurrentPage(currentPage + 1)}>Next</PageLink>
    </nav>
  );
}

export default Pagination;
