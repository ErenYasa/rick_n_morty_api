import React, { Fragment, useEffect, useState } from 'react';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import ReactPaginate from 'react-paginate';
import { NextArrow, PrevArrow } from '../components/Carousel/CarouselArrows';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { CharacterCardContainer, FilterBtnContainer, FilterTitle, Filters } from '../styles/Views/CharactersStyle';
import { FilterButtons } from '../components/Buttons/FilterButtons';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as Icon from '../components/Icons/Icons';

const CharData = [
    {
        name: 'Mc Bob',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        name: 'Mc Bob',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        name: 'Mc Bob',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        name: 'Mc Bob',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        name: 'Mc Bob',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    },
    {
        name: 'Abradolf Lincler',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
        name: 'Abradolf Lincler',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
        name: 'Abradolf Lincler',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
        name: 'Abradolf Lincler',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
    {
        name: 'Abradolf Lincler',
        status: 'alive',
        species: 'Human',
        img: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
    },
];

export default function Characters() {
    const mobileView = useSelector((state: RootState) => state.App.mobileView);
    const [currentItems, setCurrentItems] =
        useState<{ name: string; status: string; species: string; img: string }[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(CharData.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(CharData.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % CharData.length;
        setItemOffset(newOffset);
    };

    return (
        <Fragment>
            <Filters>
                <FilterTitle>Filter by status: </FilterTitle>
                <FilterBtnContainer>
                    <FilterButtons status="alive" />
                    <FilterButtons status="dead" />
                    <FilterButtons status="unknown" />
                </FilterBtnContainer>
            </Filters>
            {mobileView ? (
                <Carousel
                    showIndicators={false}
                    showThumbs={false}
                    renderArrowPrev={(onClickHandler, hasPrev) => PrevArrow(onClickHandler, hasPrev)}
                    renderArrowNext={(onClickHandler, hasNext) => NextArrow(onClickHandler, hasNext)}>
                    {currentItems?.map((d, i) => (
                        <Fragment key={i}>
                            <CharacterCard name={d.name} status={d.status} species={d.species} img={d.img} />
                        </Fragment>
                    ))}
                </Carousel>
            ) : (
                <CharacterCardContainer>
                    {currentItems?.map((d, i) => (
                        <Fragment key={i}>
                            <CharacterCard name={d.name} status={d.status} species={d.species} img={d.img} />
                        </Fragment>
                    ))}
                </CharacterCardContainer>
            )}
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
