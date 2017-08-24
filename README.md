# Chess Queen Exercise

Ths exercise is very much inspired from [Queen Attack in JavaScript](http://exercism.io/exercises/javascript/queen-attack/readme)

````
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ W _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ B _
_ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _

````

## Goal

## Resources

- [Google](https://google.com?q=meehhhh+i+don't+understand) ;)
- [Unicode Chess Symbols](https://unicode-table.com/en/sets/chess-symbols/) and unicode symbol reference in general

## Steps

### 1 - Create a Checkboard

- Remove the margin of `body` in CSS
- Center the `table` and make it has big as possible (but square and... in CSS)
- Create a `.black` CSS class with a black background color
- Create a function called `cellClicked` which has 3 arguments (`rowNum`, `columnNum` and `event`).
- Create a function called `renderChessboard` which takes the `table` element as argument.

  - The function adds 8 rows (`tr`) of 8 cells (`td`) (columns), you __must__ use DOM for that because...
  - Each cell has a `click` event listener which calls the `cellClicked`
  - The function __highly__ recommended to return the matrix filled with the corresponding (`td`) elements (and you should make a variable of its result ;) ).

__Hint:__ you can reuse the logic of the [matrix exercise](https://github.com/zeropaper/x-array-matrix) code for that.


### 2 - Hightlighing a Row

- Create a CSS rule which applies to the `.highlight td` and `td.highlight` selectors and give it a blue `inset` `box-shadow` (the other parameters are up to you).
- Create a function called `highlightRow` which takes a `rowNum` argument, add a call to the `highlightRow` function you just created in your `cellClicked`
- Make so that the `highlightRow` adds the `highlight` class to the row element.

__Hint:__ have a look at the `parentNode` and `classList` properties of a DOM element to add a class to the row.


### 3 - Hightlighing a Column

- Create a function called `highlightColumn` which takes a `columnNum` argument and will add the `highlight` class to the cell element.
- Add a call to `highlightColumn` to your `cellClicked` function (if it's not already done ;) )


### 4 - Remove Highlighting

- Create a function called `removeHighlight` which removes all the `.highlight` classes in the chessboard table.
- Add a call to `removeHighlight` at the beginning of the `cellClicked` function.

__Hint:__ you could use the `.querySelectorAll()` method of DOM elements.

### 5 - Hightlighing Diagonals

- Create a function called `highlightDiagonals` which takes a `rowNum` and a `columnNum` argument and will add the `highlight` class to the cell element placed on the diagonals of the rowNum and columnNum.
- Add a call to `highlightDiagonals` to your `cellClicked` function...

<details>
<summary>Reflection about diagonals in a matrix</summary>

Given the 8x8 matrix

````
  0 1 2 3 4 5 6 7     0 1 2 3 4 5 6 7     0 1 2 3 4 5 6 7
0 _ x _ _ _ x _ _   0 x _ _ _ _ _ _ _   0 _ _ _ _ _ x _ _ 
1 _ _ x _ x _ _ _   1 _ x _ _ _ _ _ _   1 _ _ _ _ x _ _ _ 
2 _ _ _ C _ _ _ _   2 _ _ x _ _ _ _ _   2 _ _ _ x _ _ _ _ 
3 _ _ x _ x _ _ _   3 _ _ _ x _ _ _ _   3 x _ x _ _ _ _ _ 
4 _ x _ _ _ x _ _   4 _ _ _ _ x _ _ _   4 _ C _ _ _ _ _ _ 
5 x _ _ _ _ _ x _   5 _ _ _ _ _ x _ _   5 x _ x _ _ _ _ _ 
6 _ _ _ _ _ _ _ x   6 _ _ _ _ _ _ x _   6 _ _ _ x _ _ _ _ 
7 _ _ _ _ _ _ _ _   7 _ _ _ _ _ _ _ c   7 _ _ _ _ x _ _ _ 

````

</details>