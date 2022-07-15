let click:"click"
click = "click"
// click = "another value" //error
console.log(click)

let mouseEvent: "click"| "dbclick" | "mouseup" | "mousedown"

mouseEvent = "click"
mouseEvent = "dbclick"
mouseEvent = "mouseup" 
mouseEvent = "mousedown"
// mouseEvent = "another value"  //error
console.log(mouseEvent)


// ` If you use the string literal types in multiple places, they will be very verbose. To avoid this, you can use the type aliases. For example: `

type MouseEvent1 = "click"| "dblclick" | "mouseup" | "mousedown"
let mouseevent1:MouseEvent1

mouseevent1 = 'click'; // valid
mouseevent1 = 'dblclick'; // valid
mouseevent1 = 'mouseup'; // valid
mouseevent1 = 'mousedown'; // valid
// mouseevent1 = 'mouseover'; // compiler error