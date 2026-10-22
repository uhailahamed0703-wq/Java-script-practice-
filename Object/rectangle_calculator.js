let rectangle={
    width:10,
    height:5,

    getArea: function(){
        return this.width * this.height
    },

    getPerimeter: function(){
        return (this.width + this.height)*2
    }
}
console.log("Width:", rectangle.width);
console.log("Height:", rectangle.height);
console.log("Area:", rectangle.getArea());
console.log("Perimeter:", rectangle.getPerimeter());