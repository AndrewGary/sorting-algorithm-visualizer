export const allAlgorithms = [
    {
        name: 'Selection Sort'
    },
    {
        name: 'Bubble Sort'
    },
    {
        name: 'Recursive Bubble Sort'
    },
    {
        name: 'Insertion Sort'
    },
    {
        name: 'Recursive Insertion Sort'
    },
    {
        name: 'Merge Sort'
    },
    {
        name: 'Iterative Merge Sort'
    },
    {
        name: 'Quick Sort'
    },
    {
        name: 'Iterative Quick Sort'
    },
    {
        name: 'Heap Sort'
    },
    {
        name: 'Counting Sort'
    },
    {
        name: 'Radix Sort'
    },
    {
        name: 'Bucket Sort'
    },
    {
        name: 'Shell Sort'
    },
    {
        name: 'Tim Sort'
    },
    {
        name: 'Comb Sort'
    },
    {
        name: 'Pigeonhole Sort'
    },
    {
        name: 'Cycle Sort'
    },
    {
        name: 'Cocktail Sort'
    },
    {
        name: 'Strand Sort'
    },
    {
        name: 'Bitonic Sort'
    },
    {
        name: 'Pancake Sorting'
    }
]

export const returnUnsortedArray = (sizeOfArray) => {
    
    const randomArray = [];
    for(let i = 0; i < sizeOfArray; i++){
        randomArray.push(Math.floor(Math.random() * 500))
    }

    return randomArray;
}