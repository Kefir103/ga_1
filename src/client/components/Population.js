import React, { useContext, useEffect } from 'react';
import { Chromosome } from './Chromosome';
import { AppContext } from '../reducer/appReducer';
import { ActionTypes } from '../reducer/actionTypes';

export function Population(props) {
    const { state, dispatch } = useContext(AppContext);

    console.log(props);

    useEffect(() => {
        fillPopulation(state.populationSize);
    }, [state.populationSize]);

    function fillPopulation(populationSize) {
        const renderedPopulation = [];
        for (let i = 0; i < populationSize; ++i) {
            renderedPopulation.push(<Chromosome key={`Chromosome ${i}`} index={i} />);
        }
        return renderedPopulation;
    }

    return [
        <p>{props.populationDesc}</p>,
        <div className={'population'}>{fillPopulation(state.populationSize)}</div>,
    ];
}
