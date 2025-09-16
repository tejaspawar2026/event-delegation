// document.getElementById("grandparent").addEventListener("click", (event) => {
//   alert("grandparent clicked!");
//   console.log(event);
// });
// document.getElementById("parent").addEventListener("click", (event) => {
//   alert("parent clicked!");
//   console.log(event);
// });
// document.getElementById("child").addEventListener("click", (event) => {
//   alert("child clicked!");
//   console.log(event);
// });

document.getElementById("grandparent").addEventListener("click", (event) => {
    // console.log(event.target.id);
    if (event.target.id === 'grandparent') {
        alert("grandparent clicked!");
    } else if (event.target.id === 'parent') {
        alert("parent clicked!");
    } else if (event.target.id === 'child') {
        alert("child clicked!");
    }
}, false);