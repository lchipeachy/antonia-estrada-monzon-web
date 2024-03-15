import { Injectable, inject } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Student } from '../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  #firestore = inject(Firestore);

  addStudent(student: Student) {
    const studentRef = collection(this.#firestore, 'students');
    return addDoc(studentRef, student);
  }

  getStudent(): Observable<Student[]> {
    const studentRef = collection(this.#firestore, 'students');
    return collectionData(studentRef, {idField: 'id'}) as Observable<Student[]>;
  }
}
