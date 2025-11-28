let calender = document.getElementById('calender');

function todayDate (){
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
    const formattedDate = today.toLocaleDateString('en-US', options);
    document.getElementById('calender').textContent= formattedDate;
}

window.onload = todayDate;