import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
  reviews = [
    {
      name: 'Amit Sharma',
      review: 'Great trainer! Helped me transform my fitness journey.',
      rating: 5,
      image: 'assets/images/dummyimg.jpeg' 
    },
    {
      name: 'Sneha Verma',
      review: 'Very professional and motivating. Highly recommend!',
      rating: 4,
      image: 'assets/images/dummyimg.jpeg'
    },
    {
      name: 'Rahul Mehta',
      review: 'Amazing experience. Saw real results in just 3 months.',
      rating: 5,
      image: 'assets/images/dummyimg.jpeg'
    }

  ];


}
