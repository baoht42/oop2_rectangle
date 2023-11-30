class Rectangle{
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    calArea(){
        return this.width*this.length;
    }
    calV(){
        return (this.width+this.length)*2;
    }
    canvasRec(){
        const canvas = document.getElementById("myCanvas")
        if (canvas){
            const myCanvas = canvas.getContext("2d");
            // myCanvas.clearRect(0,0, canvas.width, canvas.length);
            myCanvas.fillStyle = "#0033ff";
            myCanvas.fillRect(10,10, this.width, this.length);
        }else {
            alert("canvas not found")
        }
}
}
let w = prompt("nhap vao rộng: ");
let l = prompt("nhap vao dài");
const myRectangle = new Rectangle(w,l);
console.log(`Chu vi: ${myRectangle.calV()}`);
console.log(`Dien tich: ${myRectangle.calArea()}`);
myRectangle.canvasRec();