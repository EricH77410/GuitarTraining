var fs = require('fs');
var path = './public/assets/img/exercices/';

tabData = []


fs.readdir(path, function(err, files){
    var id = 1;
    files.forEach(function(file){
        
        var title = file.split('.')[0];
        var audio = 'LM_251_Beg_'+title+'.mp3';  
        var img = file;
        var ex = title.substring(0,2);
        var ind = title.substring(2);
        if (parseInt(ind)<10){
            ind = '0'+ind;
        }
        //console.log(ex+' '+ind);
        var obj = {
            id: parseInt(ind),
            title: title,
            img: img,
            audio: audio
        }
        if (img != '.DS_Store') {
            tabData.push(obj);
            id++  
        }
        
        tabData.sort(function(a,b){
            return a.id - b.id
        })
        
    });

    console.clear()
    console.log(tabData)
});