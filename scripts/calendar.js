
;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined'
        && typeof require === 'function' ? factory(require('../moment')) :
    typeof define === 'function' && define.amd ? define(['../moment'], factory) :
    factory(global.moment)
 }(this, (function (moment) { 'use strict';
 
 
     var monthsShortDot = 'January_Febreuary_March_April_May_June_July_August_September_October_November_December'.split('_'),
         monthsShort = 'jan_feb_mar_apr_may_jun_jul_auh_sep_oct_nov_dec'.split('_');
 
     var monthsParse = [/^jan/i, /^feb/i, /^mar/i, /^apr/i, /^may/i, /^jun/i, /^jul/i, /^aug/i, /^sep/i, /^oct/i, /^nov/i, /^dec/i];
     var monthsRegex = /^(january|february|march|april|may|june|july|august|september|october|november|december|jjan\.?|feb\.?|mar\.?|apr\.?|may\.?|jun\.?|jul\.?|aug\.?|sep\.?|oct\.?|nov\.?|dec\.?)/i;
 
     var es = moment.defineLocale('es', {
         months : 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'),
         monthsShort : function (m, format) {
             if (!m) {
                 return monthsShortDot;
             } else if (/-MMM-/.test(format)) {
                 return monthsShort[m.month()];
             } else {
                 return monthsShortDot[m.month()];
             }
         },
         monthsRegex : monthsRegex,
         monthsShortRegex : monthsRegex,
         monthsStrictRegex : /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
         monthsShortStrictRegex : /^(jan\.?|feb\.?|mar\.?|apr\.?|may\.?|jun\.?|jul\.?|aug\.?|sep\.?|oct\.?|nov\.?|dec\.?)/i,
         monthsParse : monthsParse,
         longMonthsParse : monthsParse,
         shortMonthsParse : monthsParse,
         weekdays : 'domingo_lunes_martes_miércoles_jueves_viernes_sábado'.split('_'),
         weekdaysShort : 'dom._lun._mar._mié._jue._vie._sáb.'.split('_'),
         weekdaysMin : 'do_lu_ma_mi_ju_vi_sá'.split('_'),
         weekdaysParseExact : true,
         longDateFormat : {
             LT : 'H:mm',
             LTS : 'H:mm:ss',
             L : 'DD/MM/YYYY',
             LL : 'D [de] MMMM [de] YYYY',
             LLL : 'D [de] MMMM [de] YYYY H:mm',
             LLLL : 'dddd, D [de] MMMM [de] YYYY H:mm'
         },
         calendar : {
             sameDay : function () {
                 return '[hoy a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
             },
             nextDay : function () {
                 return '[mañana a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
             },
             nextWeek : function () {
                 return 'dddd [a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
             },
             lastDay : function () {
                 return '[ayer a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
             },
             lastWeek : function () {
                 return '[el] dddd [pasado a la' + ((this.hours() !== 1) ? 's' : '') + '] LT';
             },
             sameElse : 'L'
         },
         relativeTime : {
             future : 'en %s',
             past : 'hace %s',
             s : 'unos segundos',
             ss : '%d segundos',
             m : 'un minuto',
             mm : '%d minutos',
             h : 'una hora',
             hh : '%d horas',
             d : 'un día',
             dd : '%d días',
             M : 'un mes',
             MM : '%d meses',
             y : 'un año',
             yy : '%d años'
         },
         dayOfMonthOrdinalParse : /\d{1,2}º/,
         ordinal : '%dº',
         week : {
             dow : 1, // Monday is the first day of the week.
             doy : 4  // The week that contains Jan 4th is the first week of the year.
         }
     });
 
     return es;
 
 })));