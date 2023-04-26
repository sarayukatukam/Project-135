Status = "";
ac_image = "";

function preload() {
    ac_image = loadImage("AC.JPG");
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
    object_detector.Detect(ac_image,gotResults);
}

function gotResults() {
    if(error){
        console.error(error);
    }
    console.log(results);
}

function draw() {
    image(ac_image,0,0,640,350);
}