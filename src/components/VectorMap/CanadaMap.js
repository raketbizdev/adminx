// @flow
import React from 'react';
import 'jsvectormap';
import 'jsvectormap/dist/maps/world.js';

//components
import BaseVectorMap from './BaseVectorMap';

type CanadaVectorMapProps = {
    width?: string,
    height?: string,
    options?: any,
};

const CanadaVectorMap = ({ width, height, options }: CanadaVectorMapProps): React$Element<React$FragmentType> => {
    return (
        <>
            <BaseVectorMap width={width} height={height} options={options} type="canada" />
        </>
    );
};

export default CanadaVectorMap;
