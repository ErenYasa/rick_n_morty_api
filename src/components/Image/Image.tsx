import React from 'react';
import { ImageStyle } from '../../styles/components/ImageStyle';

export function Image(props: { src: string }) {
    return <ImageStyle src={props.src} />;
}
