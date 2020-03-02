import React, { Component } from "react";

import html2pdf from "html2pdf.js";

const DateInfo = (str, capitalize) => {

    capitalize = capitalize || false;
  
    function jsUcfirst(string){
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    // удаление пояса создаем дату считая что она по московскому времени (так js вопспримет)
    function parseISOLocal(s) { var b = s.split(/\D/); return new Date(b[0], b[1]-1, b[2], b[3], b[4], b[5]); }
    // через сколько дней эта дата
    function remainDays(tsDate /*timestamp*/){
      let zdate = new Date(tsDate);
      zdate.setHours(0);
      zdate.setMinutes(0);
      zdate.setSeconds(0);
      let zdatefrom = zdate.getTime(); // начало дня целевого
  
      const daysTillRecord = (zdatefrom-Date.now())/1000/3600/24;
      let result = Math.floor(daysTillRecord)+1; // сегодня в 23:59 для даты на завтра 00:01 будет 1 день
      return result;
    }
  
    let weekday_short = {};
        weekday_short[0] =  "вс.";
        weekday_short[1] = "пн.";
        weekday_short[2] = "вт.";
        weekday_short[3] = "ср.";
        weekday_short[4] = "чт.";
        weekday_short[5] = "пт.";
        weekday_short[6] = "сб.";
  
    let weekDayName = {
        0: 'воскресенье',
        1: 'понедельник',
        2: 'вторник',
        3: 'среда',
        4: 'четверг',
        5: 'пятница',
        6: 'суббота',
    };
  
    let month_short = {};
        month_short[0] = 'янв.';
        month_short[1] = 'фев.';
        month_short[2] = 'мар.';
        month_short[3] = 'апр.';
        month_short[4] = 'мая';
        month_short[5] = 'июн.';
        month_short[6] = 'июл.';
        month_short[7] = 'авг.';
        month_short[8] = 'сен.';
        month_short[9] = 'окт.';
        month_short[10] = 'ноя.';
        month_short[11] = 'дек.';
  
     let month = {};
        month[0] = 'января';
        month[1] = 'февраля';
        month[2] = 'марта';
        month[3] = 'апреля';
        month[4] = 'мая';
        month[5] = 'июня';
        month[6] = 'июля';
        month[7] = 'августа';
        month[8] = 'сентября';
        month[9] = 'октября';
        month[10] = 'ноября';
        month[11] = 'декабря';
  
      //let ts = Date.parse(str);
      //let dt = new Date(ts);
      let dt = parseISOLocal(str);
      let ts = dt.getTime();
  
  
      let h = dt.getHours();
      let m = dt.getMinutes();
  
      if (h < 10) {
          h = '0' + h;
      }
      if (m < 10) {
          m = '0' + m;
      }
  
      let zeroStartedMonthNumber = (dt.getMonth()+1);
      if(zeroStartedMonthNumber < 10){
          zeroStartedMonthNumber = '0'+zeroStartedMonthNumber;
      }
  
      let zeroStartedDay = dt.getDate();
      if(zeroStartedDay < 10){
          zeroStartedDay = '0'+zeroStartedDay;
      }
  
    let result = {
      timestamp: ts,
      weekday_short: weekday_short[ dt.getDay() ],
      weekDayName: weekDayName[ dt.getDay() ],
      month_short: month_short[ dt.getMonth() ],
      month: month[ dt.getMonth() ],
      monthNumber: (dt.getMonth()+1),
      day: dt.getDate(),
      hours: h,
      minutes: m,
      remain_days:remainDays(ts),
      short_date: zeroStartedDay+'.'+zeroStartedMonthNumber
    };
  
    if(capitalize){
      for(let k in result){
        if(k=='timestamp') continue;
        result[k] = jsUcfirst(''+result[k]);
      }
    }
  
    return result;
  
  };




let data = [{"date":"03-02-2020","dayText":"понедельник","homework":[{"title":"Литература","text":["стр.68 задание №7"],"file":[]},{"title":"Математика","text":["с.194-195 читать,\nвыучить правило выделения целой части из неправильной дроби.\n№770, 772"],"file":[]},{"title":"Русский язык","text":["п.46, упр.346 "],"file":[]}]},{"date":"04-02-2020","dayText":"вторник","homework":[{"title":"Всеобщая история","text":[" Выучить § 34. Сделать новые карточки и выучить значение новых слов: демос, ареопаг, архонт, агора, полис, демократия, Аттика, 776 г до н.э, 594 г до н.э., 490 г до н.э, 480 г до н.э. Выполнить задание на контурных картах на стр. 12. Начать подготовку к ВПР (30 марта- 10 апреля)."],"file":[]},{"title":"Иностранный язык (английский)","text":["Стр 51-рабочая тетрадь."],"file":[]},{"title":"Математика","text":["Правила сложения и вычитания смешанных чисел учим по тетради\n\n№776(3,4), 778( 3, 4, 6, 7,10),779(1,2), 785, 789(1)."],"file":[]},{"title":"Родная литература","text":["пересказ эпизодов \"Третья высота Гули Королёвой\", \"Четвёртая высота Гули Королёвой\""],"file":[]},{"title":"Русский язык","text":["Выполнить морфологический разбор сущ. (в небе), прилагат. (в темном), морфемный разбор (рассыпались). см.предложение в тетради"],"file":[]}]},{"date":"05-02-2020","dayText":"среда","homework":[{"title":"Биология","text":["Параграф 12"],"file":[]},{"title":"Литература","text":["стр.69 задание №1 рубрики \"Литература и изобразительное искусство\". Нарисуйте свои иллюстрации к сказу (по желанию)"],"file":[]},{"title":"Математика","text":["c. 196 правило преобразования смешанного числа в неправильную дробь выучить.\n№773\n№777(10-14), 271(7), 780(1)"],"file":[]},{"title":"Русский язык","text":["упр.350,351 (устно)"],"file":[]}]},{"date":"06-02-2020","dayText":"четверг","homework":[{"title":"Всеобщая история","text":[" Выучить § 35. Выполнить задание на контурных картах на стр. 12. Начать подготовку к ВПР (30 марта- 10 апреля).Выполнить вариант №1 ВПР (см. Приложение)."],"file":["https://dnevnik.mos.ru/attachments/files/049/604/506/original/Темы для ВПР по истории 30.03.20.docx","https://dnevnik.mos.ru/attachments/files/049/604/508/original/Тренажер-для-задания1 (1).pptx","https://dnevnik.mos.ru/attachments/files/049/604/538/original/СЛОВАРЬ ПО ИСТОРИИ ДР. МИРА (5).pdf","https://dnevnik.mos.ru/attachments/files/049/604/542/original/ВПР_ИС-5_Вар.1 (1).pdf"]},{"title":"Иностранный язык (английский)","text":["Не задано."],"file":[]},{"title":"Литература","text":["стр.69 задание №1 рубрики \"Литература и изобразительное искусство\". Нарисуйте свои иллюстрации к сказу (по желанию)"],"file":[]},{"title":"Математика","text":["выполнить задание из файла ","выполнить приложение для самопроверки"],"file":["https://dnevnik.mos.ru/attachments/files/049/845/309/original/IMG_20200205_134007.jpg"]},{"title":"Русский язык","text":["не задано "],"file":[]}]},{"date":"07-02-2020","dayText":"пятница","homework":[{"title":"Иностранный язык (английский)","text":["Упр 4(а) стр 87.Упр 5 стр 87-письменно.Упр 7 стр 87-выучить."],"file":[]},{"title":"Математика (спецкурс)","text":["с.100 №371, 372"],"file":[]},{"title":"Русский язык","text":["п.47, правило; упр.356"],"file":[]}]},{"date":"08-02-2020","dayText":"Суббота","homework":[]},{"date":"09-02-2020","dayText":"Воскресенье","homework":[]}];

    let sDate = `3.02`;
    let eDate = `9.02`;
    let filename = `Домашнее задание на ${sDate} - ${eDate}.pdf`;
    let childName = 'Забавникова Алиса';

const getHWJsx = (dataHomework) => {


    const body = `
   
        <div class='container' id='pdfcontainer'>
            <div class='row'>
                <p style="font-size: 28px; font-weight: bold;">${childName}</p>
                <p style="font-size: 22px">Домашнее задание на ${sDate} - ${eDate}</p>
    
                ${dataHomework.filter(item => item.homework.length > 0).map((item, key) => {
                    let dayText = item.dayText.slice(0, 1).toUpperCase() + item.dayText.slice(1);
                    let dateInfo = DateInfo(new Date(item.date.replace(/(\d{2})-(\d{2})-(\d{4})/, "$3-$2-$1")).toISOString());
    
                    return (
                        `<div style="margin-left: 10px; line-height: 2.2em">
                            <!--Вывод названия дня недели-->
                            <span style="font-size: 20px; margin-left: 10px">${dayText}</span>&nbsp;&nbsp;
    
                            <!--Вывод число дня и сокращенное название месяца-->
                            <span style="color: #9E9E9E; margin-left: 10px; font-size: 14px">
                                ${dateInfo.day} ${dateInfo['month_short'].replace(/\./, '')}
                            </span>

    
                            <!--Вывод внутреннего списка домашнего занятия-->
                            <div style="margin-left: 13px; font-size: 14px">
                                ${item.homework.map((it, k) => {
                                    return (
                                        `<div>
                                            <div style="font-size: 14px; color: #303030;">
                                                ${it.title}
                                                ${(it.text && it.text.length > 0) ? it.text.map((text, kText) => (
                                                    `<div style="margin-left: 15px">${text}</div>`
                                                )).join('') : '' }
                                                ${(it.file.length > 0) ? `<div style="margin-left: 15px">Есть файл с заданием, не забудьте его скачать</div>` : ''}
                                            </div>
                                            
                                        </div>`
                                    );
                                }).join('')}
                            </div>
                            
                        </div>`
                    );
                }).join('<hr/>') }
            </div>
        </div>
    `;

    //console.log(body);
    return body;

}



class CreatePdf extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.pdfcont = '';
    }

    handleClick() {

        //console.log('gen pdf');

        

        var opt = {
            margin:       [5,15,5,15],
            filename:     filename,
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 1 },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().from( getHWJsx(data) ).set(opt).save();



        

        
    }
    
    render() {
        return <div>
                
                <button onClick={this.handleClick} style={{color:'red'}}>Сгенерировать PDF из HTML</button>
               </div>;
    }
}

export default CreatePdf;
