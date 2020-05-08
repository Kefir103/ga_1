import React from 'react';
import SideMenu from './components/SideMenu';
import GraphMatrix from './components/GraphMatrix';

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            maxSpeed: 0,
            numOfNodes: 0,
            populationSize: 0,
            mutationProbability: 0,
            graphMatrix: [],
        };

        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handlePopulationSizeChange = this.handlePopulationSizeChange.bind(this);
        this.handleMutationProbabilityChange = this.handleMutationProbabilityChange.bind(this);
    }

    handleSpeedChange(speed) {
        this.setState({
            maxSpeed: speed,
        });
    }

    handleSizeChange(graphSize) {
        this.setState({
            numOfNodes: graphSize,
        });
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

    render() {
        return (
            <>
                <SideMenu
                    speedChanged={this.handleSpeedChange}
                    sizeChanged={this.handleSizeChange}
                    mutationProbabilityChanged={this.handleMutationProbabilityChange}
                    populationSizeChanged={this.handlePopulationSizeChange}
                />
                <main className={'main'}>
                    {this.state.numOfNodes !== 0 ? (
                        <GraphMatrix graphSize={this.state.numOfNodes} maxSpeed={this.state.maxSpeed}/>
                    ) : (
                        ''
                    )}
                </main>
            </>
        );
    }
}
