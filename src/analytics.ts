import * as $ from 'jquery'
function createAnn() : object{
    let counter = 0,
        destroyed : boolean = false

    console.log('test');
    const listener = () => counter++
    
    $(document).on('click',listener)

    return {
        destroy(){
            $(document).off('click', listener)
            destroyed = true
        },
        getClicks(){
            if (destroyed){
                return `Total click = ${counter}`
            }
            return counter
        }
    }
}

window['analytics'] = createAnn()