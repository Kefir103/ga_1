import React, { useContext, useState } from 'react';
import { AppContext } from '../reducer/appReducer';
import { ActionTypes } from '../reducer/actionTypes';

export function SideMenu(props) {
    const { state, dispatch } = useContext(AppContext);

    const [correctInputs, setCorrectInputs] = useState({
        isSpeedInputCorrect: true,
        isNumOfNodesInputCorrect: true,
        isPopulationSizeInputCorrect: true,
        isMutationProbabilityInputCorrect: true,
        isStartPointInputCorrect: true,
        isEndPointInputCorrect: true,
    });

    function handleSpeedChange(event) {
        event.preventDefault();
        const speed = Number(event.target.value);

        if (speed < 0) {
            setCorrectInputs({
                ...correctInputs,
                isSpeedInputCorrect: false,
            });
            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isSpeedInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_MAX_SPEED,
            payload: speed,
        });
    }

    function handleNumOfNodesChange(event) {
        event.preventDefault();
        const size = Number(event.target.value);
        if (size < 0) {
            setCorrectInputs({
                ...correctInputs,
                isNumOfNodesInputCorrect: false,
            });

            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isNumOfNodesInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_NUM_OF_NODES,
            payload: size,
        });
    }

    function handlePopulationSizeChange(event) {
        event.preventDefault();
        const populationSize = Number(event.target.value);
        if (populationSize < 0) {
            setCorrectInputs({
                ...correctInputs,
                isPopulationSizeInputCorrect: false,
            });
            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isPopulationSizeInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_POPULATION_SIZE,
            payload: populationSize,
        });
    }

    function handleMutationProbabilityChange(event) {
        event.preventDefault();
        const mutationProbability = Number(event.target.value);
        if (mutationProbability < 0) {
            setCorrectInputs({
                ...correctInputs,
                isMutationProbabilityInputCorrect: false,
            });

            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isMutationProbabilityInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_MUTATION_PROBABILITY,
            payload: mutationProbability,
        });
    }

    function handleStartPointChange(event) {
        event.preventDefault();
        const startPoint = Number(event.target.value);
        if (startPoint < 0 || startPoint >= state.numOfNodes || startPoint === state.endPoint) {
            setCorrectInputs({
                ...correctInputs,
                isStartPointInputCorrect: false,
            });

            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isStartPointInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_START_POINT,
            payload: startPoint,
        });
    }

    function handleEndPointChange(event) {
        event.preventDefault();
        const endPoint = Number(event.target.value);
        if (endPoint < 0 || endPoint >= state.numOfNodes || endPoint === state.startPoint) {
            setCorrectInputs({
                ...correctInputs,
                isEndPointInputCorrect: false,
            });

            return;
        }

        setCorrectInputs({
            ...correctInputs,
            isEndPointInputCorrect: true,
        });

        dispatch({
            type: ActionTypes.SET_END_POINT,
            payload: endPoint,
        });
    }

    return (
        <aside className={'side-menu'}>
            <p>Генетические алгоритмы №1</p>
            <hr />
            <div className={'side-menu-input-container'}>
                Пропускная способность:{' '}
                <input
                    type={'number'}
                    id={'input-max-speed'}
                    className={correctInputs.isSpeedInputCorrect ? '' : 'incorrect-value'}
                    onChange={handleSpeedChange}
                />
            </div>
            <div className={'side-menu-input-container'}>
                Кол-во вершин:{' '}
                <input
                    type={'number'}
                    id={'input-num-of-nodes'}
                    className={correctInputs.isNumOfNodesInputCorrect ? '' : 'incorrect-value'}
                    onChange={handleNumOfNodesChange}
                />
            </div>
            <div className={'side-menu-input-container'}>
                Размер популяции:{' '}
                <input
                    type={'number'}
                    id={'input-population-size'}
                    className={correctInputs.isPopulationSizeInputCorrect ? '' : 'incorrect-value'}
                    onChange={handlePopulationSizeChange}
                />
            </div>
            <div className={'side-menu-input-container'}>
                Вероятность мутации:{' '}
                <input
                    type={'number'}
                    id={'input-mutation-prob'}
                    className={
                        correctInputs.isMutationProbabilityInputCorrect ? '' : 'incorrect-value'
                    }
                    onChange={handleMutationProbabilityChange}
                />
            </div>
            <div className={'side-menu-input-container'}>
                Начальная точка:{' '}
                <input
                    type={'number'}
                    id={'input-start-point'}
                    className={correctInputs.isStartPointInputCorrect ? '' : 'incorrect-value'}
                    onChange={handleStartPointChange}
                    defaultValue={state.startPoint}
                />
            </div>
            <div className={'side-menu-input-container'}>
                Конечная точка:{' '}
                <input
                    type={'number'}
                    id={'input-end-point'}
                    className={correctInputs.isEndPointInputCorrect ? '' : 'incorrect-value'}
                    onChange={handleEndPointChange}
                    defaultValue={state.endPoint}
                />
            </div>
        </aside>
    );
}
