///http://www.w3schools.com/jsref/jsref_obj_math.asp
//http://stackoverflow.com/questions/8860297/can-you-create-dates-that-are-lower-than-271800-bc-like-dinosaur-time
///http://books.google.com/books?id=R-FhZpi-XX8C&pg=PA113&lpg=PA113&dq=fuzzyscript&source=bl&ots=qc3V5gv6iv&sig=CYarF-PUO4qTbJwz1a7eLxYfLI0&hl=en&sa=X&ei=c0UjT9W7IoO4twfXxdyiCw&ved=0CDIQ6AEwAw#v=onepage&q=fuzzyscript&f=false

//http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/
//http://net.tutsplus.com/tutorials/javascript-ajax/the-essentials-of-writing-high-quality-javascript/

(function timeStamp (){

        var today=new Date();
        var year=today.getFullYear();
        var month=today.getMonth();
        var d=today.getDay();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        var mm=today.getMilliseconds();
        // add a zero in front of numbers<10
        m=checkTime(m);
        s=checkTime(s);
        d=checkTime(d);
        console.log(year+":"+month+":"+d+":"+h+":"+m+":"+s+":"+mm);
        //document.getElementById('txt').innerHTML=d+":"+h+":"+m+":"+s+":"+mm;
        now=year+""+month+""+d+""+h+""+m+""+s+""+mm;
        console.log('now = '+now);

        function checkTime(i) {
          if (i<10) {
            i="0" + i;
          }
        return i;
      }
})();


if (typeof Fuzzy === "undefined") {

Fuzzy = {};

Fuzzy.timeStamp = now;
console.log('Fuzzy.timeStamp = '+Fuzzy.timeStamp);

}



//*** This code is copyright 2002-2003 by Gavin Kistner, !@phrogz.net
//*** It is covered under the license viewable at http://phrogz.net/JS/_ReuseLicense.txt
//*** Reuse or modification is free provided you abide by the terms of that license.
//*** (Including the first two lines above in your source code satisfies the conditions.)
// Include this code (with notice above ;) in your library; read below for how to use it.

Date.prototype.customFormat = function(formatString){
    var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
    var dateObject = this;
    YY = ((YYYY=dateObject.getFullYear())+"").slice(-2);
    MM = (M=dateObject.getMonth()+1)<10?('0'+M):M;
    MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
    DD = (D=dateObject.getDate())<10?('0'+D):D;
    DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dateObject.getDay()]).substring(0,3);
    th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
    formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);

    h=(hhh=dateObject.getHours());
    if (h==0) h=24;
    if (h>12) h-=12;
    hh = h<10?('0'+h):h;
    AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
    mm=(m=dateObject.getMinutes())<10?('0'+m):m;
    ss=(s=dateObject.getSeconds())<10?('0'+s):s;
    return formatString.replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);

}

/****************************************************************************

myDateObject.customFormat(formatString)
-------------------------------------------------
arguments:
    myDateObject - a JavaScript Date object
    formatString - a string containing one or more tokens to be replaced
    

returns:
    a new string based on formatString, with all valid tokens replaced with
    values from dateObject
    

description:
    Use customFormat(...) to format a Date object in anyway you like.
    Any token (from the list below) gets replaced with the corresponding value.


    token:     description:             example:
    #YYYY#     4-digit year             1999
    #YY#       2-digit year             99
    #MMMM#     full month name          February
    #MMM#      3-letter month name      Feb
    #MM#       2-digit month number     02
    #M#        month number             2
    #DDDD#     full weekday name        Wednesday
    #DDD#      3-letter weekday name    Wed
    #DD#       2-digit day number       09
    #D#        day number               9
    #th#       day ordinal suffix       nd
    #hhh#      military/24-based hour   17
    #hh#       2-digit hour             05
    #h#        hour                     5
    #mm#       2-digit minute           07
    #m#        minute                   7
    #ss#       2-digit second           09
    #s#        second                   9
    #ampm#     "am" or "pm"             pm
    #AMPM#     "AM" or "PM"             PM
    

notes:
    If you want the current date and time, use "new Date()".
    e.g.
    var curDate = new Date();
    curDate.customFormat("#DD#/#MM#/#YYYY#");
    

    If you want all-lowercase or all-uppercase versions of the weekday/month,
    use the toLowerCase() or toUpperCase() methods of the resulting string.
    e.g.
    curDate.customFormat("#DDDD#, #MMMM# #D#, #YYYY#").toLowerCase();

    If you use the same format in many places in your code, I suggest creating
    a wrapper function to this one, e.g.:
    Date.prototype.myDate=function(){
        return this.customFormat("#D#-#MMM#-#YYYY#").toLowerCase();
    }
    Date.prototype.myTime=function(){
        return this.customFormat("#h#:#mm##ampm#");
    }

    var now = new Date();
    alert(now.myDate());

    
examples:
    var now = new Date();
    var myString = now.customFormat("#YYYY#-#MM#-#DD#"); 
    alert(myString);
    -->1999-11-19
    
    var myString = now.customFormat("#DDD#, #MMM#-#D#-#YY#"); 
    alert(myString);
    -->Fri, Nov-19-99
    
    var myString = now.customFormat("#h#:#mm# #ampm#"); 
    alert(myString);
    -->4:34 pm

    var myString = now.customFormat("#hhh#:#mm#:#ss#"); 
    alert(myString);
    -->16:34:26

    var myString = now.customFormat("#DDDD#, #MMMM# #D##th#, #YYYY# @ #h#:#mm# #ampm#"); 
    alert(myString);
    -->Friday, November 19th, 1999 @ 4:34 pm
    
****************************************************************************/


