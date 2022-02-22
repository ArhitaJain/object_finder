function setup()
{
  canvas = createCanvas(680 ,300);
  canvas.center();

  video = createCapture(VIDEO);
  video.hide();
}

function draw()
{
    image(video,0,0,600,530);
}