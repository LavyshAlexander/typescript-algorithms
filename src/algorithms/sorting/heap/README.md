# Heap Sort

```TypeScript
function heapSort( array: number[] ): number[] {
    /**
     * 1. Order array elements so they represent binary heap: array[i] >= array[2 * i + 1] && array[i] >= array[2 * i + 2], 0 <= i < n / 2
     * 2. Swap array[0] and array[n - 1] and reorder a[0]...a[n - 2] like in 1st step.
     * 3. Repeat 2nd step until array to be reordered will not be a[0].
     * /
}
```

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Complexity

| Name             | Best        | Average     | Worst       | Memory  | Stable  |
| -----------------| :---------: | :---------: | :---------: | :-----: | :-----: |
| **Heap sort**    | Θ(n*log(n)) | Θ(n*log(n)) | Θ(n*log(n)) | Θ(1)    | No      |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
