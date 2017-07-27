import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProjectsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  newProject:any = {};

  projects:any= [
    {
    name:'Tony',
    description: 'we work here',
    image:'img/tony.jpg'
    },
      {
        name:'Gunn',
        description:'XYZZ',
        image:''
      },
      {
        name:'Claim Academy',
        description: 'XYZZY',
        image:''
      }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }

    test(project){
      console.log(project);
      project.name='Hello There';
    }
    
    addProject(){
      this.projects.push(this.newProject);

    }
}
