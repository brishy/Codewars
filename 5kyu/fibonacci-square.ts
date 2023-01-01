// The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

// Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in the same manner as in the drawing:

export const perimeter = (n: number): number => {
  let fib0: number = 0;
  let fib1: number = 1;
  let fib: number = 0;
  let sum: number = 2; // Start with 2 since the first two squares have side lengths of 1

  for (let i = 2; i <= n; i++) {
    fib = fib0 + fib1;
    fib0 = fib1;
    fib1 = fib;
    sum = sum + fib + fib0;
  }

  return 4 * sum;
};
