var $$=Dom7;

var app = new Framework7({
  // App root element
  root: '#app',
  //theme
  theme: 'md',
  // App Name
  name: 'Mi Horario',
  // App id
  id: 'com.myapp.mihorario',
  // Enable swipe panel
  statusbar: {
    overlay:true,
    materialBackgroundColor: '#263238',
  },
  panel: {
    swipe: 'left',

  },
  // Add default routes
  routes: [
    {
    path: '/index/',
    url: 'index.html',
  },
  {
  path: '/carreras/',
  url: 'carreras.html',
  on:{
        pageBeforeIn(e, page) {
          //- Two groups
var ac1 = app.actions.create({
  buttons: [
    // First group
    [
      {
        text: '<i class="f7-icons md-only">settings</i>&nbsp;&nbsp;Settings',
        label: true
      },
      {
        icon:'<i class="f7-icons md-only">logout</i>'	,
        text: 'Logout',
        bold: true,
        onClick: function () {
    logout();
        },
      },

    ],
    // Second group
    [
      {
        icon:'<i class="material-icons md-only">close</i>'	,
        text: 'Cancel',
        color: 'red'
      }
    ]
  ]
});$$('.ac-1').on('click', function () {
    ac1.open();
});

var carreras=[
  {carrera:"Software"},
  {carrera:"Mechatronics"},
  {carrera:"Biotechnology"}
]
var j="";
for(x in carreras){
  j+="<li><a href=\"/grupos/"+x+"/\">"+carreras[x].carrera+"</a></li>";


}
$$('.carreras').html(j);

        }
      }
},
  {
  path: '/grupos/:id/',
  url: 'grupos.html',
  on:{
        pageBeforeIn(e, page) {

  //- Two groups
var ac2 = app.actions.create({
buttons: [
// First group
[
{
text: '<i class="f7-icons md-only">settings</i>&nbsp;&nbsp;Settings',
label: true
},
{
icon:'<i class="f7-icons md-only">logout</i>'	,
text: 'Logout',
bold: true,
onClick: function () {
logout();
},
},

],
// Second group
[
{
icon:'<i class="material-icons md-only">close</i>'	,
text: 'Cancel',
color: 'red'
}
]
]
});$$('.ac-2').on('click', function () {
ac2.open();
});

if(page.route.params.id==0){
var grupos=[
  {grupo:"S1-3"},
    {grupo:"S1-6"},
  {grupo:"S1-8"},

];
var j="";
for(x in grupos){
  j+="<li><a href=\"/dias/"+x+"/\">"+grupos[x].grupo+"</a></li>";

}

$$('.grupos').html(j);
}
if(page.route.params.id==1){
var grupos=[
  {grupo:"M1-3"},
    {grupo:"M1-6"},
  {grupo:"M1-8"},

];
var j="";
for(x in grupos){
  j+="<li><a href=\"/dias/"+x+"/\">"+grupos[x].grupo+"</a></li>";

}

$$('.grupos').html(j);
}
if(page.route.params.id==2){
var grupos=[
  {grupo:"B1-3"},
    {grupo:"B1-6"},
  {grupo:"B1-8"},

];
var j="";
for(x in grupos){
  j+="<li><a href=\"/dias/"+x+"/\">"+grupos[x].grupo+"</a></li>";

}

$$('.grupos').html(j);
}

        }
      }
},

  {
  path: '/dias/:id/',
  url: 'dias.html',
  on:{
        pageBeforeIn(e, page) {
            //- Two groups
          var ac3 = app.actions.create({
          buttons: [
          // First group
          [
          {
          text: '<i class="f7-icons md-only">settings</i>&nbsp;&nbsp;Settings',
          label: true
          },
          {
          icon:'<i class="f7-icons md-only">logout</i>'	,
          text: 'Logout',
          bold: true,
          onClick: function () {
          logout();
          },
          },

          ],
          // Second group
          [
          {
          icon:'<i class="material-icons md-only">close</i>'	,
          text: 'Cancel',
          color: 'red'
          }
          ]
          ]
          });
          $$('.ac-3').on('click', function () {
          ac3.open();
          });

if(page.route.params.id==0){
var dias=[
  {dia:"Monday"},
    {dia:"Tuesday"},
  {dia:"Wednesday"},

];
var j="";
for(x in dias){
  j+="<li><a href=\"/alumnos/"+x+"/\">"+dias[x].dia+"</a></li>";

}

$$('.dias').html(j);

}
if(page.route.params.id==1){
var dias=[
  {dia:"Monday"},
    {dia:"Wednesday"},
  {dia:"Friday"},

];
var j="";
for(x in dias){
  j+="<li><a href=\"/alumnos/"+x+"/\">"+dias[x].dia+"</a></li>";

}

$$('.dias').html(j);}
if(page.route.params.id==2){
var dias=[
  {dia:"Tuesday"},
    {dia:"Wednesday"},
  {dia:"Thursday"},

];
var j="";
for(x in dias){
  j+="<li><a href=\"/alumnos/"+x+"/\">"+dias[x].dia+"</a></li>";

}

$$('.dias').html(j);}
        }
      }
},

  {
  path: '/alumnos/:id/',
  url: 'alumnos.html',
  on:{
        pageBeforeIn(e, page) {
                    //- Two groups
          var ac4 = app.actions.create({
            buttons: [
              // First group
              [
                {
                  text: '<i class="f7-icons md-only">settings</i>&nbsp;&nbsp;Settings',
                  label: true
                },
                {
                  icon:'<i class="f7-icons md-only">logout</i>'	,
                  text: 'Logout',
                  onClick: function () {
              logout();
                  },
                },
  {
    icon:'<i class="f7-icons md-only">eye</i>'	,
    text: '<a class="link popup-open" href="#" data-popup=".popup-about">See Attendance Saved</a>',
    onClick: function () {

    },
  },
              ],
              // Second group
              [
                {
                  icon:'<i class="material-icons md-only">close</i>'	,
                  text: 'Cancel',
                      bold: true,
                  color: 'red'
                }
              ]
            ]
          });$$('.ac-4').on('click', function () {
              ac4.open();
          });

  // create searchbar
  var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
      search(sb, query, previousQuery) {
        console.log(query, previousQuery);
      }
    }
  });

if(page.route.params.id==0){
var alumnos=[
      {alumno:"Alejandro Barahona Jose Alfredo",asistencia:"Asistio"},
    {alumno:"Aguilar Dorantes Irma",asistencia:"Asistio"},
    {alumno:"Altamirano García Enrique Alí",asistencia:"Asistio"},
    {alumno:"Banda Martínez Jacinto",asistencia:"Asistio"},
        {alumno:"Buenfil Díaz Iván",asistencia:"Asistio"},
    {alumno:"Camarillo Palafox Dante Adrián",asistencia:"Asistio"},
    {alumno:"Cárdenas Silva Jacqueline",asistencia:"Asistio"},
    {alumno:"Carreño Chapa Agustín Guadalupe",asistencia:"Asistio"},
    {alumno:"Castro Borbón Aníbal",asistencia:"Asistio"},
    {alumno:"Castillo Ruiz Nahum",asistencia:"Asistio"},
    {alumno:"Escobar Beltrán Francisco Enrique",asistencia:"Asistio"},
    {alumno:"Fernández Haggar María Enriqueta",asistencia:"Asistio"},
    {alumno:"Figueroa Valle Jorge Alberto",asistencia:"Asistio"},
    {alumno:"Gallegos Verdías Rosa Elena",asistencia:"Asistio"},
    {alumno:"García Ledesma Juan Pablo",asistencia:"Asistio"},
    {alumno:"Díaz Núñez Juan Manuel",asistencia:"Asistio"},
    {alumno:"Cortez Arias Baltazar ",asistencia:"Asistio"},
    {alumno:"Baeza Lopez Zhennya Zuleyma",asistencia:"Asistio"},
    {alumno:"Wilbert Bocanegra Velazquez",asistencia:"Asistio"},

];

var j="";
for(x in alumnos){
  j+= '<li>'+
'  <div class="item-content">'+
      '<div class="item-media">'+
      '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
      '</div>'+
    '  <div class="item-inner">'+
          '<div class="item-title">'
+alumnos[x].alumno+
      '    </div>'+
    '  </div>'+
  '</div>'+
'  <div class="item-inner">'+
  '  &nbsp;&nbsp;Attendance'+
    '<label class="radio">'+
    '<!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Attendance" id="1" checked> '+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
'  </label>'+
'  Absence'+
'  <label class="radio">'+
  '  <!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Absence" id="2">'+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
  '</label>'+
'  Retardament'+
'  <label class="radio">'+
'    <!-- radio input -->'+
'    <input type="radio" name=\'demo-radio'+[x]+'\' value="Retardament" id="3">'+
'    <!-- radio icon -->'+
'    <i class="icon-radio"></i>'+
'    </label>'+
'    </div>'+
'</li>'+
'<li>'+
'</li>';


}


$$('.alumnos').html(j);
console.log(j);

$$('.save').on('click',function(e){

  $$('input:checked').each(function(i,r){
 var v=$$(r).attr('value');
 var c="";

 alumnos[i].asistencia=v;

 for(x in alumnos){
   c+='<li>'+
         '  <div class="item-content">'+
         '<div class="item-media">'+
         '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
         '</div>'+
             '<div class="item-inner">'+
               '<div class="item-title">'+alumnos[x].alumno+'</div>'+
               '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
             '</div>'+
           '</div>'+
         '</li>';
 }

 $$('.savestudent').html(c);


     });

   app.dialog.progress("Saving...");
       setTimeout(function () {
         app.dialog.close();
         app.dialog.alert("Saved Attendance","Notification");

       }, 3000);


});
$$('.update').on('click',function(e){

    $$('input:checked').each(function(i,r){
   var v=$$(r).attr('value');
   var c="";

   alumnos[i].asistencia=v;

   for(x in alumnos){
     c+='<li>'+
           '  <div class="item-content">'+
           '<div class="item-media">'+
           '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
           '</div>'+
               '<div class="item-inner">'+
                 '<div class="item-title">'+alumnos[x].alumno+'</div>'+
                 '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
               '</div>'+
             '</div>'+
           '</li>';
   }

   $$('.savestudent').html(c);


       });

     app.dialog.progress("Updating...");
         setTimeout(function () {
           app.dialog.close();
           app.dialog.alert("Updated Attendance","Notification");

         }, 3000);


});
}
if(page.route.params.id==1){
var alumnos=[
      {alumno:"Alejandro Barahona Jose Alfredo",asistencia:"Asistio"},
    {alumno:"Aguilar Dorantes Irma",asistencia:"Asistio"},
    {alumno:"Altamirano García Enrique Alí",asistencia:"Asistio"},
    {alumno:"Banda Martínez Jacinto",asistencia:"Asistio"},
        {alumno:"Buenfil Díaz Iván",asistencia:"Asistio"},
    {alumno:"Camarillo Palafox Dante Adrián",asistencia:"Asistio"},
    {alumno:"Cárdenas Silva Jacqueline",asistencia:"Asistio"},
    {alumno:"Carreño Chapa Agustín Guadalupe",asistencia:"Asistio"},
    {alumno:"Castro Borbón Aníbal",asistencia:"Asistio"},
    {alumno:"Castillo Ruiz Nahum",asistencia:"Asistio"},
    {alumno:"Escobar Beltrán Francisco Enrique",asistencia:"Asistio"},
    {alumno:"Fernández Haggar María Enriqueta",asistencia:"Asistio"},
    {alumno:"Figueroa Valle Jorge Alberto",asistencia:"Asistio"},
    {alumno:"Gallegos Verdías Rosa Elena",asistencia:"Asistio"},
    {alumno:"García Ledesma Juan Pablo",asistencia:"Asistio"},
    {alumno:"Díaz Núñez Juan Manuel",asistencia:"Asistio"},
    {alumno:"Cortez Arias Baltazar ",asistencia:"Asistio"},
    {alumno:"Baeza Lopez Zhennya Zuleyma",asistencia:"Asistio"},
    {alumno:"Wilbert Bocanegra Velazquez",asistencia:"Asistio"},

];

var j="";
for(x in alumnos){
  j+= '<li>'+
'  <div class="item-content">'+
      '<div class="item-media">'+
      '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
      '</div>'+
    '  <div class="item-inner">'+
          '<div class="item-title">'
+alumnos[x].alumno+
      '    </div>'+
    '  </div>'+
  '</div>'+
'  <div class="item-inner">'+
  '  &nbsp;&nbsp;Attendance'+
    '<label class="radio">'+
    '<!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Attendance" id="1" checked> '+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
'  </label>'+
'  Absence'+
'  <label class="radio">'+
  '  <!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Absence" id="2">'+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
  '</label>'+
'  Retardament'+
'  <label class="radio">'+
'    <!-- radio input -->'+
'    <input type="radio" name=\'demo-radio'+[x]+'\' value="Retardament" id="3">'+
'    <!-- radio icon -->'+
'    <i class="icon-radio"></i>'+
'    </label>'+
'    </div>'+
'</li>'+
'<li>'+
'</li>';


}


$$('.alumnos').html(j);
console.log(j);$$('.save').on('click',function(e){

  $$('input:checked').each(function(i,r){
 var v=$$(r).attr('value');
 var c="";

 alumnos[i].asistencia=v;

 for(x in alumnos){
   c+='<li>'+
         '  <div class="item-content">'+
         '<div class="item-media">'+
         '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
         '</div>'+
             '<div class="item-inner">'+
               '<div class="item-title">'+alumnos[x].alumno+'</div>'+
               '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
             '</div>'+
           '</div>'+
         '</li>';
 }

 $$('.savestudent').html(c);


     });

   app.dialog.progress("Saving...");
       setTimeout(function () {
         app.dialog.close();
         app.dialog.alert("Saved Attendance","Notification");

       }, 3000);


});
$$('.update').on('click',function(e){

    $$('input:checked').each(function(i,r){
   var v=$$(r).attr('value');
   var c="";

   alumnos[i].asistencia=v;

   for(x in alumnos){
     c+='<li>'+
           '  <div class="item-content">'+
           '<div class="item-media">'+
           '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
           '</div>'+
               '<div class="item-inner">'+
                 '<div class="item-title">'+alumnos[x].alumno+'</div>'+
                 '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
               '</div>'+
             '</div>'+
           '</li>';
   }

   $$('.savestudent').html(c);


       });

     app.dialog.progress("Updating...");
         setTimeout(function () {
           app.dialog.close();
           app.dialog.alert("Updated Attendance","Notification");

         }, 3000);


});

}
if(page.route.params.id==2){
var alumnos=[
      {alumno:"Alejandro Barahona Jose Alfredo",asistencia:"Asistio"},
    {alumno:"Aguilar Dorantes Irma",asistencia:"Asistio"},
    {alumno:"Altamirano García Enrique Alí",asistencia:"Asistio"},
    {alumno:"Banda Martínez Jacinto",asistencia:"Asistio"},
        {alumno:"Buenfil Díaz Iván",asistencia:"Asistio"},
    {alumno:"Camarillo Palafox Dante Adrián",asistencia:"Asistio"},
    {alumno:"Cárdenas Silva Jacqueline",asistencia:"Asistio"},
    {alumno:"Carreño Chapa Agustín Guadalupe",asistencia:"Asistio"},
    {alumno:"Castro Borbón Aníbal",asistencia:"Asistio"},
    {alumno:"Castillo Ruiz Nahum",asistencia:"Asistio"},
    {alumno:"Escobar Beltrán Francisco Enrique",asistencia:"Asistio"},
    {alumno:"Fernández Haggar María Enriqueta",asistencia:"Asistio"},
    {alumno:"Figueroa Valle Jorge Alberto",asistencia:"Asistio"},
    {alumno:"Gallegos Verdías Rosa Elena",asistencia:"Asistio"},
    {alumno:"García Ledesma Juan Pablo",asistencia:"Asistio"},
    {alumno:"Díaz Núñez Juan Manuel",asistencia:"Asistio"},
    {alumno:"Cortez Arias Baltazar ",asistencia:"Asistio"},
    {alumno:"Baeza Lopez Zhennya Zuleyma",asistencia:"Asistio"},
    {alumno:"Wilbert Bocanegra Velazquez",asistencia:"Asistio"},

];

var j="";
for(x in alumnos){
  j+= '<li>'+
'  <div class="item-content">'+
      '<div class="item-media">'+
      '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
      '</div>'+
    '  <div class="item-inner">'+
          '<div class="item-title">'
+alumnos[x].alumno+
      '    </div>'+
    '  </div>'+
  '</div>'+
'  <div class="item-inner">'+
  '  &nbsp;&nbsp;Attendance'+
    '<label class="radio">'+
    '<!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Attendance" id="1" checked> '+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
'  </label>'+
'  Absence'+
'  <label class="radio">'+
  '  <!-- radio input -->'+
  '  <input type="radio" name=\'demo-radio'+[x]+'\' value="Absence" id="2">'+
  '  <!-- radio icon -->'+
  '  <i class="icon-radio"></i>'+
  '</label>'+
'  Retardament'+
'  <label class="radio">'+
'    <!-- radio input -->'+
'    <input type="radio" name=\'demo-radio'+[x]+'\' value="Retardament" id="3">'+
'    <!-- radio icon -->'+
'    <i class="icon-radio"></i>'+
'    </label>'+
'    </div>'+
'</li>'+
'<li>'+
'</li>';


}


$$('.alumnos').html(j);
console.log(j);$$('.save').on('click',function(e){

  $$('input:checked').each(function(i,r){
 var v=$$(r).attr('value');
 var c="";

 alumnos[i].asistencia=v;

 for(x in alumnos){
   c+='<li>'+
         '  <div class="item-content">'+
         '<div class="item-media">'+
         '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
         '</div>'+
             '<div class="item-inner">'+
               '<div class="item-title">'+alumnos[x].alumno+'</div>'+
               '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
             '</div>'+
           '</div>'+
         '</li>';
 }

 $$('.savestudent').html(c);


     });

   app.dialog.progress("Saving...");
       setTimeout(function () {
         app.dialog.close();
         app.dialog.alert("Saved Attendance","Notification");

       }, 3000);


});
$$('.update').on('click',function(e){

    $$('input:checked').each(function(i,r){
   var v=$$(r).attr('value');
   var c="";

   alumnos[i].asistencia=v;

   for(x in alumnos){
     c+='<li>'+
           '  <div class="item-content">'+
           '<div class="item-media">'+
           '  <i class="icon material-icons md-only">person<span class="badge color-red">'+x+'</span></i>'+
           '</div>'+
               '<div class="item-inner">'+
                 '<div class="item-title">'+alumnos[x].alumno+'</div>'+
                 '<div class="item-after"><span class="badge">'+alumnos[x].asistencia+'</span></div>'+
               '</div>'+
             '</div>'+
           '</li>';
   }

   $$('.savestudent').html(c);


       });

     app.dialog.progress("Updating...");
         setTimeout(function () {
           app.dialog.close();
           app.dialog.alert("Updated Attendance","Notification");

         }, 3000);


});
}




}



        }
      }

],
  // ... other parameters
});

var mainView = app.views.create('.view-main');


//funcion logout


function logout(){
  app.dialog.confirm('Are you sure to log out?','Notification', function () {
app.dialog.progress("Closing session...");
setTimeout(function () {
  app.dialog.close();
  app.router.navigate('/index/');
  app.panel.close('right', 'true')

}, 2000);



});

}


function loggin(){

if(document.login.username.value=="Updc" && document.login.password.value=="123"){
  app.dialog.progress("logging in...");
    setTimeout(function () {
      app.dialog.close();
      app.dialog.alert("Accepted","Notification");
      app.router.navigate('/carreras/');
    }, 3000);
}else{
  app.dialog.progress("logging in...");
    setTimeout(function () {
      app.dialog.close();
      app.dialog.alert("Incorrect session","Notification")


    }, 3000);
}
}
