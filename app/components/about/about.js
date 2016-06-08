import React from 'react'
require('./about.scss');

export default class About extends React.Component {
  render() {
    return (
          <div>
            <h3>About</h3>
            <article className="article">
              <p>
                But wait, you might be saying. Why would I want to do something disgusting like pull my CSS into my JavaScript files? Don&apos;t I want to separate my concerns?
              </p>
              <p>
                That&apos;s the beauty of writing modular views in JavaScript. Because you&apos;re managing dependencies on a per-component basis, you&apos;re only pulling in what you need instead of managing some sort of master app.scss manifest that lists every file you&apos;ve created. If you&apos;re already using a methodology like BEM, SMACSS, or SUIT, this is a logical next step.
              </p>
              <p>
                Ultimately, you are separating your concerns. Instead of keeing your HTML, CSS, and JavaScript as separate as possible, the goal is to break your app into small, modular components and keep those as separate as possible. It&apos;s a different way of writing code, but it can definitely make large applications easier to manage.
              </p>
              <a href="https://blog.tighten.co/unpacking-webpack">Source</a>
            </article>
          </div>
    )
  }
}
