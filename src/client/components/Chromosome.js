import React, { useContext, useEffect, useState } from 'react';
import random from 'random';
import { AppContext } from '../reducer/appReducer';
import { ActionTypes } from '../reducer/actionTypes';

export function Chromosome(props) {
    const { state, dispatch } = useContext(AppContext);

    const [chromosome, setChromosome] = useState({
        genArr: [],
        fitness: 0,
    });

    useEffect(() => {
        fillChromosome(state.graphMatrix, state.startPoint, state.endPoint);
    }, [state.graphMatrix, state.startPoint, state.endPoint]);

    function fillChromosome(graph, startPoint, endPoint) {
        const newPopulation = state.population;

        const filledChromosome = {
            genArr: [],
            fitness: 0,
        };

        filledChromosome.genArr.push(startPoint);

        for (let i = 1; i < graph.length - 1; ++i) {
            filledChromosome.genArr.push(random.integer(0, graph.length - 1));
        }

        filledChromosome.genArr.push(endPoint);

        filledChromosome.fitness = fitnessFunction(graph, filledChromosome.genArr);

        newPopulation.push(filledChromosome);

        setChromosome(filledChromosome);

        dispatch({
            type: ActionTypes.SET_POPULATION,
            payload: newPopulation,
        });
    }

    function fitnessFunction(graph, genArr) {
        let sum = 0;

        for (let i = 1; i < genArr.length; ++i) {
            sum += graph[genArr[i - 1]][genArr[i]];
        }

        return sum;
    }

    return (
        chromosome.genArr.length && (
            <div className={'chromosome__wrapper'}>
                <p className={'chromosome__info'}>
                    Хромосома {props.index} (F = {chromosome.fitness})
                </p>
                <div className={'chromosome'}>
                    {chromosome.genArr.length !== 0 &&
                        chromosome.genArr.map((gen, index) => {
                            return (
                                <input
                                    key={`Gen ${index} (${chromosome.fitness})`}
                                    type={'text'}
                                    value={gen}
                                />
                            );
                        })}
                </div>
            </div>
        )
    );
}
