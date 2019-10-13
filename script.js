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

利未記 Lv
利 Lv
利未记 Lv
利 Lv

民數記 Nb
民 Nb
民数记 Nb
民 Nb

申命記 Dt
申 Dt
申命记 Dt
申 Dt

約書亞記 Jos
書 Jos
约书亚记 Jos
书 Jos

士師記 Jg
士 Jg
士师记 Jg
士 Jg

路得記 Rt
得 Rt
路得记 Rt
得 Rt

撒母耳記上 1S
撒上 1S
撒母耳记上1S
撒上 1S

撒母耳記下 2S
撒下 2S
撒母耳记下 2S
撒下2S

列王紀上 1K
王上 1K
列王纪上 1K
王上 1K

列王紀下 2K
王下 2K
列王纪下 2K
王下 2K

歷代志上 1Chr
代上 1Chr
历代志上 1Chr
代上 1Chr

歷代志下 2Chr
代下 2Chr
历代志下 2Chr
代下2Chr

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

約伯記 Jb
伯 Jb
约伯记 Jb
伯 Jb

詩篇 Ps
詩 Ps
诗篇 Ps
诗Ps

箴言 Pr
箴 Pr
箴言 Pr
箴 Pr

傳道書 Qo
傳 Qo
传道书 Qo
传 Qo

雅歌 Sg
歌 Sg
雅歌 Sg
歌Sg

以賽亞書 Is
賽 Is
以赛亚 Is
赛Is

耶利米書 Jr
耶 Jr
耶利米书 Jr
耶 Jr

耶利米哀歌 Lm
哀 Lm
耶利米哀歌 Lm
哀 Lm

以西結書 Ezk
結 Ezk
以西结书 Ezk
结 Ezk

但以理書 Dn
但 Dn
但以理书 Dn
但 Dn

何西阿書 Ho
何 Ho
何西阿书 Ho
何 Ho

約珥書 Jl
珥 Jl
约珥书 Jl
珥 Jl

阿摩司書 Am
摩 Am
阿摩司书 Am
摩 Am

俄巴底亞書 Ob
俄 Ob
俄巴底亚书 Ob
俄 Ob

約拿書 Jon
拿 Jon
约拿书 Jon
拿 Jon

彌迦書 Mi
彌 Mi
弥迦书 Mi
弥 Mi

那鴻書 Na
鴻 Na
那鸿书 Na
鸿 Na

哈巴谷書 Hab
哈 Hab
哈巴谷书 Hab
哈 Hab

西番雅書 Zp
番 Zp
西番雅书 Zp
番 Zp

哈該書 Hg
該 Hg
哈该书 Hg
该 Hg

撒迦利亞書 Zc
亞 Zc
撒迦利亚书 Zc
亚 Zc

瑪拉基書 Ml
瑪 Ml
玛拉基书 Ml
玛 Ml

馬太福音 Mt
太 Mt
马太福音 Mt
太 Mt

馬可福音 Mk
可 Mk
马可福音 Mk
可 Mk

路加福音 Lk
路 Lk
路加福音 Lk
路 Lk

約翰福音 Jn
約 Jn
约翰福音 Jn
约 Jn

使徒行傳 Ac
徒 Ac
使徒行传 Ac
徒 Ac

羅馬書 Rm
羅 Rm
罗马书 Rm
罗 Rm

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

腓立比書 Ph
腓 Ph
腓立比书 Ph
腓 Ph

歌羅西書 Col
西 Col
歌罗西书 Col
西 Col

帖撒羅尼迦前書 1 Th
帖前 1 Th
帖撒罗尼迦前书 1 Th
帖前 1 Th

帖撒羅尼迦後書2 Th
帖後2 Th
帖撒罗尼迦后书 2 Th
帖后 2 Th

提摩太前書 1 Tm
提前 1 Tm
提摩太前书 1 Tm
提前 1 Tm

提摩太後書 2 Tm
提後 2 Tm
提摩太后书 2 Tm
弟後 2 Tm

提多書 Tt
多 Tt
提多书 Tt
多 Tt

腓利門書 Phm
門 Phm
腓利门书 Phm
门 Phm

希伯來書 Heb
來 Heb
希伯来书 Heb
来 Heb

雅各書 Jm
雅 Jm
雅各书 Jm
雅 Jm

彼得前書 1 P
彼前 1 P
彼得前书 1 P
彼前 1 P

彼得後書 2 P
彼後 2 P
彼得后书 2 P
彼后 2 P

約翰壹書 1 Jn
約壹 1 Jn
约翰一书 1 Jn
约一 1 Jn

約翰贰書 2 Jn
約貳 2 Jn
约翰二书 2 Jn
约二 2 Jn

約翰參書 3 Jn
約參 3 Jn
约翰三书 3 Jn
约三 3 Jn

猶大書 Ude
猶 Ude
犹大书 Ude
犹 Ude

啟示錄 Rv
啟 Rv
启示录 Rv
启 Rv`


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
      
   var re = /第([\d-]+)/g;
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
