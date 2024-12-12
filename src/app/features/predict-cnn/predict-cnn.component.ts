import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LoaderComponent } from "../../components/loader/loader.component";

@Component({
  selector: 'app-predict-cnn',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './predict-cnn.component.html',
  styleUrl: './predict-cnn.component.scss'
})
export class PredictCnnComponent {
  selectedFile!: File;
  previewUrl: string | ArrayBuffer | null = null;
  denoisedImageUrl: string | null = null;
  isLoading = false;

  constructor(private http: HttpClient) {}

  // Handle file selection
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Generate a preview
      const reader = new FileReader();
      reader.onload = (e) => (this.previewUrl = reader.result);
      reader.readAsDataURL(file);
    }
  }

  // Send the file to the backend
  denoiseImage(): void {
    if (!this.selectedFile) {
      alert('Please select an image!');
      return;
    }

    this.isLoading = true;
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.http.post('http://127.0.0.1:5000/predict', formData, { responseType: 'blob' }).subscribe({
      next: (response) => {
        const objectURL = URL.createObjectURL(response);
        this.denoisedImageUrl = objectURL;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error during the request:', error);
        alert('Something went wrong!');
        this.isLoading = false;
      },
    });
  }
}
