import { Responsive, WidthProvider } from 'react-grid-layout';
import React, {Component} from 'react';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class MyResponsiveGrid extends Component {

    render() {
        const layout = [
            {i: '1', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: '2', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: '3', x: 4, y: 0, w: 1, h: 2}
        ];
        return (
            <ResponsiveGridLayout  layouts={layout}
                                  breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                                  cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                <div key="1">1</div>
                <div key="2">2</div>
                <div key="3">3</div>
            </ResponsiveGridLayout>
        )
    }
}