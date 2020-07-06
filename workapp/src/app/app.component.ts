import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'workapp';
 // data= {f:"mounika", l:"smitha"};
  firstName:string="Mounika";
  lastName:string="Smitha";
  //firstN = "Mounika";
  //secondN= "Smitha";
  
  myObjects={
    first : this.firstName,
    second : this.lastName

  };

}
