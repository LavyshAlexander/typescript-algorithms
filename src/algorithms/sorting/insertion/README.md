# Insertion Sort


<img
    align="left" width="300px" alt="Insertion sort algorithm visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif"
/>


> **Insertion sort** is a simple sorting algorithm that builds the final sorted array (or list) one item at a time.
> It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge
> sort. However, insertion sort provides several advantages:
>
> * Simple implementation: Jon Bentley shows a three-line C version, and a five-line optimized version[1]
> * Efficient for (quite) small data sets, much like other quadratic sorting algorithms
> * More efficient in practice than most other simple quadratic (i.e., O(n2)) algorithms such as selection sort or bubble sort
> * Adaptive, i.e., efficient for data sets that are already substantially sorted: the time complexity is O(kn) when each element in the input is no more than k places away from its sorted position
> * Stable; i.e., does not change the relative order of elements with equal keys
> * In-place; i.e., only requires a constant amount O(1) of additional memory space
> * Online; i.e., can sort a list as it receives it,
>
> __When people manually sort cards in a bridge hand, most use a method that is similar to insertion sort__

<br clear="left" />

<img
    align="left" width="300px" alt="Example of insertion sort"
    src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif"
/>

<br clear="both"/>

---

## Algorithm

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

## Complexity

| Name                  | Best | Average             | Worst               | Memory  | Stable  |
| --------------------- | :--: | :-----------------: | :-----------------: | :-----: | :-----: |
| **Insertion sort**    | Θ(n) | Θ(n<sup>2</sup>)    | Θ(n<sup>2</sup>)    | Θ(1)    | Yes     |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)
