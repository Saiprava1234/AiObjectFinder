function preload(){

}
function setup(){
    canvas = createCanvas(440,320);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 440, 320);
}