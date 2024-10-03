import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'', component: LandingPageComponent},
    {path:'home', component: LandingPageComponent},
    {path:'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
