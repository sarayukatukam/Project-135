Status = "";
toys_image = "";

function preload() {
    toys_image = loadImage("Toys.JPG");
} 

function setup() {
    canvas = createCanvas(640,350);
    canvas.position(315,200);
    object_detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_detector.Detect(toys_image,gotResults);
}

function gotResults() {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(toys_image,0,0,640,350);
}