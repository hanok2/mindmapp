import {animate, query, style, transition, trigger} from '@angular/animations'

export const routeAnimation = trigger('routeAnimation', [
    transition('* => *', [
        // Set a default  style for enter and leave
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '100%',
                opacity: 0
            }),
        ]),
        // Animate the new page in
        query(':enter', [
            animate('800ms ease', style({
                opacity: 1
            })),
        ])
    ]),
])
