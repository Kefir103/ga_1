import React from 'react';
import Chromosome from './Chromosome';

export default class Population extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            population: [],
        };

        this.fillPopulation = this.fillPopulation.bind(this);
        this.addToPopulation = this.addToPopulation.bind(this);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.populationSize < this.props.populationSize) {
            const population = this.state.population;
            for (let i = 0; i < this.props.populationSize - nextProps.populationSize; ++i) {
                population.pop();
            }
            this.setState({
                population: population,
            });
            this.props.populationChanged(population);
        }
    }

    addToPopulation(chromosome) {
        const population = this.state.population;

        population.push(chromosome);

        this.setState({
            population: population,
        });

        this.props.populationChanged(population);
    }

    fillPopulation(populationSize) {
        const renderedPopulation = [];
        for (let i = 0; i < populationSize; ++i) {
            renderedPopulation.push(
                <Chromosome
                    handlePopulation={this.addToPopulation}
                    graph={this.props.graphMatrix}
                    startPoint={this.props.startPoint}
                    endPoint={this.props.endPoint}
                    index={i}
                />
            );
        }
        return renderedPopulation;
    }

    render() {
        return (
            <div className={'population'}>
                <p>{this.props.populationDesc}</p>
                {this.fillPopulation(this.props.populationSize)}
            </div>
        );
    }
}
