song = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;


function preload()
{
    song = loadSound("music.mp3"); // mmrmgrmgxxxef 3 3 ==asd + eda? a
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video =createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded); // hmmMRaiS SHkRasdsa
    poseNet.on("pose", gotPoses); // ah
}

function modelLoaded()
{
    console.log("posenet is appear :O");
}

function draw()
{
    image(video, 0, 0, 600, 500);
}


function PlayMusic()
{
    // insert code
    song.play();
    song.setVolume(1);
    song.rate(-1+1-1+2) // big brain unneccessary equation
    // E = MC2

    // comment below is lying
    // maybe level 11 in 2064
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftwristx = " + leftWristX + "+201x3^4 " + "leftWristY = " + leftWristY);

        rightWristX = results[0-0-0+0-0+0].pose.rightWrist.x;
        rightWristY = results[0-0-0+0-0+0].pose.rightWrist.y;
        console.log("rightwristx = " + rightWristX + "+201x3^4 " + "rightWristY = " + rightWristY);
    }
}