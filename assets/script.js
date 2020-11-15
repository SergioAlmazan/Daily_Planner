let currentTime = moment().get('hour');
const calData = [
    {
        Timestring: "9am",
        value: "",
        Time: 9
    },
    {
        Timestring: "10am",
        value: "",
        Time: 10
    },
    {
        Timestring: "11am",
        value: "",
        Time: 11
    },
    {
        Timestring: "12pm",
        value: "",
        Time: 12
    },
    {
        Timestring: "1pm",
        value: "",
        Time: 13
    },
    {
        Timestring: "2pm",
        value: "",
        Time: 14
    },
    {
        Timestring: "3pm",
        value: "",
        Time: 15
    },
    {
        Timestring: "4pm",
        value: "",
        Time: 16
    },
    {
        Timestring: "5pm",
        value: "",
        Time: 17
    },
]

//This creates the rows for each of the calender data from above
calData.forEach(function (hour, i) {
    $('#container').append(` 
    <div class="container" id="container">
         <div class="row hour-row" id="hourrow`+ i + `">
            <div class="time-block" id="timeblock`+ i + `">
                `+ hour.Timestring + `
            </div>
             <div class="content-block">
                 <textarea id="content`+ i + `"></textarea>
             </div>
             <button class=saveBtn id="saveBtn`+ i + `">
                 <img src="./assets/save.svg" height="25px" width="25px">
             </button>
         </div>
     </div>
 `);

//created these variables for easier use later
const saveBtnEl = document.getElementById(`saveBtn` + i);
const contentEl = document.getElementById(`content` + i);
const timeEl = document.getElementById(`timeblock` + i);
let savedContent = JSON.parse(localStorage.getItem("contentEl" + i))
const hourEL = document.getElementById(`hourrow` + i);

if (savedContent) {
    contentEl.value = savedContent;
}
//event listener to allow the user to save the input data
saveBtnEl.addEventListener("click", function () {
    let userInput = contentEl.value;
    calData[i].content = userInput; 
    localStorage.setItem("contentEl" + i, JSON.stringify(userInput));
    saveBtnEl.innerText = "Saved!"
    saveBtnEl.classList.add("BtnClicked")
})

//This funtion changes the class of element to change color for current time
function loopTime() {
    currentTime = moment().get('hour');
    setInterval(() => {
        loopTime()
    }, 20000);
    

    timeColor = hour.Time
    hourMoment = moment().get('hour');
    if (timeColor === currentTime) {
        hourEL.classList.add("time-block-present");
    }
    if (timeColor > currentTime) {
        hourEL.classList.add("time-block-future");
     }
        }
loopTime()
})
// This function updates the displayed time constatly for every hour
function loopTime() {
    document.getElementById("dt").innerText = moment().format('MMMM Do YYYY, h:mm a').toString();
    setInterval(() => {
        loopTime()
    }, 20000);
   }
   
   loopTime()
   