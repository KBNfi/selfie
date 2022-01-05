var SpeechRecognition = window.webkitSpeechRecognition;
var recogntition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recogntition.start();

}
recogntition.onresult = function run(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);

    if (Content == "Take My Selfie") {
        console.log("Taking Selfie");
        speak();
    }

}



function speak() {
    var synth = window.SpeechSynthesis;

    speak_data = "Taking Your Selfie In 5 Seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    setTimeout();
    Webcam.attach(camera);
    setTimeout(function () {
        take_snapshot();
        save();
    }, 5000);


}
Webcam.set({
    width: 360, height: 250, image_format: 'png', 'png_quality': 90
});

camera = document.getElementById("camera");

function take_snapshot() {
    document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_url + '">';
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}