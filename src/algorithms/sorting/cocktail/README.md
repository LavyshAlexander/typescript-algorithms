# Cocktail Shaker Sort


<img
    align="left" width="300px" alt="Cocktail sort algorithm visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif"
/>

> Cocktail shaker sort is an extension of bubble sort. The algorithm extends bubble sort by operating in two directions.
> While it improves on bubble sort by more quickly moving items to the beginning of the list, it provides only marginal
> performance improvements.
> Also known as bidirectional bubble sort, cocktail sort, shaker sort, ripple sort, shuffle sort, or shuttle sort.
>
> Like most variants of bubble sort, cocktail shaker sort is used primarily as an educational tool. More performant
> algorithms such as timsort, or merge sort are used by the sorting libraries built into popular programming languages.

<br />
<br />
<br />

---

## Algorithm

```TypeScript
function cocktailSort( array: number[] ): number[] {
    /**
     * 1. Define `sorted` flag to `false`, `start index` equal to `0` and `end index` to `n`.
     * 2. While `sorted` is `false` do:
     * 3. Set `sorted` to `true`.
     * 4. Loop through `i` equal `start index` until `i` is less then `end index`.
     * 5. If `array[i]` > `array[i + 1]` then swap them and set `sorted` to `false`.
     * 6. Loop through `i` equal `end index` until `i` is bigger then `start index`.
     * 7. If `array[i - 1]` > `array[i]` then swap them and set `sorted` to `false`.
     * 8. Increase `start index` and decrease `end index` by `1`.
     */
}
```

## Complexity

| Name               | Best   | Average           | Worst               | Memory    | Stable    |
| ------------------ | :----: | :---------------: | :-----------------: | :-------: | :-------: |
| **Cocktail sort**  | Θ(n)   | Θ(n<sup>2</sup>)  | Θ(n<sup>2</sup>)    | Θ(1)      | Yes       |


## References

[Wikipedia](https://en.wikipedia.org/wiki/Cocktail_shaker_sort)
