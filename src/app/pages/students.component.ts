import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from '@components/table.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { StudentsService } from '../services';
import { Student } from '../models';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [TableComponent, ReactiveFormsModule, InputTextModule, ButtonModule],
  template: `
    <section class="px-8">
      <h2>Estudiantes</h2>
      <hr />

      <app-table [data]="students()">
        <form [formGroup]="studentForm()" (ngSubmit)="onSubmit()">
          <input type="text" pInputText formControlName="first_name" />
          <input type="text" pInputText formControlName="last_name" />

          <p-button type="submit" label="guardar" />
        </form>
      </app-table>
    </section>
  `,
  styles: ``,
})
export class StudentsComponent {
  public students = signal<Student[]>([]);

  #fb = inject(FormBuilder);
  #studentsService = inject(StudentsService);

  public studentForm = signal<FormGroup>(
    this.#fb.group({
      first_name: [''],
      last_name: [''],
    })
  );

  ngOnInit() {
    this.#studentsService
      .getStudent()
      .subscribe((resp) => this.students.set(resp));
  }

  async onSubmit() {
    console.log(this.studentForm().value);
    const response = await this.#studentsService.addStudent(
      this.studentForm().value
    );
    console.log(response);
  }
}
