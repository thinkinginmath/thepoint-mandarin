/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

var BIBLE_BOOKS = `創世紀 Ge
創 Ge
创世纪 Ge
创 Ge

出埃及記 Ex
出 Ex
出埃及记 Ex
出 Ex

利未記 Le
利 Le
利未记 Le
利 Le

民數記 Nu
民 Nu
民数记 Nu
民 Nu

申命記 De
申 De
申命记 De
申 De

約書亞記 Jos
書 Jos
约书亚记 Jos
书 Jos

士師記 Ju
士 Ju
士师记 Ju
士 Ju

路得記 Ru
得 Ru
路得记 Ru
得 Ru

撒母耳記上 1 S
撒上 1 S
撒母耳记上 1 S
撒上 1 S

撒母耳記下 2 S
撒下 2 S
撒母耳记下 2 S
撒下 2 S

列王紀上 1 K
王上 1 K
列王纪上 1 K
王上 1 K

列王紀下 2 K
王下 2 K
列王纪下 2 K
王下 2 K

歷代志上 1 Chr
代上 1 Chr
历代志上 1 Chr
代上 1 Chr

歷代志下 2 Chr
代下 2 Chr
历代志下 2 Chr
代下 2 Chr

以斯拉記 Ezr
拉 Ezr
以斯拉记 Ezr
拉 Ezr

尼希米記 Ne
尼 Ne
尼希米记 Ne
尼 Ne

以斯帖記 Est
斯 Est
以斯帖记 Est
斯 Est

約伯記 Job
伯 Job
约伯记 Job
伯 Job

詩篇 Ps
詩 Ps
诗篇 Ps
诗 Ps

箴言 Pr
箴 Pr
箴言 Pr
箴 Pr

傳道書 Ec
傳 Ec
传道书 Ec
传 Ec

雅歌 Song
歌 Song
雅歌 Song
歌 Song

以賽亞書 Is
賽 Is
以赛亚 Is
赛 Is

耶利米書 Je
耶 Je
耶利米书 Je
耶 Je

耶利米哀歌 La
哀 La
耶利米哀歌 La
哀 La

以西結書 Ez
結 Ez
以西结书 Ez
结 Ez

但以理書 Da
但 Da
但以理书 Da
但 Da

何西阿書 Ho
何 Ho
何西阿书 Ho
何 Ho

約珥書 Joel
珥 Joel
约珥书 Joel
珥 Joel

阿摩司書 Am
摩 Am
阿摩司书 Am
摩 Am

俄巴底亞書 Obad
俄 Obad
俄巴底亚书 Obad
俄 Obad

約拿書 Jona
拿 Jona
约拿书 Jona
拿 Jona

彌迦書 Mi
彌 Mi
弥迦书 Mi
弥 Mi

那鴻書 Na
鴻 Na
那鸿书 Na
鸿 Na

哈巴谷書 Ha
哈 Ha
哈巴谷书 Ha
哈 Ha

西番雅書 Zeph
番 Zeph
西番雅书 Zeph
番 Zeph

哈該書 Hagg
該 Hagg
哈该书 Hagg
该 Hagg

撒迦利亞書 Zech
亞 Zech
撒迦利亚书 Zech
亚 Zech

瑪拉基書 Ma
瑪 Ma
玛拉基书 Ma
玛 Ma

馬太福音 Mt
太 Mt
马太福音 Mt
太 Mt

馬可福音 Mak
可 Mak
马可福音 Mak
可 Mak

路加福音 Lk
路 Lk
路加福音 Lk
路 Lk

約翰福音 Jn
約 Jn
约翰福音 Jn
约 Jn

使徒行傳 Acts
徒 Acts
使徒行传 Acts
徒 Acts

羅馬書 Ro
羅 Ro
罗马书 Ro
罗 Ro

哥林多前書 1 Co
林前 1 Co
哥林多前书 1 Co
林前 1 Co

哥林多後書 2 Co
林後 2 Co
哥林多后书 2 Co
林后 2 Co

加拉太書 Ga
加 Ga
加拉太书 Ga
加 Ga

以弗所書 Ep
弗 Ep
以弗所书 Ep
弗 Ep

腓立比書 Phl
腓 Phl
腓立比书 Phl
腓 Phl

歌羅西書 Co
西 Co
歌罗西书 Co
西 Co

帖撒羅尼迦前書 1 Th
帖前 1 Th
帖撒罗尼迦前书 1 Th
帖前 1 Th

帖撒羅尼迦後書 2 Th
帖後 2 Th
帖撒罗尼迦后书 2 Th
帖后 2 Th

提摩太前書 1 Ti
提前 1 Ti
提摩太前书 1 Ti
提前 1 Ti

提摩太後書 2 Ti
提後 2 Ti
提摩太后书 2 Ti
弟後 2 Ti

提多書 Tit
多 Tit
提多书 Tit
多 Tit

腓利門書 Phm
門 Phm
腓利门书 Phm
门 Phm

希伯來書 He
來 He
希伯来书 He
来 He

雅各書 Ja
雅 Ja
雅各书 Ja
雅 Ja

彼得前書 1 Pe
彼前 1 Pe
彼得前书 1 Pe
彼前 1 Pe

彼得後書 2 Pe
彼後 2 Pe
彼得后书 2 Pe
彼后 2 Pe

約翰壹書 1 Jhn
約壹 1 Jhn
约翰一书 1 Jhn
约一 1 Jhn

約翰贰書 2 Jhn
約貳 2 Jhn
约翰二书 2 Jhn
约二 2 Jhn

約翰參書 3 Jhn
約參 3 Jhn
约翰三书 3 Jhn
约三 3 Jhn

猶大書 Jude
猶 Jude
犹大书 Jude
犹 Jude

啟示錄 Re
啟 Re
启示录 Re
启 Re`


