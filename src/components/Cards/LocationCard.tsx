import { useNavigate } from 'react-router-dom';
import {
    Card,
    Content,
    DetailRow,
    DetailRowLeft,
    DetailRowRight,
    Header,
} from '../../styles/components/Cards/LocationCardStyle';
import { ILocationCard } from './interfaces/locationCard.interface';

export function LocationCard({ id, name, type, dimension, residentCount }: ILocationCard) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (id) navigate(`/characters/${id}`);
    };

    return (
        <Card title={name} onClick={() => handleClick()}>
            <Header>{name}</Header>
            <Content>
                <DetailRow>
                    <DetailRowLeft>Type</DetailRowLeft>
                    <DetailRowRight> : {type}</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Dimension</DetailRowLeft>
                    <DetailRowRight title={dimension}> : {dimension}</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Resident count</DetailRowLeft>
                    <DetailRowRight> : {residentCount?.length}</DetailRowRight>
                </DetailRow>
            </Content>
        </Card>
    );
}
