# Comb Sort

<img
    align="left" width="300px" alt="Comb sort with shrink factor k=1.24733"
    src="https://upload.wikimedia.org/wikipedia/commons/4/46/Comb_sort_demo.gif"
/>


> Comb sort is a relatively simple sorting algorithm that improves on bubble sort in the same way that
> Shellsort improves on insertion sort by increasing gap between compared elements.

<div style="clear: both" />

---

## Algorithm

```TypeScript
function combSort( array: number[] ): number[] {
    /**
     * 1. Define `shrink` factor (in current implementation you can find it equal 1.24733)
     * 2. Define `gap` as `n / shrink`, where `n` is length of array.
     * 3. Loop through array and compare `array[i]` and `array[i + gap]` elements, swap them if their order is incorrect.
     * 4. Set `gap` as `gap / shrink` and repeat 3rd and 4th step until `gap` is not equal `1`.
     * 5. Sort `array` with `gap` equal `1` until it is not sorted.
     */
}
```

## Complexity

| Name           | Best            | Average                                 | Worst               | Memory    | Stable    |
| -------------- | :-------------: | :-------------------------------------: | :-----------------: | :-------: | :-------: |
| **Comb sort**  | Θ(n * log(n))   | Θ(n<sup>2</sup> / 2<sup>shrink</sup>)   | Θ(n<sup>2</sup>)    | Θ(1)      | Yes       |


## References

[Wikipedia](https://en.wikipedia.org/wiki/Comb_sort)
