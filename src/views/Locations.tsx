import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setFilter } from '../store/slices/app.slice';
import { useLazyGetLocationsQuery } from '../store/api/api.slice';
import { LocationCardContainer } from '../styles/Views/LocationsStyle';
import { LocationCard } from '../components/Cards/LocationCard';
import { ILocationResult } from '../store/api/interfaces/location.interfaces';
import PagePagination from '../components/Pagination/Pagination';
import Loader from '../components/Misc/Loader';

export default function Locations() {
    const { filter } = useSelector((state: RootState) => state.App);
    const dispatch = useDispatch();
    const [currentItems, setCurrentItems] = useState<ILocationResult[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 20;

    /* QUERIES */
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
                    <PagePagination handlePageClick={handlePageClick} pageCount={pageCount} />
                </Fragment>
            ) : (
                <Loader />
            )}
        </Fragment>
    );
}
