let  mobilenet;
let classifier;
let puffin;
let label='need to be trained';
let ukeButton;
let WhistleButton;
let trainButton;
let saveButton;

function modelReady(){
    console.log('Model is Ready !!!');
    //mobilenet.predict(puffin,gotResults);
}

function videoReady(){
    console.log('video is Ready !!!');
    //mobilenet.predict(puffin,gotResults);
}

function setup(){
    createCanvas(320,270);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.featureExtractor('MobileNet',modelReady);
    classifier= mobilenet.classification(video,videoReady)
    
    ukeButton =createButton('ukulele');
    ukeButton.mousePressed(function(){
        classifier.addImage('ukulele');
    })
    
    WhistleButton =createButton('Whistle');
    WhistleButton.mousePressed(function(){
        classifier.addImage('Whistle');
    })
    
    trainButton =createButton('train');
    trainButton.mousePressed(function(){
        classifier.train(whileTraining);
    })
    
    saveButton =createButton('train');
    saveButton.mousePressed(function(){
        classifier.save();
    });
    
    }

    function draw()
    {    background(0);
        image(video,0,0,320,240);
        fill(255);
        textSize(16);
        text(label,10,height-10);
    }

function whileTraining(loss){
if(loss == null){
    console.log('Training Complete');
    classifier.classify(gotResults);
}
else{
    console.log(loss);
}
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        /*console.log(results);
        let label = results[0].className;
        let prob= result[0].probablity;
        FileList(0);
        textsize(64);
        text(label,10,height-100);
        createPool(label);
        createPool(prob)
        */
       label =  result ;
       classifier.classify(gotResults);
    }
    }

/*function imageReader(){
    imageReader(puffin,0,0,width,height);
}
*/ 


