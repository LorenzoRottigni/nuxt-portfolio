import axios from "axios"

//const Vimeo = require('vimeo').Vimeo;
const express = require('express');
const res = require('express/lib/response');

const clientID = 'b5a787271cff8c663346f5d4d63c64f3d1c28ae9'
const clientSecret = ' 4PNDdy7FThq7csB1F1XNTJMMjRzYuslYa+Mf+VdVTI7QbERYSRght6GQGp9ixeEcZvEfbzs7CgGpEIhvaecpxwUKfwOBmATCsJE+YjA44Oq1iob7eEGDPomVD9AjM5z6 '


//console.dir(vimeoClient)

const vimeoConfig = { 
    'headers':
    {
        Authorization : `Bearer ${clientID}:${clientSecret}`, 
        'Content-Type': 'application/json' 
    } 
}

const app = express();

app.get('/vimeo', (req, res)=>{
    axios.get('https://api.vimeo.com/me/videos', vimeoConfig)
    .then((response)=>{
        console.log('success')
        console.log(response.data)
        res.send(response.data)
    })
    .catch((err)=>{
        console.log('not success')
        console.log(err);
        res.send(err)
    })

  
})

module.exports = app