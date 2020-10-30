import React, { useContext, useEffect } from 'react';
import random from 'random';
import { AppContext } from '../reducer/appReducer';
import { ActionTypes } from '../reducer/actionTypes';

export function GraphMatrix(props) {
    const { state, dispatch } = useContext(AppContext);

    useEffect(() => {
        fillGraphMatrix(state.numOfNodes, state.maxSpeed);
    }, [state.numOfNodes, state.maxSpeed]);

    function fillGraphMatrix(size, speed) {
        const graphMatrix = new Array(size);

        for (let i = 0; i < graphMatrix.length; ++i) {
            graphMatrix[i] = new Array(graphMatrix.length);
        }

        for (let i = 0; i < size; ++i) {
            for (let j = 0; j < size; ++j) {
                if (i === j) {
                    graphMatrix[i][j] = 0;
                } else {
                    if (Math.random() < 0.33) {
                        graphMatrix[i][j] = speed * 100;
                    } else {
                        graphMatrix[i][j] = random.integer(0, speed);
                    }
                    graphMatrix[j][i] = graphMatrix[i][j];
                }
            }
        }

        dispatch({
            type: ActionTypes.SET_GRAPH_MATRIX,
            payload: graphMatrix,
        });
    }

    function handleGraphElementChanged(event, i, j) {
        event.preventDefault();
        const element = Number(event.target.value);
        const graphMatrix = state.graphMatrix;
        graphMatrix[i][j] = element;
        event.target.value = element;

        dispatch({
            type: ActionTypes.SET_GRAPH_MATRIX,
            payload: graphMatrix,
        });
    }

    return (
        <>
            <p>Матрица графа</p>
            <div
                id={'graph-matrix'}
                style={{
                    display: 'inline-grid',
                    gridTemplateRows: `repeat(${state.numOfNodes}, 40px)`,
                    gridTemplateColumns: `repeat(${state.numOfNodes}, 40px)`,
                    gridGap: '3px',
                }}>
                {state.graphMatrix.map((array, i) => {
                    return array.map((value, j) => {
                        return (
                            <input
                                key={`${i} ${j}`}
                                type={'text'}
                                className={'graph-matrix-element'}
                                value={value}
                                onChange={(event) => handleGraphElementChanged(event, i, j)}
                            />
                        );
                    });
                })}
            </div>
            <hr />
        </>
    );
}
