/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console

var BIBLE_BOOKS = `创	Ge
創世紀  Ge
出	Ex
利	Le
民	Nu
申	De
书	Jos
士	Ju
得	Ru
撒上	1 S
撒下	2 S
王上	1 K
王下	2 K
代上	1 Chr
代下	2 Chr
拉	Ezr
尼	Ne
斯	Est
伯	Job
诗	Ps
詩篇    Ps
箴	Pr
传	Ec
歌	Song
赛	Is
以賽亞書 Is
耶	Je
哀	La
结	Ez
但	Da
何	Ho
珥	Joel
摩	Am
俄	Obad
拿	Jona
弥	Mi
鸿	Na
哈	Ha
番	Zeph
该	Hagg
亚	Zech
玛	Ma
太	Mt
可	Mak
路	Lk
约	Jn
徒	Acts
罗	Ro
林前	1 Co
林后	2 Co
加	Ga
弗	Ep
腓	Phl
西	Co
帖前	1 Th
帖后	2 Th
提前	1 Ti
提后	2 Ti
多	Tit
门	Phm
来	He
雅	Ja
彼前 1 Pe
彼后 2 Pe
约一 1 Jhn
约二 2 Jhn
约三 3 Jhn
犹 Jude
啟示錄 Re
启 Re`;

var MAP_BOOKNAMES = {}
build_bookmap();

function build_bookmap() {
  var bookList = BIBLE_BOOKS.split("\n");
  for (var i = 0; i < bookList.length; i++) {
    var txt = bookList[i].trim();
    var nameVal = txt.split(/\s+/);
    MAP_BOOKNAMES[nameVal[0]] = nameVal.slice(1).join(" ");
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
