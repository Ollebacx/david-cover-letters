import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
  group,
  sequence
  // ...
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',

        })
      ], { optional: true }),
      //
      query(':enter', [
        style({ transform: 'translateY({{offsetEnter}}%)', opacity: '0' })
      ], { optional: true }),
      //
      query(':leave', [
        style({ transform: 'translateY(0%)', opacity: '1' })
      , animateChild()], { optional: true }),
      //
      group([
        query(':leave', [
          animate('700ms ease-in-out', style({ transform: 'translateY({{offsetLeave}}%)', opacity: '0' })),

        ], { optional: true }),
        //
        // query('@inOutAnimation', [
        //   style({ transform: 'translateY(10%)', opacity: 0 }),
        // ], { optional: true }),
        sequence([
          query(':enter', [
            animate('700ms ease-in-out', style({ transform: 'translateY(0%)', opacity: '1' }))
          ], { optional: true }),
          // query('@inOutAnimation', [
          //   animate('1s ease-out',
          //     style({ transform: 'translateY(0%)', opacity: 1 }))
          // ], { optional: true })
        ])
      ]),
      //
      query(':enter', animateChild(), { optional: true }),
      query('@inOutAnimation', animateChild(), { optional: true }),
    ])
  ]);

export class Animation { }
