const workoutLogUi = ()=>{
    const history_container = document.querySelector(".workout-log-history");
    const exercise_container = document.querySelector(".workout-log-exercises");
    const exercise_btn = document.getElementById("exercise-btn");
    const history_btn = document.getElementById("history-btn");
    const workout_log_footer = document.querySelector(".workout-log-footer");
     
    exercise_btn.addEventListener('click',()=>{
        exercise_btn.classList.toggle('active-btn');
        history_btn.classList.toggle('active-btn');
        history_container.style.display = "none";
        exercise_container.style.display = "flex";
        workout_log_footer.style.display = "flex";
    })
    history_btn.addEventListener('click',()=>{
        history_btn.classList.toggle('active-btn');
        exercise_btn.classList.toggle('active-btn');
        history_container.style.display = "flex";
        exercise_container.style.display = "none";
        workout_log_footer.style.display = "none";
    })
}
 
const addSet = ()=>{      
    const log_exercises = document.querySelector(".workout-log-exercises");
    const add_btn= document.getElementById("Add-set-btn");
    let html = "";

    add_btn.addEventListener('click',()=>{
    const name = document.getElementById("exericise-name").value;
    const weight = document.getElementById("weight").value;
    const reps = document.getElementById("reps").value;
        if(name != "" && weight != "" && reps != ""){
            html = `<li class="added-exercise">
                    <p>Name: ${name}</p>
                    <p>Kg: ${weight}</p>
                    <p>Reps: ${reps}</p>
                    </li>`;     
                    
            log_exercises.innerHTML += html;
        }
        else {
            alert("Please fill all of the input fields!");
        }  
    })      
}

class Exercise{
constructor(name,weight,reps){
    this.name = name;
    this.weight = weight;
    this.reps = reps;
}
}

const getExercises = ()=>{   
let exercise_array = [];
const exercise_li = document.querySelectorAll(".added-exercise");
exercise_li.forEach((item)=>{
    const properties = item.querySelectorAll('p');
    const exercise = new Exercise(properties[0].innerHTML, properties[1].innerHTML, properties[2].innerHTML);   
    exercise_array.push(exercise);
})
return exercise_array;
}

const clearClass= (name)=>{
    const arr = document.querySelectorAll(`.${name}`);
    arr.forEach((item)=>{
        item.remove();
    })
}

const clearCurrentWorkout = ()=>{
  clearClass("added-exercise");
}

const clearHistory = ()=>{
    clearClass("history-exercises");
    clearClass("workout-date");
}

const clearLogForm = ()=>{
    document.getElementById("Workout-log-form").reset();
}

const setHistory = (exercise_array, date)=>{
const log_history = document.querySelector(".workout-log-history")
let html = `<p class="workout-date">Date: ${date}</p>`;
exercise_array.forEach(item=>{
        html += `<li class="history-exercises">
        <p>${item.name}</p>
        <p>${item.weight}</p>
        <p>${item.reps}</p>
        </li>`; 
})
log_history.innerHTML += html;
}

addSet();
workoutLogUi();

