var fs = require('fs');
var path = './assets/img/exercices/';

tabData = []

fs.readdir(path, function(err, files){
    var id = 1;
    files.forEach(function(file){
        
        var title = file.split('.')[0];
        var audio = 'LM_251_Beg_'+title+'.mp3';  
        var img = file;
        var obj = {
            id: id,
            title: title,
            img: img,
            audio: audio
        }
        if (img != '.DS_Store') {
            tabData.push(obj);
            id++  
        }            
        
    });
    console.clear()
    console.log(tabData)
});
