
const template = '<div class="carousel-item"><div class="container"><div class="row"></div></div></div>'
const initTemplate = '<div class="carousel-item active"><div class="container"><div class="row"></div></div></div>'

export default class Gallery {

    generate(images) {
        this.clean()
        let slice = [];
        let count = 0;
        images.forEach((image) => {
            if (count !== 0 && count % 3 === 0) {
                if (count > 3) {
                    this.template(slice.splice(0, 3), template)
                } else {
                    this.template(slice.splice(0, 3), initTemplate)
                }
            }
            slice.push(this.whatMethodAndHowWroteIt(image))
            count++;
        })


     }
   template(images, template){
    let range = document.createRange();
    let gallery = document.getElementById('gallery-new')
    range.selectNode(gallery)
       let documentFragment = range.createContextualFragment(template);

       images.forEach((image) => {
           let divCol = document.createElement('div')
           divCol.className = 'col-md-4'
           let divCard = document.createElement('div')
           divCard.classList.add('card')
           divCol.append(divCard)
           divCard.append(image)
           documentFragment.lastChild.lastChild.lastChild.appendChild(divCol)
       })
       gallery.appendChild(documentFragment)

   }

    imageView(image) {
        let expandImg = document.getElementById("expandedImg");
        expandImg.src = image.src;
        expandImg.parentElement.style.display = "block";
    }

    whatMethodAndHowWroteIt(source){
        let image = document.createElement('img')
        image.src =source.src.landscape
        image.classList.add('card-img-top')
        image.alt='...'
        image.addEventListener('click', event =>  {this.imageView(event.target)})
        image.addEventListener('keydown', function (event) {
            event.code = '39';
        })

        return image

    }

    clean(){
        let gallery = document.getElementsByClassName('carousel-item');
        if (gallery.length){
            for (let i = gallery.length - 1; i >= 0; --i) {
                gallery[i].remove();
            }
        }
    }
}

