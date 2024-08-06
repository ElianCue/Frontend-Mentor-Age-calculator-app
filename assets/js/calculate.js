document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('age-calculator')
    console.log(form);
    
    // OBTENER FECHA ACTUAL //

    fecha = new Date();
    const day_act = fecha.getDate();
    const month_act = fecha.getMonth();
    const year_act = fecha.getFullYear();
    console.log(`Day: ${day_act} , Month: ${month_act}, Year: ${year_act}`)

    // Validacion de los Input //

    const input_day = document.getElementById('day');
    const input_month = document.getElementById('month');
    const input_year = document.getElementById('year');


    // input_day.addEventListener('input', () =>{
    //     valor = input_day.value;
    //     if (valor < 1 || valor > 31){

    //     }
    // }) Completar Validacion


    form.addEventListener('submit', (event) => {
        // OBTENER DATOS DEL FORMULARIO //
        event.preventDefault();
        const day = document.getElementById("day").value;
        const month = document.getElementById("month").value;
        const year = document.getElementById("year").value;
        console.log(`Day: ${day} , Month: ${month}, Year: ${year}`)
        
        let result_year = year_act - year;
        let result_month;

        if (month_act < month) {
          result_year--;
          result_month = 12 + month_act - month;
        } else {
          result_month = month - month_act;
        }
    
        let result_day = day - day_act;
    
        if (result_day < 0) {
          result_month--;
          let daysInPreviousMonth = new Date(year_act, month_act - 1, 0).getDate();
          console.log("Días en el mes anterior:", daysInPreviousMonth); // Para depurar
          result_day += daysInPreviousMonth;
        }
    
        // Formato de salida
        document.getElementById('result-days').textContent = `${Math.abs(result_day)}`;
        document.getElementById('result-months').textContent = `${Math.abs(result_month)}`;
        document.getElementById('result-years').textContent = `${result_year}`;
    
        console.log(`Dias : ${result_day}, Meses: ${result_month}, años: ${result_year}`);

    })

})