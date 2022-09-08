import React from 'react';
import { mergeSortFunction } from '../sortingAlgorithms/mergeSort';
import { merge } from '../sortingAlgorithms/mergeSort';
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
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5,600));
        }
        this.setState({array});
    }

    mergeSort() {
        const result = mergeSortFunction(this.state.array);
        const test = this.state.array.slice().sort((a, b) => a - b);
        console.log(arraysAreEqual(result, test));
    }

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


function arraysAreEqual(array1, array2) {
    if(array1.length !== array2.length) return false;
    for (let i=0; i<array1.length; i++) {
        if(array1[i] !== array2[i]) return false;
    }
    return true;
}