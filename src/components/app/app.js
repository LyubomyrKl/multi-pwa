import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './app.css'; 
import AppHeader from '../app-header/app-header';
import PostForm from '../post-form/post-form';
import PostList from '../post-list/post-list';
import AppFooter from '../app-footer/app-footer';
import HabitsForm from '../habits-form/habits-form';
import HabitsList from '../habits-list/habits-list';
import WorkoutAccord from '../workoutLog/workout-accord/workout-accord';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.getList()
        this.state = {
            bgUrl: '/img/purple.png',
            data : [],
            habitsData: [
                {
                  title: 'Smoke',
                  descr: 'Smoke everyday',
                  checkboxes: [true, true, true, true,  true, false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false,false, false, false],
                  id: '21sdada21'
                },
                {
                  title: 'Run',
                  descr: 'Run run run run run run run run run',
                  checkboxes: [false, true, false, false, true, true, false],
                  id: '21e121'
                },
                {
                  title: 'Run',
                  descr: 'Run run run run run run run run run',
                  checkboxes: [false, true, false, false, true, true, false, false, true, true, false,false, true, true, false],
                  id: '21321e121'
                }
              ],
            workoutLogData :[
                {   
                   id: 531,
                   title: "Pullups",
                   weightRepsPairs: [
                       { weight:"91",reps:"21"},
                       { weight:"92",reps:"21"},
                       { weight:"93",reps:"21"},
                    ]
                },
                {   
                    id: 532,
                    title: "Pushups",
                    weightRepsPairs: []
                 },
                 {   
                    id: 533,
                    title: "Squats",
                    weightRepsPairs: []
                 },
                 {   
                    id: 534,
                    title: "Barbell overhead press",
                    weightRepsPairs: []
                 },
                 {   
                    id: 535,
                    title: " Dumbbell overhead press",
                    weightRepsPairs: []
                 },
                 {   
                    id: 536,
                    title: "Dumbbell bench press",
                    weightRepsPairs: []
                 },
                 {   
                    id: 537,
                    title: "Bench press",
                    weightRepsPairs: []
                 },
                 {   
                    id: 538,
                    title: "Bent-over barbell",
                    weightRepsPairs: []
                 },
                 {   
                    id: 539,
                    title: "Bent-over Dumbbell ",
                    weightRepsPairs: []
                 },
                 {   
                    id: 540,
                    title: "Deadlift",
                    weightRepsPairs: []
                 },
                 {   
                    id: 541,
                    title: "Pull-down ",
                    weightRepsPairs: []
                 },
                 {   
                    id: 543,
                    title: "Seated cable row",
                    weightRepsPairs: []
                 },
         
                 
              ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.addHabit = this.addHabit.bind(this)
        this.onDone = this.onDone.bind(this)
        this.onOpenModule = this.onOpenModule.bind(this)
        this.addReps=this.addReps.bind(this)
        this.deletLog = this.deletLog.bind(this)
        this.changeBg = this.changeBg.bind(this)
    }

    componentDidMount(){
        
    }
    byField(field) {
        return (a, b) => a[field] > b[field] ? 1 : -1;
    }

    async getList(){
        await fetch('https://liubomyr-todo-api.herokuapp.com/api/message')
         .then((response)=>{
          return response.json();
          })
          .then((response)=>{
              this.setState(({data})=>{
                  const newList = [...response]
                  newList.sort((a, b)=> a.important > b.important)
                  return {
                      data: newList
                  }
              })
          })
      }

    deleteItem(id){
        fetch(`https://liubomyr-todo-api.herokuapp.com/api/message/${id}`, {
           method: 'DELETE',
           headers: {
               "Content-Type":"application/json"
           }
       })
       this.setState(({data})=>{
           let index = data.findIndex(elem=>elem.id === id)
           const newArray = [...data.splice(0, index), ...data.splice(index+1)]
           return{
            data: newArray
           }
       });
    }
    
    deletLog(idx, key){

        this.setState({
            workoutLogData: this.state.workoutLogData.map((elem, elmidx) => {
                if (elem.id === key){
                    let index = this.state.workoutLogData[elmidx].weightRepsPairs.findIndex((a, indexToDel)=>indexToDel=== idx)
                    let newArr = [...elem.weightRepsPairs.splice(0, index), ...elem.weightRepsPairs.splice(index+1)]
                    return {
                      ...elem,
                      weightRepsPairs: newArr 
                    }
                  }
                  return elem;
            }),
        })
    }

    deleteHabits(){

    }
    onOpenModule(){
        console.log(this.state.active);
        this.setState(({active})=>{
            active = !active
        })
        
    }

    addReps(item, id){
        const [weight, reps] = item
        if(weight && reps){
            const item ={
                weight: weight,
                reps: reps
            }

            this.setState({
                workoutLogData: this.state.workoutLogData.map((elem) => {
                  if (elem.id === id){
                    return {
                      ...elem,
                      weightRepsPairs: [...elem.weightRepsPairs, item],
                    }
                  }
                  return elem;
                }),
            })
         };    
    }


    addHabit({title, descr, numb}){
        if(title && descr && numb){
            const item ={
                title: title,
                descr: descr, 
                numb:  numb 
            };
            this.setState(({habitsData})=>{
                const newArray = [...habitsData, item];
                return {
                    habitsData : newArray
                }
            });

        }
    }

    addItem(body){
        if(body){
            const item ={
                label: body,
                important: false,
                done: false
            };
    
          fetch('https://liubomyr-todo-api.herokuapp.com/api/message', {
               method: 'POST',
               body: JSON.stringify(item),
               headers: {
                   "Content-Type":"application/json"
               }
           })
            
            this.setState(({data})=>{
            
                const newArray = [...data, item];
                return {
                    data : newArray
                }
            });
        }
    }   

    onToggleDone(id){
        let index = this.state.data.findIndex(elem=>elem.id === id)

        const old = this.state.data[index];
        const newItem = {...old, done: !old.done}
        
        fetch('https://liubomyr-todo-api.herokuapp.com/api/message',{
            method: "POST",
            body:  JSON.stringify(newItem),
            headers: {
                "Content-Type":"application/json"
            }
        })
        this.setState(({data})=>{
            const newArr =[...data.slice(0, index), newItem, ...data.slice(index+1)]
            
            return{
                data: newArr
            }
        });
    }

    onToggleImportant(id){
        let index = this.state.data.findIndex(elem=>elem.id === id)
        const old = this.state.data[index];
        const newItem = {...old, important: !old.important}
        fetch('https://liubomyr-todo-api.herokuapp.com/api/message',{
            method: "POST",
            body:  JSON.stringify(newItem),
            headers: {
                "Content-Type":"application/json"
            }
        })

        
        this.setState(({data})=>{

            const newArr =[newItem, ...data.slice(0, index),  ...data.slice(index+1)]
            newArr.sort((a, b)=> a.important > b.important)
            console.log(newArr);
            return{
                data: newArr
            }
        });
    }

    onDone(id, idx){
        let index = this.state.habitsData.findIndex(elem=> elem.id ===id);
        let  item = this.state.habitsData[index];
        let changedArr = [...item.checkboxes.slice(0, idx), !item.checkboxes[idx], ...item.checkboxes.slice(idx+1)]


        let newItem = {...item, checkboxes: changedArr}

        
        this.setState(({habitsData})=>{
            const newArr = [...habitsData.slice(0, index), newItem, ...habitsData.slice(index+1)]
            return{
                habitsData: newArr
            }
        })
        
    }

    changeBg(url){
        this.setState({
            bgUrl: url
        })
    }
    
    
    
    render(){
        return (
            <div className = 'wrapper' style={{backgroundImage: `url(${this.state.bgUrl})` }}>
                <Router>
                    <Route path='/' exact>
                    <AppHeader name='To' surname="Do" classOfPage='toDoPage'/>
                        <PostForm
                        onAdd={this.addItem}/>
                        <PostList 
                        onToggleDone ={this.onToggleDone}
                        onToggleImportant = {this.onToggleImportant} 
                        onDelete = {this.deleteItem}        
                        posts={this.state.data}/>
                    </Route>
                    <Route path='/habits' exact>
                    <AppHeader name='Ha' surname='Bits' classOfPage='habitsPage'/>
                        <HabitsForm
                        addHabit={this.addHabit}
                        onModule={this.onOpenModule}/>
                        <HabitsList
                        activity = {this.state.active}
                        habitsData={this.state.habitsData}
                        onDone={this.onDone}/>
                    </Route>
                    <Route path='/workout-log'>
                    <AppHeader name='Workout'  surname='Log' classOfPage='workoutPage'/>
                        <WorkoutAccord dataLog = {this.state.workoutLogData}
                                        addReps = {this.addReps}
                                        onDeleteLog = {this.deletLog}/>       
                    </Route>
                    <AppFooter onChangeBg = {this.changeBg} />
                </Router>    
            </div>
        )
    }
}


