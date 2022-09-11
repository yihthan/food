const videoElement = document.getElementById('input_video');
const canvasElement = document.getElementById('output_canvas');
const canvasCtx = canvasElement.getContext('2d');
videoElement.setAttribute('autoplay', '');
videoElement.setAttribute('muted', '');
videoElement.setAttribute('playsinline', '');

const canvasElement2 = document.getElementById("output_canvas2");
const canvasCtx2 = canvasElement2.getContext('2d');

var age = 0;
var agestr = "";
var salary = 0;
var salarystr = "";
var gender = 0;
var genderstr = "";
var region = 0;
var regionstr = "";
var counter = 0;
var clickcounter1 = 0;
var clickcounter2 = 0;
var clickcounter3 = 0;
var video = document.querySelector("#input_video");

function onResults(results) {
  
  var cx,cy;	
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  canvasCtx.drawImage(
      results.image, 0, 0, canvasElement.width, canvasElement.height);
  if (results.multiHandLandmarks) {
    for (const landmarks of results.multiHandLandmarks) {
	  var myJSON = JSON.stringify(landmarks[8]);
	  var myJSON2 = JSON.parse(myJSON);
	  cx = parseInt(myJSON2.x*canvasElement.width);
	  cy = parseInt(myJSON2.y*canvasElement.height);	
	  
      drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                     {color: '#00FF00', lineWidth: 5});
      drawLandmarks(canvasCtx, landmarks, {color: '#FF0000', lineWidth: 2});
    }
  }
  canvasCtx.font = "15px Arial";

  canvasCtx.fillText("Enter Your Age :" + age, 10, 40);
  canvasCtx.fillText("Select range of salary :"+salary, 10, 120);
  canvasCtx.fillText("Select your gender :" + genderstr, 10, 200);
  canvasCtx.fillText("Select your region :" + regionstr, 10, 280);  
  canvasCtx.fillText("Press the button:", 10, 360);
  canvasCtx.fillText("Submit ", 150, 400);
  canvasCtx.font = "30px Arial";
  canvasCtx.fillText("+", 300, 40);
  canvasCtx.fillText("-", 400, 40);
  canvasCtx.fillText("+", 300, 130);
  canvasCtx.fillText("-", 400, 130);
  canvasCtx.fillText("M", 300, 210);
  canvasCtx.fillText("F", 400, 210);
  canvasCtx.font = "15px Arial";
  canvasCtx.fillText("Asia", 300, 290);
  canvasCtx.fillText("America", 400, 290);
  canvasCtx.fillText("Europe", 300, 350);
  canvasCtx.fillText("Africa", 400, 350);
  canvasCtx.restore();
  
  let src = cv.imread('output_canvas');

  cv.rectangle(src, new cv.Point(0, 10), new cv.Point(220, 60), [255, 0, 0, 255], 4);
  cv.rectangle(src, new cv.Point(0, 100), new cv.Point(220, 150), [255, 0, 0, 255], 4);
  cv.rectangle(src, new cv.Point(0, 180), new cv.Point(220, 230), [255, 0, 0, 255], 4);
  cv.rectangle(src, new cv.Point(0, 260), new cv.Point(220, 310), [255, 0, 0, 255], 4);
  
  

  if (cx > 280 && cx < 340 && cy > 10 && cy<60 && counter==1) 
  {
    age = age + 1;
    if (age>99){
      age = 99;
    }
    cv.rectangle(src, new cv.Point(280, 10), new cv.Point(340, 60), [0, 255, 0, 255], -1);
  }else
  {
	  cv.rectangle(src, new cv.Point(280, 10), new cv.Point(340, 60), [255, 0, 0, 255], 4);
  }
  
  if (cx > 380 && cx < 440 && cy > 10 && cy<60 && counter==1)
  {
    age = age - 1;
    if (age<0){
      age = 0
    }
    cv.rectangle(src, new cv.Point(380, 10), new cv.Point(440, 60), [0, 255, 0, 255], -1); 
  }else
  {
	  cv.rectangle(src, new cv.Point(380, 10), new cv.Point(440, 60), [255, 0, 0, 255], 4);
  }



  if (cx > 280 && cx < 340 && cy > 100 && cy<150 && counter==1) 
  {
    salary = salary + 100;
    if (salary>10000){
      salary = 10000;
    }
    cv.rectangle(src, new cv.Point(280, 100), new cv.Point(340, 150), [0, 255, 0, 255], -1);
  }else
  {
	  cv.rectangle(src, new cv.Point(280, 100), new cv.Point(340, 150), [255, 0, 0, 255], 4);
  }
  
  if (cx > 380 && cx < 440 && cy > 100 && cy<150 && counter==1)
  {
    salary = salary - 100;
    if (salary<0){
      salary = 0
    }
    cv.rectangle(src, new cv.Point(380, 100), new cv.Point(440, 150), [0, 255, 0, 255], -1); 
  }else
  {
	  cv.rectangle(src, new cv.Point(380, 100), new cv.Point(440, 150), [255, 0, 0, 255], 4);
  }

  if (cx > 280 && cx < 340 && cy > 180 && cy<230 && counter==1) 
  {
    gender = 0;
    genderstr = "Male";
    cv.rectangle(src, new cv.Point(280, 180), new cv.Point(340, 230), [0, 255, 0, 255], -1);
  }else
  {
	  cv.rectangle(src, new cv.Point(280, 180), new cv.Point(340, 230), [255, 0, 0, 255], 4);
  }
  
  if (cx > 380 && cx < 440 && cy > 180 && cy<230 && counter==1)
  {
    gender = 1;
    genderstr = "Female";
    cv.rectangle(src, new cv.Point(380, 180), new cv.Point(440, 230), [0, 255, 0, 255], -1); 
  }else
  {
	  cv.rectangle(src, new cv.Point(380, 180), new cv.Point(440, 230), [255, 0, 0, 255], 4);
  }

  if (cx > 280 && cx < 360 && cy > 260 && cy<310 && counter==1)
  {
    region = 1;
    regionstr = "Asia";
    cv.rectangle(src, new cv.Point(280, 260), new cv.Point(360, 310), [0, 255, 0, 255], -1); 
  }else
  {
	  cv.rectangle(src, new cv.Point(280, 260), new cv.Point(360, 310), [255, 0, 0, 255], 4);
  }

  if (cx > 380 && cx < 460 && cy > 260 && cy<310 && counter==1)
  {
    region = 2;
    regionstr = "America";
    cv.rectangle(src, new cv.Point(380, 360), new cv.Point(460, 310), [0, 255, 0, 255], -1); 
  }else
  {
	  cv.rectangle(src, new cv.Point(380, 360), new cv.Point(460, 310), [255, 0, 0, 255], 4);
  }

  if (cx > 280 && cx < 360 && cy > 320 && cy<370 && counter==1) 
  {
    region = 3;
    regionstr = "Europe";
    cv.rectangle(src, new cv.Point(280, 320), new cv.Point(360, 370), [0, 255, 0, 255], -1);
  }else
  {
	  cv.rectangle(src, new cv.Point(280, 320), new cv.Point(360, 370), [255, 0, 0, 255], 4);
  }

  if (cx > 380 && cx < 460 && cy > 320 && cy<370 && counter==1) 
  {
    region = 4;
    regionstr = "Africa";
    cv.rectangle(src, new cv.Point(380, 320), new cv.Point(460, 370), [0, 255, 0, 255], -1);
  }else
  {
	  cv.rectangle(src, new cv.Point(380, 320), new cv.Point(460, 370), [255, 0, 0, 255], 4);
  }










  if (cx > 180 && cx < 280 && cy > 350 && cy<450 && counter==0)
  {
    document.getElementById("myForm").submit();
	  cv.rectangle(src, new cv.Point(180, 350), new cv.Point(280, 450), [0, 255, 0, 255], -1); //RGBA - A for alpha
  }else
  {
	  cv.rectangle(src, new cv.Point(180, 350), new cv.Point(280, 450), [255, 0, 0, 255], 4); //RGBA - A for alpha
  }
  

  
 
  
  cv.imshow('output_canvas', src);
  src.delete();
  document.getElementById("age").value=age;
  document.getElementById("salary").value=salary;
  document.getElementById("gender").value=gender;
  document.getElementById("region").value=region;
  counter = counter + 1;
  if (counter == 10){
    counter = 0;
  }
}

function onResults2(results) {
  canvasCtx2.save();
  canvasCtx2.translate(canvasElement2.width, 0);
  canvasCtx2.scale(-1, 1);
  canvasCtx2.clearRect(0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.drawImage(
      results.image, 0, 0, canvasElement2.width, canvasElement2.height);
  canvasCtx2.restore();
}

const hands = new Hands({locateFile: (file) => {
  return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
}});
hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.8,
  minTrackingConfidence: 0.8
});
hands.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    //flip the video content and load into output_canvas2 before process to detect finger
    onResults2({image: videoElement});
    //use the flipped image in output_canvas2 to detect finger
    await hands.send({image: canvasElement2});
  },
  width: 480,
  height: 480
});
camera.start();

