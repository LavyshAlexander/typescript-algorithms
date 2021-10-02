# Insertion Sort

```TypeScript
function insertionSort( array: number[] ): number[] {
    /**
     * 1. Split array in two parts:
     * 2. Left part is initially consist of only one zero-indexed element, and that part is always stays sorted.
     * 3. Right part is equal to other part of array that is not placed in left sorted part.
     * 4. Take first element of right part and put in corresponding position of left part.
     * 5. Repeat 4th step until right part has no elements.
     * /
}
```

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## Complexity

| Name                  | Best | Average             | Worst               | Memory  | Stable  |
| --------------------- | :--: | :-----------------: | :-----------------: | :-----: | :-----: |
| **Insertion sort**    | Θ(n) | Θ(n<sup>2</sup>)    | Θ(n<sup>2</sup>)    | Θ(1)    | Yes     |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
