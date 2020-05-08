import React from 'react';
import { Graph } from 'react-d3-graph';

export default class GraphImage extends React.Component {
    static defaultProps = {
        config: {
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
        },
    };

    constructor(props) {
        super(props);

        this.state = {
            data: {
                nodes: [{ id: 1 }],
                links: [],
            },
        };

        this.handleGraphDataChanged = this.handleGraphDataChanged.bind(this);
    }

    componentDidMount() {
        this.handleGraphDataChanged(this.props);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.handleGraphDataChanged(nextProps);
    }

    handleGraphDataChanged(props) {
        if (props.graph.length !== 0) {
            const data = {
                nodes: [],
                links: [],
            };
            for (let i = 0; i < props.graph.length; ++i) {
                if (i === props.startPoint) {
                    data.nodes.push({ id: i, color: 'green' });
                } else if (i === props.endPoint) {
                    data.nodes.push({ id: i, color: 'red' });
                } else {
                    data.nodes.push({ id: i });
                }
                for (let j = i + 1; j < props.graph[i].length; ++j) {
                    if (props.graph[i][j] !== props.maxSpeed * 100) {
                        data.links.push({ source: i, target: j });
                    }
                }
            }
            this.setState({
                data: data,
            });
        }
    }

    render() {
        return (
            <>
                <p>Граф сети</p>
                <Graph id={'graph-image'} data={this.state.data} config={this.props.config} />
            </>
        );
    }
}
