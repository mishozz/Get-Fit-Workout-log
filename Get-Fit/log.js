  const db = firebase.firestore();
  const auth = firebase.auth();
  

  const saveHistory = ()=>{
   // let current_date = new Date().toJSON().slice(0,10).replace(/-/g,'/');
   
    const save_btn= document.getElementById("save-btn");
    
    save_btn.addEventListener('click',()=>{   
      let current_date = new Date().toISOString();     
        const user = firebase.auth().currentUser;  
        const exercise_array = getExercises();
        if(exercise_array.length === 0){
          alert("You must enter atleast one exercise");
          return;
        }       
          db.collection(user.uid).add({
          exercises: JSON.parse(JSON.stringify(exercise_array)),
          date: current_date
          })  
          clearHistory();
          loadHistory(user);
          clearCurrentWorkout();
          clearLogForm();
          alert("Succsesfully saved the workout!")
      })
  }

  const createArrayFrom = (snapshot)=>{
    let array = [];
    snapshot.forEach(element => {
      let obj = {
        exercises: Object.values(element.data().exercises),
        date: element.data().date
      }
      array.push(obj);
    })
    return array;
  }

  saveHistory();

  const loadHistory = (user)=>{   
   db.collection(user.uid).get().then((snapshot)=>{ 
     const data_array = createArrayFrom(snapshot);      
     data_array.sort((a,b)=>{
      return new Date(b.date) - new Date(a.date)
    })
     
      data_array.forEach(element => {
        const exercise_array = element.exercises;
        const date = new Date(element.date).toJSON().slice(0,10).replace(/-/g,'/');       
        setHistory(exercise_array, date);
      });
   });
  }