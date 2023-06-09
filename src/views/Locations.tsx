import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { LocationCard } from '../components/Cards/LocationCard';
import { LocationCardContainer } from '../styles/Views/LocationsStyle';
import * as Icon from '../components/Icons/Icons';
import { useLazyGetLocationsQuery } from '../store/api/api.slice';
import { ILocationResult } from '../store/api/interfaces/location.interfaces';
import { setFilter } from '../store/slices/app.slice';
import { RootState } from '../store';

export default function Locations() {
    const { filter } = useSelector((state: RootState) => state.App);
    const [currentItems, setCurrentItems] = useState<ILocationResult[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const dispatch = useDispatch();
    const itemsPerPage = 20;

    /* LOCATIONS QUERY */
    const [getLocations, { data: dataLocations, isLoading }] = useLazyGetLocationsQuery({});

    useEffect(() => {
        getLocations({ page: '1' });

        /**
         * Reset filter
         */
        if (filter.length) dispatch(setFilter(''));
    }, []);

    /* PAGINATE */
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        if (dataLocations?.results) {
            setCurrentItems(dataLocations.results.slice(itemOffset, endOffset));
            setPageCount(dataLocations.info.pages);
        }
    }, [dataLocations?.results, itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        if (dataLocations?.results) {
            const newOffset = (event.selected * itemsPerPage) % dataLocations.results.length;
            setItemOffset(newOffset);
            getLocations({ page: event.selected + 1 });
            window.scrollTo(0, 0);
        }
    };

    return (
        <Fragment>
            {!isLoading && dataLocations ? (
                <Fragment>
                    <LocationCardContainer>
                        {currentItems?.map((location, i) => (
                            <Fragment key={i}>
                                <LocationCard
                                    id={location.id}
                                    name={location.name}
                                    type={location.type}
                                    dimension={location.dimension}
                                    residentCount={location.residents}
                                />
                            </Fragment>
                        ))}
                    </LocationCardContainer>
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
                </Fragment>
            ) : (
                <div>LOADING</div>
            )}
        </Fragment>
    );
}
