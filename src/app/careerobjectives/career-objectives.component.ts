import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { DatePipe } from '@angular/common';


interface Todos{
  id:number,
  name:string,
  targetdate:string,
  datecompleted:string,
  isEdit:boolean
}

@Component({
  selector: 'career-objectives',
  templateUrl: './career-objectives.component.html',
  styleUrls: ['./career-objectives.component.css'],
})


export class CareerObjectivesComponent implements OnInit {
  
  @ViewChild('todolist') todo : ElementRef
  constructor(private http:Http){
  }
  ngOnInit(): void {
  
    
    this.showOverlay= true;
    //FETCH API FROM CAREER OBJECTIVES
      this.getCareerObjectives();


  }
  showOverlay:boolean=true;
  todos:Todos[] = [];
  isObjectivesEditable: boolean =  false;

addTask(){

  console.log(this.todos)
  let todo = this.todo.nativeElement.value;


  if(todo){
    const datepipe: DatePipe = new DatePipe('en-US')
    let formattedDate = datepipe.transform(new Date(), 'MMM yyyy')

    let objective = {name: todo,targetdate:formattedDate,datecompleted:"-" };
    this.addCareerObjective(objective);


  }
 


}

getCareerObjectives(){
  this.http.get("http://13.214.196.91:3000/careerobjectives").map(res => res.json()).subscribe(
    data => {
    if (data.status=="OK"){
    this.todos = data.data;
    }else{
      this.showOverlay= false;
    }},
     err => {   this.showOverlay= false;alert("Error contacting BE. Make sure BE is running")}
  )

}

addCareerObjective(objective:any){

  this.http.post("http://13.214.196.91:3000/addcareerobjectives",objective).map(res => res.json()).subscribe(
    data => {
    if (data.status=="OK"){
      this.getCareerObjectives();
    }else{
      this.showOverlay= false;
    }},
     err => {   this.showOverlay= false;alert("Error contacting BE. Make sure BE is running")}
  )

}

deleteCareerObjective(id:any){
  this.http.delete(`http://13.214.196.91:3000/deletecareerobjectives/${id}`).map(res => res.json()).subscribe(
    data => {
    if (data.status=="OK"){
      this.getCareerObjectives();
    }else{
      this.showOverlay= false;
    }},
     err => {   this.showOverlay= false;alert("Error contacting BE. Make sure BE is running")}
  )

}

toggleEditableFields(id:any){

  let itemIndex =this.todos.findIndex(i => i.id ==id);
  this.todos[itemIndex].isEdit = true;

  
}

updateCareerObjective(item:any){
  console.log(item);
  this.http.put(`http://13.214.196.91:3000/updatecareerobjectives/${item.id}`,{name: item.name,targetdate:item.targetdate,datecompleted:item.datecompleted }).map(res => res.json()).subscribe(
    data => {
    if (data.status=="OK"){
      this.getCareerObjectives();
    }else{
      this.showOverlay= false;
    }},
     err => {   this.showOverlay= false;alert("Error contacting BE. Make sure BE is running")}
  )

}




}
