import { Fragment, useEffect, useState } from 'react';
import { RootState } from 'src/store';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { ICharacter } from '../store/api/interfaces/character.interfaces';
import { CharacterCard } from '../components/Cards/CharacterCard';
import { CharacterCardContainer, FilterTitle, Filters } from '../styles/Views/CharactersStyle';
import { useLazyGetCharacterQuery, useLazyGetLocationQuery } from '../store/api/api.slice';
import { FilterButtons } from '../components/Buttons/FilterButtons';
import NoDataBox from '../components/Boxes/NoDataBox';
import { PageTitle } from '../components/Texts/Texts';
import Loader from '../components/Misc/Loader';
import PagePagination from '../components/Pagination/Pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Characters() {
    const { mobileView, filter } = useSelector((state: RootState) => state.App);
    const { id } = useParams();
    const [characters, setCharacters] = useState<ICharacter[]>();
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    /* QUERIES */
    const [getLocation, { data: LocationsData, isLoading }] = useLazyGetLocationQuery({});
    const [getCharacters, { data: charactersData }] = useLazyGetCharacterQuery({});

    useEffect(() => {
        if (id) {
            getLocation(+id);
            sessionStorage.setItem('location_id', id);
        }
    }, [id]);

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
                                <Swiper modules={[Navigation, Pagination]} navigation>
                                    {characters?.map((character: ICharacter, i: number) => (
                                        <SwiperSlide key={i}>
                                            <CharacterCard
                                                id={character.id}
                                                name={character.name}
                                                status={character.status}
                                                species={character.species}
                                                image={character.image}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
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
                            {LocationsData.residents.length > 5 && (
                                <PagePagination handlePageClick={handlePageClick} pageCount={pageCount} />
                            )}
                        </Fragment>
                    ) : (
                        <NoDataBox text="THERE IS NO CHARACTERS" customClass="chr" />
                    )}
                </Fragment>
            ) : (
                <Loader />
            )}
        </Fragment>
    );
}
