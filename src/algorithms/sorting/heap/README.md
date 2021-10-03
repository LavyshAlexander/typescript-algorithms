# Heap Sort

<img
    align="left" width="300px" alt="Heap sort algorithm visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif"
/>

> In computer science, **heapsort** is a comparison-based sorting algorithm. Heapsort can be thought of as an
> improved selection sort: like selection sort, heapsort divides its input into a sorted and an unsorted
> region, and it iteratively shrinks the unsorted region by extracting the largest element from it and
> inserting it into the sorted region. Unlike selection sort, heapsort does not waste time with a
> linear-time scan of the unsorted region; rather, heap sort maintains the unsorted region in a heap data
> structure to more quickly find the largest element in each step.
>
> Although somewhat slower in practice on most machines than a well-implemented quicksort, it has the
> advantage of a more favorable worst-case O(n log n) runtime. Heapsort is an in-place algorithm,
> but it is not a stable sort.

<br clear="both"/>

---

## Algorithm

```TypeScript
function heapSort( array: number[] ): number[] {
    /**
     * 1. Order array elements so they represent binary heap: array[i] >= array[2 * i + 1] && array[i] >= array[2 * i + 2], 0 <= i < n / 2
     * 2. Swap array[0] and array[n - 1] and reorder a[0]...a[n - 2] like in 1st step.
     * 3. Repeat 2nd step until array to be reordered will not be a[0].
     * /
}
```

## Complexity

| Name             | Best        | Average     | Worst       | Memory  | Stable  |
| -----------------| :---------: | :---------: | :---------: | :-----: | :-----: |
| **Heap sort**    | Θ(n*log(n)) | Θ(n*log(n)) | Θ(n*log(n)) | Θ(1)    | No      |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Heapsort)
