import { Container, autoDetectRenderer } from 'pixi.js'
import { Button, ThemeParser, Theme, loader } from 'gown'

var stage = new Container()
var NUM_THEMES = 3
var themesLoaded = 0

var renderer = autoDetectRenderer(800, 600, {backgroundColor: 0xffffff})
document.body.appendChild(renderer.view)

var aeontheme = new ThemeParser('assets/aeon_desktop/aeon_desktop.json')
aeontheme.once(Theme.COMPLETE, onCompleteAeon, this)

var bootTheme = new ThemeParser('assets/bootstrapish/bootstrapish.json')
bootTheme.once(Theme.COMPLETE, onCompleteBootstraphish, this)

var metaltheme = new ThemeParser('assets/metalworks_desktop/metalworks_desktop.json')
metaltheme.once(Theme.COMPLETE, onCompleteMetal, this)

loader.load()

function onCompleteAeon () {
    var aeonbtn = new Button(aeontheme)
    aeonbtn.width = 150
    aeonbtn.height = 100
    aeonbtn.x = 20
    aeonbtn.y = 30
    aeonbtn.label = 'first'
    stage.addChild(aeonbtn)

    aeonbtn.on(Button.TRIGGERED, function () {
        if (window.console) {
            console.log('you clicked the first button!')
        }
    })

    themesLoaded++
    if (themesLoaded === NUM_THEMES) {
        requestAnimationFrame(animate)
    }
}

function onCompleteBootstraphish () {
    var bootBtn = new Button(bootTheme)
    bootBtn.width = 150
    bootBtn.height = 100
    bootBtn.x = 180
    bootBtn.y = 30
    bootBtn.label = 'second'
    stage.addChild(bootBtn)

    bootBtn.on(Button.TRIGGERED, function () {
        if (window.console) {
            console.log('you clicked the second button!')
        }
    })
    themesLoaded++
    if (themesLoaded === NUM_THEMES) {
        requestAnimationFrame(animate)
    }
}

function onCompleteMetal () {
    var metalbtn = new Button(metaltheme)
    metalbtn.width = 150
    metalbtn.height = 100
    metalbtn.x = 340
    metalbtn.y = 30
    metalbtn.label = 'third'
    stage.addChild(metalbtn)

    metalbtn.on(Button.TRIGGERED, function () {
        if (window.console) {
            console.log('you clicked the third button!')
        }
    })

    themesLoaded++
    if (themesLoaded === NUM_THEMES) {
        requestAnimationFrame(animate)
    }
}

function animate () {
    // render the stage
    renderer.render(stage)
    requestAnimationFrame(animate)
}