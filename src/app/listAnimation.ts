import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter',
        [style({ opacity: 0 }), stagger('150ms', animate('600ms ease-out', style({ opacity: 1 })))],
        { optional: true }
      ),
    ])
  ]);
  