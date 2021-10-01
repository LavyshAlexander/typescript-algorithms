# Merge Sort

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

```TypeScript
function mergeSort( array: number[] ) {
    /**
     * 1. If array contains only one element or no elements then return it as is.
     * 2. Split array in two parts `leftPart` and `rightPart`.
     * 3. mergeSort( leftPart )
     * 4. mergeSort( rightPart )
     * 5. merge with sorting `leftPart` and `rightPart`.
     * /
}
```

A recursive merge sort algorithm used to sort an array of 7
integer values. These are the steps a human would take to
emulate merge sort (top-down).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg)

## Complexity

| Name              | Best        | Average     | Worst       | Memory  | Stable  |
| ------------------| :---------: | :---------: | :---------: | :-----: | :-----: |
| **Merge sort**    |  |  |  |     |      |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
