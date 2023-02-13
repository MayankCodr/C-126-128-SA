song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function preload(){
    song = loadSound("music.mp3");
    song1 = loadSound("peter_pan.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.position(470, 240);

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log("Pose net is intialised");
}
function gotPoses(results){
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left wrist x:" + leftWristX + "y :" + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right wrist x:" + rightWristX + "y :" + rightWristY);

    }
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play_song(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1);
}
function pause_song(){
    song1.pause();
}
function stop_song(){
    song1.stop();
}