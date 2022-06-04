let inp = document.querySelectorAll(".inp_v")
let need = document.querySelectorAll(".need_set")
inp.forEach(inp_v => {
    inp_v.onfocus = () => {
        need.forEach(item => {
            item.classList.add("active_clr")
        })
        inp_v.classList.add("active_inp")
    }
});

    // inp_v.onblur = () => {
    //     inp_v.forEach(deactive => {
    //         deactive.classList.remove("deactive")
    //     })
    //     inp_v.classList.add("deactive")
    // }

// inp.forEach(inp_val => {
//     inp_val.onblur = () => {
//         inp.forEach(deactive => {
//             deactive.classList.remove("active")
//         })
//         inp_val.classList.add("deactive")
//     }
// });