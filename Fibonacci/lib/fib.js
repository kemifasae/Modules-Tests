module.exports =  fib = (num) => {
    if (num === 1 || num === 0) return 1;
    return fib(num - 1) + fib(num - 2);
}

