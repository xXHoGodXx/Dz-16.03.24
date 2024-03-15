let products = [
    {
      title: "Кабачки",
      price: 20000,
    },
    {
      title: "Баклажаны",
      price: 32000,
    },
    {
      title: "Бананы",
      price: 25000,
    },
    {
      title: "Огурцы",
      price: 40000,
    },
    {
      title: "Манго",
      price: 500000,
    },
    {
      title: "Ананас",
      price: 40000,
    },
    {
      title: "Пиёз",
      price: 6000,
    },
    {
      title: "Картошка",
      price: 5000,
    },
    {
      title: "Сабзи для плова",
      price: 4000,
    }, 
  ];

  

let btn_show = document.querySelector('.btn-show')
let menu = document.querySelector('.menu')
let close_menu = document.querySelector('.switch')
let form = document.forms.menu
let show_form = document.forms.form
let inps = form.querySelectorAll('input')
let main = document.querySelector('.main')


close_menu.onclick = () => {

    menu.classList.toggle('active')

}

btn_show.onclick = () => {

    menu.classList.toggle('active')

}

function onsubmit() {

    form.onsubmit = (e) => {
        e.preventDefault()
    
        let fm = new FormData(form)
    
        const data = {}
    
    
        fm.forEach((val, key) => data[key] = val)
    
    
        products.push(data)
    
        reload(products, main)
    
    }
}


function reload(arr, place) {
    place.textContent = ""

    for (let item of arr) {
        let block = document.createElement('div')

        let h1 = document.createElement('h1')
        let h3 = document.createElement('h3')


        h3.textContent = item.price + "$"
        h1.textContent = item.title
        block.classList.add("block")
        h3.classList.add('h3')
        h1.classList.add(
         'h1'
        )
        place.append(block)
        block.append(h1, h3)

    }
}

reload(products, main)

inps.forEach(inp => {
    inp.onkeyup = () => {
        let reg = patterns[inp.name]
        
        if(isNaN(inp.value)) {
            inp.classList.add('error-field')
        } else {
            inp.classList.remove('error-field')
        }
    
        if (reg.test(inp.value)) {
            inp.classList.remove('error-field')
            onsubmit()
        } else  {
            inp.classList.add('error-field')
        }
    }
        
})

const patterns = {
    title: /^[a-z ,.'-]+$/i,
}


show_form.onsubmit = (e) => {
    e.preventDefault()

    let from = new FormData(show_form).get('from')
    let up = new FormData(show_form).get('up')


    show_mod(from, up)
}

function show_mod(val1, val2) {
   
   let arr = products.filter(item => item.price >= val1 && item.price <= val2) 
   
   reload(arr, main)
}