var MAP_BOOKNAMES = {}
build_bookmap();

function build_bookmap() {
  var bookList = BIBLE_BOOKS.split("\n");
  for (var i = 0; i < bookList.length; i++) {
      var txt = bookList[i].trim();
      if (txt) {
	  var nameVal = txt.split(/\s+/);
	  MAP_BOOKNAMES[nameVal[0]] = nameVal.slice(1).join(" ");
      }
  }
}

// Daily bible tasks: 
// 星期一 創世紀第13章 以賽亞書第32章
// This line will be parsed into:
//   day_of_week  taskA  taskB

function processTask(task, divId) {
   var idx_di = task.indexOf('第');
   var book = task.substring(0, idx_di);
   var ch = task.substring(idx_di);
   var param = '1';
      
   var re = /第\s*([\d-]+)/g;
      var match = ch.match(re);
      if (match) {
	       if (match[0].indexOf('第') == 0) {
	          param = match[0].substring(1);
	       } else {
	          param = match[0];
	       }

	      if (match.length == 2) {
	         param += ':';

	         if (match[1].indexOf('第') == 0) {
		          param += match[1].substring(1);
	         } else {
		          param += match[1];
	         }
		  //console.log("section", param);
	      }
      } 
      var bookNameEng = MAP_BOOKNAMES[book];
      fetchBibleToDiv(bookNameEng, param, divId)  
}

function processQuery(books) {
    // Frind the first whitespace
    var lines = books.split('\n');
    for (var i=0; i< lines.length; i++) {
	var txt = lines[i];
	txt = txt.trim();
	if (txt) {
	    var pos = txt.indexOf(' ');
	    var bookName = txt.substring(0, pos);
	    var param = txt.substring(pos).trim();
	    if (bookName in MAP_BOOKNAMES) {
		var divid = 'resp' + i;
		jQuery('#day'+i).append(DAILY_DIV + txt + '</h4></div>');
		jQuery('#day'+i).append('<div id=' + divid +'></div>');
		var bookNameEng = MAP_BOOKNAMES[bookName];
		fetchBibleToDiv(bookNameEng, param, '#' +divid);
	    } else {
		console.log("not found ", bookName);
		
	    }
	}
    }
}

function fetchBibleToDiv(bookNameEng, param, divId) {
  jQuery.ajax({
      url:'https://getbible.net/json',
      dataType: 'jsonp',
      data: 'v=cut&p=' + bookNameEng + param,
      jsonp: 'getbible',

      
      success: function(json){
          // set text direction
          // check response type
	  if (json.type == 'verse'){
              var output = '';
              	jQuery.each(json.book, function(index, value) {
                  	output += '<center><b>' + value.book_name +
                      ' ' + value.chapter_nr + '</b></center><br/><p>';
                    jQuery.each(value.chapter, function(index, value) {
                          output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                          output += value.verse;
                          output += '<br/>';
                      });
                      output += '</p>';
              	});
              jQuery(divId).html(output);
	      
          } else if (json.type == 'chapter'){
              var output = '<center><b>'+json.book_name+' '+json.chapter_nr+'</b></center><br/><p>';
              jQuery.each(json.chapter, function(index, value) {
                  output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
                  output += value.verse;
                  output += '<br/>';
              });
              output += '</p>';
	            jQuery(divId).html('<div>' + output + '</div>');
          } else if (json.type == 'book'){
              var output = '';
              jQuery.each(json.book, function(index, value) {
     output += '<center><b>'+json.book_name+' '+value.chapter_nr+'</b></center><br/><p>';
     jQuery.each(value.chapter, function(index, value) {
     output += '  <small class="ltr">' +value.verse_nr+ '</small>  ';
     output += value.verse;
     output += '<br/>';
           });
		          output += '</p>';
		          jQuery(divId).html('<div>' + output + '</div>');
          });

        }
      },
      error:function(){
          jQuery(divId).html('<h2>No scripture was returned, please try again!</h2>');
       },
  });
}

var DAILY_DIV = '<div class="alert alert-success" role="alert"> <h4 class="alert-heading">'

function processDailyTaskQuery(queryVal) {
  event.preventDefault();
  var weekdays = ['星期一','星期二','星期三','星期四','星期五','星期六'];
  var lines = queryVal.split("\n");
  var tasksA = {};
  var tasksB = {};
    
  for (var i=0; i< lines.length; i++) {
	  var txt = lines[i];
	  txt = txt.trim();
	  if (txt) {
	    var tokens = txt.split(' ');
	    if (tokens.length==3) {
		    tasksA[tokens[0]] = tokens[1];
		    tasksB[tokens[0]] = tokens[2];
	    }
	  }
  }
  for (var i = 0; i < weekdays.length; i++) {
	  var dw = weekdays[i];
	  var didcontainer = '#day'+i;

	  if (dw in tasksA) {
	    // Frind the first whitespace
      var divid = 'taskA' + i;
	    jQuery(didcontainer).append(DAILY_DIV + dw + ": " + tasksA[dw] +
                                  '</h4></div>');
      
	    jQuery(didcontainer).append('<div id=' + divid +'></div>');

	    processTask(tasksA[dw], '#' + divid);
	  }
	  if (dw in tasksB) {
	        // Frind the first whitespace
	      var divid = 'taskB' + i;
	      jQuery(didcontainer).append(DAILY_DIV + dw + ": " + tasksB[dw]
					                          + '</h4></div>');

	      
	      jQuery(didcontainer).append('<div id=' + divid +'></div>');

	      processTask(tasksB[dw], '#' + divid);
	  }
  }
}
