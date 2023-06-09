import React, { Fragment, useEffect, useState } from 'react';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import ReactPaginate from 'react-paginate';
import { useParams } from 'react-router-dom';
import { ICharacter } from '../store/api/interfaces/character.interfaces';
import { NextArrow, PrevArrow } from '../components/Carousel/CarouselArrows';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { CharacterCardContainer, FilterTitle, Filters } from '../styles/Views/CharactersStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as Icon from '../components/Icons/Icons';
import { useLazyGetCharacterQuery, useLazyGetLocationQuery } from '../store/api/api.slice';
import { FilterButtons } from '../components/Buttons/FilterButtons';
import NoDataBox from '../components/Boxes/NoDataBox';
import { PageTitle } from '../components/Texts/Texts';
import { Loader } from '../styles/components/Misc/Loader';

export default function Characters() {
    const { mobileView, filter } = useSelector((state: RootState) => state.App);
    const [characters, setCharacters] = useState<ICharacter[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const { id } = useParams();
    const itemsPerPage = 5;

    const [getLocation, { data: LocationsData, isLoading }] = useLazyGetLocationQuery({});
    const [getCharacters, { data: charactersData }] = useLazyGetCharacterQuery({});

    useEffect(() => {
        if (id) getLocation(+id);
    }, [id, LocationsData]);

    useEffect(() => {
        if (LocationsData?.residents) {
            const characterIds = LocationsData.residents.map((resident) => {
                const residentId = resident.split('/');
                return residentId[residentId.length - 1];
            });
            getCharacters(characterIds);
        }
    }, [LocationsData]);

    useEffect(() => {
        if (charactersData) {
            const endOffset = itemOffset + itemsPerPage;

            setCharacters(
                filter
                    ? charactersData.filter((char) => char.status === filter).slice(itemOffset, endOffset)
                    : charactersData.slice(itemOffset, endOffset),
            );
            setPageCount(
                Math.ceil(
                    filter
                        ? charactersData.filter((char) => char.status === filter).length / itemsPerPage
                        : charactersData.length / itemsPerPage,
                ),
            );
        }
    }, [charactersData, itemOffset, itemsPerPage, filter]);

    const handlePageClick = (event: any) => {
        if (LocationsData) {
            const newOffset = (event.selected * itemsPerPage) % LocationsData.residents.length;
            setItemOffset(newOffset);
            window.scrollTo(0, 0);
        }
    };

    return (
        <Fragment>
            {!isLoading && LocationsData ? (
                <Fragment>
                    <PageTitle>{LocationsData.name}</PageTitle>
                    {LocationsData.residents.length > 0 ? (
                        <Fragment>
                            <Filters>
                                <FilterTitle>Filter by status: </FilterTitle>
                                <FilterButtons characters={characters} filter={filter} />
                            </Filters>
                            {mobileView ? (
                                <Carousel
                                    showIndicators={false}
                                    showThumbs={false}
                                    renderArrowPrev={(onClickHandler, hasPrev) => PrevArrow(onClickHandler, hasPrev)}
                                    renderArrowNext={(onClickHandler, hasNext) => NextArrow(onClickHandler, hasNext)}>
                                    {characters?.map((character: ICharacter, i: number) => (
                                        <Fragment key={i}>
                                            <CharacterCard
                                                id={character.id}
                                                name={character.name}
                                                status={character.status}
                                                species={character.species}
                                                image={character.image}
                                            />
                                        </Fragment>
                                    ))}
                                </Carousel>
                            ) : (
                                <CharacterCardContainer>
                                    {characters?.map((character: ICharacter, i: number) => (
                                        <Fragment key={i}>
                                            <CharacterCard
                                                id={character.id}
                                                name={character.name}
                                                status={character.status}
                                                species={character.species}
                                                image={character.image}
                                            />
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
                    ) : (
                        <NoDataBox text="THERE IS NO CHARACTERS" />
                    )}
                </Fragment>
            ) : (
                <Loader />
            )}
        </Fragment>
    );
}
