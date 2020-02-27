import {Component} from '@angular/core';
import {Student} from './student.data';

@Component({
  selector: 'list-component',
  templateUrl: 'app/views/list.component.html'
})
export class ListComponent {
    public students : Student[];
    constructor () {
        this.students = [
            {"firstName":"Ozzy", "lastName":"Osbourne", "age":10, "teacher":"Sigfried"},
            {"firstName":"Roger", "lastName":"Waters", "age":5, "teacher":"Bob"},
            {"firstName":"Jimmy", "lastName":"Page", "age":7, "teacher":"Mary"},
            {"firstName":"Aretha", "lastName":"Franklin", "age":10, "teacher":"Seibel"},
            {"firstName":"Miles", "lastName":"Davis", "age":9, "teacher":"Patrick"},
            {"firstName":"William", "lastName":"Wallace", "age":7, "teacher":"Cristian"}
        ]
    }
}