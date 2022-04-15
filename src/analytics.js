import * as $ from 'jquery'
function createAnn() {
    let counter = 0,
        destroyed = false

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

window.analytics = createAnn()