# ngx-wrap-balancer: Make text blocks more readable

![Demo](https://i.imgur.com/LhOIVDI.gif)

## Introduction
`ngx-wrap-balancer` is a simple Angular component that makes your titles more readable in different viewport sizes. It improves the wrapping to avoid situations like single word in the last line, makes the content more “balanced”

## Demo

You can view and fork the demo on [stackblitz](https://ngx-wrap-balancer-demo.stackblitz.io)

## Usage

```bat
npm install ngx-wrap-balancer --save

OR

yarn add ngx-wrap-balancer
```

Open your module file e.g `app.module.ts` and update **imports** array

```ts
import { NgxWrapBalancerModule } from 'ngx-wrap-balancer';
...
imports: [
...
    NgxWrapBalancerModule,
...
]
```

In your template file add `ngx-wrap-balancer` as a child of the element you want wrapped. Example:

```html
<h1>
  <ngx-wrap-balancer text="Angular: The web development framework for building the future"></ngx-wrap-balancer>
</h1>
```

## Credits
This project was inspired by [react-wrap-balancer](https://github.com/shuding/react-wrap-balancer), which in turn has been inspired by Adobe’s [balance-text](https://github.com/adobe/balance-text) project, NYT’s [text-balancer](https://github.com/nytimes/text-balancer) project, and Daniel Aleksandersen’s [Improving the New York Times’ line wrap balancer](https://www.ctrl.blog/entry/text-wrap-balance.html). If you want to learn more, you can also take a look at the [text-wrap: balance](https://drafts.csswg.org/css-text-4/#text-wrap) proposal.

I also took some inspiration for the resize Angular directive from [erhise](https://stackblitz.com/@erhise)

My day job requires a bunch of Angular work so I figured I would sharpen my skills by putting the Angular version of the above as an open source project

[![Twitter Follow](https://img.shields.io/twitter/follow/rohail_altaf.svg?style=social)](https://twitter.com/rohail_altaf) 