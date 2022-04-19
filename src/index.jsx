import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@img/picture.png'
import './styles/style'
import './babel.js'
import React from 'react'
import { render } from 'react-dom'
import xml from './assets/data.xml'
import './styles/common.scss'
const post = new Post('Webpack post Title', WebpackLogo)

// $('pre').addClass('code').html(post.toString())
console.log('XML', xml);

const App = () => (
    <div className="container">
    <h1>Webpack Course</h1>
    <hr />
    <div class="logo"></div>
    <hr />
     <pre></pre>
    <hr />
    <div class="card">
    <h2>Sass</h2>
    </div>
    </div>
)

    render(<App />, document.getElementById('app'))