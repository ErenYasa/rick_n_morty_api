import React, { Fragment, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { LocationCard } from '../components/Cards/LocationCard';
import { LocationCardContainer } from '../styles/Views/LocationsStyle';
import * as Icon from '../components/Icons/Icons';

const LocData = [
    {
        name: 'Earth (C-137)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-138)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-139)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-140)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-141)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-142)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-143)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-144)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-145)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
    {
        name: 'Earth (C-146)',
        type: 'planet',
        dimension: 'C-123',
        residentCount: '23',
    },
];

export default function Locations() {
    const [currentItems, setCurrentItems] =
        useState<{ name: string; type: string; dimension: string; residentCount: string }[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(LocData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(LocData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % LocData.length;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <LocationCardContainer>
                {currentItems?.map((d, i) => (
                    <Fragment key={i}>
                        <LocationCard
                            name={d.name}
                            type={d.type}
                            dimension={d.dimension}
                            residentCount={d.residentCount}
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
    );
}
