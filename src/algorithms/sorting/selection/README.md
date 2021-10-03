# Selection Sort


<img
    align="left" width="300px" alt="Selection sort algorithm visualization"
    src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Selection_sort_animation.gif"
/>

> In computer science, selection sort is an in-place comparison sorting algorithm.
> It has an Θ(n<sup>2</sup>) time complexity, which makes it inefficient on large lists
> and generally performs worse than the similar insertion sort. Selection sort is noted
> for its simplicity and has performance advantages over more complicated algorithms in
> certain situations, particularly where auxiliary memory is limited.

<br clear="both"/>

---

## Algorithm

```TypeScript
/**
 * 1. Define `minIndex` equal to `0`.
 * 2. Loop through `array` from 'minIndex + 1' and find index of min value.
 * 3. If `minIndex` not equal to founded min value, swap that `array` items.
 * 4. Increment `minIndex` and repeat from 1st step until `minIndex` is less then `array` length.
 * /
```

## Complexity

| Name                  | Best             | Average             | Worst               | Memory    | Stable    |
| --------------------- | :--------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Selection sort**    | Θ(n<sup>2</sup>) | Θ(n<sup>2</sup>)    | Θ(n<sup>2</sup>)    | Θ(1)      | No        |

## References

[Wikipedia](https://en.wikipedia.org/wiki/Selection_sort)
