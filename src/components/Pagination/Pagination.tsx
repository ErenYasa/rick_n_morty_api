import ReactPaginate from 'react-paginate';
import * as Icon from '../../components/Icons/Icons';

type Props = {
    handlePageClick: (event: any) => void;
    pageCount: number;
};

export default function PagePagination({ handlePageClick, pageCount }: Props) {
    return (
        <ReactPaginate
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            marginPagesDisplayed={1}
            pageCount={pageCount}
            nextLabel={<Icon.NextArrow />}
            previousLabel={<Icon.PrevArrow />}
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
    );
}
