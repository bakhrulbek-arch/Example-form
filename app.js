let inp = document.querySelectorAll(".set_inp_v")
let need = document.querySelectorAll(".need_set")
let txt_bottom = document.querySelectorAll(".title_obj_inp_bottom")
let disp_blc = document.querySelectorAll(".display_none")
inp.forEach(inp_v => {
    inp_v.onfocus = () => {
        need.forEach(item => {
            item.classList.add("active_clr")
        })
        inp_v.classList.add("active_inp")

    }
    inp_v.onblur = () => {
        need.forEach(item => {
            item.classList.add("deactive_clr")
            disp_blc.forEach(dsp_blc => {
                dsp_blc.classList.add("display_blc")
            })
            txt_bottom.forEach(txt => {
                txt.innerHTML = "Please enter your email adress"
            })
        })
        inp_v.classList.add("deactive_inp")
    }

});
let inp_not = document.querySelectorAll(".set_inp_not")
inp_not.forEach(inp_not_value => {
    inp_not_value.onfocus = () => {
        // need.forEach(item => {
        //     item.classList.add("active_clr")
        // })
        inp_not_value.classList.add("active_inp")
    }
})


let btn_save = document.querySelector(".btn_form_save")
btn_save.onclick = () => {
    btn_save.style.background = "red"
}

// inp.forEach(inp_v => {
//     inp_v.onfocus = () => {
//         // if (inp.value !== '') {
//         //     need.forEach(item => {
//         //         item.classList.add("deactive_clr")
//         //     })
//         //     inp_v.classList.add("deactive_inp")
//         // } else {
//         need.forEach(item => {
//             item.classList.add("active_clr")
//         })
//         inp_v.classList.add("active_inp")
//         // }
//     }
//     inp_v.onblur = () => {
//         need.forEach(item => {
//             item.classList.add("deactive_clr")
//         })
//         inp_v.classList.add("deactive_inp")
//     }

// });
// let inp_not = document.querySelectorAll(".set_inp_not")
// inp_not.forEach(inp_not_value => {
//     inp_not_value.onfocus = () => {
//         // need.forEach(item => {
//         //     item.classList.add("active_clr")
//         // })
//         inp_not_value.classList.add("active_inp")
//     }
// })


// let btn_save = document.querySelector(".btn_form_save")
// btn_save.onclick = () => {
//     btn_save.style.background = "red"
// }

// let inp = document.querySelector(".inp_v")
// let need = document.querySelectorAll(".need_set")
// inp.forEach(inp_v => {
//     inp.onkeyup = () => {
//         inp_v.onfocus = () => {
//             if (inp.value.lenght == true) {
//                 need.forEach(item => {
//                     item.classList.add("active_clr")
//                 })
//                 inp_v.classList.add("active_inp")
//             } else {
//                 need.forEach(item => {
//                     item.classList.add("deactive_clr")
//                 })
//                 inp_v.classList.add(".deactive_inp")
//             }
//         }
//         console.log(inp.value);
//     }
// });

// let btn_save = document.querySelector(".btn_form_save")
// btn_save.onclick = () => {
//     btn_save.style.background = "red"
// }
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