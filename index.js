Promise.all(
    import('a'),
    import('b')
).then((a, b) => {
    console.log(a);
    console.log(b);
});
