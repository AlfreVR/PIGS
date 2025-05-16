import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  DocumentData,
  WithFieldValue,
  docData
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {Server} from '../pages/firestore/server';
import {Plans} from '../app/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // Obtener datos en tiempo real
  getCollection(path: string): Observable<Server[]> {
    const ref = collection(this.firestore, path);
    return collectionData(ref, { idField: 'id' }) as Observable<Server[]>;
  }
  getCollectionPlans(path: string): Observable<Plans[]> {
    const ref = collection(this.firestore, path);
    return collectionData(ref, { idField: 'id' }) as Observable<Plans[]>;
  }

  getDocumentById<T>(path: string, id: string): Observable<T> {
   const docRef = doc(this.firestore, `${path}/${id}`);
   return docData(docRef, {idField: 'id' }) as Observable<T>;
  }

  // Agregar un documento
  async addDocument<T extends DocumentData>(path: string, data: WithFieldValue<T>) {
    const ref = collection(this.firestore, path);
    return await addDoc(ref, data);
  }

  // Actualizar un documento
  async updateDocument<T>(path: string, docId: string, data: Partial<T>) {
    const docRef = doc(this.firestore, `${path}/${docId}`);
    return await updateDoc(docRef, data);
  }

  // Eliminar un documento
  async deleteDocument(path: string, docId: string) {
    const docRef = doc(this.firestore, `${path}/${docId}`);
    return await deleteDoc(docRef);
  }
}
