const cardsButtons = document.getElementsByClassName('card-btn');
const taskCountElement = document.getElementById('task-count');
const taskCount = document.getElementById('task-count').innerText;
let convertedTaskCount = parseInt(taskCount);

// button disabled and count down with all popups and history set.
for(const btn of cardsButtons){
    btn.addEventListener('click', function (event){
        event.preventDefault();     
        
        if(convertedTaskCount > 0){
            convertedTaskCount = convertedTaskCount - 1;
            taskCountElement.innerText = convertedTaskCount;
            alert('Board Update Successfully!!');
            // btn.setAttribute('disabled', false);
            btn.disabled = true; // ete sothik syntex
            
        }
        if(convertedTaskCount === 0){
            alert('Congratulations!!! You are multi label man');
        }
        // history message added
        const date = new Date();
        const cardTitles = btn.closest('.col-span-1');
        const cardTitleText = cardTitles.querySelector('h3').innerText;
        const historyMessage = document.createElement('div');
        historyMessage.innerHTML = ` 
        <p>You have completed the task <strong>${cardTitleText}</strong> at ${date.toLocaleString()}</p>
        `;
        document.getElementById('history-items').appendChild(historyMessage);
        historyMessage.classList.add('flex', 'justify-center', 'bg-slate-200', 'rounded-xl', 'mx-4', 'p-4', 'mb-2');
    } )
    
}

// clear history 
const historyBtn = document.getElementById('history-btn');
const historyItems = document.getElementById('history-items');


historyBtn.addEventListener('click', function(event){
    event.preventDefault();
    historyItems.innerHTML = ''; 
})

