import { ActionTypes } from './actionTypes';
import React from 'react';

export const AppContext = React.createContext();

export function appReducer(state, action) {
    switch (action.type) {
        case ActionTypes.SET_MAX_SPEED: {
            return {
                ...state,
                maxSpeed: action.payload,
            };
        }
        case ActionTypes.SET_START_POINT: {
            return {
                ...state,
                startPoint: action.payload,
            };
        }
        case ActionTypes.SET_END_POINT: {
            return {
                ...state,
                endPoint: action.payload,
            };
        }
        case ActionTypes.SET_NUM_OF_NODES: {
            return {
                ...state,
                numOfNodes: action.payload,
            };
        }
        case ActionTypes.SET_POPULATION_SIZE: {
            return {
                ...state,
                populationSize: action.payload,
            };
        }
        case ActionTypes.SET_MUTATION_PROBABILITY: {
            return {
                ...state,
                mutationProbability: action.payload,
            };
        }
        case ActionTypes.SET_GRAPH_MATRIX: {
            return {
                ...state,
                graphMatrix: action.payload,
            };
        }
        case ActionTypes.SET_POPULATION: {
            return {
                ...state,
                population: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}
