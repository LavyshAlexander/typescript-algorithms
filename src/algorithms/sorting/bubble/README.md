# Bubble Sort

<img
    align="left" width="300px" alt="Bubble Sort Algorithm Visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif"
/>

> Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements
> and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.
> The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top
> of the list.
>
> This simple algorithm performs poorly in real world use and is used primarily as an educational tool.

<br />
<br />
<br />

---

## Algorithm

```TypeScript
function bubbleSort( array: number[] ): number[] {
    /**
     * 1. Set `flag` that indicates that loop should run again to `true`
     * 2. Run through array and compare each pair of `i` and `i + 1` array items.
     * 3. If their relation is not as expected by comparing rule then swap them and set `flag` to true.
     * 4. If `flag` is true and outer loop wasn't run for array length times already then run loop again.
     */
}
```

## Complexity

| Name               | Best            | Average             | Worst               | Memory    | Stable    |
| ------------------ | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Bubble sort**    | Θ(n)            | Θ(n<sup>2</sup>)    | Θ(n<sup>2</sup>)    | Θ(1)      | Yes       |


## References

[Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
