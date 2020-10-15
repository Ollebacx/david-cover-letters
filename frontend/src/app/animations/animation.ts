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
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
      transition('* => ContactPage', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            background: 'var(--background)'
          })
        ], { optional: true }),
        query(':enter', [
          style({ transform: 'translateY(100%)' })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1000ms ease-in-out', style({ transform: 'translateY(-100%)' })),
          ], { optional: true }),
          query(':enter', [
            animate('1300ms ease-in-out', style({ transform: 'translateY(0%)' })),
          ]),
          query(':enter', animateChild())
        ])
      ]),
      transition('ContactPage => *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
          })
        ], { optional: true }),
        query(':enter', [
        style({ transform: 'translateY(-100%)', background: 'var(--background)' })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('1000ms ease-in-out', style({ transform: 'translateY(100%)' })),
          ], { optional: true }),
          query(':enter', [
            animate('1500ms ease-in-out', style({ transform: 'translateY(0%)' })),
          ]),
          query(':enter', animateChild())
        ])
      ]),
    transition('HomePage => ScriptPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(100%)' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-in-out', style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
        query(':enter', [
          animate('1300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
        query(':enter', animateChild())
      ])
    ]),
    transition('ScriptPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        })
      ], { optional: true }),
      query(':enter', [
        style({ transform: 'translateX(-100%)' })]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('1000ms ease-in-out', style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
        query(':enter', [
          animate('1300ms ease-in-out', style({ transform: 'translateX(0%)' })),
        ]),
        query(':enter', animateChild())
      ])
    ])
  ]);

export class Animation { }
