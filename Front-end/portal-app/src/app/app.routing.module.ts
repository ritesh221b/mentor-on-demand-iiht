import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './user/user.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsermenuComponent } from './usermenu/usermenu.component';
import { UseridComponent } from './userid/userid.component';
import { CompletedComponent } from './completed/completed.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { TrainerhomeComponent } from './trainerhome/trainerhome.component';
import { TraineridComponent } from './trainerid/trainerid.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { TrainercompletedComponent } from './trainercompleted/trainercompleted.component';
import { TrainercurrentComponent } from './trainercurrent/trainercurrent.component';
import { StartpageComponent } from './startpage/startpage.component';
import { SignupmentorComponent } from './signupmentor/signupmentor.component';
import { AddUserComponent } from './user/add-user.component';
import { MentorComponent } from './mentor/mentor.component';
import { TechnologyComponent } from './technology/technology.component';
import { SkillComponent } from './skill/skill.component';
import { AddMentorComponent } from './mentor/add-mentor.component';
import { AddSkillComponent } from './skill/add-skill.component';
import { AddTechnologyComponent } from './technology/add-technology.component';
import { TrainingComponent } from './training/training.component';
import { AddTrainingComponent } from './training/add-training.component';
import { AddPaymentComponent } from './payment/add-payment.component';
import { TrainingCurrentComponent } from './training/trainingcurrent.component';
import { TrainingCompletedComponent } from './training/trainingcompleted.component';
import { PageComponent } from './page/page.component';
import { SignuppageComponent } from './signuppage/signuppage.component';
import { TrainingdetailsforuserComponent } from './training/trainingdetailsforuser.component';
import { TrainingdetailsformentorComponent } from './training/trainingdetailsformentor.component';
import { TrainingmentorComponent } from './training/trainingmentor.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
{ path: '',data:{title:'Home Page'}, pathMatch: 'full', component:StartpageComponent },
{ path: 'add',data:{title:'Add'} , component: AddUserComponent},
{ path: 'signin',data:{title:'Signin'} , component: SigninComponent },
{ path: 'signup',data:{title:'Signup'} , component: SignupComponent },
{ path: 'login',data:{title:'Login'} , component: LoginComponent },
{ path: 'usermenu',data:{title:'Usermenu'} , component: UsermenuComponent },
{ path: 'userid',data:{title:'Userid'} , component: UseridComponent },
{ path: 'completed',data:{title:'Completed'} , component: CompletedComponent },
{ path: 'home',data:{title:'Home'} , component: HomeComponent },
{ path: 'adminlogin',data:{title:'Adminlogin'} , component: AdminloginComponent },
{ path: 'trainerhome',data:{title:'Trainerhome'} , component: TrainerhomeComponent },
{ path: 'trainerid',data:{title:'Trainerid'} , component: TraineridComponent },
{ path: 'payment',data:{title:'Payment'} , component: PaymentComponent },
{ path: 'addpayment',data:{title:'Addpayment'} , component: AddPaymentComponent },
{ path: 'admin',data:{title:'Admin'} , component: AdminComponent },
{ path: 'trainercompleted',data:{title:'Trainercompleted'} , component: TrainercompletedComponent },
{ path: 'trainercurrent',data:{title:'Trainercurrent'} , component: TrainercurrentComponent },
{ path: 'startpage',data:{title:'Startpage'} , component: StartpageComponent },
{ path: 'signupmentor',data:{title:'Signupmentor'} , component: SignupmentorComponent },
{ path: 'user',data:{title:'User'} , component: UserComponent },
{ path: 'mentor',data:{title:'Mentor'} , component: MentorComponent },
{ path: 'addmentor',data:{title:'Addmentor'} , component: AddMentorComponent },
{ path: 'technology',data:{title:'Technology'} , component: TechnologyComponent },
{ path: 'addtechnology',data:{title:'Addtechnology'} , component: AddTechnologyComponent },
{ path: 'skill',data:{title:'Skill'} , component: SkillComponent },
{ path: 'addskill',data:{title:'Addskill'} , component: AddSkillComponent },
{ path: 'training',data:{title:'Training'} , component: TrainingComponent },
{ path: 'trainingcurrent',data:{title:'Trainingcurrent'} , component: TrainingCurrentComponent },
{ path: 'trainingdetailsforuser',data:{title:'Trainingdetailsforuser'} , component: TrainingdetailsforuserComponent },
{ path: 'trainingdetailsformentor',data:{title:'Trainingdetailsformentor'} , component: TrainingdetailsformentorComponent },
{ path: 'trainingmentor',data:{title:'Trainingmentor'} , component: TrainingmentorComponent },
{ path: 'addtraining',data:{title:'Addtraining'} , component: AddTrainingComponent },
{ path: 'trainingcompleted',data:{title:'Trainingcompleted'} , component: TrainingCompletedComponent },
{ path: 'page',data:{title:'Page'} , component: PageComponent },
{ path: 'signuppage',data:{title:'Signuppage'} , component: SignuppageComponent },
{ path: 'logout',data:{title:'Logout'} , component: LogoutComponent }
];

@NgModule({
	imports: [
	RouterModule.forRoot(routes)
	],
	exports: [
	RouterModule
	],
	declarations: []
})
export class AppRoutingModule { }
