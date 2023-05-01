import React from 'react';
import {
    Card,
    Content,
    DetailRow,
    DetailRowLeft,
    DetailRowRight,
    Header,
} from '../../styles/components/Cards/LocationCardStyle';
import { ILocationCard } from './interfaces/locationCard.interface';

export function LocationCard({ name, type, dimension, residentCount }: ILocationCard) {
    return (
        <Card>
            <Header>{name}</Header>
            <Content>
                <DetailRow>
                    <DetailRowLeft>Type</DetailRowLeft>
                    <DetailRowRight> : {type}</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Dimension</DetailRowLeft>
                    <DetailRowRight> : {dimension}</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Resident count</DetailRowLeft>
                    <DetailRowRight> : {residentCount}</DetailRowRight>
                </DetailRow>
            </Content>
        </Card>
    );
}
