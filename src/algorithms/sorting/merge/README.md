# Merge Sort


<img
    align="left" width="300px" alt="Merge sort algorithm visualizatoin"
    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif"
/>

> In computer science, merge sort (also commonly spelled as mergesort) is an efficient,
> general-purpose, and comparison-based sorting algorithm. Most implementations produce a
> stable sort, which means that the order of equal elements is the same in the input and
> output. Merge sort is a divide and conquer algorithm that was invented by John von Neumann
> in 1945.

<br clear="both"/>

---

## Algorithm


```TypeScript
function mergeSort( array: number[] ): number[] {
    /**
     * 1. If array contains only one element or no elements then return it as is.
     * 2. Split array in two parts leftPart and rightPart.
     * 3. mergeSort( leftPart )
     * 4. mergeSort( rightPart )
     * 5. merge with sorting leftPart and rightPart.
     * /
}
```

## Complexity

| Name              | Best        | Average     | Worst       | Memory  | Stable  |
| ------------------| :---------: | :---------: | :---------: | :-----: | :-----: |
| **Merge sort**    |  |  |  |     |      |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