///T minus 0 is based on the real end of mayan cal 10.28.2011
///More fine tuning needed ms accuracy will be needed 
///but based on limits of javascript presently cant be done with out some hackery
///The beggining of universe needs to be calculated from the fine tuned T minus 0 
///resetValue will establish the value neccesary to ultimately create multiples of the mayan days
/// moving back in 20 day cycles to 16.4 billion "Big Bang"
/// the Mayan Cal uses values of 13
/// A conversion will need to be calculated
///ms are ultimately based on the solar year and gregorian year month day terminlogy is not correct and WILL ALWAYS be avoided! 

///Every moment has a pivitol role in the evaluations based on fuzzyscript. This is why fuzzy MUST establish its own timeline.
///Every instance of fuzzy is unique at the time it was created and is dependent on time. Every instance will be aware of its place on the time line. 
///All instances of fuzzy will be able to relate itself to any other moment created by any other installation of fuzzy and will automatically be a member of classes created at the same moment on any other installation of fuzzy. 


function dateWrite(){

var todayDate = new Date()
document.write('Today Date = '+todayDate+'</br> </br>')

var utcZeroDate = Date.UTC(1970,0,1,0,0,0,0) //1970 January 1!
document.write('UTC Zero Date = '+utcZeroDate+' ms</br> ')

var now = new Date;
document.write('now = '+now+' </br>')

//var nowDate = now.customFormat( "#DD# / #MM# / #YYYY# #hh#:#mm#:#ss#" )
//document.write('nowDate = '+nowDate+' </br>')

var nowDay = now.customFormat("#DD#")
var nowMonth = now.customFormat("#MM#")
var nowYear = now.customFormat("#YYYY#")
var formatDateForUTC = now.customFormat( "#YYYY#/#MM#/#DD#" )
document.write('formatDateForUTC = '+formatDateForUTC+' </br>')

var compare = Date.UTC(1970,0,1,0,0,0,0)
document.write('compare = '+compare+'<br>')
var zeroDate = Date.UTC(nowYear,nowMonth,nowDay,0,0,0,0)
document.write('zeroDate = '+zeroDate+' ms </br>')

//var currentEpoch = Math.round(new Date().getTime()/1000.0) getTime() //returns time in milliseconds.
//document.write('currentEpoch = '+currentEpoch+' </b></b>')
//newZero = zeroDate
//document.write('newZero = '+newZero+' ms <br>')

daysSince = zeroDate/10000000000
document.write('daysSince = '+daysSince+'</br>')

intervalsSince = daysSince/20
document.write('intervalsSince = '+intervalsSince+'</br>')

}

dateWrite()

day = ''

if (intervalsSince > 0)  { day = 'first day' }

if (intervalsSince > 1)  { day = 'first night' }

if (intervalsSince > 2)  { day = 'second day' }

if (intervalsSince > 3)  { day = 'second night' }

if (intervalsSince > 4)  { day = 'third day' }

if (intervalsSince > 5)  { day = 'third night' }

if (intervalsSince > 6)  { day = 'fourth day' }

if (intervalsSince > 7)  { day = 'fourth night' }

if (intervalsSince > 8)  { day = 'fifth day' }

if (intervalsSince > 9)  { day = 'fifth night' }

if (intervalsSince > 10) { day = 'sixth day' }

if (intervalsSince > 11) { day = 'sixth night' }

if (intervalsSince > 12) { day = 'seventh day' }

if (intervalsSince > 13) { day = 'error' }

document.write('intervalsSince = '+day+' New Epoch.</br>')




/*
 *
 *
 *
<html>
<head>
<script type="text/javascript">
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}
</script>
</head>

<body onload="startTime()">
<div id="txt"></div>
</body>
</html>




*/
//JavaScript routines

//Convert an epoch to human readable date:

//var myDate = new Date( your epoch date *1000);
//document.write(myDate.toGMTString()+"<br>"+myDate.toLocaleString());
//The example above gives the following output (with epoch date 1):

//Thu, 01 Jan 1970 00:00:01 GMT
//December 31, 1969 7:00:01 PM EST
//You can also use getFullYear, getMonth, getDay etc. See documentation below.

//Convert human readable dates to epoch:

//var myDate = new Date("July 1, 1978 02:30:00"); // Your timezone!
//var myEpoch = myDate.getTime()/1000.0;
//document.write(myEpoch);
//The example above gives the following output:

//268122600

