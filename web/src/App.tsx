import React, {useEffect} from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter as Router} from 'react-router-dom'
import {StateContext} from './contexts'
import {State} from './libraries/State'
import {viewRoutes} from './routes/routes'

function App() {
    const urls = [
        '/js/jquery.min.js',
        '/js/popper.min.js',
        '/js/moment.min.js',
        '/js/bootstrap.min.js',
        '/js/simplebar.min.js',
        '/js/daterangepicker.js',
        '/js/jquery.stickOnScroll.js',
        '/js/tinycolor-min.js',
        '/js/config.js',
        '/js/d3.min.js',
        '/js/topojson.min.js',
        '/js/datamaps.all.min.js',
        '/js/datamaps-zoomto.js',
        '/js/datamaps.custom.js',
        '/js/Chart.min.js',
        '/js/chart.config.js',
        '/js/gauge.min.js',
        '/js/jquery.sparkline.min.js',
        '/js/apexcharts.min.js',
        '/js/apexcharts.custom.js',
        '/js/jquery.mask.min.js',
        '/js/select2.min.js',
        '/js/jquery.steps.min.js',
        '/js/jquery.validate.min.js',
        '/js/jquery.timepicker.js',
        '/js/dropzone.min.js',
        '/js/uppy.min.js',
        '/js/quill.min.js',
        '/js/fill.js',
        '/js/uppy.config.js',
        '/js/apps.js',
    ]

    const injectScripts = () => {
        const scripts = urls.map((url) => {
            const script = document.createElement('script')
            script.src = url

            return script
        })

        document.body.append(...scripts)
    }

    return (
        <StateContext.Provider value={{state: State.getInstance()}}>
            <Router>
                <Switch>
                    {viewRoutes.map((route, index) => (
                        <Route {...route} key={index} />
                    ))}
                </Switch>
            </Router>
        </StateContext.Provider>
    )
}

export default App
