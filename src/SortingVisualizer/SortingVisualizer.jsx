import React from 'react';
import './SortingVisualizer.css'


export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 200; i++) {
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }

    mergeSort() {}

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, index) => (
                    <div 
                    className="array-bar"
                    key={index}
                    style={{height: `${value}px`}}>
                    </div>
                ))}
                <div className='buttons'>
                    <button onClick={() => this.resetArray()}>Generate New Array</button>
                    <button onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button onClick={() => this.quickSort()}>Quick Sort</button>
                    <button onClick={() => this.heapSort()}>Heap Sort</button>
                    <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }