import React, { useReducer } from 'react';
import { SideMenu } from './components/SideMenu';
import { GraphMatrix } from './components/GraphMatrix';
import { GraphImage } from './components/GraphImage';
import { Population } from './components/Population';
import { initialState } from './reducer/initialState';
import { appReducer } from './reducer/appReducer';
import { AppContext } from './reducer/appReducer';

export function App() {
    const [state, dispatch] = useReducer(appReducer, initialState);

    return (
        <AppContext.Provider
            value={{
                state: state,
                dispatch: dispatch,
            }}>
            <SideMenu key={'Side Menu'} />
            <main className={'main'} key={'main'}>
                {state.numOfNodes !== 0 && (
                    <>
                        <GraphMatrix key={'Graph Matrix'} />
                        <GraphImage key={'Graph Image'} />
                    </>
                )}
                {state.populationSize !== 0 && (
                    <Population key={'Population'} populationDesc={'Исходная популяция'} />
                )}
            </main>
        </AppContext.Provider>
    );
}
