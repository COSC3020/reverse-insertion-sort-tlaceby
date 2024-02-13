[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.


## Analysis

For $reverseInsertionSort(a)$ the best-case time complexity would be $\Theta(n)$ and for the worse-case we would have a time complexity of $\Theta(n)$.

We start by iterating through each element inside the array except the last element. This gives a best/worst case time complexity of $\Theta(n - 1) = \Theta(n)$. 

The inner loop will iterate from the $i + 1$ element until the end of the array so long as the $a[j] < a[i]$. This will set $j$ to be the index at which to move the value of $a[i]$ to.

In the worst case we will *always* traverse the entire subsection of the array. This gives a time complexity of $\Theta(n^2)$ for our worst case.

In the best case the elements are already sorted and the inner loop does no iterations. This would yield a time complexity of $\Theta(n)$.

| Method                    | Best Case     | Worst Case    |
| ------------------------- | ------------- | ------------- |
| $insertionSort(a)$        | $\Theta(n)$   | $\Theta(n^2)$ |
| $reverseInsertionSort(a)$ | $\Theta(n)$   | $\Theta(n^2)$ |