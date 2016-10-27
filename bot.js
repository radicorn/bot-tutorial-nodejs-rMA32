var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/;  botRegexDL = /^\/DDL/i;botRegexSalt = /^\/salt/;botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SDL/i; botODB = /(.*\s+)(.*odb)(\s+.*)/i; botDuck = /^\/duck/;
      botRegexP = /^\/PDL/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/; botRegexCC = /^\/cc/;
      botRegexTST = /^\/test/; botRegexJs = /^\jesus/; botRegexJS = /^\Jesus/; botRegexJSS = /^\JESUS/; botRegexMTG = /^\/metalgear/; botRegexSys = /^\/thesystem/;
      botRegexJkr = /^\/joker/; botRegexBig = /^\/bigboss/; botRegexBid = /^\/bidoof/; botRegexTrl = /^\/troll/; 
      botRegexBj = /^\/billyjoel/; 
      botRegexJack = /^\/jack/; botRegexAus = /^\/austin/; botRegexZach = /^\/zach/; botRegexMatt = /^\/matt/; botRegexJim = /^\/jimbo/; botRegexBen = /^\/ben/; botRegexNol = /^\/nolan/;
    
      botRegexSiege = /^\/siege/; botRegexOW = /^\/ratings/; 
      botRegexSlut = /^\/slut/; botRegexStop = /^\/stop/;
      botRegexProp = /^\/prop/;botRegexKys = /^\/kys/; botRegexSlam = /^\/slam/; botRegexBrye = /^\/brye/;
      botRegexGian = /^\/gian/; botRegexScrotes = /^\/scrotes/; botRegexShaki = /^\/shaki/;
      botRegexDaf = /^\/dafuq/; botRegexAyy = /^\/ayy/;
      siege1 = 'https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8'; siege2 = 'https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7'
      siege3 = 'https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd';
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  }
  else if(request.text && botRegexSlut.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/640x364.jpeg.f8a0e216bf7e42ed9a86b3ae23cc2ff1.large");
    this.res.end();
  } 
  else if(request.text && botRegexStop.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Stop appropriating black culture");
    this.res.end();
  } 
  else if(request.text && botRegexProp.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/409x327.jpeg.08b5d95c51bb4897835cfe6b514f2f52.large");
    this.res.end();
  }
  else if(request.text && botRegexKys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.wikihow.com/Tie-a-Noose");
    this.res.end();
  } 
  else if(request.text && botRegexSlam.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://pbs.twimg.com/profile_images/587294731471757313/ZpI5PfKq.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexDaf.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i3.kym-cdn.com/photos/images/facebook/000/787/356/d6f.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexBrye.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/600x490.jpeg.b31d5153fb474d9bb18dd51b3d650afe.large");
    this.res.end();
  } 
  else if(request.text && botRegexGian.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/9V6ZnvD.png");
    this.res.end();
  } 
  else if(request.text && botRegexScrotes.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1006x1340.jpeg.730381e4280e4028b8375432af14f39f.large");
    this.res.end();
  } 
  else if(request.text && botRegexShaki.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/305x375.jpeg.a8dd3aa18c7a4963a553e6dc16bcb100.large");
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/maddenrating?name=&position=all&team="+request.text.substring(5,8));
    //postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  
  else if(request.text && botRegexOW.test(request.text)) {
    this.res.writeHead(200);
    postMessage("www.daddyleagues.com/maddenrating/");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1hSuEG7oplnx4IX6HGsMOjsWb9TCqC4-F1NLjuBz5PCM/edit");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    
    postMessage("http://daddyleagues.com/SRMFL/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://www.daddyleagues.com/maddenrating?name="+rep+"&position=all&team=all");
    
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexTST.test(request.text)) {
    this.res.writeHead(200);
    postMessage("Hello world!");
    this.res.end();
  } 
  else if(request.text && botRegexJs.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x216.jpeg.f417522755ae49f3a1a0deeb4aa27089");
    this.res.end();
  } 
  else if(request.text && botRegexJS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x216.jpeg.f417522755ae49f3a1a0deeb4aa27089");
    this.res.end();
  } 
  else if(request.text && botRegexJSS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/300x216.jpeg.f417522755ae49f3a1a0deeb4aa27089");
    this.res.end();
  } 
  else if(request.text && botRegexMTG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/504x297.jpeg.cfe993621cfd499c9c31256ab289623f");
    this.res.end();
  } 
  else if(request.text && botRegexSys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/718x404.gif.a873031f373248b595d8a1be21020d44");
    this.res.end();
  } 
  else if(request.text && botRegexJkr.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/504x316.jpeg.daba00b252cf462785e5f4f0931a3399");
    this.res.end();
  }
  else if(request.text && botRegexBj.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://v.groupme.com/26173240/2016-10-23T05:28:50Z/33c88bf7.480x272r90.mp4");
    this.res.end();
  } 
  else if(request.text && botRegexBig.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/461x524.jpeg.3eb722c45c6a4d57a4ba4c97395a6434");
    this.res.end();
  } 
  else if(request.text && botRegexJack.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1273x1276.jpeg.b1cc82e4379243718dd2b1264d438fc8");
    this.res.end();
  } 
  else if(request.text && botRegexAus.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/608x1080.jpeg.b70fc9ac9e3642be9f8b97de1a902c20");
    this.res.end();
  } 
  else if(request.text && botRegexZach.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1125x1500.jpeg.6aead262e8ed4055942344b94f7a6d2b");
    this.res.end();
  } 
  else if(request.text && botRegexJim.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1033x1056.jpeg.071f9d4b89fb46948e87390827a4512f");
    this.res.end();
  } 
  else if(request.text && botRegexMatt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1087x1444.jpeg.8b97dd4de8c5418e98ac66f92c12ad5d");
    this.res.end();
  } 
  else if(request.text && botRegexBen.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1080x1440.jpeg.3001ddb858dc413dbf052a5290765f1a");
    this.res.end();
  } 
  else if(request.text && botRegexNol.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1125x1500.jpeg.2ab1f448de35486bbd2392a69709207b");
    this.res.end();
  } 
  else if(request.text && botRegexBid.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/308x250.jpeg.607770571fbc419290e69783841c372b");
    this.res.end();
  } 
  else if(request.text && botRegexTrl.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/504x285.jpeg.252fd4ab258441da87fa3ab31b79171c");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/851x1184.jpeg.330228901f684b0cb46cd1cef6953923");
    this.res.end();
  }
  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("(☞ﾟヮﾟ)☞");
    this.res.end();
  }
  
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage(siege1);
    else if(Math.random() >0.6)
      postMessage(siege3)
    else
      postMessage(siege2);
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
