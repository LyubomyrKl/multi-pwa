import React from 'react';
import './app.css'; 
import AppHeader from '../app-header/app-header';
import PostForm from '../post-form/post-form';
import PostList from '../post-list/post-list';
import AppFooter from '../app-footer/app-footer';

// https://liubomyr-todo-api.herokuapp.com/api/message
export default class App extends React.Component{
    constructor(props){
        super(props);
        this.getList(); 
        this.state = {
            data : []
        };
        
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this)
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
    render(){
        return (
            <div className = 'wrapper'>
                <AppHeader/>
                <PostForm
                onAdd={this.addItem}/>
                <PostList 
                onToggleDone ={this.onToggleDone}
                onToggleImportant = {this.onToggleImportant} 
                onDelete = {this.deleteItem}        
                posts={this.state.data}/>
                <AppFooter/>
            </div>
        )
    }
}

