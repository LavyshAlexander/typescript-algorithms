# Odd-Even Sort

<img
    align="left" width="300px" alt="Odd-Even Sort Algorithm Visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Odd_even_sort_animation.gif"
/>

> In computing, an odd–even sort or odd–even transposition sort is a relatively simple sorting algorithm,
> developed originally for use on parallel processors with local interconnections. It is a comparison sort
> related to bubble sort, with which it shares many characteristics. It functions by comparing all odd/even
> indexed pairs of adjacent elements in the list and, if a pair is in the wrong order
> (the first is larger than the second) the elements are switched. The next step repeats this for even/odd
> indexed pairs (of adjacent elements). Then it alternates between odd/even and even/odd steps until the list is sorted.

<br clear="both"/>

---

## Algorithm

```TypeScript
function oddEvenSort( array: number[] ): number[] {
    /**
     * 1. Set flag that indicates that loop should run again to true
     * 2. Run through array and compare each pair of i and i + 1 array items with step for i equals to 2 and initial value 0.
     * 3. If their relation is not as expected by comparing rule then swap them and set flag to true.
     * 4. Run through array and compare each pair of i and i + 1 array items with step for i equals to 2 and initial value 1.
     * 4. If flag is true and outer loop wasn't run for array length times already then run loop again.
     */
}
```

## Complexity

| Name               | Best            | Average             | Worst               | Memory    | Stable    |
| ------------------ | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Odd-Even sort**  | Θ(n)            | Θ(n<sup>2</sup>)    | Θ(n<sup>2</sup>)    | Θ(1)      | Yes       |


## References

[Wikipedia](https://en.wikipedia.org/wiki/Odd%E2%80%93even_sort)
