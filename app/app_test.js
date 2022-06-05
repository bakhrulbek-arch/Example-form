// let inp = document.querySelectorAll(".set_inp_v")
// inp.forEach(inp_v => {
//     inp_v.onkeyup = () => {
//         inp_v.onfocus = () => {
//             inp_v.value.length = 0
//         }
//         let need = document.querySelectorAll(".need_set")
//         inp_v.onfocus = () => {
//             need.forEach(item => {
//                 if (inp_v.value.length > 0) {

//                     item.classList.remove('deactive_clr')

//                     item.classList.add("active_clr")
//                 } else if (inp_v.value.length <= 0) {
//                     need.forEach(t_obj_name => {
//                         t_obj_name.classList.add("deactive_clr")
//                     })
//                 }
//             });


//         }
//     }
//     if (inp_v.value.length > 0) {
//         need.forEach(item => {
//             if (inp_v.value.length > 0) {
//                 item.style.color = "#4200FF"
//             } else {
//                 t_obj_name.style.color = "#e70606"
//             }
//         });


//     }



// })






// let btn_save = document.querySelector(".btn_form_save")
// btn_save.onclick = () => {
//     btn_save.style.background = "red"
// }





// ----


let inp = document.querySelectorAll(".set_inp_v")
let need = document.querySelectorAll(".need_set")
let txt_bottom = document.querySelectorAll(".title_obj_inp_bottom")
let disp_blc = document.querySelectorAll(".display_none")


inp.forEach(inp_v => {
    inp_v.onfocus = () => {
        if (inp_v.value.length == 0) {
            need.forEach(item => {
                item.classList.add("active_clr")
            })

            inp_v.classList.add("active_inp")
        } else {
            need.forEach(item => {
                item.classList.add("deactive_clr")
            })
            disp_blc.forEach(dsp_blc => {
                dsp_blc.classList.add("display_blc")
            })
            inp_v.classList.add("deactive_inp")
        }
    }
});
inp.forEach(inp_v => {

    inp_v.onblur = () => {
        if (inp_v.value.length > 0) {
            need.forEach(item => {
                item.classList.add("active_clr")
                disp_blc.forEach(dsp_blc => {
                    item.classList.remove("deactive_clr")
                    inp_v.classList.remove("deactive_inp")
                    dsp_blc.classList.remove("display_blc")

                    item.classList.add("active_clr")
                    dsp_blc.classList.add("display_none")
                    inp_v.classList.add("active_inp")

                    txt_bottom.forEach(txt => {
                        txt.innerHTML = "Good job"
                        txt.style.color = "#4200FF"
                    })
                })
            })
            inp_v.classList.add("active_inp")
        } else {
            txt_bottom.forEach(txt => {
                txt.innerHTML = "Please enter your email or adress"
                txt.style.color = "#e70606"
            })
            need.forEach(item => {
                item.classList.add("deactive_clr")
            })
            inp_v.classList.add("deactive_inp")
        }
    }
});

let inp_not = document.querySelectorAll(".set_inp_not")
inp_not.forEach(inp_not_value => {
    inp_not_value.onfocus = () => {
        need.forEach(item => {
            item.classList.add("active_clr")
        })
        inp_not_value.classList.add("active_inp")
    }
})

let btn_save = document.querySelector(".btn_form_save")
btn_save.onclick = () => {
    btn_save.style.background = "red"
}
