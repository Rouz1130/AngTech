import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { TechnologyListComponent } from './technology-list.component';
import { EditTechnologyComponent } from './edit-technology.component';
import { NewTechnologyComponent } from './new-technology.component';
import { CompletenessPipe } from './completeness.pipe';
import { TechnologyComponent } from './technology.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TechnologyListComponent,
    EditTechnologyComponent,
    NewTechnologyComponent,
    CompletenessPipe,
    TechnologyComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
