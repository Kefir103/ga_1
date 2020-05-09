import React from 'react';
import SideMenu from './components/SideMenu';
import GraphMatrix from './components/GraphMatrix';
import GraphImage from './components/GraphImage';
import Population from './components/Population';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maxSpeed: 0,
            numOfNodes: 0,
            populationSize: 0,
            mutationProbability: 0,
            graphMatrix: [],
            startPoint: 0,
            endPoint: 1,
            population: [],
        };

        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handlePopulationSizeChange = this.handlePopulationSizeChange.bind(this);
        this.handleMutationProbabilityChange = this.handleMutationProbabilityChange.bind(this);
        this.handleStartPointChange = this.handleStartPointChange.bind(this);
        this.handleEndPointChange = this.handleEndPointChange.bind(this);
        this.handleGraphMatrixChange = this.handleGraphMatrixChange.bind(this);
        this.handlePopulationChange = this.handlePopulationChange.bind(this);
    }

    handleSpeedChange(speed) {
        this.setState({
            maxSpeed: speed,
        });
    }

    handleSizeChange(graphSize) {
        this.setState(() => ({
            numOfNodes: graphSize,
        }));
    }

    handlePopulationSizeChange(populationSize) {
        this.setState({
            populationSize: populationSize,
        });
    }

    handleMutationProbabilityChange(mutationProbability) {
        this.setState({
            mutationProbability: mutationProbability,
        });
    }

    handleStartPointChange(startPoint) {
        this.setState({
            startPoint: startPoint,
        });
    }

    handleEndPointChange(endPoint) {
        this.setState({
            endPoint: endPoint,
        });
    }

    handleGraphMatrixChange(graphMatrix) {
        this.setState({
            graphMatrix: graphMatrix,
        });
    }

    handlePopulationChange(population) {
        this.setState({
            population: population
        });
    }

    render() {
        return (
            <>
                <SideMenu
                    speedChanged={this.handleSpeedChange}
                    sizeChanged={this.handleSizeChange}
                    mutationProbabilityChanged={this.handleMutationProbabilityChange}
                    populationSizeChanged={this.handlePopulationSizeChange}
                    startChanged={this.handleStartPointChange}
                    endChanged={this.handleEndPointChange}
                />
                <main className={'main'}>
                    {this.state.numOfNodes !== 0 ? (
                        <>
                            <GraphMatrix
                                graphSize={this.state.numOfNodes}
                                maxSpeed={this.state.maxSpeed}
                                graphChanged={this.handleGraphMatrixChange}
                            />
                            <GraphImage
                                numOfNodes={this.state.numOfNodes}
                                graph={this.state.graphMatrix}
                                startPoint={this.state.startPoint}
                                endPoint={this.state.endPoint}
                                maxSpeed={this.state.maxSpeed}
                            />
                        </>
                    ) : (
                        ''
                    )}
                    {this.state.populationSize !== 0 ? (
                        <Population
                            key={'input-population'}
                            populationChanged={this.handlePopulationChange}
                            populationDesc={'Исходная популяция'}
                            populationSize={this.state.populationSize}
                            graphMatrix={this.state.graphMatrix}
                            startPoint={this.state.startPoint}
                            endPoint={this.state.endPoint}
                        />
                    ) : (
                        ''
                    )}
                </main>
            </>
        );
    }
}
