import React, { Component } from 'react';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            maxSpeed: 0,
            numOfNodes: 0,
            populationSize: 0,
            mutationProbability: 0,
        };

        this.handleSpeedChange = this.handleSpeedChange.bind(this);
        this.handleSizeChange = this.handleSizeChange.bind(this);
        this.handlePopulationSizeChange = this.handlePopulationSizeChange.bind(this);
        this.handleMutationProbabilityChange = this.handleMutationProbabilityChange.bind(this);
    }

    handleSpeedChange(event) {
        event.preventDefault();
        const speed = Number(event.target.value);
        if (speed < 0) {
            document.getElementById('input-max-speed').style.border = '1.25px solid #e42d2d';
            return;
        }
        document.getElementById('input-max-speed').style.border = '1.25px solid gray';
        this.setState({
            maxSpeed: speed,
        });
        this.props.speedChanged(speed);
    }

    handleSizeChange(event) {
        event.preventDefault();
        const size = Number(event.target.value);
        if (size < 0) {
            document.getElementById('input-size').style.border = '1.25px solid #e42d2d';
            return;
        }
        document.getElementById('input-size').style.border = '1.25px solid gray';
        this.setState({
            numOfNodes: size,
        });
        this.props.sizeChanged(size);
    }

    handlePopulationSizeChange(event) {
        event.preventDefault();
        const populationSize = Number(event.target.value);
        if (populationSize < 0) {
            document.getElementById('input-population-size').style.border = '1.25px solid #e42d2d';
            return;
        }
        document.getElementById('input-population-size').style.border = '1.25px solid gray';
        this.setState({
            populationSize: populationSize,
        });
        this.props.populationSizeChanged(populationSize);
    }

    handleMutationProbabilityChange(event) {
        event.preventDefault();
        const mutationProbability = Number(event.target.value);
        if (mutationProbability < 0) {
            document.getElementById('input-mutation-prob').style.border = '1.25px solid #e42d2d';
            return;
        }
        document.getElementById('input-mutation-prob').style.border = '1.25px solid gray';
        this.setState({
            mutationProbability: mutationProbability,
        });
        this.props.mutationProbabilityChanged(mutationProbability);
    }

    render() {
        return (
            <aside className={'side-menu'}>
                <p>Генетические алгоритмы №1</p>
                <hr />
                <div className={'side-menu-input-container'}>
                    Пропускная способность:{' '}
                    <input
                        type={'number'}
                        id={'input-max-speed'}
                        onChange={this.handleSpeedChange}
                    />
                </div>
                <div className={'side-menu-input-container'}>
                    Кол-во вершин:{' '}
                    <input type={'number'} id={'input-size'} onChange={this.handleSizeChange} />
                </div>
                <div className={'side-menu-input-container'}>
                    Размер популяции:{' '}
                    <input
                        type={'number'}
                        id={'input-population-size'}
                        onChange={this.handlePopulationSizeChange}
                    />
                </div>
                <div className={'side-menu-input-container'}>
                    Вероятность мутации:{' '}
                    <input
                        type={'number'}
                        id={'input-mutation-prob'}
                        onChange={this.handleMutationProbabilityChange}
                    />
                </div>
            </aside>
        );
    }
}
