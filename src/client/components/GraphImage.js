import React, { useContext, useEffect, useState } from 'react';
import { Graph } from 'react-d3-graph';
import { AppContext } from '../reducer/appReducer';

export function GraphImage(props) {
    const { state, dispatch } = useContext(AppContext);

    const graphConfig = {
        nodeHighlightBehavior: true,
        linkHighlightBehavior: true,
        node: {
            color: 'gray',
            size: 500,
            highlightStrokeColor: 'blue',
            fontSize: 14,
            highlightFontSize: 14,
        },
        link: {
            highlightColor: 'blue',
        },
        minZoom: 1,
        maxZoom: 1,
        linkStrength: 1.5,
    };

    const [graphData, setGraphData] = useState(null);

    useEffect(() => {
        handleGraphDataChanged();
    }, [state.graphMatrix]);

    function handleGraphDataChanged() {
        if (state.graphMatrix.length !== 0) {
            const data = {
                nodes: [],
                links: [],
            };

            for (let i = 0; i < state.graphMatrix.length; ++i) {
                if (i === state.startPoint) {
                    data.nodes.push({ id: i, color: 'green' });
                } else if (i === state.endPoint) {
                    data.nodes.push({ id: i, color: 'red' });
                } else {
                    data.nodes.push({ id: i });
                }

                for (let j = i + 1; j < state.graphMatrix[i].length; ++j) {
                    if (state.graphMatrix[i][j] < state.maxSpeed * 100) {
                        data.links.push({ source: i, target: j });
                    }
                }
            }

            setGraphData(data);
        }
    }

    return (
        <>
            <p>Граф сети</p>
            {graphData && <Graph id={'graph-image'} data={graphData} config={graphConfig} />}
            <hr />
        </>
    );
}
