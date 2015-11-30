var arr = [];

arr.push(function() {
        console.log("Hello 1");
});

arr.push(function() {
        console.log("Hello 2");
});

arr.push(function() {
        console.log("Hello 3");
});

arr.forEach(function(item){
        item();
})
