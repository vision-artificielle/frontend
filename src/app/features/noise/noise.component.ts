import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TraitementImageService } from '../../services/traitement-image.service';

@Component({
  selector: 'app-noise',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './noise.component.html',
  styleUrl: './noise.component.scss'
})
export class NoiseComponent {
  previewUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  noiseLevel: number = 50; 
  noisyImage: string | null = null;

  constructor(private traitementImageService: TraitementImageService) {}

  // Trigger file input click
  triggerFileInput(): void {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  // Handle file selection
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Create a preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  // Simulate applying noise (placeholder for endpoint call)
  applyNoise(): void {
    if (this.selectedFile) {
      this.noiseLevel = this.noiseLevel/100;
      console.log('Noise Level:', this.noiseLevel);
      console.log('Image File:', this.selectedFile);
      this.traitementImageService.addNoise(this.selectedFile, this.noiseLevel).subscribe({
        next: (blob: Blob) => {
          const imageUrl = URL.createObjectURL(blob); // Create a URL for the blob
          this.noisyImage = imageUrl; 
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    }
  }
}
