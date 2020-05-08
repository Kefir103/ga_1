import React, { Component } from 'react';
import random from 'random';

export default class GraphMatrix extends Component {
    constructor(props) {
        super(props);

        this.state = {
            graphMatrix: [],
        };

        this.fillGraphMatrix = this.fillGraphMatrix.bind(this);
        this.handleGraphElementChanged = this.handleGraphElementChanged.bind(this);
    }

    componentDidMount() {
        this.fillGraphMatrix(this.props.graphSize, this.props.maxSpeed);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.graphSize !== nextProps.graphSize || this.props.maxSpeed !== nextProps.maxSpeed) {
            this.fillGraphMatrix(nextProps.graphSize, nextProps.maxSpeed);
        }
    }

    fillGraphMatrix(size, speed) {
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
        this.setState({
            graphMatrix: graphMatrix,
        });
    }

    handleGraphElementChanged(event, i, j) {
        event.preventDefault();
        const element = Number(event.target.value);
        const graphMatrix = this.state.graphMatrix;
        graphMatrix[i][j] = element;
        event.target.value = element;
        this.setState({
            graphMatrix: graphMatrix
        });
    }

    render() {
        return (
            <>
                <p>Матрица графа</p>
                <div
                    id={'graph-matrix'}
                    style={{
                        display: 'inline-grid',
                        gridTemplateRows: `repeat(${this.props.graphSize}, 40px)`,
                        gridTemplateColumns: `repeat(${this.props.graphSize}, 40px`,
                        gridGap: '3px',
                    }}>
                    {this.state.graphMatrix.map((array, i) => {
                        return array.map((value, j) => {
                            return (
                                <input
                                    type={'text'}
                                    className={'graph-matrix-element'}
                                    value={value}
                                    onChange={(event) => this.handleGraphElementChanged(event, i, j)}
                                />
                            );
                        });
                    })}
                </div>
                <hr />
            </>
        );
    }
}
