import React from 'react';
import {
    Card,
    Content,
    DetailRow,
    DetailRowLeft,
    DetailRowRight,
    Header,
} from '../../styles/components/LocationCardStyle';
import { ILocationCard } from './interfaces/locationCard.interface';

export function LocationCard({ name, type, dimension, residentCount }: ILocationCard) {
    return (
        <Card>
            <Header>Earth (C-137)</Header>
            <Content>
                <DetailRow>
                    <DetailRowLeft>Type</DetailRowLeft>
                    <DetailRowRight> : planet</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Dimension</DetailRowLeft>
                    <DetailRowRight> : C-123</DetailRowRight>
                </DetailRow>
                <DetailRow>
                    <DetailRowLeft>Resident count</DetailRowLeft>
                    <DetailRowRight> : 23</DetailRowRight>
                </DetailRow>
            </Content>
        </Card>
    );
}
