import { Fragment, useEffect, useState } from 'react';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import OtherCharacterCard from '../components/Cards/OtherCharacterCard';
import NoDataBox from '../components/Boxes/NoDataBox';
import { useCheckScreenWidth } from '../helpers/useScreenWidth';
import {
    OtherCharactersContainer,
    OtherCharactersGroup,
    OtherCharactersTitle,
    OtherCharactersTwoColumns,
} from '../styles/Views/CharacterDetailStyle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { ICharacter } from '../store/api/interfaces/character.interfaces';
import { useLazyGetCharacterQuery, useLazyGetLocationQuery } from '../store/api/api.slice';
import Loader from '../components/Misc/Loader';

type Props = {
    characterData: ICharacter;
};

export default function OtherCharacters({ characterData }: Props) {
    const checkScreenWidthFor1400px = useCheckScreenWidth(1250);
    const [otherCharactersFiltered, setOtherCharactersFiltered] = useState<ICharacter[]>();
    const [groupedCharacters, setGroupedCharacters] = useState<ICharacter[][]>([]);

    /* QUERIES */
    const [getLocation, { data: LocationData }] = useLazyGetLocationQuery({});
    const [getCharacters, { data: charactersData }] = useLazyGetCharacterQuery({});

    /* FIRSTLY -> GETS LOCATION ID */
    useEffect(() => {
        if (characterData) {
            const location = characterData.location.url.split('/');

            getLocation(+location[location.length - 1]);
        }
    }, [characterData]);

    /* SECONDLY -> GETS ALL CHARACTERS */
    useEffect(() => {
        if (LocationData) {
            const characterIds = LocationData?.residents.map((resident) => {
                const residentId = resident.split('/');
                return residentId[residentId.length - 1];
            });

            getCharacters(characterIds);
        }
    }, [LocationData]);

    /* THIRDLY -> 6 CHARACTERS THAT ARE IN THE SAME STATUS */
    useEffect(() => {
        if (charactersData) {
            const filter = charactersData
                .filter((char) => char.id !== characterData.id)
                .filter((char) => char.status === characterData?.status)
                .slice(0, 6);

            setOtherCharactersFiltered(filter);
        }
    }, [characterData, charactersData]);

    const groupCharacters = (characters: ICharacter[]) => {
        const grouped: ICharacter[][] = [];

        for (let i = 0; i < characters.length; i += 3) grouped.push(characters.slice(i, i + 3));
        return grouped;
    };

    useEffect(() => {
        if (otherCharactersFiltered) {
            const grouped = groupCharacters(otherCharactersFiltered);
            setGroupedCharacters(grouped);
        }
    }, [otherCharactersFiltered]);

    return (
        <OtherCharactersContainer>
            <OtherCharactersTitle>Other Characters</OtherCharactersTitle>
            {characterData && otherCharactersFiltered ? (
                <Fragment>
                    {otherCharactersFiltered.length > 0 ? (
                        <Fragment>
                            {checkScreenWidthFor1400px ? (
                                <Swiper modules={[Navigation, Pagination]} pagination={{ clickable: true }} navigation>
                                    {groupedCharacters?.map((group, groupIndex) => (
                                        <SwiperSlide key={groupIndex}>
                                            <OtherCharactersGroup>
                                                {group?.map((characters, characterIndex) => (
                                                    <OtherCharacterCard character={characters} key={characterIndex} />
                                                ))}
                                            </OtherCharactersGroup>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <OtherCharactersTwoColumns>
                                    {groupedCharacters?.map((group, groupIndex) => (
                                        <OtherCharactersGroup key={groupIndex}>
                                            {group?.map((characters, characterIndex) => (
                                                <OtherCharacterCard character={characters} key={characterIndex} />
                                            ))}
                                        </OtherCharactersGroup>
                                    ))}
                                </OtherCharactersTwoColumns>
                            )}
                        </Fragment>
                    ) : (
                        <NoDataBox text="THERE IS NO OTHER CHARACTERS" customClass="othc" />
                    )}
                </Fragment>
            ) : (
                <Loader />
            )}
        </OtherCharactersContainer>
    );
}
