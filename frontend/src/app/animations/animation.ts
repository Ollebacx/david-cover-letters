import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  animateChild,
} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%'
    //     })
    //   ], { optional: true }),
    //   query(':enter', [
    //     style({ left: '-100%' })
    //   ], { optional: true }),
    //   query(':leave', animateChild()),
    //   group([
    //     query(':leave', [
    //       animate('300ms ease-out', style({ left: '100%' }))
    //     ], { optional: true }),
    //     query(':enter', [
    //       animate('300ms ease-out', style({ left: '0%' }))
    //     ], { optional: true })
    //   ]),
    //   query(':enter', animateChild()),
    // ]),
    // transition('* <=> *', [
    //   style({ position: 'relative' }),
    //   query(':enter, :leave', [
    //     style({
    //       position: 'absolute',
    //       top: 0,
    //       left: 0,
    //       width: '100%',

    //     })
    //   ], { optional: true }),
    //   //
    //   query(':enter', [
    //     style({ transform: 'translateX({{offsetEnter}}%)', opacity: '0' })
    //   ], { optional: true }),
    //   //
    //   query(':leave', [
    //     style({ transform: 'translateX(0%)', opacity: '1' })
    //   , animateChild()], { optional: true }),
    //   //
    //   group([
    //     query(':leave', [
    //       animate('700ms ease-in-out', style({ transform: 'translateX({{offsetLeave}}%)', opacity: '0' })),

    //     ], { optional: true }),
    //     //
    //     // query('@inOutAnimation', [
    //     //   style({ transform: 'translateX(10%)', opacity: 0 }),
    //     // ], { optional: true }),
    //     sequence([
    //       query(':enter', [
    //         animate('700ms ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
    //       ], { optional: true }),
    //       // query('@inOutAnimation', [
    //       //   animate('1s ease-out',
    //       //     style({ transform: 'translateY(0%)', opacity: 1 }))
    //       // ], { optional: true })
    // //     ])
    // //   ]),
    // //   //
    // //   query(':enter', animateChild(), { optional: true }),
    // //   query('@inOutAnimation', animateChild(), { optional: true }),
    // // ]),
    transition('* => ContactPage', [
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
        style({ transform: 'translateY(100%)' }),
        animate('700ms ease-in-out', style({ transform: 'translateY(0%)' })),
        animateChild()], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('700ms ease-in-out', style({ transform: 'translateY(-100%)' })),
        animateChild()], { optional: true }),
      query(':enter', animateChild(), { optional: true }),
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
        style({ transform: 'translateY(-100%)', background: 'var(--background)' }),
        animate('700ms ease-in-out', style({ transform: 'translateY(0%)' })),
        animateChild()], { optional: true }),
      query(':leave', [
        style({ transform: 'translateY(0%)' }),
        animate('700ms ease-in-out', style({ transform: 'translateY(100%)' })),
        animateChild()], { optional: true }),
    ])
  ]);

export class Animation { }
