import{r as y}from"./DatePicker-B5wfdFHu.js";var s={exports:{}},v=s.exports,h;function D(){return h||(h=1,function(c,x){(function(m,u){c.exports=u(y())})(v,function(m){function u(_){return _&&typeof _=="object"&&"default"in _?_:{default:_}}var L=u(m),a="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),M="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),f="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),d="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),l=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function r(_,e,Y){var t,n;return Y==="m"?e?"минута":"минуту":_+" "+(t=+_,n={mm:e?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"}[Y].split("_"),t%10==1&&t%100!=11?n[0]:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?n[1]:n[2])}var o=function(_,e){return l.test(e)?a[_.month()]:M[_.month()]};o.s=M,o.f=a;var i=function(_,e){return l.test(e)?f[_.month()]:d[_.month()]};i.s=d,i.f=f;var p={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:i,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:r,mm:r,h:"час",hh:r,d:"день",dd:r,M:"месяц",MM:r,y:"год",yy:r},ordinal:function(_){return _},meridiem:function(_){return _<4?"ночи":_<12?"утра":_<17?"дня":"вечера"}};return L.default.locale(p,null,!0),p})}(s)),s.exports}D();
