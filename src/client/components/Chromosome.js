import React from 'react';
import random from 'random';

export default class Chromosome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chromosome: {
                genArr: [],
                fitness: 0,
            },
        };

        this.fillChromosome = this.fillChromosome.bind(this);
    }

    componentDidMount() {
        this.fillChromosome(this.props.graph, this.props.startPoint, this.props.endPoint);
    }

    fillChromosome(graph, startPoint, endPoint) {
        const chromosome = {
            genArr: [],
            fitness: 0,
        };

        chromosome.genArr.push(startPoint);

        for (let i = 1; i < graph.length - 1; ++i) {
            chromosome.genArr.push(random.integer(0, graph.length - 1));
        }

        chromosome.genArr.push(endPoint);

        chromosome.fitness = this.fitnessFunction(graph, chromosome.genArr);

        this.setState({
            chromosome: chromosome,
        });

        this.props.handlePopulation(chromosome);
    }

    fitnessFunction(graph, genArr) {
        let sum = 0;

        for (let i = 1; i < genArr.length; ++i) {
            sum += graph[genArr[i - 1]][genArr[i]];
        }

        return sum;
    }

    render() {
        return [
            <p>Хромосома {this.props.index} (F = {this.state.chromosome.fitness})</p>,
            <div className={'chromosome'}>
                {this.state.chromosome.genArr.length !== 0
                    ? this.state.chromosome.genArr.map((gen, index) => {
                          if (index === 0 || index === this.state.chromosome.genArr.length - 1) {
                              return <input type={'text'} value={gen} />;
                          }
                          return <input type={'text'} value={gen} />;
                      })
                    : ''}
            </div>,
        ];
    }
}
