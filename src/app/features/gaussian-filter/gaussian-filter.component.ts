import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gaussian-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gaussian-filter.component.html',
  styleUrl: './gaussian-filter.component.scss'
})
export class GaussianFilterComponent {
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

    this.http.post('http://127.0.0.1:5000/gaussian_predefined', formData, { responseType: 'blob' }).subscribe({
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
