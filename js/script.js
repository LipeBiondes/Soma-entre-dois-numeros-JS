
    var c = window.document.getElementById('corpo')
    function temaE(){
        c.style.background = 'black'
        c.style.color = 'white'
        c.style.borderWidth = '4px'
    }
    function temaB() {
        c.style.background = 'white'
        c.style.color = 'black'
        c.style.borderWidth = '4px'
    }
    function somar() {
     var tn1 = window.document.getElementById('txtn1')
     var tn2 = window.document.querySelector('input#txtn2')
     var res = window.document.getElementById('res')
     var n1 = Number(tn1.value)
     var n2 = Number(tn2.value)
     var s = n1+n2
     res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: <strong>${s}</strong>`
    }
