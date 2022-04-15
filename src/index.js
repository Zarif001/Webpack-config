import * as $ from 'jquery'
import Post from '@models/Post'
import WebpackLogo from '@/images/picture'
import './styles/style'
import xml from './assets/data.xml'
const post = new Post('Webpack post Title', WebpackLogo)

$('pre').addClass('code').html(post.toString())


console.log('XML', xml);