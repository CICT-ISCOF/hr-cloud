import Swal from 'sweetalert2'
import {success} from 'toastr'

export function Fire(title: any, text: any, type: any, callback: Function) {
    Swal.fire({
        title: title,
        text: text,
        icon: type,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
    }).then((result) => {
        if (result.value) {
            return callback()
        }
    })
    if (type == 'error') {
        type = 'warning'
    }
    const audio = new Audio(`http://localhost:3000/audio/${type}.mp3`)
    audio.volume = 0.4
}

export function Alert(title: any, text: any, type: any) {
    Swal.fire(title, text, type)
    if (type == 'error') {
        type = 'warning'
    }
    const audio = new Audio(`http://localhost:3000/audio/${type}.mp3`)
    audio.volume = 0.4
}

export function noData() {
    const audio = new Audio(`http://localhost:3000/audio/pop.mp3`)
    audio.volume = 0.4
    setTimeout(() => {
        audio.pause()
        audio.currentTime = 0
    }, 120)
}
