(function () {
    
    var values = [8, 12, 16, 24, 36];// los precios
    var pageviewsList = [10, 50, 500, 100, 1];// la cantidad dependiendo del precio
    var pageviews = $('#pageviews'); //donde se va a reflejar la cantidad
    var perMonth = $('#per-month'); // donde se va a reflejar el precio por mes
    var sliderBar = $('#slider1'); // el range slide bar
    // LA PARTE DEL DECUENTO//
      // CUANDO EL SWITCH ESTÉ ACTIVADO EL DESCUENTO SE DEBE VER REFLEJADO EN LA PANTALLA
      var checkboxId = document.querySelector('#checkbox');
      var checkbox = $('.checkbox')
      var perTime = $('#per-time');

      
    // evento cuando el valor del slide bar cambie
    sliderBar.on('input change', function () {
        //dependiendo de donde se encuentre el slider bar
        perMonth.text('$' + values[this.value] + '.00'); // muestra el precio correspondiente
        if (checkboxId.checked) {
            if (pageviewsList[this.value] == 12) {
                pageviews.text(pageviewsList[this.value] + 'M Pageviews');
            } else {
                pageviews.text(pageviewsList[this.value] + 'K Pageviews');
            } //muestra la centidad correspondiente
            //console.log(pageviewsList[this.value]);
            //console.log(this.value);
        } else {
            if (pageviewsList[this.value] < 10) {
                pageviews.text(pageviewsList[this.value] + 'M Pageviews');
            } else {
                pageviews.text(pageviewsList[this.value] + 'K Pageviews');
            } //muestra la centidad correspondiente
            //console.log(pageviewsList[this.value]);
            //console.log(this.value);
        }
    });
    //EVENTO DONDE SE APLICARA EL DESCUENTO SI EL SWITCH ESTA ACTIVADO
    checkbox.on('input', function(){
        if ($(this).is(':checked')) {
            ////console.log(checkboxId.checked +'este');
            pageviewsList = [10*12, 50*12, 100*12, 500*12, 1*12];
            values = [8*0.75*12, 12*0.75*12, 16*0.75*12, 24*0.75*12, 36*0.75*12];
            perMonth.text('$' + values[sliderBar.val()] + '.00');
            perTime.text('/year');
            ////console.log(pageviewsList);
            if (pageviewsList[sliderBar.val()] == 12) {
                pageviews.text(pageviewsList[sliderBar.val()] + 'M Pageviews');
            } else {
                pageviews.text(pageviewsList[sliderBar.val()] + 'K Pageviews');
            }
        } else {
            pageviewsList = [10, 50, 100, 500, 1];
            values = [8, 12, 16, 24, 36]
            perTime.text('/month');
            perMonth.text('$' + values[sliderBar.val()] + '.00');
            //console.log(checkbox.is(':checked'));
            //console.log(pageviewsList);
            if (pageviewsList[sliderBar.val()] < 10) {
                pageviews.text(pageviewsList[sliderBar.val()] + 'M Pageviews');
            } else {
                pageviews.text(pageviewsList[sliderBar.val()] + 'K Pageviews');
            }
        }
   });
    // evento para que el color de derecha e izquierda del slider bar sea diferente
    sliderBar.on('input', function() {
        var value = (this.value-this.min)/(this.max-this.min)*100; //la posicion del slider bar en porcentajes
        this.style.background = 'linear-gradient(to right, 	#a5f3eb 0%, #a5f3eb ' + value + '%, #80808054  ' + value + '%, #80808054  100%)';//el color izquierdo y derecho que ocupara dependiendo de su posicion
      });

      
   //end
}());